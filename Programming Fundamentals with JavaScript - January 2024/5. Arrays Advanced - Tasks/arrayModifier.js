function arrayModifier(input){

    let arrayOfNumbers = input.shift().split(" ").map(Number);

    for (let index = 0; index < input.length; index++) {

        let[command, indexOne, indexTwo] = input[index].split(" ");

        switch(command){
            case "swap":
                let temp = arrayOfNumbers[indexOne];
                arrayOfNumbers[indexOne] = arrayOfNumbers[indexTwo];
                arrayOfNumbers[indexTwo] = temp;
                break;
            case "multiply":
                let result = arrayOfNumbers[indexOne] * arrayOfNumbers[indexTwo];
                arrayOfNumbers[indexOne] = result;
                break;
            case "decrease":
                arrayOfNumbers = arrayOfNumbers.map(n => n - 1);
                break;
        }
        
    }
    console.log(arrayOfNumbers.join(", "));
}