  // Set the date for the Agri Business Expo event (June 7th, 2024)
  const eventDate = new Date("2024-06-07T00:00:00");

  // Function to update the countdown every second
  function updateCountdown() {
    const currentDate = new Date();
    const difference = eventDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById("days").innerHTML = `<div class="display-4">${days} Days</div>`;
    document.getElementById("hours").innerHTML = `<div class="display-4">${hours} Hours</div>`;
    document.getElementById("minutes").innerHTML = `<div class="display-4">${minutes} Minutes</div>`;
    document.getElementById("seconds").innerHTML = `<div class="display-4">${seconds} Seconds</div>`;

    // Update every second
    setTimeout(updateCountdown, 1000);
  }

  // Initial call to start the countdown
  updateCountdown();