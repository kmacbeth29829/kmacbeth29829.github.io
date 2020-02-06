// weather summary
document.querySelector('#temp').innerHTML = '58&deg;';
document.querySelector('#wind_speed').innerHTML = '15 mph';
document.querySelector('#humidity').innerHTML = '80&percnt;';

// pancake1
const currentDate = new Date();
const aside = document.querySelector('aside')
if (currentDate.getDay() === 5) {
    aside.style.display = 'block';
} 
else{
    aside.style.display = 'none';
}

