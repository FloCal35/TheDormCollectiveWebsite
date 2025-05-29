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
            
            slides = getelementsByClass(songContainer)
            for(songName of person.Songs){
                song = songs[songName];
                
            }
        });
    }
}