function generateRandomColour()
{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;
}
let b= generateRandomColour(); 
console.log(b);

function setBackgroundColor()
{
    let bg= document.getElementById('ampm');
    let a = document.querySelector('.same');
    let b = document.querySelector('.same1');
    let c = document.querySelector('.same2');
    let m= document.querySelector('#watch1');
    b.style.backgroundColor=generateRandomColour();
    c.style.backgroundColor=generateRandomColour();
    m.style.backgroundColor=generateRandomColour();

    
  a.style.backgroundColor= generateRandomColour();

}
setInterval(setBackgroundColor,1000);



function settime() {
    // Current date and time
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    
    // AM/PM determination
    
   
    
    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;  // If hours is 0, set it to 12
    
    // Zero padding for minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;


  
    
   
    // Get elements to display time
    let hours1 = document.getElementById('hours');
    let minutes1 = document.getElementById('minut');
    let seconds1 = document.getElementById('second');

  
    // Update the HTML with the current time
    hours1.innerHTML = hours;
    minutes1.innerHTML = minutes;
    seconds1.innerHTML = seconds;

    

   
    
}

// Call settime function every 1000 milliseconds (1 second)
setInterval(settime, 1000);



let inervalid;
function addSound() {
    let audio = document.getElementById('audio');
    if (audio) {
        audio.play();
    }
}

function startsound()
{
     inervalid=setInterval(addSound, 1000);  
}

function stopSound()
{
    let audio = document.getElementById('audio');
    if(audio) {
        audio.pause();
    }
    if(inervalid)
    {
        clearInterval(inervalid);
    }
}
