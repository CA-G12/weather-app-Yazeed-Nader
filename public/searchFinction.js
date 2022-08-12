let myInput = document.querySelector("#myInput");

myInput.onkeyup = function (){
    console.log(myInput.value);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(xhttp.responseText);
        console.log(data);
        }
    };
    // `http://localhost:4000/location?q=${myInput.value}`
    xhttp.open("GET", "../src/handlers/location-handler.js", myInput.value);
    xhttp.send();

}



// fetch('../src/locations.json').then((result) => {
//     console.log(result);
//     return result.json();
//   })

