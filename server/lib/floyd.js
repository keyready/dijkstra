function floyd(graph) {
    const vertices = Object.keys(graph);
    const distances = {};

    // Инициализация матрицы расстояний
    for (const vertex of vertices) {
        distances[vertex] = {};
        for (const otherVertex of vertices) {
            if (vertex === otherVertex) {
                distances[vertex][otherVertex] = 0;
            } else if (graph[vertex][otherVertex]) {
                distances[vertex][otherVertex] = graph[vertex][otherVertex];
            } else {
                distances[vertex][otherVertex] = Infinity;
            }
        }
    }

    // Поиск кратчайших путей
    for (const k of vertices) {
        for (const i of vertices) {
            for (const j of vertices) {
                if (distances[i][j] > distances[i][k] + distances[k][j]) {
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
