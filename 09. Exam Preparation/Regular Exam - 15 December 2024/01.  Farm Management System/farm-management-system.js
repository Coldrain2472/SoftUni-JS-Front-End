function manageFarmers(input) {
    let n = Number(input[0]); 
    let farmers = {};

    for (let i = 1; i <= n; i++) {
        let [name, area, tasks] = input[i].split(' ');
        let taskList = tasks.split(',');
        farmers[name] = { area, taskList };
    }

    let commandIndex = n + 1;
    while (input[commandIndex] !== "End") {
        let [command, ...args] = input[commandIndex].split(' / ');

        switch (command) {
            case "Execute":
                let [farmerName, area, task] = args;
                if (farmers[farmerName].area === area && farmers[farmerName].taskList.includes(task)) {
                    console.log(`${farmerName} has executed the task: ${task}!`);
                } else {
                    console.log(`${farmerName} cannot execute the task: ${task}.`);
                }
                break;

            case "Change Area":
                let [farmerNameForArea, newArea] = args;
                farmers[farmerNameForArea].area = newArea;
                console.log(`${farmerNameForArea} has changed their work area to: ${newArea}`);
                break;

            case "Learn Task":
                let [farmerNameForTask, newTask] = args;
                if (farmers[farmerNameForTask].taskList.includes(newTask)) {
                    console.log(`${farmerNameForTask} already knows how to perform ${newTask}.`);
                } else {
                    farmers[farmerNameForTask].taskList.push(newTask);
                    console.log(`${farmerNameForTask} has learned a new task: ${newTask}.`);
                }
                break;
        }
        commandIndex++;
    }

    for (let farmer in farmers) {
        let tasks = farmers[farmer].taskList.sort().join(', ');
        console.log(`Farmer: ${farmer}, Area: ${farmers[farmer].area}, Tasks: ${tasks}`);
    }
}