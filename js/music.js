// =================================
// GLOBAL MUSIC SYSTEM
// =================================


let music = document.getElementById("backgroundMusic");


if(music){


    let savedTime =
    localStorage.getItem("musicTime");


    if(savedTime){

        music.currentTime =
        savedTime;

    }


    music.volume = 0.35;


    music.play()
    .catch(()=>{

        console.log(
        "Music waits for user interaction"
        );

    });



    setInterval(()=>{

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );


    },1000);

}