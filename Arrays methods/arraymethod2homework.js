

function multiplyWithPrevious(arr) {
    const result = [];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            // Multiply the first element with the last element
            result.push(arr[i] * arr[n - 1]);
        } else {
            // Multiply with the previous element
            result.push(arr[i] * arr[i - 1]);
        }
    }

    return result;
}

const inputArray = [1,2,3,4,5];
const multipliedArray = multiplyWithPrevious(inputArray);
console.log(multipliedArray);



// for(let i;i<Array.length;i++){
//     for (let index = i*index; index < i.length; index++) {
//         const element = array[index];
        
//     }
// }
