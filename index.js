var len=document.querySelectorAll("button").length

// detects buttonpress
for(var i=0;i<len;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){

    var inner=this.innerHTML;
    sound(inner);
    animation(inner);

  });//classes can also be used instead of drum

}

var audio;

// detects keypress
document.addEventListener("keydown", function (event) {
    sound(event.key);
    animation(event.key);
})


function sound(key) {
  switch (key) {
    case "w":
      audio=new Audio("sounds/crash.mp3");
      audio.play()
      break;
      case "a":
      audio-new Audio("sounds/kick-bass.mp3");
      audio.play()
      break;
      case "s":
      audio=new Audio("sounds/snare.mp3");
      audio.play()
      break;
      case "d":
      audio=new Audio("sounds/tom-1.mp3");
      audio.play()
      break;
      case "j":
      audio=new Audio("sounds/tom-2.mp3");
      audio.play()
      break;
      case "k":
      audio=new Audio("sounds/tom-3.mp3");
      audio.play()
      break;
      case "l":
      audio=new Audio("sounds/tom-4.mp3");
      audio.play()
      break;
    default:
      alert("none");
  }

}

function animation(variable){     //animation(event.key) gives the key pressed
  var ani = document.querySelector("." + variable);
  ani.classList.add("pressed");
  setTimeout(function(){
    ani.classList.remove("pressed");
  },150);
}


//   document.querySelector(".drum").addEventListener("click",function(){ alert("hello"); }); same as first

//   var audio= new Audio("sounds/crash.mp3");
//   audio.play();

//   function fun(){
//     console.log(this.innerHTML);
//     this.style.color="yellow"; this chamges the color of the letter when it's pressed
//   }
