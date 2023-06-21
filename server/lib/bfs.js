const defaultGraph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['E'],
    D: ['F'],
    E: [],
    F: [],
};

function bfs(startNode, graph = defaultGraph) {
    const visited = {};
    const queue = [];

    const newGraph = {};
    for (const key in graph) {
        newGraph[key] = Object.keys(graph[key]);
    }
    console.log(newGraph);

    // Помещаем стартовый узел в очередь и отмечаем его как посещенный
    queue.push(startNode);
    visited[startNode] = true;

    // Создаем пустую матрицу смежности
    const adjacencyMatrix = {};

    // Инициализируем строки матрицы смежности
    for (const node in newGraph) {
        adjacencyMatrix[node] = {};
        for (const neighbor of newGraph[node]) {
            adjacencyMatrix[node][neighbor] = 0;
        }
    }

    while (queue.length > 0) {
        // Извлекаем узел из очереди
        const currentNode = queue.shift();

        // Получаем смежные узлы текущего узла
        const neighbors = newGraph[currentNode];

        // Обновляем значения в матрице смежности
        for (const neighbor of neighbors) {
            if (!visited[neighbor]) {
                // Помещаем смежный узел в очередь и отмечаем его как посещенный
                queue.push(neighbor);
                visited[neighbor] = true;
            }
            // Устанавливаем значение 1 в матрице смежности
            adjacencyMatrix[currentNode][neighbor] = 1;
        }
    }

    console.log(adjacencyMatrix);
    return adjacencyMatrix;
}

module.exports = {
    bfs,
};
