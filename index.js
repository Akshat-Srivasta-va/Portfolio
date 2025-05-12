<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    // Sliding panel elements
    const panel = document.getElementById('sliding');
    const arrowButton = document.getElementById('arrow-button');
    const backButton = document.getElementById('back-button');
    const socialLinks = document.getElementById('social-links');

    // Toggle panel visibility when clicking the arrow button
    arrowButton.addEventListener('click', function (event) {
        event.stopPropagation();
        panel.classList.toggle('show');

        // Hide social links when panel is showing
        if (panel.classList.contains('show')) {
            socialLinks.style.visibility = 'hidden';
        } else {
            socialLinks.style.visibility = 'visible';
        }
    });
    
  document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active'); // Toggle the active class
    navMenu.style.display = navMenu.classList.contains('active') ? 'flex' : 'none'; // Show or hide the menu
  });
  
  

    // Hide panel when clicking the back button
    backButton.addEventListener('click', function (event) {
        event.stopPropagation();
        panel.classList.remove('show');
        socialLinks.style.visibility = 'visible';
    });

    // Close panel if clicked outside
    document.addEventListener('click', function (event) {
        if (
            !panel.contains(event.target) &&
            event.target !== arrowButton &&
            !arrowButton.contains(event.target)
        ) {
            panel.classList.remove('show');
            socialLinks.style.visibility = 'visible';
        }
    });

    // Prevent clicking inside the panel from closing it
    panel.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Mobile navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        // Toggle navigation menu on mobile
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

        // Close menu when a menu item is clicked
        const navLinks = document.querySelectorAll('.nav-menu .bytn');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                }
            });
        });

        // Adjust menu display on window resize
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                navMenu.style.display = 'flex';
            } else if (!navMenu.classList.contains('active')) {
                navMenu.style.display = 'none';
            }
        });
    }
});
=======
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
>>>>>>> 0ed6ac9f3bc49a39f9dd1314e0eec1bc8589372c
