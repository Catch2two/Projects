function calculateTimeLeft() {
    // Get the current date
    const today = new Date();
  
    // Get the date the project was submitted
    const submittedDate = document.getElementById('submittedDate').value;
  
    // Calculate the difference between the two dates
    const difference = today.getTime() - submittedDate.getTime();
  
    // Convert the difference to days
    const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
  
    // Display the number of days left
    document.getElementById('daysLeft').textContent = daysLeft;
  }

  export default calculateTimeLeft;