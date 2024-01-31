function biggestOfNumbers(one, two, three){
    let largestNum = one;

    if(two > largestNum){
        largestNum = two;
    }

    if(three > largestNum){
        largestNum = three;
    }

    console.log(largestNum);
}