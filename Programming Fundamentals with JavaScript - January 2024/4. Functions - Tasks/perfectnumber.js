function perfectNumber(num){
        let totalSum = sum(num);
        let isPerfect = perfectCheck(num,totalSum);
        isPerfect? console.log(`We have a perfect number!`): console.log(`It's not so perfect.`);

    function sum(n){
        let sumNumber = 0;
        for (let i = 1; i < n; i++){
            if(n % i ==0){
            sumNumber += i;
            }
        }
         return sumNumber;
    }
    function perfectCheck(num, sum) {
        if (num === sum){
            return true;
        }
        return false;
        
    }
}
perfectNumber(1236498)
