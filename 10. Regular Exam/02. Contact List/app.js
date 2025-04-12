window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById("add_btn");
    const firstNameInput = document.getElementById("first_name");
    const lastNameInput = document.getElementById("last_name");
    const phoneInput = document.getElementById("phone");
  
    const pendingList = document.getElementById("pending_contact_list");
    const verifiedList = document.getElementById("contact_list");
  
    addButton.addEventListener("click", function (e) {
      e.preventDefault();
  
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const phone = phoneInput.value.trim();
  
      if (!firstName || !lastName || !phone) return;
  
      const li = document.createElement("li");
      li.className = "contact";
  
      const nameSpan = document.createElement("span");
      nameSpan.className = "names";
      nameSpan.textContent = `${firstName} ${lastName}`;
  
      const phoneSpan = document.createElement("span");
      phoneSpan.className = "phone_number";
      phoneSpan.textContent = phone;
  
      const editBtn = document.createElement("button");
      editBtn.className = "edit_btn";
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => {
        firstNameInput.value = firstName;
        lastNameInput.value = lastName;
        phoneInput.value = phone;
        li.remove(); 
      });
  
      const verifyBtn = document.createElement("button");
      verifyBtn.className = "verify_btn";
      verifyBtn.textContent = "Verify";
      verifyBtn.addEventListener("click", () => {
        li.remove(); 
  
        const verifiedLi = document.createElement("li");
        verifiedLi.className = "verified_contact";
  
        const vName = document.createElement("span");
        vName.className = "names";
        vName.textContent = `${firstName} ${lastName}`;
  
        const vPhone = document.createElement("span");
        vPhone.className = "phone_number";
        vPhone.textContent = phone;
  
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete_btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
          verifiedLi.remove();
        });
  
        verifiedLi.appendChild(vName);
        verifiedLi.appendChild(vPhone);
        verifiedLi.appendChild(deleteBtn);
  
        verifiedList.appendChild(verifiedLi);
      });
  
      li.appendChild(nameSpan);
      li.appendChild(phoneSpan);
      li.appendChild(editBtn);
      li.appendChild(verifyBtn);
  
      pendingList.appendChild(li);
  
      firstNameInput.value = "";
      lastNameInput.value = "";
      phoneInput.value = "";
    });
  }
