function shoppingList(input) {
    let list = input.shift().split("!");
    let command = input.shift();

    while (command != "Go Shopping!") {
        let tokens = command.split(' ');
        let action = tokens[0];
        let item = tokens[1];
        let newitem = tokens[2];

        switch (action) {
            case "Urgent":
                if (!list.includes(item)) {
                    list.unshift(item);

                }
                break;
            case "Unnecessary":
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1)

                }
                break;
            case "Correct":
                if (list.includes(item)) { 
                    let index = list.indexOf(item);
                    list.splice(index, 1, newitem);

                }
                break;
            case "Rearrange":
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1);
                    list.push(item);
                }
                break;
        }
        command = input.shift();

    }
    console.log(list.join(", "));

}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
