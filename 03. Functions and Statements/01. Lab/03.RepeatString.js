function repeat(string, count) {
    let repeatedString = [];
    for (let i = 0; i < count; i++) {
        repeatedString.push(string);
    }

    console.log(repeatedString.join(''));
}

repeat("abc", 3);
repeat("String", 2);