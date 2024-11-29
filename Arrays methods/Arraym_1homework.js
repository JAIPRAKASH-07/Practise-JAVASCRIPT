// let numbers4 = [45, 4, 9, 16, 25, 10];
// numbers4
//         .map((element, index, array)=>{
//                 //multiply currrent with next val
//                 //if it last val multiply with first val
//                 //prequisities:
//                 //index, array
//                 let res
//                 if(index == array.length-1){
//                     res = element * array[0]
//                 }else{
//                   res  = element * array[index + 1]
//                 }                
//                 return res;
//             })
//         .forEach((element)=>{
//             console.log(element);
//           });

//multiply currrent with previous val if it first val multiply with last val

let numbers = [5, 4, 9, 6, 7, 8];
numbers
        .map((element, index, array)=>{
                
                let res
                if(index == array.length){
                  res  = element * array[index ]
                }  
                else{
                    res = element * array[array.length-1]
                }              
                return res;
            })
        .forEach((element)=>{
            console.log(element);
          });