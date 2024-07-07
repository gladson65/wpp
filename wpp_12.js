function reverseString(str) {

    const arr = [];

    if (str.length == 0) {
        return;
    }

    for (let i = str.length-1; i>=0; i--) {
        arr.push(str[i])
    }

    return arr.join("");
    
}

let result = reverseString("code");
console.log(result);

