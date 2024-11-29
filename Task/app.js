        function findSum(str){
            let temp = "0";
            let sum = 0;
            for (let i = 0; i < str.length; i++) {
                let ch = str[i];
                //  console.log(ch);
                  
                if (!isNaN(String(ch)))
                {
                   // console.log(ch);
                    
                    temp += ch;
                   console.log(temp);
                   if ((temp/10 && temp/100 && temp/1000) !==0){
                    let h =0;
                    h+= temp;
                    console.log(h);
                    //console.log(temp);
                   }
                    
                }
                else {
                    sum += parseInt(temp);
                    temp = "0";
                  //  console.log(sum);
                    
                 //console.log(temp);
                    
                    
                }              
            }   
          //  console.log(sum+parseInt(temp));
             
            return sum + parseInt(temp);
        }
        let str = "aaa1f cd12 12";
        console.log(findSum(str));
        
        
    
    