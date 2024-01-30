function reverse(n, inputArr){
    let newArr = [];

    for(let i = n - 1; i >= 0; i--){
        newArr.push(inputArr[i]);
    }
    console.log(newArr.join(" "));
}

reverse(4, [-1, 20, 99, 5])