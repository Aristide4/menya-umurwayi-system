// Function to retrieve the list of patients
function getPatientList() {
    var accessToken = localStorage.getItem('accessToken'); // Get the access token from local storage
  
    fetch('http://localhost:8082/api/v1/patient', {
      headers: {
        'Authorization': 'Bearer ' + accessToken // Include the access token in the Authorization header
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayPatientList(data);
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  }
  
  
  // Function to display the list of patients in a table
  function displayPatientList(data) {
    var tableBody = document.getElementById('patient-list');
  
    // Clear existing table rows
    tableBody.innerHTML = '';
  
    // Iterate through each patient and create a table row
    data.forEach(function(patient) {
      var row = document.createElement('tr');
  
      // Create table cells for each patient property
      var idCell = createTableCell(patient.id);
      var firstNameCell = createTableCell(patient.firstName);
      var lastNameCell = createTableCell(patient.lastName);
      var emailCell = createTableCell(patient.email);
      var contactNumberCell = createTableCell(patient.contactNumber);
      var genderCell = createTableCell(patient.gender);
      var insuranceProviderCell = createTableCell(patient.insuranceProvider);
      var addressCell = createTableCell(patient.address);
      var medicalHistoryCell = createTableCell(patient.medicalHistory);
      var reasonOfVisitCell = createTableCell(patient.reasonOfVisit);
  
      // Append table cells to the row
      row.appendChild(idCell);
      row.appendChild(firstNameCell);
      row.appendChild(lastNameCell);
      row.appendChild(emailCell);
      row.appendChild(contactNumberCell);
      row.appendChild(genderCell);
      row.appendChild(insuranceProviderCell);
      row.appendChild(addressCell);
      row.appendChild(medicalHistoryCell);
      row.appendChild(reasonOfVisitCell);
  
      // Append the row to the table body
      tableBody.appendChild(row);
    });
  }
  
  // Function to create a table cell
  function createTableCell(text) {
    var cell = document.createElement('td');
    cell.textContent = text;
    return cell;
  }
  
  // Call the getPatientList function when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    getPatientList();
  });
  