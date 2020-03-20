fetch('https://byui-cit230.github.io/weather/data/towndata.json')
    .then(result => {
        return result.json();
    })
    .then(
        (result) => {
            const towns = result.towns[5];
            towns.events.forEach(
                event => {
                    let li = document.createElement('li')
                    li.textContent = event;
                    document.querySelector('#events').appendChild(li);

                }
            )

            
        }
    );