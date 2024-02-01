function elementRevers(arr){
    let lastElement = Number(arr.pop())
    let arr2 = [];

    for(let i = 0; i < arr.length; i+= lastElement){
        arr2.push(arr[i]);
        
    }
    console.log(arr2.join(' '));
}
elementRevers(['5', '20', '31', '4', '20', '2'])