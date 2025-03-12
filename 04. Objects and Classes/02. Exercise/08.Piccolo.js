function piccolo(input) {
    let parkingLots = {};

    for (let row of input) {
       let [direction, carNumber] = row.split(', ');

       direction === 'IN'
       ? parkingLots[carNumber] = true
       : delete parkingLots[carNumber];
    }

    if (Object.values(parkingLots).length !== 0) {
        Object.keys(parkingLots)
            .sort((a, b) => a.localeCompare(b))
            .forEach(item => console.log(item));
    } else {
        console.log(`Parking Lot is Empty`)
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
    );