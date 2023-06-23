'use client';

import { useCallback, useState } from 'react';
import classes from './page.module.scss';
import { GraphTableWithInput } from '@/components/InputGraph';
import { Button } from '@/components/Button';
import { Switch } from '@/components/Switch';

export default function Page() {
    const [reachableNodes, setReachableNodes] = useState({});
    const [graph, setGraph] = useState(undefined);
    const [startNode, setStartNode] = useState('');
    const [isDfs, setIsDfs] = useState(false);

    const handleStartNodeChange = useCallback(
        (event) => {
            const { value } = event.target;
            setReachableNodes(undefined);
            if (!Object.keys(graph).includes(value)) setStartNode('');
            else setStartNode(value);
        },
        [graph],
    );

    const clearData = useCallback(() => {
        setReachableNodes(undefined);
        setStartNode(undefined);
        setGraph(undefined);
    }, []);

    const handleChangeMode = useCallback((state) => {
        setIsDfs(state);
        setReachableNodes(undefined);
    }, []);

    const findBFS = useCallback(() => {
        fetch(isDfs ? 'http://localhost:9999/dfs' : 'http://localhost:9999/bfs', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ graph, startNode }),
        })
            .then((res) => res.json())
            .then((res) => {
                setReachableNodes(res);
            });
    }, [graph, isDfs, startNode]);

    return (
        <div>
            <h1 className={classes.header}>Обход графа</h1>

            <GraphTableWithInput isChanged={clearData} handleSetGraph={setGraph} />

            <div className={classes.selectMode}>
                <span>В ширину</span>
                <Switch enabled={isDfs} setEnabled={handleChangeMode} />
                <span>В глубину</span>
            </div>

            {graph && (
                <div className={classes.createGraphForm}>
                    <h3>Начальная нода: </h3>
                    <input
                        placeholder="Введите начальную ноду"
                        type="text"
                        value={startNode}
                        onChange={handleStartNodeChange}
                    />
                    {startNode && <Button onClick={findBFS}>Найти доступные вершины</Button>}
                </div>
            )}

            {reachableNodes && reachableNodes.length ? (
                <div className={classes.content}>
                    <h2 className={classes.res}>Результат работы алгоритма</h2>
                    <table className={classes.table}>
                        <tr>
                            <th>Начальная вершина</th>
                            <th>Достижимые вершины</th>
                        </tr>
                        <tr>
                            <td>{startNode}</td>
                            <td>{reachableNodes.join(', ')}</td>
                        </tr>
                    </table>
                </div>
            ) : (
                <h3 style={{ marginTop: 30 }}>Доступных вершин нет</h3>
            )}
        </div>
    );
}
