function solve() {
    const loadBtn = document.getElementById('load-history');
    const addBtn = document.getElementById('add-reservation');
    const editBtn = document.getElementById('edit-reservation');

    const nameInput = document.getElementById('names');
    const daysInput = document.getElementById('days');
    const dateInput = document.getElementById('date');
    const list = document.getElementById('list');

    let currentId = null;

    loadBtn.addEventListener('click', loadReservations);
    addBtn.addEventListener('click', addReservation);
    editBtn.addEventListener('click', editReservation);

    async function loadReservations() {
        const res = await fetch('http://localhost:3000/jsonstore/reservations');
        const data = await res.json();
        list.innerHTML = '';

        Object.values(data).forEach(reservation => {
            const container = document.createElement('div');
            container.className = 'container';

            container.innerHTML = `
                <h2>${reservation.names}</h2>
                <h3>${reservation.date}</h3>
                <h3>${reservation.days}</h3>
                <button class="change-btn">Change</button>
                <button class="delete-btn">Done</button>
            `;

            const changeBtn = container.querySelector('.change-btn');
            const deleteBtn = container.querySelector('.delete-btn');

            changeBtn.addEventListener('click', () => {
                nameInput.value = reservation.names;
                daysInput.value = reservation.days;
                dateInput.value = reservation.date;
                currentId = reservation._id;

                addBtn.disabled = true;
                editBtn.disabled = false;
            });

            deleteBtn.addEventListener('click', async () => {
                await fetch(`http://localhost:3000/jsonstore/reservations/${reservation._id}`, {
                    method: 'DELETE',
                });
                loadReservations();
            });

            list.appendChild(container);
        });
    }

    async function addReservation(e) {
        e.preventDefault();

        const names = nameInput.value.trim();
        const days = daysInput.value.trim();
        const date = dateInput.value.trim();

        if (!names || !days || !date) return;

        await fetch('http://localhost:3000/jsonstore/reservations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ names, days, date }),
        });

        nameInput.value = '';
        daysInput.value = '';
        dateInput.value = '';
        loadReservations();
    }

    async function editReservation(e) {
        e.preventDefault();

        if (!currentId) return;

        const names = nameInput.value.trim();
        const days = daysInput.value.trim();
        const date = dateInput.value.trim();

        await fetch(`http://localhost:3000/jsonstore/reservations/${currentId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ names, days, date }),
        });

        nameInput.value = '';
        daysInput.value = '';
        dateInput.value = '';

        addBtn.disabled = false;
        editBtn.disabled = true;
        currentId = null;

        loadReservations();
    }
}


solve();