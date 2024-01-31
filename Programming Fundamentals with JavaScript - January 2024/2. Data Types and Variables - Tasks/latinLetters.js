function latinLetters(num){

    for (let i = 0 ; i < num; i++){
        for(let j = 0; j < num; j++){
            for(let z = 0; z < num; z++){
                console.log(
                    String.fromCharCode(97 + i) +
                      String.fromCharCode(97 + j) +
                      String.fromCharCode(97 + z))

            }
        }
    }
}

latinLetters(3)