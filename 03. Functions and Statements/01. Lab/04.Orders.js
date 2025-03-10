function calculate(product, count) {
   let price;
   let result;

    if (product == "coffee") {
        price = 1.50;
    } else if (product == "water") {
        price = 1.00;
    } else if (product == "coke") {
        price = 1.40;
    } else if (product == "snacks") {
        price = 2.00;
    }

    result = price*count;
    console.log(`${result.toFixed(2)}`);
}

calculate("water", 5);
calculate("coffee", 2);