const heart = document.getElementById("heart");


// =================================
// RESPONSIVE PERFORMANCE SETTINGS
// =================================

const isMobile = window.innerWidth <= 768;

const orbitCount = isMobile ? 40 : 70;
const heartCount = isMobile ? 70 : 120;
const particleCount = isMobile ? 50 : 100;



// =================================
// ORBITING HEARTS
// =================================

for(let i = 0; i < orbitCount; i++){

    const small = document.createElement("div");

    small.className = "orbit-heart";

    small.innerHTML = "❤️";


    let distance =
    isMobile 
    ? 100 + Math.random()*150
    : 150 + Math.random()*220;


    small.style.setProperty(
        "--distance",
        distance+"px"
    );


    small.style.animationDuration =
    (8 + Math.random()*10)+"s";


    small.style.animationDelay =
    Math.random()*3+"s";


    heart.appendChild(small);

}



// =================================
// BIG HEART FORMATION
// =================================

for(let i = 0; i < heartCount; i++){

    const small =
    document.createElement("div");


    small.className =
    "small-heart";


    small.innerHTML="❤️";


    small.style.opacity="0";


    setTimeout(()=>{

        small.style.opacity="1";

    },Math.random()*2000);


    heart.appendChild(small);

}




// =================================
// GALAXY PARTICLES
// =================================

const particles =
document.getElementById("particles");


for(let i=0;i<particleCount;i++){

    const p =
    document.createElement("div");


    p.className =
    "galaxy-particle";


    p.style.left =
    Math.random()*100+"%";


    p.style.top =
    Math.random()*100+"%";


    p.style.animationDuration =
    (8+Math.random()*8)+"s";


    particles.appendChild(p);

}




// =================================
// LOVE MESSAGE ANIMATION
// =================================

const messages =
document.querySelectorAll(".love-message");


messages.forEach((msg,index)=>{

    msg.style.opacity="0";


    setTimeout(()=>{

        msg.style.transition="2s";

        msg.style.opacity="1";


    },3000 + index*1200);

});




// =================================
// NEXT PAGE
// =================================

setTimeout(()=>{

window.location.href="letter.html";

},15000);