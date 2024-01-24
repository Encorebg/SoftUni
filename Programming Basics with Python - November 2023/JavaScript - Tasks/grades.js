function grades(input) {
    let students = Number(input[0]);
    let index = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let total = 0; 

    for (let i = 1; i <= students; i++) {
        index++;
        let grade = Number(input[index]);
        total += grade;
        
        if (grade >= 2 && grade <= 2.99){
            two++;
        } else if (grade <= 3.99){
            three++;
        } else if (grade <= 4.99){
            four++;
        } else {
            five++;
        }

    }
    
    let averageGrade = (total / students).toFixed(2);
    let topPercent = (five / students * 100).toFixed(2);
    let goodPercent = (four / students * 100).toFixed(2);
    let averagePercent = (three / students * 100).toFixed(2);
    let twoPercent = (two / students * 100).toFixed(2);

    console.log(`Top students: ${topPercent}%`);
    console.log(`Between 4.00 and 4.99: ${goodPercent}%`);
    console.log(`Between 3.00 and 3.99: ${averagePercent}%`);
    console.log(`Fail: ${twoPercent}%`);
    console.log(`Average: ${averageGrade}`);
}
grades([10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5,
])