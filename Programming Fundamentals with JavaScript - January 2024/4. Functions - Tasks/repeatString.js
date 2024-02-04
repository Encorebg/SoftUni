function repeatString(str, rep) {
       let buff = "";
       for (let i = 0; i < rep; i++) {
         buff += str;
       }
       return buff;
  }

  console.log(repeatString("asd",3))

