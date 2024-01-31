function bonusScoringSystem(input){
    let numberOfStudents = Number(input[0])
    let numberOfLectures = Number(input[1])
    let additionalBonus = Number(input[2])

    let maxScore = 0
    let index = 3
    let attendetLectures = 0

    for(let i = 1; i <= numberOfStudents; i++){
        let attendance = Number(input[index])
        index++
        let totalBonus = attendance / numberOfLectures * (5 + additionalBonus)

        if (totalBonus > maxScore){
            maxScore = totalBonus
            attendetLectures = attendance
        }

        totalBonus = 0
    }
    console.log(`Max Bonus: ${Math.ceil(maxScore)}.`)
    console.log(`The student has attended ${attendetLectures} lectures.`)

}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  )