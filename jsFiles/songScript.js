
/*
scripting for the song pages
(not to be confused with song info on profile page!)
*/

const param = new URLSearchParams(window.location.search);
const song = songs[param.get("id")];

/*
getting elements
*/
const songDivEl = document.getElementById("imageDiv");
const imgEl = document.getElementById("songImg");
const titleEl = document.getElementById("title");
const detailEls = document.querySelectorAll("p.song_info");
const links = document.querySelectorAll("div.social a");
const lyricHeader = document.getElementById("lyric");
const title = document.getElementById("tabTitle");


/*
setting elements
*/
songDivEl.style.backgroundImage = `url('${song.blurryImg}')`;
imgEl.src = song.image;
titleEl.innerHTML = song.title;
title.innerHTML = song.title;
detailEls[0].innerHTML = song.releaseDate;
detailEls[1].innerHTML = song.genre;
detailEls[2].innerHTML = song.about;

if(song.lyrics == ""){
    lyricHeader.style.setProperty('display', 'none', 'important');
}
detailEls[3].innerHTML = song.lyrics;

detailEls[4].innerHTML = "";
song.credits.forEach(cred => {
    detailEls[4].innerHTML += "<a href="+cred[1]+">"+cred[0]+":</a> "+cred[2]+"<br>";
});

for(let i=0; i < links.length; i++){
    links[i].setAttribute("href", song.links[i]);
}
