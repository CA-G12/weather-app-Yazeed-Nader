const url = require('url');
const fs = require('fs');
const path = require("path");

const router = (request, response) => {
    const endpoint = request.url;
    console.log(request.url);
    if(endpoint.includes("/location") && request.method == "GET"){
        const filePath = path.join(__dirname, 'locations.txt');
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
}

module.exports = router;