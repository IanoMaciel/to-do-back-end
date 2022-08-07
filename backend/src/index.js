const express = require('express');
const server = express(); //inicializa o servidor 
server.use(express.json())

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);


server.listen(3000, () => { //escuta uma determinada porta
    console.log('API ONLINE');
});
