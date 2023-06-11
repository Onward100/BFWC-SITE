function getCurrentDateTime() {
    var currentDateTime = new Date();
  
    var date = currentDateTime.toLocaleDateString();
    var time = currentDateTime.toLocaleTimeString();
  
    return date + " " + time;
  }
  
  function updateDateTime() {
    var datetimeElement = document.getElementById("datetime");
    datetimeElement.textContent = getCurrentDateTime();
  }
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);
  