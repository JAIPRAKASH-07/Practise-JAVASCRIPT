function multiplyArrayValues(arr) {
    const result = [];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let curr = arr[i];
        let prev = i === 0 ? arr[n - 1] : arr[i - 1];
        let next = i === n - 1 ? arr[0] : arr[i + 1];

        if (i === 0) {
            // Multiply first value with last value
            result.push(curr * next);
        } else if (i === n - 1) {
            // Multiply last value with first value
            result.push(curr * prev);
        } else {
            // Multiply middle value with both next and previous
            result.push(curr * prev * next);
        }
    }

    return result;
}

const myArray = [2, 3, 4, 5];
const resultArray = multiplyArrayValues(myArray);
console.log(resultArray); // Output: [20, 12, 24, 10]







// function multiplyArray(arr) {
//     const result = [];

//     // Handle the first element
//     result[0] = arr[0] * arr[1];

//     // Handle middle elements
//     for (let i = 1; i < arr.length - 1; i++) {
//         result[i] = arr[i - 1] * arr[i + 1];
//     }

//     // Handle the last element
//     result[arr.length - 1] = arr[arr.length - 1] * arr[arr.length - 2];

//     return result;
// }

// const inputArray = [2, 3, 4, 5, 6];
// const outputArray = multiplyArray(inputArray);
// console.log(outputArray); // [6, 8, 15, 24, 30]



    