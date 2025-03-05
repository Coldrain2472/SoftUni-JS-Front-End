function solve(num) {
    let sum = 0;
    let same = true;

    let asString = num.toString();
    let first = asString[0];

    for (let char of asString) {
        sum+= Number(char);

        if (char != first) {
            same = false;
        }
    }

    console.log(same);
    console.log(sum);
}

solve(1234);