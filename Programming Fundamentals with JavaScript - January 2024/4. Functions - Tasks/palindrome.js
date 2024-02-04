function palindrome(arr){
    for (let num of arr) {
        let PalindromeCheck = isPalindrome(num);
        console.log(PalindromeCheck);
        
    }


   function isPalindrome(num){
            let numToStr = num.toString();
            reversedString = numToStr.split("").reverse().join("");
            if(numToStr === reversedString){
                return true;
            }else {
                return false;
            }
        }
        
    }

    
palindrome([123,323,421,121])