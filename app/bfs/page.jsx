"use client"

import classes from './page.module.scss'
import {useCallback, useEffect, useState} from "react";
import {GraphTableWithInput} from "@/components/InputGraph";

export default function Page() {

    const [route, setRoute] = useState({})
    const [startNode, setStartNode] = useState('')

    const findBFS = useCallback((graph) => {
        fetch('http://localhost:9999/bfs', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({graph, startNode: "A"})
        })
            .then(res => res.json())
            .then(res => setRoute(res))
    }, [startNode])

    return (
        <div>
            <h1 className={classes.header}>Обход графа в ширину</h1>

            <GraphTableWithInput handleSetGraph={findBFS} />

            {route && (
                <div className={classes.content}>
                    <h2 className={classes.res}>Результат</h2>
                    <GraphTableWithInput defaultGraph={route} />
                </div>
            )}
        </div>
    )
}