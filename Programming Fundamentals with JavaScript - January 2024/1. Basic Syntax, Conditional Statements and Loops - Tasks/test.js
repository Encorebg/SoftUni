function password(input) {
    let username = input.shift()

    savedPassword = "";

    for(let i = username.length - 1; i >= 0; i--){
        savedPassword += username[i];
    }

    let password = input.shift();

    let blocked = false;
    let attempts = 0;

    while(password !== savedPassword){
        attempts += 1;
        if (attempts === 4){
            blocked = true;
            break;
        }
        console.log("Incorrect password. Try again.");
        password = input.shift()
    }

    if (blocked){
        console.log(`User ${username} blocked!` )
    } else {
        console.log(`User ${username} logged in. `);
    }

}

password(['sunny','rainy','cloudy','sunny','not sunny'])