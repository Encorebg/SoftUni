function train(arr){
    let wagons = arr[0].split(" ").map(Number);
    let capacity = Number(arr[1]);

    for(let i = 2; i < arr.length; i++){
        let command = arr[i];

        let tokens = command.split(" ");

        if(tokens[0]=== "Add"){
            let passengers = Number(tokens[1]);
            wagons.push(passengers)

        } else {
            let passengers = Number(tokens[0]);

            for (let idx = 0; idx < wagons.length; idx++){
                if(wagons[idx] + passengers <= capacity){
                    wagons[idx] += passengers;
                    break;
                }

            }
        }
    }
    console.log(wagons.join(" "));
}