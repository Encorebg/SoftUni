function exam(input) {
    let arr = input.split(" ").map(Number);
    let total = 0;

    for (number of arr) {
        total += number;
    }
    let avg = total / arr.length;

    let filtered = arr.filter(x => x > avg);

    if (filtered.length > 0) {
        let sorted = filtered.sort((a, b) => b - a).slice(0, 5);
        console.log(sorted.join(" "));
    } else {
        console.log("No");
    }

}

exam('10 20 30 40 50')