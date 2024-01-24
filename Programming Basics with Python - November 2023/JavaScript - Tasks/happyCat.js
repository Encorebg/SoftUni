function happyCat(input){
    let numberOfDays = Number(input[0]);
    let numberOfHours = Number(input[1]);
    let tax = 0;
    let total = 0;

    for(let day = 1; day <= numberOfDays; day++){
        for(let hour = 1; hour <= numberOfHours; hour++){
            if(day % 2 == 0 && hour % 2 != 0 ){
                tax += 2.5;
            } else if(day % 2 != 0 && hour % 2 == 0 ){
                tax += 1.25;
            }else {
                tax += 1;
            }

        }
        total += tax;
        console.log(`Day: ${day} - ${tax.toFixed(2)} leva`);
        tax = 0;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}

happyCat([2,5])