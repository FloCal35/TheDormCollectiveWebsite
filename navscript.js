/*
imports the navigation menu
 */
fetch('navmenu.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navMenu').innerHTML = html;
    
    /*
    manages nav menu
    */
    const hamburger = document.querySelector('.hamburger');
    const offscreen= document.querySelector('.offscreen');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        offscreen.classList.toggle('active');
    })


    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            } else {
            dropdownContent.style.display = "block";
            }
        });
    }
});