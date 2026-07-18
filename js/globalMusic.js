const music = document.createElement("audio");

music.src = "music/birthday.mp3";
music.loop = true;
music.volume = 0.4;


// Restore previous time
const savedTime = localStorage.getItem("musicTime");

if(savedTime){
    music.currentTime = savedTime;
}


// Auto play
window.addEventListener("load",()=>{

    music.play()
    .catch(()=>{

        document.addEventListener("click",()=>{

            music.play();

        }, {once:true});

    });

});


// Save position before leaving page

setInterval(()=>{

    localStorage.setItem(
        "musicTime",
        music.currentTime
    );

},1000);