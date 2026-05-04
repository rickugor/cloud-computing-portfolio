// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Dynamically set the current year in the footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    // 2. Log a message to the console to prove the JS is connected
    console.log("Custom script.js loaded successfully!");
    console.log("Ready for Jenkins CI/CD deployment.");
});