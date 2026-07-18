// =======================================
// GLOBAL BIRTHDAY MUSIC SYSTEM
// =======================================

const music = new Audio();

music.src = "music/background.mp3";

music.loop = true;

music.volume = 0.4;



// Save music position
function saveMusicPosition(){

    localStorage.setItem(
        "musicTime",
        music.currentTime
    );

}



// Restore previous position

const savedTime =
localStorage.getItem("musicTime");


if(savedTime){

    music.currentTime =
    Number(savedTime);

}



// Try automatic play

window.addEventListener("load",()=>{


    music.play()
    .then(()=>{

        console.log("Music started");

    })
    .catch(()=>{


        console.log(
        "Autoplay blocked - waiting for user click"
        );


        document.addEventListener(
        "click",
        ()=>{

            music.play();

        },
        {once:true}
        );


    });


});



// Save every second

setInterval(()=>{

    saveMusicPosition();

},1000);