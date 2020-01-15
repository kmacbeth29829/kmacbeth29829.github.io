const currentDate = new Date();
console.log(currentDate);

const currentYear = currentDate.getFullYear();
console.log(currentYear);

document.getElementById("currentYear").innerHTML = currentYear;  

let daynames = [
    "Sunday"
    "Monday"
    "Tuesday"
    "Wednesday"
    "Thursday"
    "Friday"
    "Saturday"
];

let months = {
    "January"
    "February"
    "March"
    "April"
    "May"
    "June"
    "July"
    "August"
    "September"
    "October"
    "November"
    "December"
};

let d = new Date();
let dayName = dayNames[d.getDay()];
let monthName = monthNames[d.getMonth()];
let fulldate = dayName + "," + monthName + "" + d.getDate() + " , " + d.getFullYear();
document.getElementById("currentdate").textContent = fullDate;

try{
    let options  = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById(
        "currentdate2"
    ).textContent = new Date().toLocaleDateString("en-US", options);

} catch (e) {
    alert("Error with code or you browser does not support Local");
}




