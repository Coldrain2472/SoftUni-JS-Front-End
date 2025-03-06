function censoredWords(sentence, word) {
    console.log(sentence.replaceAll(word, '*'.repeat(word.length)));
}

censoredWords('A small sentence with some words', 'small');