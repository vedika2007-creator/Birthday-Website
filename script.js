// Get all slides
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;


// NEXT SLIDE FUNCTION
function nextSlide(){

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = slides.length - 1;
}

slides[currentSlide].classList.add("active");


// MUSIC CONTROL
let bgMusic = document.getElementById("bgMusic");

// Memory slide is the 5th slide (index 4)
if(currentSlide === 4){
bgMusic.pause();
}else{
bgMusic.play();
}

}


// CANDLE BLOW FUNCTION
function blowCandle(){

const candle = document.getElementById("candle");
const smoke = document.getElementById("smoke");

if(candle && smoke){
candle.style.opacity = "0";
smoke.style.opacity = "1";
}

alert("✨ Make your birthday wish! 🎂");

}


// OPEN LETTER FUNCTION
function openLetter(){

const envelope = document.querySelector(".envelope");

if(envelope){
envelope.classList.add("open");
}

}


// START MUSIC AFTER USER CLICK (Browser restriction fix)
document.addEventListener("click", function () {

let music = document.getElementById("bgMusic");

if(music && music.paused){
music.play();
}

});


// FEEDBACK FUNCTION
function submitFeedback(){

let message = document.getElementById("feedback").value;

if(message.trim() !== ""){

alert("Thank you for your opinion! 💖");

}else{

alert("Please write something 😊");

}

}


// GO BACK TO HOME PAGE
function goHome(){

slides[currentSlide].classList.remove("active");

currentSlide = 0;

slides[currentSlide].classList.add("active");

let bgMusic = document.getElementById("bgMusic");

if(bgMusic){
bgMusic.play();
}

}