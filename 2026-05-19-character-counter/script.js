const MAX_LENGTH = 100;

const messageInput = document.querySelector("#message-input");
const counterText = document.querySelector("#counter-text");
const statusText = document.querySelector("#status-text");
const remainingText = document.querySelector("#remaining-text");

function getMessageStatus(length) {
  if (length === 0) return "Empty";
  if (length <= 80) return "Good";
  if (length <= 100) return "Near limit";
  return "Too long";
}

function updateCounter() {
  const currText = messageInput.value;
  const currLength = currText.length;
  const remaining = MAX_LENGTH - currLength;
  counterText.textContent = `${currLength} / ${MAX_LENGTH}`;
  statusText.textContent = getMessageStatus(currLength);

  if (remaining >= 0) {
    remainingText.textContent = `${remaining} characters remaining`;
  } else {
    remainingText.textContent = `${Math.abs(remaining)} characters over limit`;
  }
}

messageInput.addEventListener("input", function () {
  updateCounter();
});
updateCounter();
