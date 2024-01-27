import { css } from "@linaria/core";
import React, { FC } from "react"
import usePath from "react-use-path"
import { useMutation, useQuery } from "../hooks/useQueryMutation"
import { ExampleUpdateArgs, teo } from "../teo";
import Spacer from "./Spacer";
import Label from "./Label";
import Value from "./Value";

interface ExamplePageProps {
    id?: string
}

const ExamplePage: FC<ExamplePageProps> = ({ id }) => {
    const { data } = useQuery(() => teo.example.findUnique({
        "where": {
            "id": parseInt(id!)
        }
    }), { cache: `examples/${id}` })
    const example = data?.data
    console.log(example)
    const { mutate: updateExample } = useMutation((args: ExampleUpdateArgs) => teo.example.update(args), { caches: ['examples', `examples/${id}`] })
    const { mutate: deleteExample } = useMutation((id: number) => teo.example.delete({ "where": { id }}), { caches: ['examples'] })
    const [_, setPath] = usePath()
    return example ? <div>
        <div className={css`
            display: flex;
            justify-content: space-between;
            margin: 16px;
        `}>
            <button onClick={() => setPath('/examples')}>Return to list</button>
            <div className={css`
                display: flex;
            `}>
                <button onClick={(e) => {
                    e.stopPropagation()
                    setPath(`/examples/${example!.id}/update`)
                }}>Modify</button>
                <Spacer spacing={12} direction='horizontal' />
                <button onClick={(e) => {
                    e.stopPropagation()
                    deleteExample(example.id)
                    setPath('/examples')
                }}>Delete</button>
            </div>
        </div>
        <div className={css`
            background-color: #FFFFFF;
            margin: 16px;
            padding: 20px;
            max-width: 100%;
        `}>
            <Label>Int value</Label>
            <Value>{example.int}</Value>
            <Spacer spacing={20} direction='vertical' />
            <Label>Text value</Label>
            <Value>{example.string}</Value>
            <Spacer spacing={20} direction='vertical' />
            <Label>Float value</Label>
            <Value>{example.float}</Value>
            <Spacer spacing={20} direction='vertical' />
            <Label>Date time value</Label>
            <Value>{example.datetime?.toISOString()}</Value>
        </div>
    </div> : null
}

export default ExamplePage
