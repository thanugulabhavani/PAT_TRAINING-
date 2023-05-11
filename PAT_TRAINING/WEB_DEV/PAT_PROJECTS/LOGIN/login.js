document.getElementById("signupButton").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
  });
  
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Perform login validation here
    console.log("Login submitted:", username, password);
    // Redirect to the main page or perform any other action
  });
  
  document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Perform signup validation here
    console.log("Signup submitted:", name, email, username, password);
    // Redirect to the main page or perform any other action
  });
  