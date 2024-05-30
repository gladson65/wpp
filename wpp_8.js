function check(str) {

    // take first four character
    let firstFour = str.slice(0, 4).toLowerCase();
    
    if (str.length < 4) {
        return false;
    }
    // checking is the string has 'java' at the first or not
    else if (firstFour === "java") {
        return true;
    }
    else {
        return false;
    }
    
    
}

let str = "javaScript";
console.log(check(str));