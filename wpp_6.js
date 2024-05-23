function checkMultiple(num) {
    
    if (num < 0) {
        return "It is not a positive number";
    }
    else if (num > 0) {
        let result = num % 3 == 0 ? "multiple of 3" : num % 7 == 0 ? "multiple of 7" : "not multiple of 3 or 7" 
        return result;
    }
 
}

let num = -52;
console.log(checkMultiple(num))