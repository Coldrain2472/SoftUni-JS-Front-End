function countStringOccurences(text, searchedWord) {
    let countOccurences = 0;

    for (word of text.split(' ')) {
        if (word == searchedWord) {
            countOccurences++;
        }
    }

    console.log(countOccurences);
}

countStringOccurences('This is a word and it also is a sentence',
'is');