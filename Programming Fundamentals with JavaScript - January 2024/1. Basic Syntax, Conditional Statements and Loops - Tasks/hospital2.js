function hospital(input){
    let period = input.shift();
    let doctors = 7;
    let treated = 0;
    let untreated = 0;

    for(let day = 1; day <= period; day++){
        if (day % 3 == 0){
            if (untreated > treated){
            doctors++;
            }
        }
        let numberOfPatients = input.shift();
        


        if (numberOfPatients > doctors){
            treated += doctors;
            untreated += numberOfPatients - doctors
        } else {
            treated += numberOfPatients;
        }
        

    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`)
}


hospital([3, 7, 7, 7
    ])