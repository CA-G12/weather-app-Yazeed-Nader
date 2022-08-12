let myInput = document.querySelector("#myInput");

myInput.addEventListener('input', function (){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(xhttp.responseText);
        console.log(data);
        countries = data.slice(0, 7);
        autocomplete(document.getElementById("myInput"), countries);
       }
    };
    xhttp.open("GET", `http://localhost:4000/location?q=${myInput.value}`);
    xhttp.send();

});



// fetch('../src/locations.json').then((result) => {
//     console.log(result);
//     return result.json();
//   })

