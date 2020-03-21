const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585000&appid=141ca69a37402276d264debd535055f8&units=imperial"
fetch(apiURL)
    .then(response => response.json())
    .then(
        jsObject => {
            console.log(jsObject)
            let currentTemp = jsObject.main.temp
            let windSpeed = jsObject.wind.speed
            let windChill = 0

            if (currentTemp < 50 && windSpeed > 3) {
                windChill = 35.74 + 0.6215 * currentTemp - 35.75 *
                    Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
            }
            document.getElementById('currently').textContent = jsObject.main.temp;
            document.getElementById('high').textContent = jsObject.main.temp_max;
            document.getElementById('wind_speed').textContent = jsObject.wind.speed;
            document.getElementById('humidity').textContent = jsObject.main.humidity;
            document.querySelector('#weather').textContent = jsObject.weather[0].main;
            let imageURL = "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + '.png';
            document.querySelector("#weather_image").setAttribute('src', imageURL)
            document.querySelector("#weather_image").setAttribute('alt', jsObject.weather[0].main);
            if (windChill === 0) {
                document.getElementById("windChill").innerHTML = 'N/A';
            } else {
                document.getElementById("windChill").innerHTML = Math.round(windChill) + '&deg;';
            }
        }
    )

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const apiURLForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5585000&appid=9e1d40f84b91347947411168e8eeb562&units=imperial'

fetch(apiURLForecast)
  .then((response) => response.json())
  .then((jsObject) => {
    let counter = 1;
    jsObject.list.forEach(
      forecast => {
        if (forecast.dt_txt.includes('18:00')) {
          let forecastDate = new Date(forecast.dt_txt.replace(' ', 'T'));
          let dayofweek = daysOfWeek[forecastDate.getDay()];
          document.querySelector(`#day${counter}`).textContent = dayofweek;
          document.getElementById(`temp${counter}`).innerHTML = forecast.main.temp.toFixed(0) + '&deg;';
          let weatherIcon = document.getElementById(`icon${counter}`);
          let imageURL = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
          let alt = forecast.weather[0].description;
          weatherIcon.setAttribute('src', imageURL);
          weatherIcon.setAttribute('alt', alt);
          counter++;
        }
      }
    );
  });
