/**
 * Реализация алгоритма Дейкстры на JavaScript
 *
 * @param startNode - начальная года
 * @param graph - данный граф
 * @returns {{distances: {}, previous: {}}} - объект дистанций
 *  между начальной нодой и всеми нодами и
 *  объект для отслеживания пути от стартового узла до каждого другого узла в графе
 */
const dijkstra = (startNode, graph) => {
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
    for (let node in graph) {
        distances[node] = Infinity;
        previous[node] = null;
    }

    distances[startNode] = 0;

    // Добавляем стартовый узел в очередь
    queue.push({ node: startNode, cost: 0 });

    while (queue.length) {
        // Извлекаем узел с наименьшей стоимостью из очереди
        queue.sort((a, b) => a.cost - b.cost);
        const { node, cost } = queue.shift();

        // Проверяем, был ли уже посещен этот узел
        if (visited[node]) {
            continue;
        }

        visited[node] = true;

        // Обновляем стоимости смежных узлов
        for (let neighbor in graph[node]) {
            const newCost = cost + graph[node][neighbor];
            if (newCost < distances[neighbor]) {
                distances[neighbor] = newCost;
                previous[neighbor] = node;
                queue.push({ node: neighbor, cost: newCost });
            }
        }
    }

    return { distances, previous, graph };
};

/**
 * Функция восстановлеия пути из начальной точки до любой
 * 
 * @param previous - объект-результат выполнения алгоритма Дейкстры, содержащий кратчайшие пути от ноды до ноды
 * @param endNode - конечная нода, которой надо достичь
 * @returns {*[]} - массив нод, образующих кратчайший путь из startNode в endNode
 */
const reconstructPath = (previous, endNode) => {
    const path = [];
    let currentNode = endNode;

    // Проследовать цепочку предыдущих узлов до стартового узла
    while (currentNode !== null) {
        path.unshift(currentNode);
        currentNode = previous[currentNode];
    }

    return path;
};


module.exports = {
    dijkstra,
    reconstructPath
}

// const endNode = 'C';
//
// // Восстановление кратчайшего пути
// const shortestPath = reconstructPath(previous, endNode);
// console.log('Shortest path from', startNode, 'to', endNode + ':', shortestPath);