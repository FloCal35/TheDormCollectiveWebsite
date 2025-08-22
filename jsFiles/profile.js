const people={
    "caleb":{
        Img: "imgs/CalebProfile.png",
        Name: "Caleb Flores",   
        Instrument: "Voice, Producer/DAW",
        Major: "Music Production",
        About: "Caleb Flores is a music major at Belmont University. His musical journey started at the age of 4 where he began his 14 year violin journey. A few years later, he began his 10 year career in the Birmingham Boys Choir. In high school, he travelled the country (and globe) as a saxaphone section leader for the Homewood Patriot Marching Band and a singer/dancer for The Network show choir. Performance isn’t the only aspect of music he enjoys. He was trained by a previous Belmont graduate in Audio Engineering Technology and has been able to work for clients in multiple venues like The Fisher Center. The Dorm Collective is special to him because collaboration is what brings out his creative spark.",
        Email: "flocal35@outlook.com",
        Songs: ["endOfTheRoad","imperfect","darlingGirl","odeToLife","whenShesThere","movement"]
    },
    "aidan":{
        Img: "imgs/AidanProfile.png",
        Name: "Aidan McCarel",
        Instrument: "Guitar",
        Major: "Commercial Guitar",
        About:"Aidan McCarel, a guitarist at Belmont University, plays all different varieties of styles and genres but succeeds heavily in making music that makes people turn the radio off. Although he lives in Philedelphia, he is a native of Ohio and a die hard Cleveland Browns fan (He “Will absolutely tattoo his body once they win a championship”). Aidan has been writing music for the better part of 4 years and has always had a passion working with and being around people. He shares a bathroom with the members of the Dorm Collective during the Fall and Spring semester",
        Email:"",
        Songs: ["endOfTheRoad","imperfect","darlingGirl","odeToLife","muddyWaters","whenShesThere","movement"]
    },
    "cooper":{
        Img: "imgs/CooperProfile.png",
        Name: "Cooper Chu",
        Instrument: "Producer/DAW",
        Major: "Audio Engineering Technology",
        About:"Cooper is a producer and audio engineer at Belmont University. A native of Chicago, he is a fan of electonic music, specifically dubstep and drum and bass. He is still trying to figure out which genre he produces best but is also helping produce for The Dorm Collective.",
        Email:"",
        Songs: ["manInSpace","muddyWaters"]
    },
    "austin":{
        Img: "imgs/AustinProfile.png",
        Name: "Austin Windau",
        Instrument: "Bass Guitar",
        Major: "Music Business",
        About: "Austin Windau is a bassist at Belmont University. His musical path started in 6th grade in his hometown of Westlake, Ohio. He’s been into music since a young age and started out as a school of rock kid. Throughout high school, he spent most of his time practicing and teaching himself everything about music. In college, he’s a part of several groups: The Dorm Collective, Scuffed Animals, and The Lizzies.  He is currently in college figuring out where in the music world he fits best.",
        Email:"",
        Songs: ["endOfTheRoad","darlingGirl","movement"]
    },
    "dean":{
        Img:"imgs/DeanProfile.JPG",
        Name:"Dean Marino",
        Instrument: "Voice",
        Major: "Commercial Music",
        About: "Dean Marino is an exciting upcoming act from Belmont University. His catalog consists of 7 albums and hundreds of songs. A native of Sugar Land, Texas, Dean would describe his music as somewhere between Billy Joel and Carly Rae Jepsen, though he collects new influences often. Dean is thrilled to be working so closely with The Dorm Collective on various projects and thinks that collaboration is what makes music incredible.",
        Email:"",
        Songs: ["endOfTheRoad"]
    },
    "ari":{
        Img:"imgs/AriProfile.png",
        Name: "Ari Lucas",
        Instrument:"Voice",
        Major: "Commercial Voice",
        About: "Ari Andelman is a songwriter at Belmont University from Washington, D.C. So far, he has released his first single, “Step Out the Frame”, and is working at the Musicians Corner festival as an Audio Engineering intern for the summer. The Dorm Collective is something that he is proud to have collaborated with, and he hopes to work on more projects with these talented musicians in the upcoming years.",
        Email:"",
        Songs: ["odeToLife"]
    },
    "ella":{
        Img:"imgs/EllaProfile.png",
        Name: "Ella Markwald",
        Instrument:"Voice",
        Major: "Music Composition",
        About: "Ella Markwald is a musician originally from Milwaukee, Wisconsin. She currently resides in Nashville, Tennessee, while studying Music Composition, Music Theory, and Music Business at Belmont University. She’s been singing and playing the violin since age 6, and has been writing songs since middle school. ",
        Email:"",
        Songs: ["imperfect","darlingGirl","muddyWaters","movement"]
    },
    "carter":{
        Img:"imgs/CarterProfile.png",
        Name: "Carter Davidson",
        Instrument:"Guitar",
        Major: "Commercial Guitar",
        About: "Carter’s music journey began at the age of 4, when he received his first guitar as a Christmas present. Living in Atlanta, Georgia, he began to study under award-winning artist Eliot Bronson who at the time was an up and coming songwriter. Carter’s mom began to take him to concerts of country stars which serve as inspiration for his musical identity. Through the years, Carter has stumbled upon numerous other sources of inspiration and his list of influences now grows larger by the day. While Carter’s sound currently reflects a pop singer-songwriter style, almost all of his influences find their way into his music in one way or another. Carter has performed at distinguished venues like Eddie's Attic and Cadence Bank Amphitheatre, shared the stage with acclaimed musicians including John Driscoll Hopkins (of the Zac Brown Band), and Brian Brasher (of Creed), and raised over $50,000 for Children's Healthcare of Atlanta Hospital through yearly solo concerts. Additionally, he has recently released his debut single recorded with two-time Grammy winning producer Don McCollister.",
        Email:"",
        Songs: ["endOfTheRoad","whenShesThere"]
    },
    "clark":{
        Img:"imgs/Clark.png",
        Name: "Clark Nelson (MythSix)",
        Instrument:"Piano, Producer/DAW",
        Major: "Commercial Piano",
        About: "Clark (Myth Six) is an artist/producer who creates imaginative and sonically rich electronic music. He began his music production journey by uploading beats to SoundCloud, and quickly built notoriety as a composer within an online game development community. He has worked with The Dorm Collective as a pianist and an assistant producer.",
        Email:"",
        Songs: ["imperfect","darlingGirl","odeToLife","whenShesThere","movement"]
    }
}

const person = people[new URLSearchParams(window.location.search).get("name")];

/*
getting elements
*/
const picEl = document.getElementById("profilePic");
const nameEl = document.getElementById("name");
const detEls = document.querySelectorAll("div.left span");
const tabEl = document.getElementById("tabTitle")

/*
setting elements
 */
picEl.src= person.Img;
nameEl.innerHTML = person.Name;
tabEl.innerHTML = person.Name;
detEls[0].innerHTML = person.Instrument;
detEls[1].innerHTML = person.Major;
detEls[2].innerHTML = person.About;
detEls[3].innerHTML = person.Email;
