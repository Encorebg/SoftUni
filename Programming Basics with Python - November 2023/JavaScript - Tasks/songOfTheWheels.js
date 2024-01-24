function songOfTheWheels(input) {
    let control = Number(input[0]);
    let counter = 0;
    let isFound = false;
    let pass = "";
    let res = ""
    for(let a = 1; a <= 9; a++){
        for(let b = 1; b <= 9; b++){
            for(let c = 1; c <= 9; c++){
                for(let d = 1; d <= 9; d++){
                    if(a < b && c > d && a * b + c * d == control ) {
                        counter++;
                        res += `${a}${b}${c}${d} `
                        if(counter === 4){
                            isFound = true;
                            pass = `${a}${b}${c}${d}`;
                        }
                    }
                    
                    


                }
            }
        }
    }
    if(res !== ""){
        console.log(res);   
    }
    isFound?
    console.log(`Password: ${pass}`)
    :console.log("No!");
}
songOfTheWheels([11])