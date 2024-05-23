
function removeChar(value, pos) {

    const joinValue = value.split("");
    joinValue.splice(pos,1);
    let newString = joinValue.join("");
    return newString;

}

// string
let stringValue = "Internshala";

// specified position
let pos = 4;

console.log(removeChar(stringValue, pos));


