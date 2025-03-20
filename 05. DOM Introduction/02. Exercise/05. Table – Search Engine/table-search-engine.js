function solve() {
   let tableRows = document.querySelectorAll('tbody tr');
 
   let searchField = document.getElementById('searchField').value.trim().toLowerCase();
 
   for (let row of tableRows) {
      row.classList.remove('select');
   }
 
   if (!searchField) return;
 
   for (let row of tableRows) {
      let children = row.children;
 
      for (let child of children) {
         if (child.textContent.toLowerCase().includes(searchField)) {
            row.className = 'select';
            break;
         }
      }
   }
 
   document.getElementById('searchField').value = '';
}