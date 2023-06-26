'use client';

import { useCallback, useState } from 'react';
import classes from './page.module.scss';
import { GraphTableWithInput } from '@/components/InputGraph';
import { Button } from '@/components/Button';

export default function Page() {
    const [shortestPath, setShortestPath] = useState();
    const [startNode, setStartNode] = useState('');
    const [endNode, setEndNode] = useState('');
    const [graph, setGraph] = useState();

    const handleStartNodeChange = useCallback(
        (event) => {
            const { value } = event.target;
            setShortestPath(undefined);
            if (!Object.keys(graph).includes(value)) setStartNode('');
            else setStartNode(value);
        },
        [setStartNode, graph],
    );
    const handleEndNodeChange = useCallback(
        (event) => {
            const { value } = event.target;
            setShortestPath(undefined);
            if (!Object.keys(graph).includes(value)) setEndNode('');
            else setEndNode(value);
        },
        [graph],
    );

    const handleTableChange = useCallback(() => {
        setStartNode('');
        setGraph(undefined);
        setShortestPath(undefined);
    }, []);

    const getGraph = useCallback(() => {
        fetch('https://dijkstra-server.vercel.app/get_dijkstra', {
            method: 'post',
            body: JSON.stringify({ startNode, endNode, graph }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setShortestPath(res.distance || 'Пути нет');
            });
    }, [endNode, graph, startNode]);

    return (
        <div>
            <h1 className={classes.header}>Алгоритм Дейкстры</h1>

            <GraphTableWithInput isChanged={handleTableChange} handleSetGraph={setGraph} />

            {graph && (
                <div className={classes.createGraphForm}>
                    <h3>Начальная нода: </h3>
                    <input
                        placeholder="Введите начальную ноду"
                        type="text"
                        value={startNode}
                        onChange={handleStartNodeChange}
                    />
                    {startNode && (
                        <>
                            <h3>Конечная нода: </h3>
                            <input
                                placeholder="Введите конечную ноду"
                                type="text"
                                value={endNode}
                                onChange={handleEndNodeChange}
                            />
                        </>
                    )}

                    {startNode && (
                        <Button onClick={getGraph} type="button">
                            Просчитать
                        </Button>
                    )}
                </div>
            )}

            {shortestPath && (
                <h3 className={classes.result}>
                    {`Кратчайшее расстояние от ${startNode} до ${endNode}: ${shortestPath}`}
                </h3>
            )}
        </div>
    );
}
