function countVowels(str) {
    let count = 0;
    let stringLow = str.toLowerCase();
    for (let i = 0; i < stringLow.length; i++) {
        if (stringLow[i] == 'a' || stringLow[i] == 'e' || stringLow[i] == 'i' || stringLow[i] == 'o' || stringLow[i] == 'u') {
            count++;
        }
    }

    return count;
}

let result = countVowels("aeiouuuuaeio");
console.log(result);