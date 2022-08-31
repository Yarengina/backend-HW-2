const http = require('http');
const getUsers = require('./modules/users');

const HOSTNAME = '127.0.0.1';
const PORT = 3003;
const HTTP_HOSTNAME = 'http://127.0.0.1';

const server = http.createServer((request, response) => {
    const url = new URL(request.url, HTTP_HOSTNAME);

    if (url.search === '?users') {
        response.statusCode = 200;
        response.statusMessage = 'Ok';
        response.setHeader('Content-Type', 'application/json');
        response.write(getUsers());
        response.end();
    } 
    
    else if (url.search === '') {
        response.statusCode = 200;
        response.statusMessage = 'Ok';
        response.setHeader('Content-Type', 'text/plain');
        response.write('Hello, World!');
        response.end();
    } 
    
    else if (url.searchParams.get('hello') === '<name>') {
        response.statusCode = 200;
        response.statusMessage = 'Ok';
        response.setHeader('Content-Type', 'text/plain');
        response.write('Hello, .');
        response.end();
    }

    else if (url.searchParams.get('hello') === '') {
        response.statusCode = 400;
        response.statusMessage = 'Ok';
        response.setHeader('Content-Type', 'text/plain');
        response.write('Enter a name');
        response.end();
    }

    else {
        response.statusCode = 500;
        response.statusMessage = 'Ok';
        response.setHeader('Content-Type', 'text/plain');
        response.write('');
        response.end();
    }
    
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Сервер запущен по адресу http://${HOSTNAME}:${PORT}/`)
});
