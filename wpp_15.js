function sum(arr) {
    // calculating the sum by using reduce method;
    let threeSum = arr.reduce((accu, curr) => {
        return accu + curr;
    },0)

    return threeSum;
}

let result = sum([5,2,3]);
console.log(result);