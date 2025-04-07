function wildWestPosse(input) {
    const posse = {};
    const n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        const [name, hpStr, bulletsStr] = input[i].split(' ');
        posse[name] = {
            hp: Number(hpStr),
            bullets: Number(bulletsStr),
        };
    }

    input = input.slice(n); 

    for (const line of input) {
        if (line === "Ride Off Into Sunset") {
            break;
        }

        const [command, name, param1, param2] = line.split(' - ');

        switch (command) {
            case "FireShot":
                if (posse[name].bullets > 0) {
                    posse[name].bullets--;
                    console.log(`${name} has successfully hit ${param1} and now has ${posse[name].bullets} bullets!`);
                } else {
                    console.log(`${name} doesn't have enough bullets to shoot at ${param1}!`);
                }
                break;

            case "TakeHit":
                const damage = Number(param1);
                const attacker = param2;
                posse[name].hp -= damage;
                if (posse[name].hp > 0) {
                    console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${posse[name].hp} HP!`);
                } else {
                    delete posse[name];
                    console.log(`${name} was gunned down by ${attacker}!`);
                }
                break;

            case "Reload":
                const currentBullets = posse[name].bullets;
                if (currentBullets < 6) {
                    const reloaded = 6 - currentBullets;
                    posse[name].bullets = 6;
                    console.log(`${name} reloaded ${reloaded} bullets!`);
                } else {
                    console.log(`${name}'s pistol is fully loaded!`);
                }
                break;

            case "PatchUp":
                const healAmount = Number(param1);
                const currentHP = posse[name].hp;
                if (currentHP < 100) {
                    const healed = Math.min(100 - currentHP, healAmount);
                    posse[name].hp += healed;
                    console.log(`${name} patched up and recovered ${healed} HP!`);
                } else {
                    console.log(`${name} is in full health!`);
                }
                break;
        }
    }

    for (const name in posse) {
        console.log(`${name}\n HP: ${posse[name].hp}\n Bullets: ${posse[name].bullets}`);
    }
}
