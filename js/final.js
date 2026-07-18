const gift =
document.getElementById("gift");


const surprise =
document.getElementById("surprise");


const message =
document.getElementById("message");



gift.onclick = ()=>{


gift.style.display="none";


message.style.display="none";


surprise.classList.remove("hidden");

createFireworks();


};




// FIREWORK EFFECT


function createFireworks(){


const container =
document.getElementById("fireworks");


for(let i=0;i<100;i++){


const spark =
document.createElement("div");


spark.style.position="absolute";


spark.style.width="5px";

spark.style.height="5px";


spark.style.background="white";


spark.style.borderRadius="50%";


spark.style.left=
Math.random()*100+"%";


spark.style.top=
Math.random()*100+"%";


spark.animate([

{
transform:"scale(0)",
opacity:1
},

{
transform:"scale(8)",
opacity:0
}

],

{

duration:1500,

iterations:1

});


container.appendChild(spark);


}


}