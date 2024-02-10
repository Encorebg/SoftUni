function firstAndLastKNumbers(arr){
    let number = arr.shift();
    let slicedFirst = arr.slice(0,number);
    let slicedSecond = arr.slice(-number);
    console.log(slicedFirst.join(" "));
    console.log(slicedSecond.join(" "))
}
firstAndLastKNumbers([2, 
    7, 8, 9]
    )