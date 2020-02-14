// weather summary

let f, t, s;
t = 50;
s = 10;

if (t <= 50 && s >= 3){
f = 35.74 + 0.6215 * t - 35.75 *Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
} else{
  f = 'N/A';
  document.querySelector('#wind_chill').innerHTML = f;
}

document.querySelector('#temp').innerHTML = t + '&deg;';
document.querySelector('#wind_speed').innerHTML = s + 'mph';
document.querySelector('#wind_chill').innerHTML = f.toFixed(0) + '&deg;';


// pancake1
const currentDate = new Date();
const aside = document.querySelector('aside')
if (currentDate.getDay() === 5) {
    aside.style.display = 'block';
} 
else{
    aside.style.display = 'none';
}

WebFont.load({
    google: {
      families: [
         'Lato','|Noto+Sans+JP'
      ]
    }
  });

