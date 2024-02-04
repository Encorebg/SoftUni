function oddEvenSum(number){
    let numToStr = number.toString()
    let oddSum = odd(numToStr);
    let evenSum = even(numToStr);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function odd(numToStr){
        sum = 0;
        for (let num of numToStr) {
             num = Number(num);
            if(num % 2 != 0){
                sum += num;
            }  
        }
        return sum;
    }

    function even(numToStr){
        sum = 0;
        for (let num of numToStr) {
            num = Number(num);
            
            if(num % 2 == 0){
                sum += num
            }  
        }
        return sum;
    }
}

oddEvenSum(1000435)
