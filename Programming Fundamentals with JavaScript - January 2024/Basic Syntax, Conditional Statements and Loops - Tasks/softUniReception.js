function softuniReception(input) {
    let firstEmployee  = Number(input.shift());
    let secondEmployee  = Number(input.shift());
    let thirdEmployee  = Number(input.shift());
    let studentCounter = Number(input.shift());

    let totalStudentsPerHours = firstEmployee + secondEmployee + thirdEmployee;
    let hourCounter = 0

    while(studentCounter > 0){
        hourCounter++;
        if (hourCounter % 4 == 0){
            continue;
        }
        studentCounter -= totalStudentsPerHours

    }
    console.log(`Time needed: ${hourCounter}h.`)
}

softuniReception(['3','2','5','40'])