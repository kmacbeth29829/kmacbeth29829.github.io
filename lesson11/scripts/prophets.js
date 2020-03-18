fetch('https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json')
    .then(result => {
            return result.json();
        })
    .then(prophetList => {
        let prophets = prophetList.prophets;
        prophets.forEach(
            prophet => {
                let article = document.createElement('article')

                let h1 = document.createElement('h2')
                h1.textContent = `${prophet.name} ${prophet.lastname}`;

                let dateOfBirth = document.createElement('h1')
                dateOfBirth.textContent = ` Date of Birth: ${prophet.birthdate}`;

                let placeOfBirth = document.createElement('h1')
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
