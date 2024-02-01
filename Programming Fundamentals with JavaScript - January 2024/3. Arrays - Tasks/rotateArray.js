function rotateArray(array) {
    let rotations = array.pop();
  
    for (let i = 0; i < rotations; i++) {
      let tempElement = array.pop();
      array.unshift(tempElement);
    }
    console.log(array.join(" "));
  }
  rotateArray(['1', '2', '3', '4', '2'])