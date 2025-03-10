function factorialDivision(num1, num2) {
    function factorial(n) {
        return n === 0 ? 1 : n * factorial(n - 1);
    }

    let fact1 = factorial(num1);
    let fact2 = factorial(num2);
    let result = fact1 / fact2;

    console.log(result.toFixed(2));
}

factorialDivision(5, 2); 
factorialDivision(6, 2); 