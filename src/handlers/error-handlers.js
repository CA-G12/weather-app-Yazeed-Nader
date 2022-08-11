

const clientError404Handler = (request, response) => {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end(`<p style="color:red">Page Not Found ${response.statusCode}</p>`);
}

const serverError500Handler = (request, response) => {
    response.writeHead(500, {'Content-Type': 'text/html'});
    response.end(`<p style="color:green">Internal Server Error ${response.statusCode}</p>`);
}


module.exports = {clientError404Handler, serverError500Handler};