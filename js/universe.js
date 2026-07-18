const heart = document.getElementById("heart");


// Create orbiting hearts (reduced for mobile)
for(let i = 0; i < 50; i++){

    const small = document.createElement("div");

    small.className = "orbit-heart";

    small.innerHTML = "❤️";

    let distance = 120 + Math.random() * 180;

    small.style.setProperty(
        "--distance",
        distance + "px"
    );

    small.style.animationDuration =
    (8 + Math.random() * 10) + "s";

    small.style.animationDelay =
    Math.random() * 3 + "s";

    heart.appendChild(small);

}



// Create heart shape behind (reduced)
for(let i = 0; i < 80; i++){

    const small = document.createElement("div");

    small.className = "small-heart";

    small.innerHTML = "❤️";


    small.style.opacity = "0";


    setTimeout(()=>{

        small.style.opacity = "1";

    }, Math.random()*2000);


    heart.appendChild(small);

}



// Galaxy particles (reduced)
const particles =
document.getElementById("particles");


for(let i = 0; i < 60; i++){

    const p = document.createElement("div");

    p.className = "galaxy-particle";


    p.style.left =
    Math.random()*100 + "%";


    p.style.top =
    Math.random()*100 + "%";


    p.style.animationDuration =
    (8 + Math.random()*8) + "s";


    particles.appendChild(p);

}



// Love message entrance

const messages =
document.querySelectorAll(".love-message");


messages.forEach((msg,index)=>{

    msg.style.opacity="0";


    setTimeout(()=>{

        msg.style.transition="2s";

        msg.style.opacity="1";

    },3000 + index*1200);

});



// Move to letter page

setTimeout(()=>{

    window.location.href="letter.html";

},15000);