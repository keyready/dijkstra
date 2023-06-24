import React, { useCallback, useState } from 'react';
import classes from './InputGraph.module.scss';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export function GraphTableWithInput(props) {
    const { handleSetGraph, isChanged, defaultGraph } = props;
    const nodes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const [graph, setGraph] = useState(
        defaultGraph || {
            A: { B: 7, C: 9 },
            B: { A: 7, C: 10, D: 15 },
            C: { A: 9, B: 10, D: 11 },
            D: { B: 15, C: 11, E: 6 },
            E: { D: 6 },
            F: {},
        },
    );

    const vertices = Object.keys(graph);

    const handleCellChange = (rowVertex, colVertex, value) => {
        setGraph((prevGraph) => ({
            ...prevGraph,
            [rowVertex]: {
                ...prevGraph[rowVertex],
                [colVertex]: value !== '' ? parseInt(value, 10) : undefined,
            },
        }));
        isChanged?.();
    };

    const handleSendGraph = () => {
        handleSetGraph(graph);
    };

    const addColumn = useCallback(() => {
        setGraph({ ...graph, [nodes[Object.keys(graph).length]]: 1 });
    }, [graph, nodes]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th />
                        {vertices.map((vertex) => (
                            <th key={vertex}>{vertex}</th>
                        ))}
                        <th>
                            <Button onClick={addColumn}>+</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {vertices.map((rowVertex) => (
                        <tr key={rowVertex}>
                            <th>{rowVertex}</th>
                            {vertices.map((colVertex) => (
                                <td key={colVertex}>
                                    <Input
                                        className={classes.tableInput}
                                        type="number"
                                        value={graph[rowVertex][colVertex] || ''}
                                        onChange={(e) =>
                                            handleCellChange(rowVertex, colVertex, e.target.value)
                                        }
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {!defaultGraph && (
                <Button style={{ marginTop: 15 }} onClick={handleSendGraph}>
                    Сохранить
                </Button>
            )}
        </div>
    );
}
