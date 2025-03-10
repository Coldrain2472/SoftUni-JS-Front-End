function palindromeIntegers(array) {
    array.forEach(element => {
        console.log(Number(String(element).split('').reverse().join('')) === element)
    });
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32, 2, 232, 1010]);