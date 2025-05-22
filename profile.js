const people={
    "caleb":{
        Img: "imgs/CalebProfile.png",
        Name: "Caleb Flores",   
        Instrument: "Voice, Producer/DAW",
        Major: "Music Production",
        About: "Caleb Flores is a music major at Belmont University. His musical journey began at the age of 4 where he began his 14 year violin journey. A few years later, he began his 10 year career in the Birmingham Boys Choir. In high school, he travelled the country (and globe) as a saxaphone section leader for the Homewood Patriot Marching Band and a dancer and historian for The Network show choir. Performance isn’t the only aspect of music he enjoys. He was trained by a previous Belmont graduate in Audio Engineering Technology and has been able to work for clients in multiple venues. The Dorm Collective is special to him because collaboration is what brings out his creative spark.",
        Email: "flocal35@outlook.com"
    },
    "aidan":{
        Img: "imgs/AppleMusic.jpg",
        Name: "Aidan McCarel",
        Instrument: "Guitar",
        Major: "Commercial Guitar",
        About:"",
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
