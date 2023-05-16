document.getElementById("create-patient-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var insuranceProvider = document.getElementById("insuranceProvider").value;
    var medicalHistory = document.getElementById("medicalHistory").value;
    var reasonOfVisit = document.getElementById("reasonOfVisit").value;
    
    var data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNumber: contactNumber,
      gender: gender,
      address: address,
      insuranceProvider: insuranceProvider,
      medicalHistory: medicalHistory,
      reasonOfVisit: reasonOfVisit
    };
  
    var accessToken = localStorage.getItem("accessToken");
  
    fetch("http://localhost:8082/api/v1/patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(responseData) {
      // Handle the response data as needed
      console.log(responseData);
      alert("Patient entry created successfully!");
      // Reset the form
      document.getElementById("create-patient-form").reset();
    })
    .catch(function(error) {
      console.error("Error:", error);
    });
  });
  