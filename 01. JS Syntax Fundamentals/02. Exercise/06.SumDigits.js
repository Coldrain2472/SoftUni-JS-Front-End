function sumDigits(number) {
    let sum = 0;

    let asString = number.toString();

    for (let i = 0; i < asString.length; i++) {
        let asNumber = Number(asString[i]);
        
        sum += asNumber;
    }

    console.log(sum);
}
