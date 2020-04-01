fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {
            document.querySelector('#temple1-name').textContent = response[0].TempleName;
            response[0].Services.forEach(
                service => {
                    document.querySelector('#services1').innerHTML += `<li>${service}</li>`;
                }
            )
            response[0].History.forEach(
                history => {
                    document.querySelector('#history1').innerHTML += `<li>${history}</li>`;
                }
            )
            response[0].Schedule.forEach(
                schedule => {
                    document.querySelector('#schedule1').innerHTML += `<li>${schedule}</li>`;
                }
            )
            response[0].Closures.forEach(
                closures => {
                    document.querySelector('#closures1').innerHTML += `<li>${closures}</li>`;
                }
            )






            document.querySelector('#temple2-name').textContent = response[1].TempleName;
            response[1].Services.forEach(
                service => {
                    document.querySelector('#services2').innerHTML += `<li>${service}</li>`;
                }
            )
            response[1].History.forEach(
                history => {
                    document.querySelector('#history2').innerHTML += `<li>${history}</li>`;
                }
            )
            response[1].Schedule.forEach(
                schedule => {
                    document.querySelector('#schedule2').innerHTML += `<li>${schedule}</li>`;
                }
            )
            response[1].Closures.forEach(
                closures => {
                    document.querySelector('#closures2').innerHTML += `<li>${closures}</li>`;
                }
            )







            document.querySelector('#temple3-name').textContent = response[2].TempleName;
            response[2].Services.forEach(
                service => {
                    document.querySelector('#services3').innerHTML += `<li>${service}</li>`;
                }
            )
            response[2].History.forEach(
                history => {
                    document.querySelector('#history3').innerHTML += `<li>${history}</li>`;
                }
            )
            response[2].Schedule.forEach(
                schedule => {
                    document.querySelector('#schedule3').innerHTML += `<li>${schedule}</li>`;
                }
            )
            response[2].Closures.forEach(
                closures => {
                    document.querySelector('#closures3').innerHTML += `<li>${closures}</li>`;
                }
            )
                }
            );