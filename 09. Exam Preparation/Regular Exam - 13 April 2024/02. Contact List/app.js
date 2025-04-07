window.addEventListener("load", solve);

function solve() {
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const categoryInput = document.getElementById("category");

  const addButton = document.getElementById("add-btn");
  const checkList = document.getElementById("check-list");
  const contactList = document.getElementById("contact-list");

  addButton.addEventListener('click', () => {
    const name = nameInput.value;
    const phone = phoneInput.value;
    const category = categoryInput.value;

    const liElement = createCheckListElement(name, phone, category);

    checkList.appendChild(liElement);

    clearInputs();
});

function clearInputs() {
    nameInput.value = '';
    phoneInput.value = '';
    categoryInput.value = '';
}

function createCheckListElement(name, phoneNumber, category) {
    const pNameElement = document.createElement('p');
    pNameElement.textContent = `name:${name}`;

    const pPhoneElement = document.createElement('p');
    pPhoneElement.textContent = `phone:${phoneNumber}`;

    const pCategoryElement = document.createElement('p');
    pCategoryElement.textContent = `category:${category}`;

    const articleElement = document.createElement('article');
    articleElement.appendChild(pNameElement);
    articleElement.appendChild(pPhoneElement);
    articleElement.appendChild(pCategoryElement);

    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');

    const saveButton = document.createElement('button');
    saveButton.classList.add('save-btn');

    const divButtons = document.createElement('div');
    divButtons.classList.add('buttons');
    divButtons.appendChild(editButton);
    divButtons.appendChild(saveButton);

    const liElement = document.createElement('li');
    liElement.appendChild(articleElement);
    liElement.appendChild(divButtons);

    editButton.addEventListener('click', () => {
        nameInput.value = name;
        phoneInput.value = phoneNumber;
        categoryInput.value = category;

        liElement.remove();
    });

    saveButton.addEventListener('click', (e) => {
        divButtons.remove();

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('del-btn');

        deleteButton.addEventListener('click', deleteContact);

        liElement.appendChild(deleteButton);

        contactList.appendChild(liElement);
    });

    return liElement;
}

function deleteContact(e) {
    e.target.parentElement.remove();
}
}