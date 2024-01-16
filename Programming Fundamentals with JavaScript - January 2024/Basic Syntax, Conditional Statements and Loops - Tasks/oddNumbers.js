function oddNumbers(num){
    
    let number = 1
    let oddCounter = 0
    let sum = 0 
    
    while(oddCounter < num) {
        if (number % 2 != 0){
            oddCounter++
            sum += number
            console.log(number)
        }
        number++

    }
    console.log(`Sum: ${sum}`)
}
oddNumbers(3)