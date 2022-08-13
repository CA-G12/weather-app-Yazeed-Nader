const weatherCardDiv = document.querySelector('.weather');
const searchInput = document.querySelector('.search-bar');
const weathForcastSection = document.querySelector('.weather-forecast');

let weather = {
    apiKey: "2ceae9e5c180c2828ebe67712809e37c",
    fetchWeather: function(location){
      const host = 'https://api.openweathermap.org';
      const path = '/data/2.5/weather';
      const queryString = `q=${location}&appid=${this.apiKey}&units=metric`;

      fetchURL('GET', `${host}${path}?${queryString}`, '', (response) => {
        const data = JSON.parse(response);
        this.displayWeather(data);
        weatherWeek.fetchWeekWeather();
        weathForcastSection.style.display = 'grid';
      }, 
      this.displayRequestError);
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      const {lat, lon} = data.coord;

      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
      document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`;
      weatherCardDiv.classList.remove("loading");
      document.querySelector('.intro').style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;

      weatherWeek.fetchWeekWeather(lon, lat);
    },
    search: function (location) {
      weatherCardDiv.classList.remove("error");
      weatherCardDiv.classList.remove("input-empty");
      weatherCardDiv.classList.add("loading");
      if(location.trim() != ''){
        this.fetchWeather(location);
      }else {
        this.displayInputEmptyError();
      }
      
    },
    displayRequestError: function(status, statusText){
      weatherCardDiv.classList.remove("input-empty");
      weatherCardDiv.classList.remove("loading");
      weatherCardDiv.classList.add("error");
      weathForcastSection.style.display = "none";
    },

    displayInputEmptyError: function(){
      weatherCardDiv.classList.remove("error");
      weatherCardDiv.classList.remove("loading");
      weatherCardDiv.classList.add("input-empty");
      weathForcastSection.style.display = "none";
    }
  };
  
  document.querySelector(".search button").addEventListener("click", () => {
    weather.search(searchInput.value);
  });
  
  document.querySelector(".search-bar").addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      weather.search(searchInput.value);
    }
  });
  document.forms[0].onsubmit = (e) => {
    e.preventDefault();
  };

  weather.search("gaza");
