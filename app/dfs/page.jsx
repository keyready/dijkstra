'use client';

import { useCallback, useState } from 'react';
import classes from './page.module.scss';
import { GraphTableWithInput } from '@/components/InputGraph';

export default function Page() {
    const [reachableNodes, setReachableNodes] = useState({});
    const [graph, setGraph] = useState(undefined);
    const [startNode, setStartNode] = useState('');

    const clearData = useCallback(() => {
        setReachableNodes(undefined);
        setStartNode(undefined);
        setGraph(undefined);
    }, []);

    return (
        <div>
            <h1 className={classes.header}>Обход графа в глубину</h1>
            <GraphTableWithInput isChanged={clearData} handleSetGraph={setGraph} />
        </div>
    );
}
