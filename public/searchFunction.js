myInput.addEventListener('input', function (){
    fetchURL('GET', `http://localhost:4000/location?q=${this.value}`, '', (responseData) => {
        let data = JSON.parse(responseData);
        countries = data.slice(0, 7);
        autocomplete(document.getElementById("myInput"), countries);
    });
});
