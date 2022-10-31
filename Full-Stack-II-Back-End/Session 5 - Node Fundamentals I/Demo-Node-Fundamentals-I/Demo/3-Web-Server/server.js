const http = require('http');

const hostname = '127.0.0.1';
const port = 5001;

const server = http.createServer((request, response) => {
   console.log('request received');
   //console.log(req);
   console.log(request.url);


  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.on('close', () => {
    console.log('closing ports')
})