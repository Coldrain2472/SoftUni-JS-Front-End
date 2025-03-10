// const calculator = {
//     multiply: (a, b) => a * b,
//     divide: (a, b) => a / b,
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b
// };

// const simpleCalculator = (numOne, numTwo, operator) => console.log(calculator[operator](numOne, numTwo));

function simpleCalculator(firstNum, secondNum, operator) {
    if (operator == 'multiply') {
        console.log(firstNum * secondNum);
    } else if (operator == 'divide'){
        console.log(firstNum / secondNum);
    } else if (operator == 'add'){
        console.log(firstNum + secondNum);
    } else if (operator == 'subtract'){
        console.log(firstNum - secondNum);
    }
}

simpleCalculator(5, 5, 'multiply'); 
simpleCalculator(40, 8, 'divide'); 
simpleCalculator(12, 19, 'add');    
simpleCalculator(50, 13, 'subtract'); 