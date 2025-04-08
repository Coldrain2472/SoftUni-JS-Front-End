function spellbookUnraveling(input) {
    let spell = input.shift();

    for (let command of input) {
        let [action, arg1, arg2] = command.split("!");

        switch (action) {
            case "RemoveEven":
                spell = spell.split('').filter((char, index) => index % 2 === 0).join('');
                console.log(spell);
                break;
            case "TakePart":
               let numArg1 = Number(arg1);
               let numArg2 = Number(arg2);
               if(numArg1 > 0 || numArg2 > 0) {
               spell = spell.slice(numArg1, numArg2)
               }
               console.log(spell)
                break;
            case "Reverse":
                if (spell.includes(arg1)) {
                    let reversedSub = arg1.split('').reverse().join('');
                    spell = spell.replace(arg1, '');
                    spell += reversedSub;
                    console.log(spell);
                }else{
                    console.log('Error');
                }
                break;
        }
    }

    console.log(`The concealed spell is: ${spell}`);
}