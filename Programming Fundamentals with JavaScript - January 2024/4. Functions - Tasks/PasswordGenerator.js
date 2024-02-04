function passwordGenerator(pass){
    let isValid = checkLength(pass);
    let hasOnlyletters = checkOnlyLettersDigit(pass);
    let countOfDigits = checkDigitsCount(pass)

    if(isValid && hasOnlyletters && countOfDigits){
        console.log("Password is valid");
    }

    function checkLength(pass){
        if(pass.length < 6 || pass.length > 10 ){
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }
        return true;
    }

    function checkOnlyLettersDigit(pass){
        let pattern = /^[A-Za-z0-9]+$/;

        let isValid = pattern.test(pass);

        if (isValid){
            return true;
        }
        console.log(`Password must consist only of letters and digits`);
        return false;
    }

    function checkDigitsCount(pass){
        let pattern = /[0-9]{2,}/
        let isValid = pattern.test(pass);

        if (isValid){
            return true;
        }
        console.log(`Password must have at least 2 digits`);
        return false;
    }

}