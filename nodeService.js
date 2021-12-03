const Service = require('node-windows').Service

const svc = new Service({

    name: "Pagina Impressora Guaruja",
    description: "Serviço para iniciar a pagina de impressora do Guaruja",
    script: "C:\\paginasImpressoras\\impressoras_Guaruja\\server.js"

})

svc.on('install', () => {
  
    svc.start()

})

svc.install()