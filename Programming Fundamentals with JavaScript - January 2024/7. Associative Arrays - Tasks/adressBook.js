function adressBook(input) {
    let book = {};

    for (let line of input) {
        let [name, adress] = line.split(":");
        book[name] = adress;
    }

    let sorted = Object.entries(book);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value}`);
    }
}
adressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)