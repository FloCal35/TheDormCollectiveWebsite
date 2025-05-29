/*
fetches and controls slideshow of songs. 
currently just intended to be used on profile page

warning: must be included after profile.js and songData.js!!
*/

/*
loading in correct number of slides first, then after loading in last slide, fill all in with the correct data.
 */
for(let i=0; i<person.Songs.length; i++){
    if(i < person.Songs.length -1){
        fetch('../songSlide.html')
            .then(response => response.text())
            .then(html => {
            document.getElementById('songSlideHolder').innerHTML += html;});
    }
    else{
        fetch('../songSlide.html')
            .then(response => response.text())
            .then(html => {
            document.getElementById('songSlideHolder').innerHTML += html;
            
            /*
            load data
            */
            const slides = document.getElementsByClassName('songContainer');
            for(let i=0; i<slides.length; i++){
                var song = songs[person.Songs[i]];
                var slide = slides[i];

                var coverEl = slide.querySelector("img");
                var titEl = slide.querySelector('h1');
                var linkEls = slide.querySelectorAll("a");
                slide.style.backgroundImage = `url('${song.blurryImg}')`;

                coverEl.src = song.image;
                titEl.innerHTML = song.title;
                for(let i=0; i < linkEls.length; i++){
                    linkEls[i].setAttribute("href", song.links[i]);
                }
            }
        });
    }
}