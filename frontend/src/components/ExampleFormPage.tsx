import React, { FC, useState } from "react";
import usePath from "react-use-path";
import { useForm } from 'react-hook-form'
import { css } from "@linaria/core";
import Label from "../components/Label";
import Spacer from "../components/Spacer";
import { useMutation, useQuery } from "../hooks/useQueryMutation";
import { ExampleCreateInput, ExampleUpdateArgs, teo } from "../teo";

interface ExampleFormPageProps {
    mode: 'create' | 'update'
    id?: string
}

const ExampleFormPage: FC<ExampleFormPageProps> = ({ id, mode }) => {
    const [_, setPath] = usePath()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { mutate: createExample } = useMutation((input: ExampleCreateInput) => teo.example.create({ create: input }), { caches: ['examples'] })
    const { mutate: updateExample } = useMutation((input: ExampleUpdateArgs) => teo.example.update(input), { caches: ['examples', `examples/${id}`] })
    const { mutate: deleteExample } = useMutation((id: number) => teo.example.delete({ where: { id } }), { caches: ['examples'] })
    const { data } = useQuery(() => teo.example.findUnique({ where: { id: parseInt(id!) }}), { 
        disabled: mode === 'create',
        onData(data) {
            let example = data.data
            setValue('string', example.string)
            setValue('int', example.int)
            setValue('float', example.float)
            setValue('datetime', example.datetime)
        },
        cache: `examples/${id}`
    })
    const example = data?.data
    const onSubmit = (data: any) => {
        if (mode === 'create') {
            createExample(data).then(() => {
                setPath('/examples')
            })
        } else {
            updateExample({
                where: {
                    id: parseInt(id!)
                },
                update: data
            }).then(() => {
                setPath(`/examples/${id}`)
            })
        }
    }
    return <div>
       <div className={css`
            display: flex;
            justify-content: space-between;
            margin: 20px;
        `}>
            <div className={css`
                display: flex;
            `}>
                <button onClick={() => setPath('/examples')}>Return to list</button>
                <Spacer spacing={20} direction='horizontal' />
                {mode === 'update' ? <button onClick={() => setPath(`/examples/${id}`)}>Return to this entry</button> : null}
            </div>
            {(mode === "update" && example) ? <div className={css` display: flex; `}>
                <Spacer spacing={20} direction='horizontal' />
                <button onClick={(e) => {
                    e.stopPropagation()
                    deleteExample(example.id)
                }}>Delete example</button>
            </div> : null}
            </div>
            <form className={css`
                background-color: #FFFFFF;
                margin: 20px;
                padding: 20px;
                max-width: 100%;
                display: flex;
                flex-direction: column;
            `} onSubmit={handleSubmit(onSubmit)} >
            <Label>Text value</Label>
            <Spacer spacing={8} direction='vertical' />
            <input {...register("string")} />
            <Spacer spacing={8} direction='vertical' />
            <Label>Int value</Label>
            <input type="number" {...register('int', { valueAsNumber: true })} />
            <Label>Float value</Label>
            <input {...register('float', { valueAsNumber: true })} />
            <Label>Date time value</Label>
            <input type="datetime-local" {...register('datetime', { valueAsDate: true })} />
            <Spacer spacing={8} direction='vertical' />
            <button className={css`
                margin: auto;
                padding: 6px 20px;
            `}>{mode === "create" ? "Create example" : "Modify example"}</button>
        </form>
    </div>
}

export default ExampleFormPage
