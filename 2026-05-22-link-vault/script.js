const form = document.querySelector("#link-form");
const titleInput = document.querySelector("#title-input");
const urlInput = document.querySelector("#url-input");
const errorText = document.querySelector("#error-text");
const counterText = document.querySelector("#counter-text");
const linksList = document.querySelector("#links-list");

const links = [];

function isValidUrl(url) {
  return (
    url !== "" && (url.startsWith("https://") || url.startsWith("http://"))
  );
}

function resetForm() {
  errorText.textContent = "";
  titleInput.value = "";
  urlInput.value = "";
}

function renderLinks() {
  linksList.innerHTML = "";

  for (let i = 0; i < links.length; i++) {
    const link = links[i];

    const li = document.createElement("li");

    const anchor = document.createElement("a");
    anchor.textContent = link.title;
    anchor.href = link.url;
    anchor.target = "_blank";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      links.splice(i, 1);
      renderLinks();
    });

    li.append(anchor, " ", deleteButton);
    linksList.append(li);
  }

  counterText.textContent = `${links.length} links saved`;
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  const url = urlInput.value.trim();

  if (title === "") {
    errorText.textContent = "Title is required";
    return;
  }

  if (url === "") {
    errorText.textContent = "URL is required";
    return;
  }

  if (!isValidUrl(url)) {
    errorText.textContent = "URL must start with http:// or https://";
    return;
  }

  links.push({
    title: title,
    url: url,
  });
  resetForm();
  renderLinks();

  console.log(links);
});
