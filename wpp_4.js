// date object
let date = new Date();

function nextChristmas() {

    // christmas date
    let christmasDate = new Date(`12/25/${date.getFullYear()}`);

    // if current date cross 25Dec then add 1 year for next christmas.
    if (today > christmasDate) {
        christmasDate = new Date(`12/25/${date.getFullYear() + 1}`);
    }


    // calculate the time difference in miliseconds
    let differenceTime = christmasDate.getTime() - today.getTime();

    // calculate the no of days between two dates
    let diffInDays = Math.ceil(differenceTime / (1000 * 3600 * 24));

    console.log(`Next Christmas in ${diffInDays} days`);
    
}



// current date
let today = new Date(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);

nextChristmas(today);