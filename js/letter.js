const text = `

My bae Kwaku Bonsam ❤️,


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


const output = document.getElementById("letterText");

let index = 0;


function typeLetter(){

    if(index < text.length){

        output.textContent += text.charAt(index);

        index++;


        // slower and smoother typing
        setTimeout(typeLetter, 90);

    }

}


typeLetter();



// Continue button

const continueBtn = document.getElementById("continue");


continueBtn.onclick = ()=>{

    document.body.classList.add("fade-out");


    setTimeout(()=>{

        window.location.href="final.html";

    },1500);

};