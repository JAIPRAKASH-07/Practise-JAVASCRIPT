function fact(p) {
    let factvalue=1;
    for (let i = p; i >0; i--) {
        factvalue= i*factvalue;

    }
    console.log(factvalue);
    
}
fact(3);