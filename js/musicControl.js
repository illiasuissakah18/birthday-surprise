const music =
document.getElementById(
"backgroundMusic"
);


const button =
document.getElementById(
"musicControl"
);



button.onclick=()=>{


if(music.paused){


music.play();


button.innerHTML="🔊";


}

else{


music.pause();


button.innerHTML="🔇";


}


};