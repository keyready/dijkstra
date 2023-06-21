function convertGraphToObject(graph) {
    const vertices = Object.keys(graph);
    const numVertices = vertices.length;
    const matrix = [];

    // Инициализация матрицы смежности
    for (let i = 0; i < numVertices; i += 1) {
        matrix[i] = [];
        const sourceVertex = vertices[i];
        for (let j = 0; j < numVertices; j += 1) {
            const targetVertex = vertices[j];
            matrix[i][j] = graph[sourceVertex][targetVertex] ?? Infinity;
        }
    }

    return matrix;
}

function floyd(originGraph) {
    const graph = convertGraphToObject(originGraph);
    const numVertices = graph.length;
    const dist = [];

    // Инициализация матрицы расстояний
    for (let i = 0; i < numVertices; i += 1) {
        dist[i] = [];
        for (let j = 0; j < numVertices; j += 1) {
            if (i === j) {
                dist[i][j] = 0;
            } else if (!isFinite(graph[i][j])) {
                dist[i][j] = Infinity;
            } else {
                dist[i][j] = graph[i][j];
            }
        }
    }

    return dist;
}

module.exports = {
    floyd,
};
