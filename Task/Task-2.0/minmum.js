//find the smallest number in for loop
const numbers = [3,5,7,33,2,8,10]
//let smallestnum = numbers[3];
let smallestnum = [];
function smallest (arr){
    arr.forEach(ele => {

        if (ele < smallestnum){
    smallestnum = ele;
            
        }
        
    });
     
    return smallestnum

}
let x = smallest(numbers);

console.log(x);