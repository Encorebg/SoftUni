function signCheck(first, second, third){

    function firstAndSecondMultipply(f,s){
        return f * s;
    }
    let firstAndSecondResult = firstAndSecondMultipply(first,second);
    let finalResult = firstAndSecondResult * third;

     finalResult < 0? console.log("Negative"): console.log("Positive");
    
}

signCheck(5,12,-15);