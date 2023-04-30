const http = require('http');
const port = 8080;

const rotas = {
    '/' : 'Curso de API em Node',
    '/livros' : 'Entrei na página de livros',
    '/autores': 'Entrei na págiana de autores',
    '/editora': 'Entrei na págiana de editoraaaa'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(`servidor escutando na porta ${port}`)
})


