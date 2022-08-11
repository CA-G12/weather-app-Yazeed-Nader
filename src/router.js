const indexHandlers = require('./handlers/index-handlers.js');

const router = (request, response) => {
    const endpoint = request.url;
    if(endpoint == '/' ){
        indexHandlers.homeHandler(request, response);
    }
    else if(endpoint.includes('public')){
        indexHandlers.publicHandler(request, response);
    }
    else if(endpoint.includes("/location") && request.method == "GET"){
        indexHandlers.locationHandler(request, response);
    }
    else {
        indexHandlers.errorHandlers.clientError404Handler(request, response);
    }
}

module.exports = router;