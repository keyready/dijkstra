const defaultGraph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['E'],
    D: ['F'],
    E: [],
    F: []
};

function bfs(startNode, graph = defaultGraph) {
    const visited = {};
    const queue = [];

    // Помещаем стартовый узел в очередь и отмечаем его как посещенный
    queue.push(startNode);
    visited[startNode] = true;

    // Создаем пустую матрицу смежности
    const adjacencyMatrix = {};

    // Инициализируем строки матрицы смежности
    for (const node in graph) {
        adjacencyMatrix[node] = {};
        for (const neighbor of graph[node]) {
            adjacencyMatrix[node][neighbor] = 0;
        }
    }

    while (queue.length > 0) {
        // Извлекаем узел из очереди
        const currentNode = queue.shift();

        // Получаем смежные узлы текущего узла
        const neighbors = graph[currentNode];

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

    return adjacencyMatrix
}

module.exports = {
    bfs
}