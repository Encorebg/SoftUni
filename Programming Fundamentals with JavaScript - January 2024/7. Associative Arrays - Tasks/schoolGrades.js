function schoolGrades(input) {
    let studentsBook = {};

    for (let studentInfo of input) {
        studentInfo = studentInfo.split(" ");
        let name = studentInfo.shift();
        let studentgrades = studentInfo.join(" ");

        if (!studentsBook.hasOwnProperty(name)) {
            studentsBook[name] = studentgrades;
        } else {
            studentsBook[name] += ` ${studentgrades}`;
        }
    }

    let sortedName = Object.keys(studentsBook).sort((a, b) => a.localeCompare(b))

    for (let name of sortedName) {
        let avg = 0;
        let counter = 0;
        for (const element of studentsBook[name].split(" ")) {
            avg += Number(element);
            counter++;

        }
        avg /= counter;
        console.log(`${name}: ${avg.toFixed(2)}`);

    }
} 
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)      