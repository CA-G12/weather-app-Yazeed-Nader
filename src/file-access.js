const fs = require('fs');
const errorHandlers = require('./handlers/error-handlers');

const fileRead = (filePath, request, response, onReadSucessCallBack) => {
    if(fs.existsSync(filePath)){
        fs.readFile(filePath, (err, data) => {
            if(err){
                errorHandlers.serverError500Handler(request, response);
            } else {
                onReadSucessCallBack(data);
            }
        });
    }else {
        errorHandlers.clientError404Handler(request, response);
    }

}

module.exports = { fileRead };
