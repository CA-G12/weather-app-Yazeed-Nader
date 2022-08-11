const fs = require('fs');
const path = require('path');

const homeHandler = (request, response) => {
    const filePath = path.join(__dirname, '..' ,'..', 'public', 'index.html' );
    fs.readFile(filePath, (err, data) => {
        if(err){
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.end('<h1 style="color:green">Internal server error</h1>');
        }else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        }
    });
}


module.exports = homeHandler;
