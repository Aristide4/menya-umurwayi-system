document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    
    var data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber
    };
    
    fetch("http://localhost:8082/api/v1/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(responseData) {
      if (responseData.message === "Failed validation") {
        var validationDetails = responseData.details;
        var errorMessage = "Validation errors:";
        
        for (var key in validationDetails) {
          if (validationDetails.hasOwnProperty(key)) {
            errorMessage += "\n- " + key + ": " + validationDetails[key];
          }
        }
        
        alert(errorMessage);
      } else if (responseData.message === "User registered") {
        alert(responseData.message);
        window.location.href = "login.html"; // Redirect to the login page
      } else {
        alert(responseData.message);
      }
    })
    .catch(function(error) {
      console.error("Error:", error);
    });
  });
  