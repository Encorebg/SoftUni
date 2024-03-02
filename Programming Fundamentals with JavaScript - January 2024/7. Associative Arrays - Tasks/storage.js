function storage(input) {
    let obj = {}

    input.forEach(line => {
        token = line.split(" ");
        let product = token[0];
        let quantity = Number(token[1]);

        if(obj.hasOwnProperty(product)) {
            obj[product] += quantity;
        } else {
            obj[product] = quantity;

        }
    });
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }

}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)