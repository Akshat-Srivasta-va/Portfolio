document.addEventListener("DOMContentLoaded", function() {
    const panel = document.getElementById('sliding');
    const arrowButton = document.getElementById('arrow-button');
    const backButton = document.getElementById('back-button');
  
    arrowButton.addEventListener('click', function() {
     panel.classList.toggle('show');
    });

    backButton.addEventListener('click', function() {
        panel.classList.remove('show');
       });

  });