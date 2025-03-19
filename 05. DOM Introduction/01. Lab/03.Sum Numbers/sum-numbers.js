function calc() {
    let input1 = document.getElementById('num1');
    let input2 = document.getElementById('num2');

    let a = Number(input1.value);
    let b = Number(input2.value);

    let sum = a + b;

    let output = document.getElementById('sum');
    output.value = sum;
}