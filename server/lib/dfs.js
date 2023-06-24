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
 * @param startNode - начальная вершина
 * @returns {string[]} - порядок обхода вершин
 */
function dfs(originGraph, startNode) {
    const graph = {};
    for (const node in originGraph) {
        graph[node] = Object.keys(originGraph[node]);
    }

    const visited = {};
    const traversalOrder = [];

    function traverse(node) {
        visited[node] = true;
        traversalOrder.push(node);

        const neighbors = graph[node];
        for (let i = 0; i < neighbors.length; i += 1) {
            const neighbor = neighbors[i];
            if (!visited[neighbor]) {
                traverse(neighbor);
            }
        }
    }

    traverse(startNode);

    return traversalOrder;
}

module.exports = {
    dfs,
};
