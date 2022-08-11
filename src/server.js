const http = require('http');
const router = require('./router');

const port = process.env.PORT || '4000';

const server = http.createServer(router);

server.listen(port, 'localhost', () => {
    console.log(`Server is listening on port ${port}`);
})
