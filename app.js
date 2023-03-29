const form = document.getElementById("password-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const password = form.elements.password.value;
  
  if (password === "Powellfam17") {
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Incorrect password, please try again.");
  }
});