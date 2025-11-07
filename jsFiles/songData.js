/*
data about each song
*/

//album/ep song lists:
const tnsmSongs = [["odeToLife","An Ode to Life"],["muddyWaters", "Muddy Waters"],["whenShesThere","When She's There"],["movement","Movement"]];

//master list of songs, eps, and albums
const songs = {
    "imperfect":{
        image: "imgs/Imperfect Final.png",
        blurryImg:"imgs/ImperfectBlur.png",
        title: "Imperfect",
        releaseDate: "January 24, 2025",
        genre: "Ballad/Singer-Songwriter",
        about:"Imperfect was the first song by The Dorm Collective, written by Caleb and Aidan during their first semester at Belmont. Recorded and released at the beginning of their second semester, it kickstarted The Dorm Collective’s journey. This heartfelt song explores how flaws can create deep, meaningful relationships. It opens with one person dreaming of an ideal version of themselves and the perfect relationship. In responce, another voice comes and reassures them that these imperfections are what make them human and worthy of love. The final moments of the song emphasize unity and the authenticity of relationships. It ends with shared realization that no one can be everything on their own - we all need someone by our side.",
        lyrics:"V1<br>If I was perfect<br>I’d be everything you need my love<br>I don’t know how<br>We’d be together<br>I wouldn’t miss you<br>I’d be holding you right now<br><br>C1<br>With your head on my shoulder,<br>we’d stay here forever<br>You and I, to the end, <br>we’d grow old together<br><br>V2<br>If you were perfect<br>You wouldn’t need me<br>My dream is everything you bring<br>I’m right here waiting<br>Don’t leave me here all on my own<br>You are everything to me<br><br>C2<br>I won’t let you go, through this alone, <br>I’m by your side, through the stormy weather<br>With you I’m there, all the way, <br>Either through worse or better<br><br>[Instrumental Bridge]<br><br>V3<br>We can be perfect<br>I’m here for you, and that won’t change<br>Imperfect hearts with no restraints<br><br>C3<br>No one can be, everything, by themself, we all need somebody<br>I’m right here, by your side, lay you feelings on me<br><br>C4<br>No one can be, everything, by themself, we all need somebody<br>Look beyond, what’s imperfect, you will be set free<br><br>Hook<br>You can’t be perfect, but we’re still worth it<br>Cuz in your own way, you are perfect",
        credits:[["Aidan McCarel", "profile.html?name=aidan","Music, Acoustic Guitar"], 
            ["Caleb Flores", "profile.html?name=caleb", "Lyrics, Vocals, Production"],
            ["Ella Markwald","profile.html?name=ella","Vocals, Assist in lyrics"],
            ["Clark Nelson","profile.html?name=clark","Assist in production"]],
        links:["https://music.apple.com/us/album/imperfect-single/1792070967","https://open.spotify.com/track/3F99wb5iApVXJKCq2aX8SS?si=a47f49898fa34f64","https://music.youtube.com/watch?v=JncMazDeJXg&si=0eLubj_yjEFITEyO"]
    },
    "darlingGirl":{
        image: "imgs/DarlingGirl.jpeg",
        blurryImg:"imgs/DGBlur.png",
        title: "Darling Girl",
        releaseDate: "March 28, 2025 (Under Ella Markwald's artist name)",
        genre: "Pop",
        about:"Darling Girl is a song written by Ella Markwald featuring members of The Dorm Collective. 'Darling Girl was written to my younger self, a girl who continuously tried to be someone she wasn’t. It’s an uplifting song that encourages listeners to be their authentic selves.' -Ella",
        lyrics:"V1<br>She’s got a dark cherry red wine vintage aesthetic <br>And a monarch butterfly tattoo on her neck <br>Her long painted black nails that match her corset<br>She runs them through her short hair that’s secretly synthetic<br>I’ve dug through many layers <br>To try and get to know her <br>But I still feel like a stranger <br>I guess I must look harder<br>To break through that demeanor<br>Cuz I ain’t saving her for later<br><br>V2<br>And every weekday morning she’ll go to the gym<br>So deep down she can convince herself that she’s good-looking<br>And on all her dating apps she hides behind a pseudonym<br>Cuz she’s scared to be vulnerable and face rejection<br>I wish one day she’d see<br>The nature of her beauty<br>But right now she can't believe<br>That her life could have a meaning<br>I know she could achieve<br>The dreams she’s always dreaming<br><br>Chorus<br>Oh darling girl <br>You’ve got so much love<br>That follows you everywhere<br>You’re not alone<br>Don’t focus on your flaws<br>Your friends are going nowhere<br>And darling girl<br>It will take some time<br>To find who you want to be<br>But trust yourself<br>An inimitable design<br>You’re meant to be unique<br><br>V3<br>Her favorite season’s spring she’s got mixed feelings on fall<br>That’s when her depression hits and clouds all her thoughts<br>And winter isn't better so it's a downward spiral<br>Until March arrives and her mind can be gentle<br>So I’ll hold her close<br>Through the bitter cold<br>And promise not to let go<br>Cuz she only knows<br>How to be alone<br>But with each other, we can grow<br><br>[Chorus]<br><br>Bridge<br>And like a reborn phoenix <br>You were set ablaze <br>From the ashes you rose up <br>Beneath the sunlight rays<br>And maybe you can't see it<br>But these are better days<br>Emerging from the shadows<br>Your heart and soul have changed<br>And I know I know it’s been hard<br>But you’ve grown in so many ways<br>I can't wait to see what you become<br>As you never cease to amaze<br><br> [Chorus]<br><br>",
        credits:[["Ella Markwald", "Ella's page link", "Music, Lyrics, Vocals"],
            ["Aidan McCarel", "profile.html?name=aidan","Guitar"],
            ["Austin Windau", "profile.html?name=austin","Bass Guitar"],
            ["Clark Nelson", "profile.html?name=clark","Piano, Assist in production"],
            ["Caleb Flores", "profile.html?name=caleb","Production"]],
        links:["https://music.apple.com/us/song/darling-girl/1802281141","https://open.spotify.com/track/2mqf0xVx8FMzzSKG6wgofP?si=204f4e87941a4a84","https://music.youtube.com/watch?v=8CxzF_N55uY&si=hQbT_YKq-siDjpto"]
    },
    "manInSpace":{
        image: "imgs/ManInSpaceFinal.png",
        blurryImg:"imgs/MISBlur.png",
        title: "Man In Space (Close To You)",
        releaseDate: "February 14, 2025",
        genre: "Jungle/Drum and Bass",
        about:"Man In Space is an experimental song by Cooper Chu. Incorperating samples from rocket launches and the familier drum and bass beats, this song is meant to have a vibey feel.",
        lyrics:"",
        credits:[["Cooper Chu", "profile.html?name=cooper","Music, Production"]],
        links:["https://music.apple.com/us/song/man-in-space-close-to-you/1795380990","https://open.spotify.com/track/5soxVCjsuNG7t0iMxI0sXh?si=54bbe34fc54f4d56","https://music.youtube.com/watch?v=6si9U9UFmZc&si=8jE3HBwG4N7kRdQQ"]
    },
    /*aidan's ep*/
    "tillNightShowsMoon":{
        image: "imgs/TillNightFinal.png",
        blurryImg:"imgs/TillNightBlur.png",
        title: "Till Night Shows Moon (Aidan's EP)",
        releaseDate: "May 30, 2025",
        genre: "Ambient/Acoustic",
        about:"'As musicians we are constantly told to find and work on our sound. Though I believe this is true, we should also celebrate the sound that we have found. Till Night Shows Moon is a celebration of dorm room music, young aspiring artists and a sound that has taken me, well, to this point in my life. What it is in nature is what it sounds like, the celebration of creating and the attempt to match feeling with music' -Aidan",
        lyrics: tnsmSongs,
        credits:[["Aidan McCarel", "profile.html?name=aidan","Music, Lyrics, Guitar"],
            ["Caleb Flores", "profile.html?name=caleb","Production"],
            ["Cooper Chu", "profile.html?name=cooper","Production"],
            ["Ari Andelman", "profile.html?name=ari","Vocals"],
            ["Carter Davidson", "profile.html?name=carter","Guitar"],
            ["Ella Markwald", "profile.html?name=ella","Vocals"]],
        links:["https://music.apple.com/us/album/an-ode-to-life-pt-1-feat-ari-lucas/1814330186?i=1814330187","https://open.spotify.com/track/0CgcQtzoxARtL3FAFIpRhU?si=00e8121e57c8406a","https://music.youtube.com/playlist?list=OLAK5uy_nb-hYeGiqHF7ldrhqSrc1GJTmPKhNpzqY&si=DmVgO_fX8lX-3LD_"]
    },
    "odeToLife":{
        image: "imgs/TillNightFinal.png",
        blurryImg:"imgs/TillNightBlur.png",
        title: "An Ode To Life, Pt. 1 (feat. Ari Lucas)",
        releaseDate: "May 30, 2025",
        genre: "Ambient/Acoustic",
        about:"Ode to Life is a poem. Pure and simple. It’s not meant to be taken to literal and it’s not too vague where you are left sitting there with no freaking idea as to what Ari is singing about. This song is the inspiration behind the EP. It is labelled as a part one because it is half of a two part song. The second part will be released in the next EP.",
        lyrics:"Stay a bit oh lovely thing<br>Till night shows moon<br>I'll tell you all about my dreams<br>Though they are few<br>And we go about it wrong<br>We missed our queues<br>Take all we can<br>Nothing stays new<br><br>Stay a bit oh lovely thing<br>Till the dawn glows<br>I'll sit by you teach me all<br>That you know<br>We go about it wrong<br>There goes our life<br>While we watch it fall apart<br>Stay with me tonight<br><br>String along some words<br>To say<br>Slow down my friend<br>Take it day by day<br><br>And cherish these years<br>You couldn't hardly wait<br>Take in this world and breathe",
        credits:[["Aidan McCarel", "profile.html?name=aidan","Music, Lyrics, Guitar"],
            ["Ari Andelman", "profile.html?name=ari","Vocals"],
            ["Caleb Flores", "profile.html?name=caleb","Production"],
            ["Clark Nelson", "profile.html?name=clark","Assist in production"]],
        links:["https://music.apple.com/us/album/an-ode-to-life-pt-1-feat-ari-lucas/1814330186?i=1814330187","https://open.spotify.com/track/0CgcQtzoxARtL3FAFIpRhU?si=00e8121e57c8406a","https://music.youtube.com/watch?v=eflBz8zXQFY&si=OojtwHzXSmeWFmUp"]
    },
    "muddyWaters":{
        image: "imgs/TillNightFinal.png",
        blurryImg:"imgs/TillNightBlur.png",
        title: "Muddy Waters",
        releaseDate: "May 30, 2025",
        genre: "Ambient/Acoustic",
        about:"Muddy waters is a song about reflection. As a simple melody builds, so do the emotions that occur during the day. The song ends as all days do, with a drifting melody with cluttered noises attached, as we are never fully at peace.",
        lyrics:"",
        credits:[["Aidan McCarel", "profile.html?name=aidan","Music, Guitar"],
            ["Cooper Chu", "profile.html?name=cooper","Synthesizer, Production"],
            ["Ella Markwald", "profile.html?name=ella","Assist in music"]],
        links:["https://music.apple.com/us/album/muddy-waters/1814330186?i=1814330188","https://open.spotify.com/track/1YYDhodWMLp87hBRwJgiWU?si=a7dc5f4e6ed5411e","https://music.youtube.com/watch?v=ml3n07JFNIM&si=q8dWb7Ai7SXxx_t8"]
    },
    "whenShesThere":{
        image: "imgs/TillNightFinal.png",
        blurryImg:"imgs/TillNightBlur.png",
        title: "When She's There (feat. Carter Davidson)",
        releaseDate: "May 30, 2025",
        genre: "Ambient/Acoustic",
        about:"When She’s There is a Classical Guitar duet written simple and sweet, no aspects of it are amazingly revolutionary, yet it tells the story it’s aiming for, the realization of love and your own understanding of it.",
        lyrics:"",
        credits:[["Aidan McCarel", "profile.html?name=aidan","Music, Guitar"],
            ["Carter Davidson", "profile.html?name=carter","Music, Guitar, Production"],
            ["Caleb Flores", "profile.html?name=caleb","Production"],
            ["Clark Nelson", "profile.html?name=clark","Assist in production"]],
        links:["https://music.apple.com/us/album/when-shes-there-feat-carter-davidson/1814330186?i=1814330189","https://open.spotify.com/track/5JdLANtTJEa2oqAKdjQyga?si=1633a399a8dd4656","https://music.youtube.com/watch?v=efLSSNfRMLM&si=rBwfdUjc5-4FbmYX"]
    },
    "movement":{
        image: "imgs/TillNightFinal.png",
        blurryImg:"imgs/TillNightBlur.png",
        title: "Movement (feat. Ella Markwald) [Demo]",
        releaseDate: "May 30, 2025",
        genre: "Ambient/Acoustic",
        about:"Movement is a legacy project of Aidan's, and one of the first songs he wrote. He struggled for years to finish it and make sense of it. The words don’t make sense, the chord progression donesn't make sense, and its purpose… is still unknown to him. And yet, here it is, the vision of my 14 year old self, delivered by him and his friends. This song is labelled as a demo because this is not it's final version. Aidan has many plans to add to it, and make it a full song. But for now, this is the first step.",
        lyrics:"Why is it so hard<br>To write a simple line<br>It doesn't have to be mature,<br>It doesn't have to rhyme<br>Feelings, are temporary,<br>Nothing more permanent than that<br>Which I wrote this song,<br>Why I sing it for you<br><br>As the moon shines down and lights the nights scowl<br>You can lift me up with a simple smile<br>When your around<br>The bleeding goes away<br>Red turns to blue,<br>And the waters drift out way<br><br>As a space man flys for something new,<br>I'll travel through this life<br>With you, with you, only you",
        credits:[["Aidan McCarel", "profile.html?name=aidan","Music, Lyrics, Guitar, Vocals"],
            ["Ella Markwald", "profile.html?name=ella","Vocals"],
            ["Austin Windau", "profile.html?name=austin","Bass Guitar"],
            ["Caleb Flores", "profile.html?name=caleb","Production"],
            ["Clark Nelson", "profile.html?name=clark","Assist in music and production"]],
        links:["https://music.apple.com/us/album/movement-feat-ella-markwald-demo/1814330186?i=1814330190","https://open.spotify.com/track/2UcpSu1DLALRirSzrCeyTK?si=8463b0e1df3b443f","https://music.youtube.com/watch?v=WnexzfwG_aM&si=dsntt4snw2aleGp-"]
    },
    /*end of aidan's ep*/
    "endOfTheRoad":{
        image: "imgs/EndOfTheRoad.png",
        blurryImg:"imgs/EOTRBlur.png",
        title: "End of the Road",
        releaseDate: "July 25, 2025",
        genre: "Pop-Rock/Alternative",
        about:"“End of The Road” is a pop-rock anthem that explores the tension between fear and hope in a relationship. Written from the perspective of someone fighting to hold on, the song blends emotional vulnerability with defiant optimism. The lyric “This is not the end of the road” first came to Caleb during a quiet moment in class. It quickly became the foundation for the entire track. The song begins with a quiet sense of lament and uncertainty, but gradually shifts into a passionate plea. The bridge serves as a heartfelt turning point, a final cry not to let the story die. It ends with a reaffirmation that love can rise above fear. As repeated in the chorus, “End of The Road” is a reminder that relationships, even in their hardest moments, are worth fighting for.",
        lyrics:"Verse 1:<br>You’ve been tellin’ me from the start<br>That you’re afraid of a broken heart<br>Has the day finally arrived<br>I remember when you used to be nearer<br>Now I’m tryin’ to see our love a bit clearer<br>I just wanted us to survive<br><br>Chorus:<br>Woah (oh oh oh)<br>This is not the end of the road<br>Don’t let go<br>Even though your mind is telling you so<br>Don’t leave, me here<br>Don’t shed a single tear<br>Woah (oh oh oh)<br>This is not the end of the road<br><br>Verse 2:<br>I’ve been sayin’ since the day we met<br>I’m not the type of guy to feel regret<br>And you’re not gonna start it with me now<br>Don’t you remember when we used to be closer<br>Times have changed and we’re a little bit older<br>Didn’t know how to love you showed me how<br><br>Chorus:<br>Woah (oh oh oh)<br>This is not the end of the road<br>Hold me close<br>I know you miss that feelin’ of old<br>Don’t leave, me here<br>Don’t shed a single tear<br>All I know<br>This is not the end of the road<br><br>Bridge:<br>I gonna take your hand<br>Connect your heart with mine<br>Maybe this is love’s design for us<br>I know, you might be afraid<br>But baby so am I<br>We don’t have to let this story die<br>Don’t let this story die<br><br>Chorus:<br>Woah (oh oh oh)<br>This is not the end of the road<br>Hold me close<br>Let our happy ending unfold<br>Don’t leave, me here<br>We’ll rise above our fear<br>Don’t let go<br>This is not the end of the road",
        credits:[["Caleb Flores", "profile.html?name=caleb","Music, Lyrics, Vocals, Production"],
            ["Dean Marino", "profile.html?name=dean","Music, Lyrics, Vocals, Drums, Piano"],
            ["Carter Davidson", "profile.html?name=carter","Music"],
            ["Aidan McCarel", "profile.html?name=aidan","Electric Guitar"],
            ["Austin Windau", "profile.html?name=austin","Music, Assist in instrumantation"],
            ["Tyler Cuidon", "404.html","Assist in production"]],
        links:["https://music.apple.com/us/album/end-of-the-road-feat-dean-marino/1827707165?i=1827707166","https://open.spotify.com/track/7ioiFH2zJSixabqYGYHnNj?si=e937e5ae4006412a","https://youtu.be/hUSmARPI7E0?si=5eq37vX77eelRPeo"]
    },
    "dreamin":{
        image: "imgs/dreaminCover.png",
        blurryImg:"imgs/dreaminBlur.png",
        title: "dreamin",
        releaseDate: "November 7, 2025",
        genre: "Hip Hop/R&B",
        about:"None",
        lyrics:"She stuck in my head<br>I know that I cannot be her guy<br>I always dread<br>who Imma see layin by her side<br>I’m dreaming in bed<br>Watching the sea reflect off her eyes<br><br>I know it ain’t fair<br>I lost my chance, she’ll never be mine<br>No I should not dare<br>But sometimes I hope she might swing by<br>I’m dreaming in bed<br>We’re watching stars float through the night sky<br><br>And oh<br>I still can’t let you go<br>It’s unfair to you I know<br>So I lay in bed and float<br>To a dream where it’s you I hold<br><br>She stuck in my head<br>It feels like time will never pass by<br>I wish I had said<br>All the right things, I shouldn’t have told you lies<br>I’m dreaming in bed<br>Laughing with her, playing with fireflies",
        credits:[["Cooper Chu", "profile.html?name=cooper","Music, Lyrics, Vocals, Production"],
            ["Aidan McCarel", "profile.html?name=aidan","Electric Guitar"]],
        links:["https://music.apple.com/us/album/end-of-the-road-feat-dean-marino/1827707165?i=1827707166","https://open.spotify.com/track/7ioiFH2zJSixabqYGYHnNj?si=e937e5ae4006412a","https://youtu.be/hUSmARPI7E0?si=5eq37vX77eelRPeo"]
    }
}
