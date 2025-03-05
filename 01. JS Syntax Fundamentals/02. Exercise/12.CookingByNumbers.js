function cookingByNumbers(num, op1, op2, op3, op4, op5) {
    let number = Number(num);

    const operations = {
        chop: (n) => n / 2,
        dice: (n) => Math.sqrt(n),
        spice: (n) => n + 1,
        bake: (n) => n * 3,
        fillet: (n) => n * 0.8
    };

    [op1, op2, op3, op4, op5].forEach(operation => {
        number = operations[operation](number);
        console.log(number);
    });
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');