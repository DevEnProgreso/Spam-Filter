const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const isSpam = (msg) => false;

heckMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }
  isSpam(messageInput.value)
    ? (result.textContent = "Oh no! This looks like a spam message.")
    : (result.textContent = "This message does not seem to contain any spam.");
  messageInput.value = "";
});
