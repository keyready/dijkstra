/**
 * Основная идея алгоритма:
 * Создаем объект visited, который будет отслеживать, какие вершины мы уже посетили. Изначально все вершины помечены как непосещенные.
 * Создаем пустой массив traversalOrder, который будет хранить порядок посещения вершин.
 * В функции traverse мы передаем текущую вершину. Вначале помечаем ее как посещенную и добавляем в массив traversalOrder.
 * Получаем список смежных вершин для текущей вершины из graph.
 * Рекурсивно вызываем функцию traverse для каждой смежной вершины, если она не была посещена ранее.
 * По завершении обхода возвращаем массив traversalOrder, который содержит вершины в порядке их посещения.
 *
 * @param graph - исходный граф
 * @param startVertex - начальная вершина
 * @returns {string[]} - порядок обхода вершин
 */
function dfs(originGraph, startVertex) {
    const graph = {};
    for (const vertex in originGraph) {
        graph[vertex] = Object.keys(originGraph[vertex]);
    }

    const visited = {};
    const traversalOrder = [];

    function traverse(vertex) {
        visited[vertex] = true;
        traversalOrder.push(vertex);

        const neighbors = graph[vertex];
        for (let i = 0; i < neighbors.length; i += 1) {
            const neighbor = neighbors[i];
            if (!visited[neighbor]) {
                traverse(neighbor);
            }
        }
    }

    traverse(startVertex);

    return traversalOrder;
}

module.exports = {
    dfs,
};
