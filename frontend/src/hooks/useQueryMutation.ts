import { useState, useEffect, useReducer } from "react";

const refreshers: {[key: string]: (() => void)[]} = {}

interface QueryOptions<T> {
    initial?: T
    cache?: string
    dependencies?: any[]
    disabled?: boolean
    onLoading?(): void
    onData?(data: T): void
    onError?(): void
    onFinished?(): void
}

export function useQuery<T>(callback: () => Promise<T>, options: QueryOptions<T> = {}) {
    const [error, setError] = useState<any | undefined>()
    const [data, setData] = useState<T | undefined>(options.initial)
    const [loading, setLoading] = useState(false)
    const [token, refresh] = useReducer((i) => i + 1, 0)
    useEffect(() => {
        if (options.disabled) {
            return
        }
        if (options.cache) {
            if (!refreshers[options.cache]) {
                refreshers[options.cache] = []
            }
            refreshers[options.cache].push(refresh)
        }
        setLoading(true)
        options.onLoading && options.onLoading()
        callback().then((result) => {
            setData(result)
            setError(undefined)
            setLoading(false)
            options.onData && options.onData(result)
            options.onFinished && options.onFinished()
        }).catch((error) => {
            setError(error)
            setLoading(false)
            options.onError && options.onError()
            options.onFinished && options.onFinished()
        })
        return () => {
            if (options.cache && refreshers[options.cache]) {
                const index = refreshers[options.cache].indexOf(refresh)
                if (index > -1) {
                    refreshers[options.cache].splice(index, 1)
                }
            }
        }
    }, [token, ...(options.dependencies || [])])
    return {
        loading, error, data, refresh,
        setLoading, setData, setError
    }
}

interface MutationOptions<T> {
    caches?: string[]
    onMutating?(): void
    onResult?(result: T): void
    onError?(): void
    onFinished?(): void
}

export function useMutation<T, U>(callback: (input: U) => Promise<T>, options: MutationOptions<T> = {}) {
    const [mutating, setMutating] = useState(false)
    const [error, setError] = useState<any | undefined>()
    const [result, setResult] = useState<T | undefined>()
    const mutate = (input: U): Promise<void> => {
        setMutating(true)
        options.onMutating && options.onMutating()
        return callback(input).then((result) => {
            setMutating(false)
            setResult(result)
            setError(undefined)
            options.onResult && options.onResult(result)
            options.onFinished && options.onFinished()
            if (options.caches) {
                options.caches.forEach((cache) => {
                    if (refreshers[cache]) {
                        refreshers[cache].forEach((refresher) => refresher())
                    }
                })
            }
        }).catch((error) => {
            setMutating(false)
            setError(error)
            options.onError && options.onError()
            options.onFinished && options.onFinished()
        })
    }
    return {
        mutating, error, result, mutate,
        setMutating, setResult, setError
    }
}
