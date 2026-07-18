const music = document.getElementById("bgMusic");
const button = document.getElementById("musicStart");


// Try automatic play
window.addEventListener("load",()=>{

    music.muted = false;

    music.play()
    .then(()=>{

        button.style.display="none";

    })
    .catch(()=>{

        button.style.display="block";

    });

});


// If browser blocks it
button.onclick = ()=>{

    music.muted=false;

    music.play();

    button.style.display="none";

};