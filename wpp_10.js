function newString(str) {
    let newStr = str.toUpperCase();

    if (str.length <= 3) {
        return newStr;
    }
    else {
        let threeChar = newStr.slice(0, 3);
        let remainChar = newStr.slice(3, );

        return `${threeChar.toLowerCase()}${remainChar}`;
    }

}

let str = "Int";
console.log(newString(str))