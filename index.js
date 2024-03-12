
var i=0;

function respondToKey(instrument)
{
    var audio;
    switch(instrument)
    {
         case 'w': audio=new Audio("sounds/tom-1.mp3");
         break;
         case 'a': audio=new Audio("sounds/tom-2.mp3");
         break;
         case 's': audio=new Audio("sounds/tom-3.mp3");
         break;
         case 'd': audio=new Audio("sounds/tom-4.mp3");
         break;
         case 'j': audio=new Audio("sounds/snare.mp3");
         break;
         case 'k': audio=new Audio("sounds/crash.mp3");
         break;
         case 'l': audio=new Audio("sounds/kick-bass.mp3");
 
         default: console.log(instrument);
    }
    audio.play();
}

function buttonAnimation(instrument)
{
    // adding the class
    document.querySelector("."+instrument).classList.add("pressed");

    //after some time we have to remove this class
    setTimeout(function()
    {
        document.querySelector('.'+instrument).classList.remove("pressed");
    },100);

}

while(i<document.querySelectorAll(".drum").length){
document.querySelectorAll("button")[i].addEventListener("click",function(){
        respondToKey(this.innerHTML);
        buttonAnimation(this.innerHTML);
});
i++;
}

document.addEventListener("keydown",function(event)
{
    respondToKey(event.key);
    buttonAnimation(event.key);
})

