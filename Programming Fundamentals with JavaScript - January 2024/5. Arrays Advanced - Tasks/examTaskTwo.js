function exam(data) {
    let arr = data.shift().split(">>");
    let totalTax = 0;
    for (let line of arr) {
        let [type, years, km] = line.split(" ");
        years = Number(years);
        km = Number(km);
        let initialTax = 0;
        let yearsDecline = 0;
        let kmIncrease = 0
        if (type === "family") {
            yearsDecline = years * 5;
            if (km >= 3000) {
                kmIncrease = Math.floor(km / 3000) * 12;
            }
            initialTax = 50 - yearsDecline + kmIncrease;
        } else if (type === "heavyDuty") {
            yearsDecline = years * 8;
            if (km >= 9000) {
                kmIncrease = Math.floor(km / 9000) * 14;
            }
            initialTax = 80 - yearsDecline + kmIncrease;
        } else if (type === "sports") {
            yearsDecline = years * 9
            if (km >= 2000) {
                kmIncrease = Math.floor(km / 2000) * 18;
            }
            initialTax = 100 - yearsDecline + kmIncrease;
        } else {
            console.log("Invalid car type.");
            continue;
        }
        totalTax += initialTax;
        console.log(`A ${type} car will pay ${initialTax.toFixed(2)} euros in taxes.`);
    }

    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);
}

exam(([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]))