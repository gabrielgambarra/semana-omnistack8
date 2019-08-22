const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('Nova conexão', socket.id);

    socket.on('Hello', message => {
        console.log(message);
    })

    setTimeout(() => {
        socket.emit('World', {
            message: 'OmniStack'
        });
    }, 5000);
})

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(5000);
