function swap(arr) {

    if (arr.length < 2) {
        return arr[0];
    }
    else {
        // by destructuring
        [arr[0],arr[arr.length-1]] = [arr[arr.length-1],arr[0]];
    }

    return arr;

}

let result = swap([1,2,3,4,5]);
console.log(result);