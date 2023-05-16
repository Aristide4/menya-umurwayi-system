document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    
    fetch("http://localhost:8082/api/v1/patient/" + email, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("accessToken")
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(responseData) {
      if (responseData.message === "Patient not found") {
        alert(responseData.message);
      } else {
        populateUpdateForm(responseData);
      }
    })
    .catch(function(error) {
      console.error("Error:", error);
    });
  });
  
  function populateUpdateForm(patient) {
    document.getElementById("firstName").value = patient.firstName;
    document.getElementById("lastName").value = patient.lastName;
    document.getElementById("contactNumber").value = patient.contactNumber;
    document.getElementById("gender").value = patient.gender;
    document.getElementById("address").value = patient.address;
    document.getElementById("insuranceProvider").value = patient.insuranceProvider;
    document.getElementById("medicalHistory").value = patient.medicalHistory;
    document.getElementById("reasonOfVisit").value = patient.reasonOfVisit;
    
    // Show the update form
    document.getElementById("update-form").classList.remove("hidden");
  }
  
  document.getElementById("update-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var insuranceProvider = document.getElementById("insuranceProvider").value;
    var medicalHistory = document.getElementById("medicalHistory").value;
    var reasonOfVisit = document.getElementById("reasonOfVisit").value;
    
    var data = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      contactNumber: contactNumber,
      gender: gender,
      address: address,
      insuranceProvider: insuranceProvider,
      medicalHistory: medicalHistory,
      reasonOfVisit: reasonOfVisit
    };
    
    fetch("http://localhost:8082/api/v1/patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("accessToken")
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(responseData) {
      alert(responseData.message);
      if (responseData.message === "Patient updated successfully") {
        // Redirect to the dashboard or perform any other action
      }
    })
    .catch(function(error) {
      console.error("Error:", error);
    });
  });
  