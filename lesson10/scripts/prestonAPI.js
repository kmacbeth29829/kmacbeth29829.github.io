const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=141ca69a37402276d264debd535055f8&units=imperial"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current').textContent = jsObject.weather.description;
        document.getElementById('high').textContent = jsObject.main.temp_max;
        // document.getElementById('wind_chill').textContent = jsObject.main.humidity;
        document.getElementById('wind_speed').textContent = jsObject.wind.speed;
        document.getElementById('humidity').textContent = jsObject.main.humidity;

        // let image =  "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + '.png';
        // document.querySelector('#weather-icon').setAttribute('src', image)
        // let alt = jsObject.weather[0].description;
        // document.querySelector('#weather-icon').setAttribute('alt', alt);
    });



// fetch(apiURL)
//     .then((response) => response.json())
//     .then((jsObject) => {
//         console.log(jsObject);
//         document.getElementById('#temperature').textContent = jsObject.main.temp;
//         document.getElementById('#wind_speed').textContent = jsObject.wind.speed;
//         document.getElementById('#humidity').textContent = jsObject.main.humidity;
//         // let image =  "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + '.png';
//         // document.querySelector('#weather-icon').setAttribute('src', image)
//         // let alt = jsObject.weather[0].description;
//         // document.querySelector('#weather-icon').setAttribute('alt', alt);
//     });





// fetch(apiURL)
//     .then((response) => response.json())
//     .then((jsObject) => {
//         document.querySelector('#temperature').textContent = `Temperature: ${main.temp}`;
//         document.querySelector('#wind_speed').textContent = `Wind Speed: ${wind.speed}`;
//         document.querySelector('#humidity').textContent = `humidity: ${main.humidity}`;
//     });




    // document.querySelector('#fishHavenName').textContent = town.name;
    //                 document.querySelector(`#fishHavenMotto`).textContent = town.motto;
    //                 document.querySelector(`#fishHavenYearFounded`).textContent = `Year Founded: ${town.yearFounded}`;
    //                 document.querySelector(`#fishHavenPopulation`).textContent = `Population: ${town.currentPopulation}`;
    //                 document.querySelector(`#fishHavenAverageRainFall`).textContent = `Average Rainfall: ${town.averageRainfall}`;
    //                 document.querySelector(`#fishHavenImage`).setAttribute('src', `img/${town.photo}`);
    //                 document.querySelector(`#fishHavenImage`).setAttribute('alt', town.name);