import { css } from "@linaria/core";
import React, { FC } from "react";
import usePath from "react-use-path";
import { useMutation, useQuery } from "../hooks/useQueryMutation";
import Spacer from "./Spacer";
import { teo } from "../teo";

const ExamplesPage: FC = () => {
    const { data } = useQuery(() => teo.example.findMany({}), { cache: 'examples' })
    const examples = data?.data
    const { mutate: deleteExample } = useMutation((id: number) => teo.example.delete({
        "where": {
            "id": id
        }
    }), { caches: ['examples'] })
    const [_, setPath] = usePath()
    return <div className={css`
        margin: 16px;
    `}>
        <div className={css`
            display: flex;
            flex-direction: column;
        `}>
            <button className={css`
                align-self: flex-end;
                padding: 6px 26px;
                margin-bottom: 16px;
            `} onClick={() =>  setPath('/examples/new')}>Add</button>
            {examples?.map((example) => {
                return <div className={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 6px 10px;
                    background-color: #FFFFFF;
                    margin-bottom: 8px;
                    cursor: pointer;
                `} onClick={() => {
                    setPath(`/examples/${example.id}`)
                }} key={example.id}>
                <div className={css`
                    display: flex;
                    flex-direction: column;
                `}>
                    <div className={css`
                        color: black;
                    `}>{example.string} {example.int} {example.float} {example.datetime?.toISOString()}</div>
                    
                </div>
                <div className={css`
                    display: flex;
                `}>
                    <Spacer spacing={12} direction='horizontal' />
                    <button onClick={(e) => {
                        e.stopPropagation()
                        setPath(`/examples/${example!.id}/update`)
                    }}>Modify</button>
                        <Spacer spacing={12} direction='horizontal' />
                        <button onClick={(e) => {
                            e.stopPropagation()
                            deleteExample(example.id)
                        }}>Delete</button>
                </div>
            </div>
            })}

        </div>
    </div>
}

export default ExamplesPage
