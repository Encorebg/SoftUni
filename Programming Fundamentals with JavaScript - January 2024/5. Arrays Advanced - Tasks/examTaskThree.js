function exam(input){
    let phoneList = input.shift().split(", ");
    let command = input.shift();

    while(command !== "End"){
        let [action, model] = command.split(" - ");

        if (action === "Add"){
            if(!phoneList.includes(model)){
                phoneList.push(model);
            }
        } else if(action === "Remove"){
            if(phoneList.includes(model)){
                let index = phoneList.indexOf(model)
                phoneList.splice(index, 1);
            }
        } else if(action === "Bonus phone"){
            let [oldPhone, newPhone] = model.split(":")
            if(phoneList.includes(oldPhone)){
                let index = phoneList.indexOf(oldPhone) + 1;
                phoneList.splice(index, 0, newPhone);
            }
        } else {
            if(phoneList.includes(model)){
                let index = phoneList.indexOf(model);
                phoneList.splice(index, 1)
                phoneList.push(model)
            }
        }

        command = input.shift();
    }
    console.log(phoneList.join(", "));
}

exam(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"])
