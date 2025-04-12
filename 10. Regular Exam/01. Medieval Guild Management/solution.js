function solve(input) {
    const n = Number(input.shift());
    const guild = {};
  
    for (let i = 0; i < n; i++) {
      let [name, role, skills] = input.shift().split(" ");

      skills = skills.split(",");

      guild[name] = { role, skills };
    }
  
    let line = input.shift();

    while (line !== "End") {
      const parts = line.split(" / ");
      const command = parts[0];
      const memberName = parts[1];
  
      if (command === "Perform") {
        const requiredRole = parts[2];
        const skill = parts[3];
       
        if (guild[memberName].role === requiredRole && guild[memberName].skills.includes(skill)) {
          console.log(`${memberName} has successfully performed the skill: ${skill}!`);
        } else {
          console.log(`${memberName} cannot perform the skill: ${skill}.`);
        }
      } else if (command === "Reassign") {
        const newRole = parts[2];
        guild[memberName].role = newRole;
        console.log(`${memberName} has been reassigned to: ${newRole}`);
      } else if (command === "Learn Skill") {
        const newSkill = parts[2];
        if (guild[memberName].skills.includes(newSkill)) {
          console.log(`${memberName} already knows the skill: ${newSkill}.`);
        } else {
          guild[memberName].skills.push(newSkill);
          console.log(`${memberName} has learned a new skill: ${newSkill}.`);
        }
      }
      line = input.shift();
    }
  
    for (const member in guild) {
      const role = guild[member].role;
      const sortedSkills = guild[member].skills.sort((a, b) => a.localeCompare(b)).join(", ");
      console.log(`Guild Member: ${member}, Role: ${role}, Skills: ${sortedSkills}`);
    }
  }