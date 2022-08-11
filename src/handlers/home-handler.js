const path = require('path');
const { fileRead }  = require('../file-access.js');

const homeHandler = (request, response) => {
    const filePath = path.join(__dirname, '..' ,'..', 'public', 'index.html' );
    fileRead(filePath, request, response, (data) => {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}


module.exports = homeHandler;
