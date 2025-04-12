function solve() { // 40/100
    const baseUrl = `http://localhost:3030/jsonstore/reservations`;

    const loadButton = document.getElementById('load-history');
    const addButton = document.getElementById('add-reservation');
    const editButton = document.getElementById('edit-reservation');

    const nameInput = document.getElementById('names');
    const daysInput = document.getElementById('days');
    const dateInput = document.getElementById('date');
    const list = document.getElementById('list');

    let currentEditId = null;

    loadButton.addEventListener('click', loadReservations);
    addButton.addEventListener('click', addReservation);
    editButton.addEventListener('click', editReservation);

    async function loadReservations() {
        const res = await fetch(baseUrl);
        const data = await res.json();
        list.innerHTML = '';

        for (let reservation of Object.values(data)) {
            const container = document.createElement('div');
            container.className = 'container';

            const h2 = document.createElement('h2');
            h2.textContent = reservation.name;

            const h3Date = document.createElement('h3');
            h3Date.textContent = reservation.date;

            const h3Days = document.createElement('h3');
            h3Days.textContent = reservation.days;
            h3Days.id = 'reservation_days';

            const buttonsDiv = document.createElement('div');
            buttonsDiv.className = 'buttons-container';

            const changeBtn = document.createElement('button');
            changeBtn.className = 'change-btn';
            changeBtn.textContent = 'Change';
            changeBtn.addEventListener('click', () => {
                nameInput.value = reservation.name;
                daysInput.value = reservation.days;
                dateInput.value = reservation.date;

                currentEditId = reservation._id;

                editButton.disabled = false;
                addButton.disabled = true;
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', async () => {
                await fetch(`${baseUrl}/${reservation._id}`, {
                    method: 'DELETE'
                });
                loadReservations();
            });

            buttonsDiv.appendChild(changeBtn);
            buttonsDiv.appendChild(deleteBtn);

            container.appendChild(h2);
            container.appendChild(h3Date);
            container.appendChild(h3Days);
            container.appendChild(buttonsDiv);

            list.appendChild(container);
        }
    }

    async function addReservation() {
        if (!nameInput.value || !daysInput.value || !dateInput.value) return;

        const newReservation = {
            name: nameInput.value,
            days: daysInput.value,
            date: dateInput.value
        };

        await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReservation)
        });

        clearInputs();
        loadReservations();
    }

    async function editReservation() {
        if (!currentEditId) return;

        const updatedReservation = {
            name: nameInput.value,
            days: daysInput.value,
            date: dateInput.value
        };

        await fetch(`${baseUrl}/${currentEditId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedReservation)
        });

        currentEditId = null;
        editButton.disabled = true;
        addButton.disabled = false;
        clearInputs();
        loadReservations();
    }

    function clearInputs() {
        nameInput.value = '';
        daysInput.value = '';
        dateInput.value = '';
    }
}

solve();
