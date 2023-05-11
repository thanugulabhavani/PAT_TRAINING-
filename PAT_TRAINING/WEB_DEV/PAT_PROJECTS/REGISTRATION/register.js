document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var university = document.getElementById("university").value;
    var degree = document.getElementById("degree").value;
    var gradYear = document.getElementById("gradYear").value;
  
    // Perform registration validation and data processing here
    console.log("Registration submitted:", name, email, dob, university, degree, gradYear);
    // Redirect to the main page or perform any other action
  });
  