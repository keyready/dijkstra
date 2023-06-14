import React, {useState} from 'react';
import classes from './InputGraph.module.scss'

export const GraphTableWithInput = (props) => {
    const {
        handleSetGraph,
        isChanged
    } = props;

    const [graph, setGraph] = useState({
        A: { B: 7, C: 9, F: 14 },
        B: { A: 7, C: 10, D: 15 },
        C: { A: 9, B: 10, D: 11, F: 2 },
        D: { B: 15, C: 11, E: 6 },
        E: { D: 6, F: 9 },
        F: { A: 14, C: 2, E: 9 }
    });

    const vertices = Object.keys(graph);

    const handleCellChange = (rowVertex, colVertex, value) => {
        isChanged();
        setGraph((prevGraph) => ({
            ...prevGraph,
            [rowVertex]: {
                ...prevGraph[rowVertex],
                [colVertex]: value !== '' ? parseInt(value, 10) : undefined
            }
        }));
    };

    const handleSendGraph = () => {
        handleSetGraph(graph);
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th></th>
                    {vertices.map((vertex) => (
                        <th key={vertex}>{vertex}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {vertices.map((rowVertex) => (
                    <tr key={rowVertex}>
                        <th>{rowVertex}</th>
                        {vertices.map((colVertex) => (
                            <td key={colVertex}>
                                <input
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
            <button style={{marginTop: 15}} onClick={handleSendGraph}>Сохранить</button>
        </div>
    );
};