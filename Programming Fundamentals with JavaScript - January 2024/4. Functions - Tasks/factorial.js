function factorial(numOne, numTwo){
        let firsFactoriel = calculation(numOne);
        let secondFactoriel = calculation(numTwo);
        let result = (firsFactoriel / secondFactoriel).toFixed(2);
        console.log(result);

    function calculation(num){
        let result = num;
        for (let i = num - 1; i >= 1; i--){
            result *= i;


        }
        return result;
    }
}
factorial(5,2)