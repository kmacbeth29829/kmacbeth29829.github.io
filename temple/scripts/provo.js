const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5780026&appid=141ca69a37402276d264debd535055f8&units=imperial"
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
            document.getElementById('currently1').textContent = jsObject.main.temp;
            document.getElementById('high1').textContent = jsObject.main.temp_max;
            document.getElementById('wind_speed1').textContent = jsObject.wind.speed;
            document.getElementById('humidity1').textContent = jsObject.main.humidity;
            document.querySelector('#weather1').textContent = jsObject.weather[0].main;
            let imageURL = "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + '.png';
            document.querySelector("#weather_image1").setAttribute('src', imageURL)
            document.querySelector("#weather_image1").setAttribute('alt', jsObject.weather[0].main);
            if (windChill === 0) {
                document.getElementById("windChill1").innerHTML = 'N/A';
            } else {
                document.getElementById("windChill1").innerHTML = Math.round(windChill) + '&deg;';
            }
        }
    )

    const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?id=3860259&appid=141ca69a37402276d264debd535055f8&units=imperial"
fetch(apiURL2)
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
            document.getElementById('currently2').textContent = jsObject.main.temp;
            document.getElementById('high2').textContent = jsObject.main.temp_max;
            document.getElementById('wind_speed2').textContent = jsObject.wind.speed;
            document.getElementById('humidity2').textContent = jsObject.main.humidity;
            document.querySelector('#weather2').textContent = jsObject.weather[0].main;
            let imageURL = "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + '.png';
            document.querySelector("#weather_image2").setAttribute('src', imageURL)
            document.querySelector("#weather_image2").setAttribute('alt', jsObject.weather[0].main);
            if (windChill === 0) {
                document.getElementById("windChill2").innerHTML = 'N/A';
            } else {
                document.getElementById("windChill2").innerHTML = Math.round(windChill) + '&deg;';
            }
        }
    )


    const apiURL3 = "https://api.openweathermap.org/data/2.5/weather?id=5808276&appid=141ca69a37402276d264debd535055f8&units=imperial"
fetch(apiURL3)
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
            document.getElementById('currently3').textContent = jsObject.main.temp;
            document.getElementById('high3').textContent = jsObject.main.temp_max;
            document.getElementById('wind_speed3').textContent = jsObject.wind.speed;
            document.getElementById('humidity3').textContent = jsObject.main.humidity;
            document.querySelector('#weather3').textContent = jsObject.weather[0].main;
            let imageURL = "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + '.png';
            document.querySelector("#weather_image3").setAttribute('src', imageURL)
            document.querySelector("#weather_image3").setAttribute('alt', jsObject.weather[0].main);
            if (windChill === 0) {
                document.getElementById("windChill3").innerHTML = 'N/A';
            } else {
                document.getElementById("windChill3").innerHTML = Math.round(windChill) + '&deg;';
            }
        }
    )