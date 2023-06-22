//your JS code here. If required.
function updateTimer() {
      var timerElement = document.getElementById('timer');
      var now = new Date();
      
      var date = now.toDateString();
      var time = now.toLocaleTimeString();

      timerElement.textContent = 'Date: ' + date + ' | Time: ' + time;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);