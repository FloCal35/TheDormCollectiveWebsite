const songs = {
    "imperfect":{
        image: "imgs/Imperfect Final.png",
        title: "Imperfect",
        releaseDate: "January 24, 2025",
        genre: "Pop Ballad",
        about:"Imperfect was the first song by The Dorm Collective, written by Caleb and Aidan during their first semester at Belmont. Recorded and released at the beginning of their second semester, it kickstarted The Dorm Collective’s journey. This heartfelt song explores how flaws can create deep, meaningful relationships. It opens with one person dreaming of an ideal version of themselves and the perfect relationship. In responce, another voice comes and reassures them that these imperfections are what make them human and worthy of love. The final moments of the song emphasize unity and the authenticity of relationships. It ends with shared realization that no one can be everything on their own - we all need someone by our side.",
        lyrics:"V1 <br>If I was perfect <br>I’d be everything you need my love<br>I don’t know how<br>We’d be together<br>I wouldn’t miss you<br>I’d be holding you right now",
        credits:[["Aiden", "Aiden's page","Melody, Acoustic Guitar"], 
            ["Caleb Flores", "Caleb's page link", "Lyrics, Vocals, Production"],
            ["Ella Markwald","Ella's page link","Vocals, Assist in lyrics"],
            ["Clark Nelson","Clark's page link","Assist in production"]]
    },
    "darlingGirl":{
        //calebbbbb please filll this in
        image: "imgs/DarlingGirl.jpeg",
        title: "Darling Girl",
        releaseDate: "January 24, 2025",
        genre: "Pop Ballad",
        about:"ella likes girls",
        lyrics:"idk it says darling girl at som point",
        credits:[("Ella Markwald", "Ella's page link", "Vocals"), ("Caleb Flores", "Caleb's page","production?")]
    },
    "manInSpace":{
        //calebbbbb please filll this in
        image: "imgs/ManInSpaceFinal.png",
        title: "Man In Space",
        releaseDate: "February 14, 2025",
        genre: "techy instrumental",
        about:"Cooper likes music and space",
        lyrics:"N/A",
        credits:[("Cooper", "Cooper's page","idk")]
    }
}
const param = new URLSearchParams(window.location.search);
const song = songs[param.get("id")];

/*
getting elements
*/
const imgEl = document.getElementById("songImg");
const titleEl = document.getElementById("title");
const detailEls = document.querySelectorAll("p.song_info");
//to do: worry about links

/*
setting elements
*/
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