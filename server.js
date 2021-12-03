const express = require('express')
const server = express()

const port = 3045

server.use(express.static('view'));

server.get('/', (req, res) => {
  
    res.sendFile(__dirname.concat('./view/index.html'))

})

server.listen(port, () => {
  
    console.log(`Servidor na porta ${port}`)

})