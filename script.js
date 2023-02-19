
function playSound(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); //store audio elements
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); // store key elements
    
    //check for no audio to stop the function
    if(!audio) return; 
    
    //reset audio after keypress
    audio.currentTime = 0; 
    
    //play sound
    audio.play(); 

    //add playing class to key to use transform animation in CSS
    key.classList.toggle('playing'); 
}

//  Ensures that 'playing' class is removed after tranform animation is finished
function removeTransition(event) {
    if(event.propertyName !== "transform") return;
    this.classList.remove('playing');
}

// Loop through keys to remove 'playing' class with the removeTransition function
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// play sound on key press using playSound function
window.addEventListener('keydown', playSound);