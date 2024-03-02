function phoneBook(input) {
    let book = {};

    for (let line of input) {
        let token = line.split(" ");
        let name = token[0];
        let number = token[1];

        book[name] = number;
    }

    for (let key in book) {
        console.log(`${key} -> ${book[key]}`);
    }
}