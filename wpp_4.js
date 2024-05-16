// date object
let date = new Date();

// current date
let today = new Date(`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`);

// christmas date
let christmasDate = new Date(`11/25/${date.getFullYear()}`);


if (today > christmasDate) {
    christmasDate = new Date(`11/25/${date.getFullYear() + 1}`);
}



// calculate the time difference in miliSeconds
let differenceTime = christmasDate.getTime() - today.getTime();

// calculate the no of days between two dates
let diffInDays = Math.ceil(differenceTime / (1000 * 3600 * 24));

console.log(`Next Christmas in ${diffInDays} days`);