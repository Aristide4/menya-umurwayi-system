// Check if user is logged in
var user = localStorage.getItem("user");
if (user) {
  user = JSON.parse(user);
  document.getElementById("user-name").textContent = "Welcome, ";
  document.getElementById("user-email").textContent = user.email;
} else {
  // Redirect to login page if user is not logged in
  window.location.href = "login.html";
}

// Logout button click event
document.getElementById("logout-btn").addEventListener("click", function() {
  // Clear localStorage
  localStorage.clear();
  
  // Redirect to login page
  window.location.href = "login.html";
});
