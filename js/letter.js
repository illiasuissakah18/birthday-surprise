const text = `

My bae kwaku bonsam ❤️,


Happy Birthday to you.


I want you to know that you are a very special person.


May your life always be filled with happiness,
success, good health, and endless blessings.


Thank you for being amazing.


I pray that God guides you,
protects you,
and makes your dreams come true.


Keep smiling and keep shining.


Happy Birthday My Kwaku Bonsam ❤️


I Love You Forever.


`;



const output =
document.getElementById("letterText");


let index=0;



function typeLetter(){


if(index < text.length){


output.innerHTML += text.charAt(index);


index++;


setTimeout(typeLetter,50);


}


}



typeLetter();



document.getElementById("continue").onclick=()=>{


document.body.classList.add("fade-out");

setTimeout(()=>{

window.location.href="final.html";

},1500);


};