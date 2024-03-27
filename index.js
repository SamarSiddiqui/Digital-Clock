let hoursBox = document.getElementById('hoursBox')
let minutesBox = document.getElementById('minutesBox')
let secondsBox = document.getElementById('secondsBox')
let AMPMBox = document.getElementById('AMPMBox')

let date = new Date() 
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let day = date.getDay()

// console.log(day);

function updateSeconds () {
 if(hours>12){
 hoursBox.innerHTML = hours.toString().padStart(2, '0')-12
 AMPMBox.innerHTML = 'PM'
} else {
 AMPMBox.innerHTML = 'AM'
}
 minutesBox.innerHTML = minutes.toString().padStart(2, '0')
 secondsBox.innerHTML = seconds.toString().padStart(2,'0')
 
}



setInterval(() => {
 // console.log(hours);
 updateSeconds()
}, 1000);



