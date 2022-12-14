// All rights reserved to W3schools.com
// https://www.w3schools.com/howto/howto_js_autocomplete.asp

function autocomplete(inp, arr) {

    let currentFocus;

    let a, b, i, val = inp.value;
    closeAllLists();
    if (!val) { 
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", inp.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");

    
    inp.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {

      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function() {
            inp.value = this.querySelector('input').value;
            weather.search(inp.value);
            closeAllLists();
        });
        a.appendChild(b);
      }
    }
    inp.style.borderRadius = '10px';

    inp.addEventListener("keydown", function(e) {
        let x = document.getElementById(inp.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {

      let x = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
      inp.style.borderRadius = '24px';
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  let countries = [];

  
  autocomplete(document.getElementById("myInput"), countries);

  