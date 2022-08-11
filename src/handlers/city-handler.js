const fs = require('fs');
const path = require('path');
const url = require('url');

const cityHandler = (request, response) => {
    const filePath = path.join(__dirname,'..' ,'locations.txt');
    fs.readFile(filePath, (err, data) => {
        if(err){
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.end('<h1 style="color:green">Internal server error</h1>');
        }else {
            const queryObject = url.parse(request.url, true).query;
            const words = data.toString().split("\n");
            const matchingWords = words.filter(word => word.toLowerCase().startsWith(queryObject['q'].toLowerCase()));
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(matchingWords));
        }
    });
}


module.exports = cityHandler;
