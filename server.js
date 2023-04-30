const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Olá mundo com Node JS');
});

server.listen(port, () => {
    console.log(`servidor escutando na porta ${port}`)
})


