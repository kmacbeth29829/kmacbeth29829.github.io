// const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//   });

//   const prophets = jsonObject['prophets'];

//   for (let i = 0; i < prophets.length; i++ ) 

//     let card = document.createElement('section');
// let h2 = document.createElement('h2');

// h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

// card.appendChild(h2);

// document.querySelector('div.cards').appendChild(card);

// image.setAttribute('src', prophets[i].imageurl);

fetch('https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json')
    .then(result => {
            return result.json();
        })
    .then(prophetList => {
        let prophets = prophetList.prophets;
        prophets.forEach(
            prophet => {
                let article = document.createElement('article')

                let h1 = document.createElement('h1')
                h1.textContent = `${prophet.name} ${prophet.lastname}`;

                let dateOfBirth = document.createElement('paragraph')
                dateOfBirth.textContent = ` Date of Birth: ${prophet.birthdate}`;

                let placeOfBirth = document.createElement('paragraph')
                placeOfBirth.textContent = `place of birth: ${prophet.birthplace}`;

                let image = document.createElement('img');
                image.setAttribute('src', prophet.imageurl);
                image.setAttribute('alt', `${prophet.firstname} ${prophet.lastname}`);


                article.appendChild(h1);
                article.appendChild(dateOfBirth);
                article.appendChild(placeOfBirth);
                article.appendChild(image);

                document.querySelector('#prophets').appendChild(article);
            }
        );
    });
