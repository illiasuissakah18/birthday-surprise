const button = document.getElementById("enter");


button.onclick = () => {


    document.body.classList.add("travel");


    button.innerHTML = "✨ Entering My Heart...";


    setTimeout(()=>{


        document.body.classList.add("fade-out");

setTimeout(()=>{

window.location.href="universe.html";

},1500);


    },3000);


};
if(navigator.vibrate){

navigator.vibrate(100);

}
const enterButton = document.getElementById("enter");

enterButton.addEventListener("click", () => {
    window.location.href = "universe.html";
});