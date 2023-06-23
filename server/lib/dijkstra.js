/**
 * Реализация алгоритма Дейкстры на JavaScript
 *
 * @param startNode - начальная нода
 * @param endNode - конечная нода
 * @param graph - данный граф
 * @returns {{distance: *}} - объект дистанций
 *  между начальной нодой и всеми нодами и
 *  объект для отслеживания пути от стартового узла до каждого другого узла в графе
 */
const dijkstra = (startNode, endNode, graph) => {
    /**
     * тут хрянятся дистанции между начальной нодой и всеми остальными, где
     *  ключ - нода
     *  значение - расстояние до нее от начальной ноды
     */
    const distances = {};

    /**
     * объект для сохранения посещенных нод, где
     *  ключ - нода
     *  значение - посещенность (true/false)
     */
    const visited = {};

    /**
     * Объект для хранения наименьших расстояний между узлами для восстановления крайтчайшего пути
     * из любой ноды в любую
     */
    const previous = {};

    /**
     * Очередь посещения узлов
     */
    const queue = [];

    // Инициализация начальных значений
    for (const node in graph) {
        distances[node] = Infinity;
        previous[node] = null;
    }

    distances[startNode] = 0;

    // Добавляем стартовый узел в очередь
    queue.push({ node: startNode, weight: 0 });

    while (queue.length) {
        // Извлекаем узел с наименьшим весом из очереди
        queue.sort((a, b) => a.weight - b.weight);
        const { node, weight } = queue.shift();

        // Проверяем, был ли уже посещен этот узел
        if (visited[node]) {
            continue;
        }

        visited[node] = true;

        // Обновляем веса смежных узлов
        for (const neighbor in graph[node]) {
            const newWeight = weight + graph[node][neighbor];
            if (newWeight < distances[neighbor]) {
                distances[neighbor] = newWeight;
                previous[neighbor] = node;
                queue.push({ node: neighbor, weight: newWeight });
            }
        }
    }

    return { distance: distances[endNode] };
};

module.exports = {
    dijkstra,
};
