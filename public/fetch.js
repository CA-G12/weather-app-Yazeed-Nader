const fetchURL = (method, url, requestBody, onSuccessCallback, onErrorCallback) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){
                if(onSuccessCallback){
                    onSuccessCallback(xhr.responseText);
                }
            }
            else {
                if(onErrorCallback){
                    onErrorCallback(xhr.status, xhr.statusText);
                }
            }
        }
    }

    xhr.open(method, url);
    requestBody? xhr.send(requestBody): xhr.send();

}