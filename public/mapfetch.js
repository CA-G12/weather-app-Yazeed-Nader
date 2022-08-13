let myInput = document.querySelector('#myInput');
let searchAbout = document.querySelector('#searchAbout');
let mapLinkName = document.querySelector("#imgMap");



searchAbout.addEventListener('click', function() {
    // let url = `https://www.google.com/maps/search/?api=1&query=${myInput.value}+field`;
    let url = `https://maps.googleapis.com/maps/api/staticmap?center=${myInput.value}&zoom=10&size=2000x2000&key=AIzaSyDeEc3PmHZCgGZC2bnTqf1Ohr38KFtu82U`
    mapLinkName.src = url;
    console.log(url);
});



