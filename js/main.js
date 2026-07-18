// =======================================
// COUNTDOWN SYSTEM
// =======================================

const unlockDate = new Date("July 18, 2026 00:00:00").getTime();


const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


function updateCountdown(){

    const now = new Date().getTime();

    const distance = unlockDate - now;


    if(distance <= 0){

        clearInterval(timer);

        document.querySelector(".container").innerHTML = `

        <h3>
        🎉 The Surprise Is Ready 🎉
        </h3>

        <h1>
        Happy Birthday Jeffrey ❤️
        </h1>

        <p>
        Your magical journey begins now...
        </p>

        `;


        setTimeout(()=>{

            window.location.href="heart.html";

        },5000);


        return;

    }


    const d = Math.floor(
        distance/(1000*60*60*24)
    );


    const h = Math.floor(
        (distance%(1000*60*60*24))/
        (1000*60*60)
    );


    const m = Math.floor(
        (distance%(1000*60*60))/
        (1000*60)
    );


    const s = Math.floor(
        (distance%(1000*60))/1000
    );


    days.textContent =
    String(d).padStart(2,"0");


    hours.textContent =
    String(h).padStart(2,"0");


    minutes.textContent =
    String(m).padStart(2,"0");


    seconds.textContent =
    String(s).padStart(2,"0");

}


let timer = setInterval(updateCountdown,1000);

updateCountdown();



// =======================================
// CREATE STARS
// =======================================


const starsContainer =
document.getElementById("stars");


for(let i=0;i<300;i++){

    const star =
    document.createElement("div");


    star.className="star";


    star.style.left =
    Math.random()*100+"%";


    star.style.top =
    Math.random()*100+"%";


    star.style.animationDelay =
    Math.random()*3+"s";


    star.style.width =
    Math.random()*3+"px";


    star.style.height =
    star.style.width;


    starsContainer.appendChild(star);

}



// =======================================
// FLOATING PARTICLES
// =======================================


const particles =
document.getElementById("particles");


for(let i=0;i<50;i++){


    const particle =
    document.createElement("div");


    particle.className="particle";


    particle.style.left =
    Math.random()*100+"%";


    particle.style.animationDuration =
    (5+Math.random()*10)+"s";


    particle.style.animationDelay =
    Math.random()*5+"s";


    particles.appendChild(particle);

}




// =======================================
// SHOOTING STARS
// =======================================


function createShootingStar(){


    const container =
    document.getElementById(
        "shooting-stars"
    );


    const star =
    document.createElement("div");


    star.className=
    "shooting-star";


    star.style.top =
    Math.random()*50+"%";


    star.style.left =
    Math.random()*50+"%";


    container.appendChild(star);



    setTimeout(()=>{

        star.remove();

    },4000);


}



setInterval(
    createShootingStar,
    3000
);
// =======================================
// BACKGROUND MUSIC CONTROL
// =======================================


const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");


music.volume = 0.4;


musicBtn.onclick = ()=>{


if(music.paused){

music.play();

musicBtn.innerHTML="🔊";

}

else{

music.pause();

musicBtn.innerHTML="🔇";

}


};



// =======================================
// FLOATING HEART GENERATOR
// =======================================


function createHeart(){


const heart =
document.createElement("div");


heart.className=
"floating-heart";


const hearts=[
"❤️",
"💖",
"💕",
"💗",
"💘"
];

heart.innerHTML =
hearts[
Math.floor(Math.random()*hearts.length)
];


heart.style.left =
Math.random()*100+"%";


heart.style.animationDuration =
(5+Math.random()*8)+"s";


heart.style.fontSize =
(15+Math.random()*30)+"px";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},12000);


}


setInterval(
createHeart,
800
);