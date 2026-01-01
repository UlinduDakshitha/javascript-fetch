function loadUsers() {
  const status = document.getElementById("status");
  const table = document.getElementById("userTable");

  status.innerText = "Loading...";
  table.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      status.innerText = "";

      data.forEach(user => {
        table.innerHTML += `
          <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
          </tr>
        `;
      });
    })
    .catch(err => {
      status.innerText = "Failed to load data!";
    });
}
