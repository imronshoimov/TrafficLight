let trafficRed = document.querySelector(".red")

let interval_time = 3000
let color = "red"

let interval = setInterval(trafficLight, interval_time)

function trafficLight() {
   trafficRed.style.backgroundColor = color
   if (color == "red") {
      color = "yellow"
      interval_time = 3000
      clearInterval(interval)
      let interval = setInterval(trafficLight, interval_time)
   } else if (color == "yellow") {
      color = "green"
      interval_time = 2000
      clearInterval(interval)
      let interval = setInterval(trafficLight, interval_time)
   } else {
      color = "red"
      interval_time = 3000
      clearInterval(interval)
      let interval = setInterval(trafficLight, interval_time)
   }
}