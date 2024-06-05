function closeTo_100 (a, b) {

    i = Math.abs(a - 100);
    j = Math.abs(b - 100);

    // if they equal then return
    if (a == b) {
        return "Both are equal"
    } 

    let result = i < j ? `${a} is close to 100`: `${b} is close to 100`;

    return result
} 

console.log(closeTo_100(-80,-70))