const songs = {
    "imperfect":{
        image: "imgs/Imperfect Final.png",
        blurryImg:"imgs/ImperfectBlur.png",
        title: "Imperfect",
        releaseDate: "January 24, 2025",
        genre: "Ballad",
        about:"Imperfect was the first song by The Dorm Collective, written by Caleb and Aidan during their first semester at Belmont. Recorded and released at the beginning of their second semester, it kickstarted The Dorm Collective’s journey. This heartfelt song explores how flaws can create deep, meaningful relationships. It opens with one person dreaming of an ideal version of themselves and the perfect relationship. In responce, another voice comes and reassures them that these imperfections are what make them human and worthy of love. The final moments of the song emphasize unity and the authenticity of relationships. It ends with shared realization that no one can be everything on their own - we all need someone by our side.",
        lyrics:"V1<br>If I was perfect<br>I’d be everything you need my love<br>I don’t know how<br>We’d be together<br>I wouldn’t miss you<br>I’d be holding you right now<br><br>C1<br>With your head on my shoulder,<br>we’d stay here forever<br>You and I, to the end, <br>we’d grow old together<br><br>V2<br>If you were perfect<br>You wouldn’t need me<br>My dream is everything you bring<br>I’m right here waiting<br>Don’t leave me here all on my own<br>You are everything to me<br><br>C2<br>I won’t let you go, through this alone, <br>I’m by your side, through the stormy weather<br>With you I’m there, all the way, <br>Either through worse or better<br><br>[Instrumental Bridge]<br><br>V3<br>We can be perfect<br>I’m here for you, and that won’t change<br>Imperfect hearts with no restraints<br><br>C3<br>No one can be, everything, by themself, we all need somebody<br>I’m right here, by your side, lay you feelings on me<br><br>C4<br>No one can be, everything, by themself, we all need somebody<br>Look beyond, what’s imperfect, you will be set free<br><br>Hook<br>You can’t be perfect, but we’re still worth it<br>Cuz in your own way, you are perfect",
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
        lyrics:"V1<br>She’s got a dark cherry red wine vintage aesthetic <br>And a monarch butterfly tattoo on her neck <br>Her long painted black nails that match her corset<br>She runs them through her short hair that’s secretly synthetic<br>I’ve dug through many layers <br>To try and get to know her <br>But I still feel like a stranger <br>I guess I must look harder<br>To break through that demeanor<br>Cuz I ain’t saving her for later<br><br>V2<br>And every weekday morning she’ll go to the gym<br>So deep down she can convince herself that she’s good-looking<br>And on all her dating apps she hides behind a pseudonym<br>Cuz she’s scared to be vulnerable and face rejection<br>I wish one day she’d see<br>The nature of her beauty<br>But right now she can't believe<br>That her life could have a meaning<br>I know she could achieve<br>The dreams she’s always dreaming<br><br>Chorus<br>Oh darling girl <br>You’ve got so much love<br>That follows you everywhere<br>You’re not alone<br>Don’t focus on your flaws<br>Your friends are going nowhere<br>And darling girl<br>It will take some time<br>To find who you want to be<br>But trust yourself<br>An inimitable design<br>You’re meant to be unique<br><br>V3<br>Her favorite season’s spring she’s got mixed feelings on fall<br>That’s when her depression hits and clouds all her thoughts<br>And winter isn't better so it's a downward spiral<br>Until March arrives and her mind can be gentle<br>So I’ll hold her close<br>Through the bitter cold<br>And promise not to let go<br>Cuz she only knows<br>How to be alone<br>But with each other, we can grow<br><br>[Chorus]<br><br>Bridge<br>And like a reborn phoenix <br>You were set ablaze <br>From the ashes you rose up <br>Beneath the sunlight rays<br>And maybe you can't see it<br>But these are better days<br>Emerging from the shadows<br>Your heart and soul have changed<br>And I know I know it’s been hard<br>But you’ve grown in so many ways<br>I can't wait to see what you become<br>As you never cease to amaze<br><br> [Chorus]<br><br>",
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
        lyrics:"",
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

for(i=0; i < links.length; i++){
    links[i].setAttribute("href", song.links[i]);
}
