function solve(input) {
    const n = Number(input.shift());
    const heroes = {};

    for (let i = 0; i < n; i++) {
        const [name, powersStr, energyStr] = input[i].split("-");
        const powers = powersStr.split(",");
        const energy = Number(energyStr);

        heroes[name] = {
            superpowers: powers,
            energy: energy
        };
    }

    for (let i = n; i < input.length; i++) {
        if (input[i] === "Evil Defeated!") {
            break;
        }

        const [command, name, ...rest] = input[i].split(" * ");

        if (command === "Use Power") {
            const [power, energyRequiredStr] = rest;
            const energyRequired = Number(energyRequiredStr);

            if (
                heroes[name].superpowers.includes(power) &&
                heroes[name].energy >= energyRequired
            ) {
                heroes[name].energy -= energyRequired;
                console.log(`${name} has used ${power} and now has ${heroes[name].energy} energy!`);
            } else {
                console.log(`${name} is unable to use ${power} or lacks energy!`);
            }
        } else if (command === "Train") {
            const trainingEnergy = Number(rest[0]);
            const currentEnergy = heroes[name].energy;

            if (currentEnergy === 100) {
                console.log(`${name} is already at full energy!`);
            } else {
                const energyGained = Math.min(trainingEnergy, 100 - currentEnergy);
                heroes[name].energy += energyGained;
                console.log(`${name} has trained and gained ${energyGained} energy!`);
            }
        } else if (command === "Learn") {
            const newPower = rest[0];
            if (heroes[name].superpowers.includes(newPower)) {
                console.log(`${name} already knows ${newPower}.`);
            } else {
                heroes[name].superpowers.push(newPower);
                console.log(`${name} has learned ${newPower}!`);
            }
        }
    }

    for (const name in heroes) {
        console.log(`Superhero: ${name}`);
        console.log(` - Superpowers: ${heroes[name].superpowers.join(", ")}`);
        console.log(` - Energy: ${heroes[name].energy}`);
    }
}