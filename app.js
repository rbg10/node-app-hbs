const http = require('http');

http.createServer((req, res) =>{

    res.writeHead(200,{'Content-Type' : 'application/json'});

    const salida= {
        nombre:'Rene',
        edad: 35,
        url:req.url
    }



    res.write(JSON.stringify(salida));
    res.end();
}).listen(9090);

console.log('Servidor iniciado en puerto 9090');