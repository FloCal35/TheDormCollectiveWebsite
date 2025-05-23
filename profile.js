const people={
    "caleb":{
        Img: "imgs/CalebProfile.png",
        Name: "Caleb Flores",   
        Instrument: "Voice, Producer/DAW",
        Major: "Music Production",
        About: "Caleb Flores is a music major at Belmont University. His musical journey began at the age of 4 where he began his 14 year violin journey. A few years later, he began his 10 year career in the Birmingham Boys Choir. In high school, he travelled the country (and globe) as a saxaphone section leader for the Homewood Patriot Marching Band and a singer/dancer and historian for The Network show choir. Performance isn’t the only aspect of music he enjoys. He was trained by a previous Belmont graduate in Audio Engineering Technology and has been able to work for clients in multiple venues. The Dorm Collective is special to him because collaboration is what brings out his creative spark.",
        Email: "flocal35@outlook.com"
    },
    "aidan":{
        Img: "imgs/AppleMusic.jpg",
        Name: "Aidan McCarel",
        Instrument: "Guitar",
        Major: "Commercial Guitar",
        About:"Aidan McCarel, a guitarist at Belmont University, plays all different varieties of styles and genres but succeeds heavily in making music that makes people turn the radio off. Although he lives in Philedelphia, he is a native of Ohio and a die hard Cleveland Browns fan (He “Will absolutely tattoo his body once they win a championship”). Aidan has been writing music for the better part of 4 years and has always had a passion working with and being around people. He shares a bathroom with the members of the Dorm Collective during the Fall and Spring semester",
        Email:""
    },
    "cooper":{
        Img: "imgs/AppleMusic.jpg",
        Name: "Cooper Chu",
        Instrument: "Producer/DAW",
        Major: "Audio Engineering Technology",
        About:"I am a guy",
        Email:"dont contaxt me"
    },
    "austin":{
        Img: "imgs/AustinProfile.png",
        Name: "Austin Windau",
        Instrument: "Bass Guitar",
        Major: "Commercial Bass Guitar",
        About: "Austin Windau is a bassist at Belmont University. His musical path started in 6th grade in his hometown of Westlake, Ohio. He’s been into music since a young age and started out as a school of rock kid. Throughout high school, he spent most of his time practicing and teaching himself everything about music. In college, he’s a part of several groups: The Dorm Collective, Scuffed Animals, and The Lizzies.  He is currently in college figuring out where in the music world he fits best.",
        Email:""
    },
    "dean":{
        Img:"imgs/deanProfile.JPG",
        Name:"Dean Marino",
        Instrument: "Voice",
        Major: "Commercial Music",
        About: "Dean Marino is one of the most exciting upcoming acts from Belmont University. His catalog consists of 7 albums and hundreds of songs, all of which have been released to much acclaim from audiences of all varieties. A native of Sugar Land, Texas, Dean would describe his music as somewhere between Billy Joel and Carly Rae Jepsen, though he collects new influences often. Dean is thrilled to be working so closely with The Dorm Collective on various projects and thinks that collaboration is what makes music incredible.",
        Email:""
    },
    "ari":{
        Img:"imgs/AriProfile.png",
        Name: "Ari Lucas",
        Instrument:"Voice",
        Major: "Commercial Voice",
        About: "Ari Andelman is a songwriter at Belmont University from Washington, D.C. His notable accolades include placing 2nd in the Vocal Arts Society Competition, performing with the Temple Choir in Nashville, singing a solo in Sounds of Belmont at the Fisher Center, and performing as a lead role in the opera, The Gondoliers, at the Duke Ellington School of the Arts. So far, he has released his first single, “Step Out the Frame”, and is working at the Musicians Corner festival as an Audio Engineering intern for the summer. The Dorm Collective is something that he is proud to have collaborated with, and he hopes to work on more projects with these talented musicians in the upcoming years.",
        Email:""
    }
}

const person = people[new URLSearchParams(window.location.search).get("name")];

/*
getting elements
*/
const imgEl = document.getElementById("profilePic");
const nameEl = document.getElementById("name");
const detailEls = document.querySelectorAll("div.left span");

/*
setting elements
 */
imgEl.src= person.Img;
nameEl.innerHTML = person.Name;
detailEls[0].innerHTML = person.Instrument;
detailEls[1].innerHTML = person.Major;
detailEls[2].innerHTML = person.About;
detailEls[3].innerHTML = person.Email;
