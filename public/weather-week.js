const weatherWeek = {
  apiKey: "2ceae9e5c180c2828ebe67712809e37c",
  fetchWeekWeather: function(long, lat){
      const host = 'https://api.openweathermap.org/';
      const path = '/data/2.5/onecall';
      const queryString =  `lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${this.apiKey}`
      const apiUrl = `${host}${path}?${queryString}`;
      fetchURL("GET", apiUrl, '', (response) => {
          const data = JSON.parse(response);
          this.displayWeekWeather(data);
      });
  },
  displayWeekWeather: function(data){
    const weatherInDays = data.daily;
    const weatherSection = document.querySelector('.weather-forecast');
    weatherSection.innerHTML = '';


    weatherInDays.forEach(weather => {
      const dt = weather.dt;
      const {day, night, eve, morn} = weather['feels_like'];
      const {description, icon } = weather['weather'][0];

      weatherItemDiv = document.createElement('div');
      weatherItemDiv.classList.add('weather-forecast-item');

      const date = timeConverter(dt);
      if(new Date().getDate() == new Date(date).getDate()){
        weatherItemDiv.classList.add('today');
      }
      
      const flexDiv = document.createElement('div');
      flexDiv.className = 'date-flex';

      const dayDiv =  document.createElement('div');
      dayDiv.className = 'day';
      dayDiv.innerText = convertDateToWeekDay(date);
      flexDiv.appendChild(dayDiv);

      const dateDiv =  document.createElement('div');
      dateDiv.className = 'date';
      dateDiv.innerText = date;
      flexDiv.appendChild(dateDiv);
      weatherItemDiv.appendChild(flexDiv);

      const iconImg =  document.createElement('img');
      iconImg.className = 'w-icon';
      iconImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      iconImg.alt = 'weather icon';
      weatherItemDiv.appendChild(iconImg);

      const descriptionDiv =  document.createElement('div');
      descriptionDiv.className = 'description';
      descriptionDiv.innerHTML = description;
      weatherItemDiv.appendChild(descriptionDiv);

      const nightTempDiv =  document.createElement('div');
      nightTempDiv.className = 'temp';
      nightTempDiv.innerHTML = `<span class='bold'>Night:</span>  <span>${night}&#176; C</span>`;
      weatherItemDiv.appendChild(nightTempDiv);

      const dayTempDiv =  document.createElement('div');
      dayTempDiv.className = 'temp';
      dayTempDiv.innerHTML = `<span class='bold'>Day:</span>  <span>${day}&#176; C</span>`;
      weatherItemDiv.appendChild(dayTempDiv);

      weatherSection.appendChild(weatherItemDiv);

    });
  }    
};

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = a.getMonth() + 1;
  var date = a.getDate();
  var time = month + '/' + date + '/' + year ;
  return time;
}


function convertDateToWeekDay(date){
  const weeDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weeDays[new Date(date).getDay()];

}
