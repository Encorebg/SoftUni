function companyUsers(input) {
    let employees = {};

    for (let line of input) {
        let [company, id] = line.split(' -> ');

        if (company in employees) {
            if(!employees[company].includes(id)){
                employees[company].push(id);
            }
        } else {
            employees[company] = [id];
        }
    }

    let entries = Object.entries(employees).sort((a,b) => a[0].localeCompare(b[0]));
    for (let [company, id] of entries) {
        console.log(company);
        for (let i of id) {
            console.log(`-- ${i}`);
        }

    }
    
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )