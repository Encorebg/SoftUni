function smallest(num1,num2,num3){
        let firstSmallest = firstTwoNum(num1,num2);
        let smallest = secondSmallest(firstSmallest,num3)
        console.log(smallest);
    function firstTwoNum(a,b){
        if(a < b){
            return a;
        }
        else{
            return b;
        }
    }

    function secondSmallest(x,y){
        if (x < y){
            return x;
        }else{
            return y;
        }
    }
}
smallest(2,5,3)