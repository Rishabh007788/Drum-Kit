
var allbuttons = document.querySelectorAll(".drum").length;
for(var i = 0; i<allbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
       
    });
}


document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
 
});

function makesound(key){
    switch(key){

        case "A":
            var tom1 = new Audio("./sound/tom-1.mp3");
            tom1.play();
            break;
        case "S":
            var tom2 = new Audio("./sound/tom-2.mp3");
            tom2.play();
            break;
        case "D":
            var tom3 = new Audio("./sound/tom-3.mp3");
            tom3.play();
            break;
        case "J":
            var snare = new Audio("./sound/snare.mp3");
            snare.play();
            break;
        case "K":
            var crash = new Audio("./sound/crash.mp3");
            crash.play();
            break;
        case "L":
            var kick = new Audio("./sound/kick-bass.mp3");
            kick.play();
            break;  
        case "a":
            var tom1 = new Audio("./sound/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio("./sound/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio("./sound/tom-3.mp3");
            tom3.play();
            break;
        case "j":
            var snare = new Audio("./sound/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sound/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sound/kick-bass.mp3");
            kick.play();
            break; 
        default: console.log(buttonInnerHTML);
    }
}



function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}