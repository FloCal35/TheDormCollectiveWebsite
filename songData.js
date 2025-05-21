const songs = {
    "imperfect":{
        image: "imgs/Imperfect Final.png",
        blurryImg:"imgs/ImperfectBlur.png",
        title: "Imperfect",
        releaseDate: "January 24, 2025",
        genre: "Ballad",
        about:"Imperfect was the first song by The Dorm Collective, written by Caleb and Aidan during their first semester at Belmont. Recorded and released at the beginning of their second semester, it kickstarted The Dorm Collective’s journey. This heartfelt song explores how flaws can create deep, meaningful relationships. It opens with one person dreaming of an ideal version of themselves and the perfect relationship. In responce, another voice comes and reassures them that these imperfections are what make them human and worthy of love. The final moments of the song emphasize unity and the authenticity of relationships. It ends with shared realization that no one can be everything on their own - we all need someone by our side.",
        lyrics:"V1 <br>If I was perfect <br>I’d be everything you need my love<br>I don’t know how<br>We’d be together<br>I wouldn’t miss you<br>I’d be holding you right now",
        credits:[["Aidan McCarel", "Aiden's page","Melody, Acoustic Guitar"], 
            ["Caleb Flores", "Caleb's page link", "Lyrics, Vocals, Production"],
            ["Ella Markwald","Ella's page link","Vocals, Assist in lyrics"],
            ["Clark Nelson","Clark's page link","Assist in production"]],
        links:["https://music.apple.com/us/album/imperfect-single/1792070967","https://open.spotify.com/track/3F99wb5iApVXJKCq2aX8SS?si=a47f49898fa34f64","https://music.youtube.com/watch?v=JncMazDeJXg&si=0eLubj_yjEFITEyO"]
    },
    "darlingGirl":{
        //calebbbbb please filll this in
        image: "imgs/DarlingGirl.jpeg",
        blurryImg:"imgs/DGBlur.png",
        title: "Darling Girl",
        releaseDate: "March 28, 2025 (Under Ella Markwald)",
        genre: "Pop",
        about:".........",
        lyrics:"idk it says darling girl at som point",
        credits:[["Ella Markwald", "Ella's page link", "Melody, Lyrics, Vocals"],
            ["Aidan McCarel", "Caleb's page","Guitar"],
            ["Austin Windau", "Caleb's page","Bass Guitar"],
            ["Caleb Flores", "Caleb's page","Production"],
            ["Clark Nelson", "Caleb's page","Piano, Assist in production"],],
        links:["https://music.apple.com/us/song/darling-girl/1802281141","https://open.spotify.com/track/2mqf0xVx8FMzzSKG6wgofP?si=204f4e87941a4a84","https://music.youtube.com/watch?v=8CxzF_N55uY&si=hQbT_YKq-siDjpto"]
    },
    "manInSpace":{
        //calebbbbb please filll this in
        image: "imgs/ManInSpaceFinal.png",
        blurryImg:"imgs/MISBlur.png",
        title: "Man In Space (Close To You)",
        releaseDate: "February 14, 2025",
        genre: "Jungle/Drum and Bass",
        about:".........",
        lyrics:"N/A",
        credits:[["Cooper", "Cooper's page","Melody, Production"]],
        links:["https://music.apple.com/us/song/man-in-space-close-to-you/1795380990","https://open.spotify.com/track/5soxVCjsuNG7t0iMxI0sXh?si=54bbe34fc54f4d56","https://music.youtube.com/watch?v=6si9U9UFmZc&si=8jE3HBwG4N7kRdQQ"]
    }
}
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


/*
setting elements
*/
songDivEl.style.backgroundImage = `url('${song.blurryImg}')`;
imgEl.src = song.image;
titleEl.innerHTML = song.title;
console.log(detailEls.entries);
detailEls[0].innerHTML = song.releaseDate;
detailEls[1].innerHTML = song.genre;
detailEls[2].innerHTML = song.about;
detailEls[3].innerHTML = song.lyrics;
detailEls[4].innerHTML = "";
song.credits.forEach(cred => {
    detailEls[4].innerHTML += "<a href="+cred[1]+">"+cred[0]+":</a> "+cred[2]+"<br>";
});

for(i=0; i < links.length; i++){
    links[i].setAttribute("href", song.links[i]);
}
