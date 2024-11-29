let year;
function ya(y){
    if(y%400==0){
        console.log("leap");
    
        if (y%4==0) {
            console.log("leap year");
            
        }
        if(!y%100==0) {
            console.log("leap year")
        }
        
    }
    else{
        console.log("not leap");
        
    }
}
 ya(2024);