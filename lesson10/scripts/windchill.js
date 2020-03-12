const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=141ca69a37402276d264debd535055f8&units=imperial"
fetch(apiURL)
    .then(response => response.json())
    .then(
        jsObject => {
            console.log(jsObject)
            let currentTemp = jsObject.main.temp
            let windSpeed = jsObject.wind.speed
            let windChill = 0
            document.getElementById('currently').textContent = jsObject.main.temp;
            document.getElementById('high').textContent = jsObject.main.temp_max;
            document.getElementById('wind_speed').textContent = jsObject.wind.speed;
            document.getElementById('humidity').textContent = jsObject.main.humidity;

            
       
            // document.querySelector('#wind_chill').innerHTML = f.toFixed(0) + '&deg;';
            document.querySelector('#weather').textContent= jsObject.weather[0].main;
            let imageURL = "https://openweathermap.org/img/w/"  + jsObject.weather[0].icon + '.png';
            document.querySelector("#weather_image").setAttribute('src', imageURL)
            document.querySelector("#weather_image").setAttribute('alt', jsObject.weather[0].main);
        }
    )

    let daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const apiURL2 ="api.openweathermap.org/data/2.5/forecast?id=5604473&appid=141ca69a37402276d264debd535055f8&units=imperial";
fetch(apiURL2)
    .then(response => response.json())
    .then(
        jsObject => {
            let counter = 1
            jsObject.list.forEach(
                forecast => {
                    if (forecast.dt_txt.includes('18:00')){
                        let forecastDate = new Date(forecast.dt_txt.replace(' ', 'T'));
                        let dayOfWeek = daysOfWeek[forecastDate.getDay()];
                        console.log(dayOfWeek);
                        document.getElementById(`#day${counter}`)
                            .textContent - dayOfWeek
                        counter++;

                        document.getElementById(`temp${counter}`) = forecast.main.temp ;

                    }
                    
                }
            )
    });


    