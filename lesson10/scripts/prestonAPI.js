const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=141ca69a37402276d264debd535055f8&units=imperial"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.querySelector('#temperature').textContent = `Temperature: ${main.temp}`;
        document.querySelector('#wind_speed').textContent = `Wind Speed: ${wind.speed}`;
        document.querySelector('#humidity').textContent = `humidity: ${main.humidity}`;
    });




    // document.querySelector('#fishHavenName').textContent = town.name;
    //                 document.querySelector(`#fishHavenMotto`).textContent = town.motto;
    //                 document.querySelector(`#fishHavenYearFounded`).textContent = `Year Founded: ${town.yearFounded}`;
    //                 document.querySelector(`#fishHavenPopulation`).textContent = `Population: ${town.currentPopulation}`;
    //                 document.querySelector(`#fishHavenAverageRainFall`).textContent = `Average Rainfall: ${town.averageRainfall}`;
    //                 document.querySelector(`#fishHavenImage`).setAttribute('src', `img/${town.photo}`);
    //                 document.querySelector(`#fishHavenImage`).setAttribute('alt', town.name);