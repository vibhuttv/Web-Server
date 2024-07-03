const http = require('http');
const fs = require('fs');

const hello_file = fs.readFileSync('hello.html', 'utf8');
const login_file = fs.readFileSync('log.html', 'utf8');

const server = http.createServer((req, res) => {
    if (req.url === '/login' && req.method === 'GET') {
        res.setHeader("Content-Type", "text/html");
        res.write(login_file); 
        res.end();
      } else {
        res.setHeader("Content-Type", "text/html");
        res.write(hello_file); 
        res.end();
      }
});

const port = 8000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});