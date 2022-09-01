const http = require('http');
const getUsers = require('./modules/users');

const HOST_NAME = '127.0.0.1';
const PORT = 3003;

const server = http.createServer((request, response) => {
    const url = new URL(request.url, `http://${HOST_NAME}`);

    const userName = url.searchParams.get('hello');

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
    
    else if (userName && userName !== '') {
        response.statusCode = 200;
        response.statusMessage = 'Ok';
        response.setHeader('Content-Type', 'text/plain');
        response.write(`Hello, ${userName}.`);
        response.end();
    }

    else if (userName === '') {
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

server.listen(PORT, HOST_NAME, () => {
    console.log(`Сервер запущен по адресу http://${HOST_NAME}:${PORT}/`)
});
