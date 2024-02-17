function inventory(input){
    let journal = input.shift().split(", ");
    let command = input.shift();

    while(command !== "Craft!"){
        let [action, item] = command.split(" - ");

        if(action === "Collect"){
            if(!journal.includes(item)){
                journal.push(item);
            }
        } else if(action === "Drop"){
            if(journal.includes(item)){
                let index = journal.indexOf(item);
                journal.splice(index,1);
            }
        } else if(action === "Combine Items"){
            item = item.split(":");
            let oldItem = item[0];
            let newItem = item[1];

            if(journal.includes(oldItem)){
                let index = journal.indexOf(oldItem) + 1;
                journal.splice(index, 0, newItem);
            }
        } else {
            if(journal.includes(item)){
                let index = journal.indexOf(item);
                journal.splice(index, 1);
                journal.push(item);
            }
        }
        command = input.shift();
    }
    console.log(journal.join(", "));
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )
  