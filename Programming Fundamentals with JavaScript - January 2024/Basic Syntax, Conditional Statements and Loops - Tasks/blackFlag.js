function blackFlag(input){
    let daysToPlunder = Number(input[0])
    let dailyPlunder = Number(input[1])
    let expectedPlunder = Number(input[2])

    let totalPlunder = 0

    for (let i = 1; i <= daysToPlunder; i++) {
        totalPlunder += dailyPlunder
        
        if(i % 3 == 0) {
            totalPlunder += dailyPlunder * 0.5
         }
        if(i % 5 == 0){
            totalPlunder *= 0.7
        }
    }

   if (totalPlunder >= expectedPlunder){
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    } else {
        let percent = totalPlunder / expectedPlunder * 100 
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`)
    }
}

