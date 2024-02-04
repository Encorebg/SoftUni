function charactersInRange(first,second){
    let result = print(first,second)
    console.log(result.join(" "));
    

    function print(first, second){
        let firstAscii = first.charCodeAt(0);
        let secondAscii = second.charCodeAt(0);
    
        let arr = [];
        if (firstAscii < secondAscii){

            for(let i = firstAscii + 1; i < secondAscii; i++){
                let str = String.fromCharCode(i)
                arr.push(str);
            }

        } else{
            for(let i = secondAscii + 1; i < firstAscii; i++){
                let str = String.fromCharCode(i)
                arr.push(str);
        }
        }
        return arr;
    }
}
charactersInRange("a","d")
