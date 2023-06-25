function countdown(endDate) {
  const targetDate = new Date(endDate).getTime();

  function updateCountdown() {
    const currentDate = new Date().getTime();
    const remainingTime = targetDate - currentDate;

    // Calculating the days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Updating the countdown display
    document.getElementById("days").textContent = days + " days";
    document.getElementById("hours").textContent = hours + " hours";
    document.getElementById("minutes").textContent = minutes + " minutes";
    document.getElementById("seconds").textContent = seconds + " seconds";

    // Checking if the countdown has reached 0
    if (remainingTime <= 0) {
      clearInterval(interval);
      console.log("Countdown has ended!");
    }
  }

  // Calling the updateCountdown function every second
  const interval = setInterval(updateCountdown, 1000);
}

// Example usage: countdown("June 30, 2023 23:59:59");
countdown("July 30, 2023 23:59:59");