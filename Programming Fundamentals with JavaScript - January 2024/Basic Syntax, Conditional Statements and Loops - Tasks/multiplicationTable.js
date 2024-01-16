function multiplicationTable(number) {

    for(let i = 1; i <= 10; i++){
        let sum = i * number;
        console.log(`${number} X ${i} = ${sum}`);
    }

}

multiplicationTable(5)