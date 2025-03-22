function updateClock() {
    const now = new Date();
    
    // Update time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Update date
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateStr;
    
    // Rotate seconds circle
    const secondsCircle = document.querySelector('.seconds-circle');
    const secondsDegrees = (now.getSeconds() / 60) * 360;
    secondsCircle.style.transform = `rotate(${secondsDegrees}deg)`;
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);
