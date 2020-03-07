fetch('https://byui-cit230.github.io/weather/data/towndata.json')
    .then(result => {
        return result.json();
    })
    .then(resultJSON =>{
        let towns = resultJSON.towns;
        towns.forEach(
            town => {
                if (town.name === 'Fish Haven'){
                    document.querySelector('#fishHavenName').textContent = town.name;
                    document.querySelector(`#fishHavenMotto`).textContent = town.motto;
                    document.querySelector(`#fishHavenYearFounded`).textContent = `Year Founded: ${town.yearFounded}`;
                    document.querySelector(`#fishHavenPopulation`).textContent = `Population: ${town.currentPopulation}`;
                    document.querySelector(`#fishHavenAverageRainFall`).textContent = `Average Rainfall: ${town.averageRainfall}`;
                    document.querySelector(`#fishHavenImage`).setAttribute('src', `img/${town.photo}`);
                    document.querySelector(`#fishHavenImage`).setAttribute('alt', town.name);

                } else if (town.name === 'Preston'){
                    document.querySelector('#preston').textContent = town.name;
                    document.querySelector(`#prestonMotto`).textContent = town.motto;
                    document.querySelector(`#prestonYearFounded`).textContent = `Year Founded: ${town.yearFounded}`;
                    document.querySelector(`#prestonPopulation`).textContent = `Population: ${town.currentPopulation}`;
                    document.querySelector(`#prestonAnnualRainFall`).textContent = `Average Rainfall: ${town.averageRainfall}`;
                    document.querySelector(`#prestonImage`).setAttribute('src', `img/${town.photo}`);
                    document.querySelector(`#prestonImage`).setAttribute('alt', town.name);



                } else if (town.name === 'Soda Springs'){
                    document.querySelector('#sodasprings').textContent = town.name;
                    document.querySelector(`#sodaSpringsMotto`).textContent = town.motto;
                    document.querySelector(`#sodaSpringsYearFounded`).textContent = `Year Founded: ${town.yearFounded}`;
                    document.querySelector(`#sodaSpringsPopulation`).textContent = `Population: ${town.currentPopulation}`;
                    document.querySelector(`#sodaSpringsAnnualRainFall`).textContent = `Average Rainfall: ${town.averageRainfall}`;
                    document.querySelector(`#sodaSpringsImage`).setAttribute('src', `img/${town.photo}`);
                    document.querySelector(`#sodaSpringsImage`).setAttribute('alt', town.name);


                
                }
            }
        )
    });