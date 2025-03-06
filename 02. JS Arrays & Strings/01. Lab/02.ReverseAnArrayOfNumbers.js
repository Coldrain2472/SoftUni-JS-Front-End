function reverseArr(n, numArray) {
    let firstNElementsReversed = numArray.slice(0, n).reverse();
    console.log(firstNElementsReversed.join(' '));
}

reverseArr(3, [10, 20, 30, 40, 50]);