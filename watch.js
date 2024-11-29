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

let scounter = 0;
let mcounter = 0; 
let hcounter = 0;
let intervelc;
function startime()
{
document.getElementById('second1').innerHTML=scounter;
document.getElementById('minut1').innerHTML=mcounter;
document.getElementById('hours1').innerHTML=hcounter;


if(mcounter<10){
    document.getElementById('minut1').innerHTML='0'+mcounter;
}

if(hcounter<10){
    document.getElementById('hours1').innerHTML='0'+hcounter;
}
scounter++;
if(scounter<10){
    document.getElementById('second1').innerHTML='0'+scounter;
}

if(scounter===60)
{
  scounter=0;
  mcounter++;
 
  if(mcounter===60)
  {
    mcounter=0;
  hcounter++;
  }
}

}

function settimer()
{
    intervelc= setInterval(startime,1000);
}


function stoptime()
{
if(intervelc)
{
 clearInterval(intervelc);
        
}
}


let timer;

// Function to start the countdown
function startCountdown() {
    // Get values from the input fields
    let hhh1 = document.getElementById("hhh").querySelector("input").value;
    let mmm1 = document.getElementById("mmm").querySelector("input").value;
    let sss1 = document.getElementById("sss").querySelector("input").value;

    // Convert string values to numbers
    let hours = parseInt(hhh1);
    let minutes = parseInt(mmm1);
    let seconds = parseInt(sss1);

    // Check if any value is NaN and set it to 0 if invalid
    if (isNaN(hours)) {
        hours = 0;
    }
    if (isNaN(minutes)) {
        minutes = 0;
    }
    if (isNaN(seconds)) {
        seconds = 0;
    }

    console.log(`Countdown started with ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

    // Start the countdown
    timer = setInterval(function () {
        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
            }
        }

        // Update the input fields with new values
        document.getElementById('sss').querySelector("input").value = seconds;
        document.getElementById('mmm').querySelector("input").value = minutes;
        document.getElementById('hhh').querySelector("input").value = hours;

        // Check if the timer has reached 0
        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timer);  
            
            let jai = document.getElementById('jai');
            jai.play();   // Trigger the alarm (can be a sound too)
            alert("jai shree ram  alarm completed successfully");    // Trigger the alarm (can be a sound too)
        }
    }, 1000);  // Update every second
}

// Function to reset the countdown timer
function resetCountdown() {
    clearInterval(timer);  // Stop the countdown
    document.getElementById('hhh').querySelector("input").value = 0;
    document.getElementById('mmm').querySelector("input").value = 0;
    document.getElementById('sss').querySelector("input").value = 0;
    alert("Timer reset.");
}