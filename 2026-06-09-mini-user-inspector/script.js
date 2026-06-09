const loadUsersButton = document.querySelector("#load-users-btn");
const statusText = document.querySelector("#status-text");
const userList = document.querySelector("#user-list");
const detailsPanel = document.querySelector("#details-panel");

let users = [];
let selectedUserId = null;

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to load users");
  }

  const data = await response.json();
  return data;
}

function renderUsers() {
  userList.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = user.name;
    button.addEventListener("click", () => {
      selectedUserId = user.id;
      renderDetails();
    });
    li.append(button);
    userList.append(li);
  });
}

function renderDetails() {
  const foundUser = users.find((user) => {
    return user.id === selectedUserId;
  });
  const msg = foundUser
    ? `
  Name: ${foundUser.name}<br>
  Email: ${foundUser.email}<br>
  Phone: ${foundUser.phone}<br>
  Website: ${foundUser.website}<br>
  Company name: ${foundUser.company.name}<br>
  City: ${foundUser.address.city}
`
    : "User not found";
  detailsPanel.innerHTML = `<span>${msg}</span>`;
}

loadUsersButton.addEventListener("click", async () => {
  try {
    statusText.textContent = "Loading...";
    users = await fetchUsers();
    selectedUserId = null;
    renderUsers();
    renderDetails();
    statusText.textContent = "Users loaded.";
  } catch (error) {
    statusText.textContent = error.message;
  }
});
