const form = document.getElementById("ban-user-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = form.elements.username.value;
  const reason = form.elements.reason.value;
  
  // Replace this with your own ban user logic
  console.log(`User ${username} has been banned for reason: ${reason}`);
});
