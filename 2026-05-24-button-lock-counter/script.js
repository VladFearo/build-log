const MIN_LENGTH = 5;
const MAX_LENGTH = 100;

const form = document.querySelector("#message-form");
const messageInput = document.querySelector("#message-input");
const submitButton = document.querySelector("#submit-button");
const counterText = document.querySelector("#counter-text");
const statusText = document.querySelector("#status-text");

function getMessageStatus(length) {
  if (length === 0) return "Message required";
  if (length < MIN_LENGTH) return "Too short";
  if (length <= MAX_LENGTH) return "Ready";
  return "Too long";
}

function updateMessageState() {
  const inputText = messageInput.value.trim();
  const length = inputText.length;
  const status = getMessageStatus(length);

  statusText.textContent = status;
  counterText.textContent = `${length} / ${MAX_LENGTH}`;
  submitButton.disabled = status !== "Ready";
}

function resetMessageState() {
  messageInput.value = "";
  updateMessageState();
}

messageInput.addEventListener("input", updateMessageState);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (submitButton.disabled) return;

  alert("Message submitted");
  resetMessageState();
});

updateMessageState();
