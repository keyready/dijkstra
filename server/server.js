const port = 9999;

const express = require('express')
const path = require('path')
const cors = require('cors')
const {dijkstra} = require("./lib");


const app = express();


app.use(cors())
app.use(express.json())


app.post('/get_dijkstra', (req, res) => {
    try {
        const { startNode, graph } = req.body;
        const { distances } = dijkstra(startNode, graph);

        res.status(200).json(distances);
    } catch (e) {
        res.status(500).json({ message: 'Непредвиденная ошибка' })
    }
})


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})