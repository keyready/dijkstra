const port = 9999;

const express = require('express');
const path = require('path');
const cors = require('cors');
const { dijkstra } = require('./lib/dijkstra');
const { bfs } = require('./lib/bfs');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/get_dijkstra', (req, res) => {
    try {
        const { startNode, graph } = req.body;
        const { distances } = dijkstra(startNode, graph);

        return res.status(200).json(distances);
    } catch (e) {
        return res.status(500).json({ message: 'Непредвиденная ошибка' });
    }
});

app.post('/bfs', (req, res) => {
    try {
        const { startNode, graph } = req.body;

        const track = bfs(startNode, graph);

        return res.status(200).json(track);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Непредвиденная ошибка' });
    }
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
