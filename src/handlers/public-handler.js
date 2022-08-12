const path = require('path');
const { fileRead } = require('../file-access.js');

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': "text/javascript",
    '.jpg': 'image/jpg',
    '.png': 'image/png',
    '.ico': 'image/x-icon'
};

const publicHandler = (request, response) => {
    const endpoint = request.url;
    const filePath = path.join(__dirname, '..' ,'..', endpoint);
    fileRead(filePath, request, response, (data) => {
        response.writeHead(200, {'Content-Type': mimeTypes[path.extname(endpoint)]});
        response.end(data);
    });
}


module.exports = publicHandler;
