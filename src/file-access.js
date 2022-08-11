const fs = require('fs');
const errorHandlers = require('./handlers/error-handlers');

const fileRead = (filePath, request, response, onReadSucessCallBack) => {
    fs.readFile(filePath, (err, data) => {
        if(err){
            errorHandlers.serverError500Handler(request, response);
        }else {
            onReadSucessCallBack(data);
        }
    });
}

module.exports = { fileRead };
