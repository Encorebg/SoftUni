function isPrime(number) {
    if (number <= 1) {
      console.log("false");
      return;
    }
    let nonPrime = false
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        nonPrime = true;
      }
    }
  
    nonPrime? console.log("false") : console.log("true");
    
  }
  isPrime(7);