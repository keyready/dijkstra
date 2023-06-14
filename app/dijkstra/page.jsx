"use client"

import {useCallback, useEffect, useState} from 'react'
import classes from './page.module.scss'
import {GraphTableWithInput} from "@/components/InputGraph";

export default function Page() {

    const [nodes, setNodes] = useState()
    const [startNode, setStartNode] = useState('')
    const [graph, setGraph] = useState()

    const handleStartNodeChange = useCallback((event) => {
        const {value} = event.target;
        setNodes(undefined)
        if (!Object.keys(graph).includes(value)) setStartNode('');
        else setStartNode(value)
    }, [setStartNode, graph])

    const handleTableChange = useCallback(() => {
        setStartNode('')
        setGraph(undefined)
        setNodes(undefined)
    }, [])

    const getGraph = useCallback(() => {
        fetch('http://localhost:9999/get_dijkstra', {
            method: 'post',
            body: JSON.stringify({startNode, graph}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                setNodes(res)
            })
    }, [startNode])

    return (
        <div className={classes.page}>
            <GraphTableWithInput isChanged={handleTableChange} handleSetGraph={setGraph}/>

            {graph && (
                <div className={classes.createGraphForm}>
                    <h3>Начальная нода: </h3>
                    <input
                        placeholder='Введите начальную ноду'
                        type="text"
                        value={startNode}
                        onChange={handleStartNodeChange}
                    />
                    {startNode && (
                        <button
                            onClick={getGraph}
                            type="button"
                        >Просчитать</button>
                    )}
                </div>
            )}

            {nodes && (
                <table className={classes.table}>
                    <tr>
                        <th>Вершина</th>
                        {Object.keys(nodes).map(node => (
                            <th key={node}>{node}</th>
                        ))}
                    </tr>
                    <tr>
                        <td>Расстояние от {startNode}</td>
                        {Object.values(nodes).map((node, index) => (
                            <td key={index}>{node}</td>
                        ))}
                    </tr>
                </table>
            )}
        </div>
    )
}