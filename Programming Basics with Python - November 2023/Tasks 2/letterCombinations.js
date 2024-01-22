function letterCombinations(input){
    let startLetter = input[0];
    let endLetter = input[1];
    let specialLetter = input[2];
    let counter = 0;
    let posA = "";
    let posB = "";
    let posC = "";
    let res = "";

    for (let i = startLetter.charCodeAt(0); i <= endLetter.charCodeAt(0); i++) {
        if(String.fromCharCode(i) === specialLetter){
            continue;
        }
        for (let j = startLetter.charCodeAt(0); j <= endLetter.charCodeAt(0); j++) {
            if(String.fromCharCode(j) === specialLetter){
                continue;
            }
          for (let k = startLetter.charCodeAt(0); k <= endLetter.charCodeAt(0); k++){
            if(String.fromCharCode(k) === specialLetter){
                continue;
            }
            counter++;

            posA = String.fromCharCode(i);
            posB = String.fromCharCode(j);
            posC = String.fromCharCode(k);

            res += `${posA}${posB}${posC} `
          }
        }
    }
    console.log(`${res}${counter}`);
}

letterCombinations(["a","c","b"])