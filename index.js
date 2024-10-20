document.addEventListener("DOMContentLoaded", function() {
    const panel = document.getElementById('sliding');
    const arrowButton = document.getElementById('arrow-button');
    const backButton = document.getElementById('back-button');

    // Toggle panel visibility when clicking the arrow button
    arrowButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event from bubbling up
        panel.classList.toggle('show');
    });

    // Hide panel when clicking the back button
    backButton.addEventListener('click', function(event) {
        event.stopPropagation();
        panel.classList.remove('show');
    });

    // Close panel if clicked outside
    document.addEventListener('click', function(event) {
        if (!panel.contains(event.target) && event.target !== arrowButton) {
            panel.classList.remove('show');
        }
    });

    // Prevent clicking inside the panel from closing it
    panel.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
