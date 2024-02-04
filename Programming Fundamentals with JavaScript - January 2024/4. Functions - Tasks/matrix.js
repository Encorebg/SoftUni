function matrix(num){
        let row = matrixGeneratorRows(num);

        for(let i = 0 ; i < num; i++){
            console.log(row.join(" "));
        }

    function matrixGeneratorRows(n){
        let arr = [];
        for(let i = 0 ; i < n; i++){
            arr.unshift(n);
            
        }
        arr
        return arr;
    }



}
matrix(3)