document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var accessToken = localStorage.getItem('accessToken');
    var email = document.getElementById('email').value;
  
    fetch('http://localhost:8082/api/v1/patient/' + email, {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Patient not found');
        }
        return response.json();
      })
      .then(function(data) {
        displaySearchResult(data);
      })
      .catch(function(error) {
        displayErrorMessage(error.message);
      });
  });
  
  function displaySearchResult(data) {
    var searchResultsDiv = document.getElementById('search-results');
    searchResultsDiv.innerHTML = '';
  
    var patientDetails = document.createElement('div');
    patientDetails.classList.add('patient-details');
  
    var html = '<h3>Patient Details</h3>' +
      '<p><strong>Name:</strong> ' + data.firstName + ' ' + data.lastName + '</p>' +
      '<p><strong>Email:</strong> ' + data.email + '</p>' +
      '<p><strong>Contact Number:</strong> ' + data.contactNumber + '</p>' +
      '<p><strong>Gender:</strong> ' + data.gender + '</p>' +
      '<p><strong>Address:</strong> ' + data.address + '</p>' +
      '<p><strong>Insurance Provider:</strong> ' + data.insuranceProvider + '</p>' +
      '<p><strong>Medical History:</strong> ' + data.medicalHistory + '</p>' +
      '<p><strong>Reason of Visit:</strong> ' + data.reasonOfVisit + '</p>';
  
    patientDetails.innerHTML = html;
    searchResultsDiv.appendChild(patientDetails);
  }
  
  function displayErrorMessage(message) {
    var searchResultsDiv = document.getElementById('search-results');
    searchResultsDiv.innerHTML = '';
  
    var errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Error: ' + message;
  
    searchResultsDiv.appendChild(errorMessage);
  }
  