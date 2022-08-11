const fs = require('fs');
const path = require('path');

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': "text/javascript",
    '.jpg': 'image/jpg',
    '.png': 'image/png',
    '.ico': 'image/ico'
};

const publicHandler = (request, response) => {
    const endpoint = request.url;
    const filePath = path.join(__dirname, '..' ,'..', endpoint);
    console.log(filePath);
    fs.readFile(filePath, (err, data) => {
        if(err){
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.end('<h1 style="color:green">Internal server error</h1>');
        }else {
            response.writeHead(200, {'Content-Type': mimeTypes[path.extname(endpoint)]});
            response.end(data);
        }
    });
}


module.exports = publicHandler;
