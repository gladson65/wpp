function stringSwift(str) {

    // check the length greater than 3 or not
    if (str.length >= 3) {

        // last element
        let lastElement = str.slice(str.length-3,);

        // create new string
        let newString = `${lastElement}${str}${lastElement}`;

        return newString;
    }

    return "The string must have more than 3 characters";

}

let str = "sw"
console.log(stringSwift(str))