const cards =
document.querySelectorAll(".memory-card");


cards.forEach(card=>{


card.onclick=()=>{


card.style.transform=
"scale(1.2) rotateY(0deg)";


card.style.zIndex="10";


};


});



document.getElementById("continue").onclick=()=>{


document.body.classList.add("fade-out");

setTimeout(()=>{

window.location.href="letter.html";

},1500);


};