function solve(input) {
    const n = Number(input.shift());
    const astronauts = {};

    for (let i = 0; i < n; i++) {
        const [name, section, skillsStr] = input[i].split(' ');
        const skills = skillsStr.split(',');
        astronauts[name] = {
            section,
            skills: new Set(skills)
        };
    }

    for (let i = n; i < input.length; i++) {
        const line = input[i];
        if (line === "End") break;

        const [command, name, arg1, arg2] = line.split(" / ");

        if (command === "Perform") {
            const section = arg1;
            const skill = arg2;
            if (astronauts[name].section === section && astronauts[name].skills.has(skill)) {
                console.log(`${name} has successfully performed the skill: ${skill}!`);
            } else {
                console.log(`${name} cannot perform the skill: ${skill}.`);
            }
        } else if (command === "Transfer") {
            const newSection = arg1;
            astronauts[name].section = newSection;
            console.log(`${name} has been transferred to: ${newSection}`);
        } else if (command === "Learn Skill") {
            const newSkill = arg1;
            if (astronauts[name].skills.has(newSkill)) {
                console.log(`${name} already knows the skill: ${newSkill}.`);
            } else {
                astronauts[name].skills.add(newSkill);
                console.log(`${name} has learned a new skill: ${newSkill}.`);
            }
        }
    }

    for (const [name, data] of Object.entries(astronauts)) {
        const sortedSkills = [...data.skills].sort((a, b) => a.localeCompare(b));
        console.log(`Astronaut: ${name}, Section: ${data.section}, Skills: ${sortedSkills.join(', ')}`);
    }
}
