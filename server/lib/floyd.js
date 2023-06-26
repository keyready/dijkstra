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
    const distances = [...graph];

    // Инициализация матрицы расстояний
    for (let i = 0; i < numVertices; i += 1) {
        for (let j = 0; j < numVertices; j += 1) {
            if (i === j) {
                distances[i][j] = 0;
            } else if (distances[i][j] === 0) {
                distances[i][j] = Infinity;
            }
        }
    }

    for (let k = 0; k < numVertices; k += 1) {
        for (let i = 0; i < numVertices; i += 1) {
            for (let j = 0; j < numVertices; j += 1) {
                /**
                 * Это условие проверяет, сократится ли расстояние от вершины i до вершины j,
                 * если мы пройдем через вершину k по сравнению с текущим
                 * известным расстоянием от i до j.
                 */
                if (distances[i][k] + distances[k][j] < distances[i][j]) {
                    distances[i][j] = distances[i][k] + distances[k][j];
                }
            }
        }
    }

    return distances;
}

module.exports = {
    floyd,
};
