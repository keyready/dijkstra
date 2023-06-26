/**
 * Алгоритм нахождения минимального числа из пары чисел
 *
 * @param distances - пути
 * @param visited - посещенные вершины
 * @returns lowestNode - нода, до которой есть кратчайший путь
 */
function findShortestTrack(distances, visited) {
    // минимальное расстояние
    let lowestCost = Infinity;
    // нода с миниальным путем
    let lowestNode;

    Object.keys(distances).forEach((node) => {
        const cost = distances[node];
        // додбавляем условие проверки непосещенности сравниваемой вершины
        if (cost < lowestCost && !visited.includes(node)) {
            lowestCost = cost;
            lowestNode = node;
        }
    });
    return lowestNode;
}

/**
 * Реализация алгоритма Дейкстры на JavaScript
 *
 * @param startNode - начальная нода
 * @param endNode - конечная нода
 * @param graph - данный граф
 * @returns distance - объект дистанций
 *  между начальной нодой и всеми нодами и
 *  объект для отслеживания пути от стартового узла до каждого другого узла в графе
 */
function dijkstra(startNode, endNode, graph) {
    // объект кратчайших путей
    const distances = {};

    // посещенные вершины
    const visited = [];

    // соседи данной вершины
    let neighbors = {};

    /**
     * изначально добавляем в объект дистанций все соседние вершины начальной ноды
     * или, если таких нет, заполняем бескончено большим числом
     */
    Object.keys(graph).forEach((node) => {
        if (node !== startNode) distances[node] = graph[startNode][node] || Infinity;
    });

    // получаем ноду, минимально удаленную от начальной
    let node = findShortestTrack(distances, visited);

    // и пока она определена,
    while (node) {
        const cost = distances[node];
        // получаем ее соседей
        neighbors = graph[node];
        // и для каждого соседа высчитываем новое расстояние
        Object.keys(neighbors).forEach((neighbor) => {
            const newCost = cost + neighbors[neighbor];
            // если до ноды можно добраться более коротким путем, перезаписываем значение
            if (newCost < distances[neighbor]) distances[neighbor] = newCost;
        });

        // длбавляем вершину в посещенную, чтобы не возвращаться в нее
        visited.push(node);

        // снова ищем минимально удаленного соседа от данной вершины
        node = findShortestTrack(distances, visited);
    }

    return distances[endNode];
}

module.exports = {
    dijkstra,
};
