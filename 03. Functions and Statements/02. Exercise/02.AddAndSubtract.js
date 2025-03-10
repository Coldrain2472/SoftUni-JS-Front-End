function addAndSubtract(a, b, c) {
    function sum(a, b) {
        return a + b;
    }
    function subtract(ab, c) {
        return ab - c;
    }

    console.log(subtract(sum(a, b), c));
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);