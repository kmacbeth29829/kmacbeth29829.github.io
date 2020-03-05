// const currentDate = new Date();
// console.log(currentDate);

// const currentYear = currentDate.getFullYear();
// console.log(currentYear);

// document.getElementById("currentDate").innerHTML = currentYear;  

let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = dayNames[d.getDay()];
let monthName = monthNames[d.getMonth()];
let fullDate = dayName + ", " + d.getDate() + " " + monthName + " " + d.getFullYear();
document.getElementById("currentDate").innerHTML = fullDate;

// document.getElementById("lastModified").textContent = document.lastModified;

// try{
//     let options  = {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//         year: "numeric"
//     };
//     document.getElementById(
//         "currentdate2"
//     ).textContent = new Date().toLocaleDateString("en-US", options);

// } catch (e) {
//     alert("Error with code or you browser does not support Local");
// }

