
  const currentDaySpan = document.querySelector('[data-testid="currentDay"]');
  const currentTimeSpan = document.querySelector('[data-testid="currentTimeUTC"]');

  function updateDateTime() {
    const now = new Date();
    const day = now.toLocaleDateString("en-US", { weekday: 'long' }); // Get day of the week (e.g., Monday)
    const timeUTC = now.toLocaleTimeString("en-US", { timeZone: 'UTC' }); // Get time in UTC

    currentDaySpan.textContent = day;
    currentTimeSpan.textContent = timeUTC;
  }

  updateDateTime(); // Call initially
  setInterval(updateDateTime, 1000); // Update every second
