function arrRotation(arr, rot){
    for (let i = 1; i <= rot; i++){
        let firstEl = arr.shift();
        arr.push(firstEl);
    }
    console.log(arr.join(" "));
}