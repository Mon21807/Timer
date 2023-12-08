    let timerInterval;
    let totalSeconds = 0;
    let isRunning = false;

    function updateTimer() {
        const displayHours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const displayMinutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const displaySeconds = (totalSeconds % 60).toString().padStart(2, '0');

        document.getElementById("timer").textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
    }

    function startTimer() {
        if (!isRunning) {
            const hours = parseInt(document.getElementById("hours").value);
            const minutes = parseInt(document.getElementById("minutes").value);
            const seconds = parseInt(document.getElementById("seconds").value);

            totalSeconds = hours * 3600 + minutes * 60 + seconds;

            timerInterval = setInterval(function () {
                if (totalSeconds > 0) {
                    totalSeconds--;
                    updateTimer();
                } else {
                    clearInterval(timerInterval);
                    isRunning = false;
                }
            }, 1000);
            isRunning = true;
        }
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        isRunning = false;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        totalSeconds = 0;
        updateTimer();
        isRunning = false;
    }