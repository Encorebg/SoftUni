function wordsTracker(input) {
    let searchedWords = input.shift().split(" ");
    let wordOccurances = {};

    for (let words of searchedWords) {
        wordOccurances[words] = 0;
    }

    for (let word of input) {
        if (word in wordOccurances) {
            wordOccurances[word]++;
        }
    }

    let entries = Object.entries(wordOccurances).sort((a,b) => b[1] - a[1]);

    for(let [word, occurance] of entries) {
        console.log(`${word} - ${occurance}`);
    }
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )