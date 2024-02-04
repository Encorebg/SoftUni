function addAndSubstract(numOne,numTwo, numThree) {
    let add = (x,y) => x + y;
    let substract = (x,y) => x - y;

    let firstResult = add(numOne,numTwo);
    let secondResult= substract(firstResult, numThree);
    console.log(secondResult);
}

addAndSubstract(23,6,10)