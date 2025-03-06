function revealWords(words, text) {
    words = words.split(', ');

    for (word of words) {
        text = text.replace('*'.repeat(word.length), word);
    }

    console.log(text);
}

revealWords('great','softuni is ***** place for learning new programming languages');