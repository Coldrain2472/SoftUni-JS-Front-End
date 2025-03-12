function oddOccurences(string) {
    const array = string.split(' ')
    const words = []

    array.forEach(element => {
        const occurances = array.filter(w => w.toLowerCase() === element.toLowerCase()).length
        if (occurances % 2 === 1 && !words.includes(element.toLowerCase())) {
            words.push(element.toLowerCase())
        }   
    });

    console.log(words.join(' '))
}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');