window.addEventListener("load", solve);

function solve() {
    const eventInput = document.getElementById('event');
    const noteInput = document.getElementById('note');
    const dateInput = document.getElementById('date');
    const saveBtn = document.getElementById('save');
  
    const upcomingList = document.getElementById('upcoming-list');
    const endedList = document.getElementById('events-list');
    const deleteBtn = document.querySelector('.delete');
  
    saveBtn.addEventListener('click', onSave);
    deleteBtn.addEventListener('click', onDeleteEnded);
  
    function onSave() {
      const event = eventInput.value.trim();
      const note = noteInput.value.trim();
      const date = dateInput.value;
  
      if (!event || !note || !date) {
        return;
      }
  
      const li = document.createElement('li');
      li.className = 'event-item';
  
      const container = document.createElement('div');
      container.className = 'event-container';
  
      const article = document.createElement('article');
  
      const nameP = document.createElement('p');
      nameP.textContent = `Name: ${event}`;
      const noteP = document.createElement('p');
      noteP.textContent = `Note: ${note}`;
      const dateP = document.createElement('p');
      dateP.textContent = `Date: ${date}`;
  
      article.appendChild(nameP);
      article.appendChild(noteP);
      article.appendChild(dateP);
  
      const btnDiv = document.createElement('div');
      btnDiv.className = 'buttons';
  
      const editBtn = document.createElement('button');
      editBtn.className = 'btn edit';
      editBtn.textContent = 'Edit';
  
      const doneBtn = document.createElement('button');
      doneBtn.className = 'btn done';
      doneBtn.textContent = 'Done';
  
      editBtn.addEventListener('click', () => {
        eventInput.value = event;
        noteInput.value = note;
        dateInput.value = date;
        li.remove();
      });
  
      doneBtn.addEventListener('click', () => {
        li.innerHTML = ''; 
        const articleEnded = document.createElement('article');
  
        const namePEnded = document.createElement('p');
        namePEnded.textContent = `Name: ${event}`;
        const notePEnded = document.createElement('p');
        notePEnded.textContent = `Note: ${note}`;
        const datePEnded = document.createElement('p');
        datePEnded.textContent = `Date: ${date}`;
  
        articleEnded.appendChild(namePEnded);
        articleEnded.appendChild(notePEnded);
        articleEnded.appendChild(datePEnded);
  
        li.appendChild(articleEnded);
        endedList.appendChild(li);
      });
  
      btnDiv.appendChild(editBtn);
      btnDiv.appendChild(doneBtn);
  
      container.appendChild(article);
      container.appendChild(btnDiv);
  
      li.appendChild(container);
      upcomingList.appendChild(li);
  
      eventInput.value = '';
      noteInput.value = '';
      dateInput.value = '';
    }
  
    function onDeleteEnded() {
      endedList.innerHTML = '';
    }
  }