const express = require('express');
const server = express(); //inicializa o servidor 

server.get('/teste', (req, res) => {
    res.send('Mudei a API!');
});

server.listen(3000, () => { //escuta uma determinada porta
    console.log('API online');
}) 
