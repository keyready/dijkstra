const defaultGraph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['E'],
    D: ['F'],
    E: [],
    F: [],
};

function bfs(graph, startNode) {
    const visited = {};
    const queue = [startNode];
    const reachableNodes = [];

    visited[startNode] = true;

    while (queue.length > 0) {
        const currentNode = queue.shift();
        const neighbors = graph[currentNode];

        for (const neighbor in neighbors) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
                reachableNodes.push(neighbor);
            }
        }
    }

    return reachableNodes;
}

module.exports = {
    bfs,
};
