const heart =
document.getElementById("heart");


// Create orbiting hearts

for(let i=0;i<150;i++){


const small =
document.createElement("div");


small.className =
"orbit-heart";


small.innerHTML="❤️";



let distance =
150 + Math.random()*300;



small.style.setProperty(
"--distance",
distance+"px"
);



small.style.animationDuration =
(5+Math.random()*15)+"s";



small.style.animationDelay =
Math.random()*5+"s";



heart.appendChild(small);


}




// Create heart shape behind

for(let i=0;i<200;i++){


const small =
document.createElement("div");


small.className =
"small-heart";


small.innerHTML="❤️";


let t =
Math.random()*Math.PI*2;



let x =
16*Math.pow(Math.sin(t),3);


let y =
13*Math.cos(t)
-5*Math.cos(2*t)
-2*Math.cos(3*t)
-Math.cos(4*t);



small.style.opacity = "0";

setTimeout(()=>{

small.style.opacity="1";

}, Math.random()*3000);


heart.appendChild(small);

}        


// Galaxy particles

const particles =
document.getElementById("particles");


for(let i=0;i<200;i++){


const p =
document.createElement("div");


p.className =
"galaxy-particle";


p.style.left =
Math.random()*100+"%";


p.style.top =
Math.random()*100+"%";


p.style.animationDuration =
(5+Math.random()*10)+"s";


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


},4000 + index*1500);


});
setTimeout(() => {
    window.location.href = "letter.html";
}, 15000);