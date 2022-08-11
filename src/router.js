const indexHandlers = require('./handlers/index-handlers.js');

const router = (request, response) => {
    const endpoint = request.url;
    console.log(request.url);
    if(endpoint == '/' ){
        indexHandlers.homeHandler(request, response);
    }
    else if(endpoint.includes('public')){
        indexHandlers.publicHandler(request, response);
    }
    else if(endpoint.includes("/location") && request.method == "GET"){
        indexHandlers.cityHandler(request, response);
    }
}

module.exports = router;