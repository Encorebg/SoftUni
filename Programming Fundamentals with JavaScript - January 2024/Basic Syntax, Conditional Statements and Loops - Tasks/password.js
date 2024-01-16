function password(input){
    let username = input.shift();
    let savedPassowrd = ""

    for (let i = username.length - 1; i >= 0; i--) {
        savedPassowrd += username[i]
      }
    let password = input.shift()
    let attempts = 0;
    let blocked = false

    while(password !== savedPassowrd){
        attempts += 1;
        if (attempts === 4){
            console.log(`User ${username} blocked!`);
            blocked = true;
            break
        }
        console.log(`Incorrect password. Try again.`);
        password = input.shift()
    }

    if (!blocked) {
        console.log(`User ${username} logged in.`)
    }
}
password(['sunny','rainy','cloudy','sunny','not sunny'])