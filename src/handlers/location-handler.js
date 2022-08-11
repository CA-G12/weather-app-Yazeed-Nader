const path = require('path');
const url = require('url');
const { fileRead }  = require('../file-access');

const locationHandler = (request, response) => {
    const filePath = path.join(__dirname,'..' ,'locations.json');
    fileRead(filePath, request, response, (data) => {

        const queryObject = url.parse(request.url, true).query;
        const words = JSON.parse(data.toString());
        const matchingWords = words.filter(word => word.toLowerCase().startsWith(queryObject['q'].toLowerCase()));

        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(matchingWords));
    });
}


module.exports = locationHandler;