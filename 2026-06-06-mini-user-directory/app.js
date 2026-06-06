const loadUsersButton = document.querySelector("#load-users-btn");
const retryButton = document.querySelector("#retry-btn");
const searchInput = document.querySelector("#search-input");
const companyFilter = document.querySelector("#company-filter");
const statusText = document.querySelector("#status-text");
const counterText = document.querySelector("#counter-text");
const userList = document.querySelector("#user-list");

let users = [];
let currentSearch = "";
let currentCompany = "all";

function fakeFetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.25;

      if (shouldFail) {
        reject(new Error("Failed to load users"));
        return;
      }

      resolve([
        { id: 1, name: "Dana Levi", email: "dana@example.com", company: "Wix" },
        {
          id: 2,
          name: "Noam Cohen",
          email: "noam@example.com",
          company: "Unity",
        },
        { id: 3, name: "Maya Bar", email: "maya@example.com", company: "Wix" },
        {
          id: 4,
          name: "Amit Azulay",
          email: "amit@example.com",
          company: "Monday",
        },
        {
          id: 5,
          name: "Lior Katz",
          email: "lior@example.com",
          company: "Unity",
        },
      ]);
    }, 800);
  });
}

function clearUsers() {
  users = [];
  userList.innerHTML = "";
  counterText.textContent = "";
}

async function loadUsers() {
  statusText.textContent = "Loading users...";
  clearUsers();

  try {
    const fetchedUsers = await fakeFetchUsers();
    users = [...fetchedUsers];
    populateCompanyFilter();
    renderUsers();
  } catch (error) {
    clearUsers();
    statusText.textContent = error.message;
  }
}

function populateCompanyFilter() {
  companyFilter.innerHTML = `<option value="all">All companies</option>`;

  const companies = [];
  for (const user of users) {
    if (!companies.includes(user.company)) companies.push(user.company);
  }
  for (const company of companies) {
    const option = document.createElement("option");
    option.value = company;
    option.textContent = company;
    companyFilter.append(option);
  }
}

function getVisibleUsers() {
  let visibleUsers = [];
  visibleUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(currentSearch);
  });
  if (currentCompany !== "all") {
    visibleUsers = visibleUsers.filter((user) => {
      return user.company === currentCompany;
    });
  }
  return visibleUsers;
}

function renderUsers() {
  const visibleUsers = getVisibleUsers();

  userList.innerHTML = "";

  if (visibleUsers.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No users found";
    userList.append(li);

    counterText.textContent = "Showing 0 users";
    return;
  }

  for (const user of visibleUsers) {
    const li = document.createElement("li");

    const name = document.createElement("strong");
    name.textContent = user.name;

    const details = document.createElement("span");
    details.textContent = ` - ${user.email} - ${user.company}`;

    li.append(name, details);
    userList.append(li);
  }

  counterText.textContent = `Showing ${visibleUsers.length} users`;
}
loadUsersButton.addEventListener("click", loadUsers);
retryButton.addEventListener("click", loadUsers);

searchInput.addEventListener("input", () => {
  currentSearch = searchInput.value.trim().toLowerCase();
  renderUsers();
});

companyFilter.addEventListener("change", () => {
  currentCompany = companyFilter.value;
  renderUsers();
});
