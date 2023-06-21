'use client';

import { useCallback, useEffect, useState } from 'react';
import classes from './page.module.scss';
import { classNames } from '@/lib/classNames';
import { GraphTableWithInput } from '@/components/InputGraph';

export default function Page() {
    const [graph, setGraph] = useState(undefined);

    const isInfinity = useCallback((value) => {
        if (value === null) return '∞';
        if (value === 0) return '';
        return value;
    }, []);

    const numRows = graph?.length;
    const numCols = numRows > 0 ? graph[0].length : 0;
    const letters = 'ABCDEF';

    const handleTableChange = useCallback(() => {
        setGraph(undefined);
    }, []);

    const handleGraphChange = useCallback((newGraph) => {
        console.log(newGraph);

        fetch('http://localhost:9999/floyd', {
            method: 'post',
            body: JSON.stringify({ graph: newGraph }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setGraph(res);
            });
    }, []);

    return (
        <div>
            <h1 className={classes.header}>Алгоритм Флойда</h1>

            <GraphTableWithInput isChanged={handleTableChange} handleSetGraph={handleGraphChange} />

            {graph && graph.length && (
                <div className={classes.result}>
                    <h2>Результат работы алгоритма: </h2>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th />
                                {Array.from({ length: numCols }).map((_, index) => (
                                    <th key={index}>{letters[index]}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {graph.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <th>{letters[rowIndex]}</th>
                                    {row.map((value, columnIndex) => (
                                        <td
                                            className={classNames('', {
                                                [classes.infinity]: isInfinity(value) === '∞',
                                            })}
                                            key={columnIndex}
                                        >
                                            {isInfinity(value)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
