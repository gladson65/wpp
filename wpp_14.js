function firstHalf(str) {
    let length = str.length;

    // checking the length of the string is even or odd
    if (length % 2 == 0) {
        return str.slice(0, length/2);
    }
    else {
        return `String is not even: ${str}`;
    }

    
}

let result = firstHalf("code")
console.log(result);