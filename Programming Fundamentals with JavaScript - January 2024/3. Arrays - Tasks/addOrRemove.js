function addOrRemove(input){
    let newArr = [];
    let num = 0;
    for(let i = 0; i < input.length; i++){
        let command = input[i];
        num++;
        if (command === "add"){
            newArr.push(num);

        }else{
            newArr.pop()
        }
                
    }
    newArr.length === 0? 
    console.log("Empty"):
    console.log(newArr.join(" "));
    
}
addOrRemove(['remove', 'remove', 'remove'])
