function wordOccurrences(input) {
    let object = {};

    for(let word of input) {

        if(!object.hasOwnProperty(word)) {
            object[word] = 1;
        } else {
            object[word] += 1;
        }
    }

    let sorted = Object.entries(object).sort((a,b) => b[1] - a[1]);
    sorted.forEach(el => console.log(`${el[0]} -> ${el[1]} times`));
    
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])