document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
  
    if (name && phone) {
      addContactToTable(name, phone);
      document.getElementById("contactForm").reset(); // Limpa o formulário
    }
  });
  
  function addContactToTable(name, phone) {
    const tableBody = document.querySelector("#contactTable tbody");
  
    const newRow = document.createElement("tr");
  
    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    newRow.appendChild(nameCell);
  
    const phoneCell = document.createElement("td");
    phoneCell.textContent = phone;
    newRow.appendChild(phoneCell);
  
    tableBody.appendChild(newRow);
  }
  