function arrayRotation(array, rotationsCount) {
    for (let i = 1; i <= rotationsCount; i++) {
        let firstElement = array.shift();
        array.push(firstElement);
    }

    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);