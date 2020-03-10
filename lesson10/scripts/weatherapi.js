const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=141ca69a37402276d264debd535055f8&units=imperial"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        let image =  "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + '.png';
        document.querySelector('#weather-icon').setAttribute('src', image)
        let alt = jsObject.weather[0].description;
        document.querySelector('#weather-icon').setAttribute('alt', alt);
    });