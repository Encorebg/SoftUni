function equalSums(arr) {
    let arrL = arr.length;
    let isExists = false;
    let index = 'no';
  
    for (let i = 0; i < arrL; i++) {
      let leftSum = 0;
      let rightSum = 0;
  
      for (let j = 0; j < i; j++) {
        leftSum += arr[j];
      }
  
      for (let k = arrL - 1; k > i; k--) {
        rightSum += arr[k];
      }
  
      if (leftSum === rightSum) {
        isExists = true;
        index = i;
        break;
      }
    }
  
    console.log(index);
  }
  equalSums([1, 2, 3, 3])