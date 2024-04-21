//Calling DOM Elements
let hoursBox = document.getElementById('hoursBox')
let minutesBox = document.getElementById('minutesBox')
let secondsBox = document.getElementById('secondsBox')
let AMPMBox = document.getElementById('AMPMBox')
let daysBox = document.getElementById('daysBox')


// Function For Generating Time And Day
function updateTime () {
 let date = new Date() 
 let hours = date.getHours()
 let minutes = date.getMinutes()
 let seconds = date.getSeconds()
 let day = date.getDay()

 if(hours>12){
   hoursBox.innerHTML = hours.toString().padStart(2, '0')-12   
   AMPMBox.innerHTML = 'PM'
  } else {
    hoursBox.innerHTML = hours.toString().padStart(2, '0')
    AMPMBox.innerHTML = 'AM'
  }
 minutesBox.innerHTML = minutes.toString().padStart(2, '0')
 secondsBox.innerHTML = seconds.toString().padStart(2,'0')
 


 switch (day) {
  case 0:
   daysBox.innerHTML = 'SUNDAY'
   break;
  case 1:
   daysBox.innerHTML = 'MONDAY'
   break;
  case 2:
   daysBox.innerHTML = 'TUESDAY'
   break;
  case 3:
   daysBox.innerHTML = 'WEDNESDAY'
   break;
  case 4:
   daysBox.innerHTML = 'THURSDAY'
   break;
  case 5:
   daysBox.innerHTML = 'FRIDAY'
   break;
  case 6:
   daysBox.innerHTML = 'SATURDAY'
   break;
 
  
 }
}

// Calling The Function Every Second To Update The UI
setInterval(() => {
 updateTime()
}, 1000);



//TASK FOR 3/28/2024
// MAKE A DIV INSIDE THE CLOCKBOX FOR SOME MOTIVATIONAL QUOTES
// COMPLETE THE TIMER 