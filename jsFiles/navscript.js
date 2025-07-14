/*
imports the navigation menu
(and manages myButton and see more button apparently)
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

    const myButton = document.getElementById('openPopup');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        offscreen.classList.toggle('active');
        
        if(myButton != null){
            if (offscreen.classList.contains('active')) {
                myButton.style.display = 'none';
            } else {
                myButton.style.display = '';
            }
        }
    });



    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            /*this.classList.toggle("active"); idk what this does, I think it's useless :)*/
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }

    //show more button on home page
    const smBtn = document.querySelector('button.begin');

    if(smBtn != null){
        smBtn.addEventListener('click', () => {
            hamburger.click();
            console.log(dropdown[2]);
            const innerList = document.getElementById("songDropdown");
            innerList.style.display = "block";
        });
    }
});
