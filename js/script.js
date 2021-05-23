var endDate = new Date("May 31,2020 00:00:00").getTime();
var x = setInterval(function () {
   var startDate = new Date().getTime();
   var d = endDate - startDate

   var days = Math.floor(d / (1000 * 60 * 60 * 24))
   var hours = Math.floor((d%(1000*60*60*24))/ (1000*60*60))
   var minutes = Math.floor((d%(1000*60*60))/ (1000*60))
   var seconds = Math.floor((d % (1000 * 60)) / 1000)

   document.getElementById('days').innerHTML = days
   document.getElementById('hours').innerHTML = hours
   document.getElementById('minutes').innerHTML = minutes
   document.getElementById('seconds').innerHTML = seconds

   var dayBarWidth= Math.floor((100*days)/60)
   var hoursBarWidth= Math.floor((100*hours)/60)
   var minutesBarWidth= Math.floor((100*minutes)/60)
   var secBarWidth= Math.floor((100*seconds)/60)

   document.getElementById('day_bar_inner').style.width=dayBarWidth+'%'
   document.getElementById('hours_bar_inner').style.width=hoursBarWidth+'%'
   document.getElementById('minutes_bar_inner').style.width=minutesBarWidth+'%'
   document.getElementById('second_bar_inner').style.width=secBarWidth+'%'

},1000)
