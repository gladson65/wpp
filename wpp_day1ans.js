// Day
const day = new Date().getDay();
const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(`Today is: ${dayName[day]}.`)


// time
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();

// check AM or PM 
let format = hours >= 12 ? 'PM' : 'AM';

// Live Time replace 12 when it'll be 00
hours = hours % 12;
hours = hours ? hours : 12;
// if minutes and seconds less than 0 then 0 at first place
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;
// display time
console.log(`${hours}${format}:${minutes}:${seconds}`)


