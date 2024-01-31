function vacation(count, group, day){
    let price = 0

    switch(group){
        case "Students":
            switch(day){
                case "Friday":
                    price = 8.45;
                    break;
                case "Saturday":
                    price = 9.80;
                    break;
                case "Sunday":
                    price = 10.46;
                    break;
            }
            break;
        case "Business":
            switch(day){
                case "Friday":
                    price = 10.90;
                    break;
                case "Saturday":
                    price = 15.60;
                    break;
                case "Sunday":
                    price = 16;
                    break;
            }
            break;
        case "Regular":
            switch(day){
                case "Friday":
                    price = 15;
                    break;
                case "Saturday":
                    price = 20;
                    break;
                case "Sunday":
                    price = 22.50;
                    break;
            }
            break;
        

    }
    let totalPrice = count * price;

    if (group == "Regular"){
        if (count >= 10 && count <= 20){
            totalPrice *= 0.95;
        } 
    } else if (group == "Students"){
        if (count >= 30 && count < 100){
            totalPrice *= 0.85;
        }
    }
     else {
        if (count >= 100) {
            totalPrice -= 10 * price;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,
"Students",
"Sunday"
)