// "Jan 31, 2023 15:37:25"
  
var countDownDate = new Date().getTime();
console.log(countDownDate)

countDownDate = 172800000 + countDownDate
// console.log(countDownDate.getDate())

// countDownDate.setDate(countDownDate.getDate() + 2)
// console.log(countDownDate)
 
var x = setInterval(function() {
 
  var now = new Date().getTime();
    console.log(now)
 
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 