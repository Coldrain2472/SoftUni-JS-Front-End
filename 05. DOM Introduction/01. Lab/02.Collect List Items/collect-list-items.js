function extractText() {
    let list = document.getElementById('items');
    let items = list.children;

    let result = [];

    for (let li of items) {
       result.push(li.textContent);
    }

    let output = document.getElementById('result');
    output.value = result.join('\n');
}