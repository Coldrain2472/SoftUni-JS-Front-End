document.addEventListener('DOMContentLoaded', solve);

function solve() {
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('[type="submit"]'));
  generateBtn.addEventListener('click', onGenerate);
  buyBtn.addEventListener('click', onBuy);

  function onGenerate(ev) {
    ev.preventDefault();

    
  }

  function onBuy(ev) {
    ev.preventDefault();
  }

  function createRow(entry) {
    let row = document.createElement('tr');

    row.appendChild(createCol());

    return row;
  }

  function createCol(content) {
    let col = document.createElement('td');
    let p = document.createElement('p');
    p.textContent = content;
    col.appendChild(p);

    return col;
  }
}

// TO DO