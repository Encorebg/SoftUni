function calculator(numOne, operator, numTwo){
    let result = 0;

    switch(operator){
        case "+":
            result = numOne + numTwo;
            break;
        case "-":
            result = numOne - numTwo;
            break;
        case "/":
            result = numOne / numTwo;
            break;
        case "*":
            result = numOne * numTwo;
    }
    console.log(result.toFixed(2));

}