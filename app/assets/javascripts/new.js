$( document ).ready(function(){
  // Sample options from API under "weather" section //
  // Clear
  // Rain
  // Mostly Cloudy
  // Overcast
  // Thunderstorm
  // Snow

  var weather_page = document.querySelector(".temp")
  var weather = document.querySelector("#weather").innerHTML

  if(weather === "Rain"){
    weather_page.style.backgroundImage = "url(http://harrymoroz.com/wp-content/uploads/2014/04/1_See_It.jpg)"
  } else if(weather === "Overcast" || weather === "Mostly Cloudy"){
    weather_page.style.backgroundImage = "url(http://miriadna.com/desctopwalls/images/max/Overcast-sky.jpg)"
  } else if (weather === "Thunderstorm"){
    weather_page.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/a/a4/Cloud_to_ground_lightning_strikes_south-west_of_Wagga_Wagga.jpg)"
  } else if(weather === "Snow"){
    weather_page.style.backgroundImage = "url(http://feelgrafix.com/data_images/out/15/889736-snow-wallpaper.jpg)"
  }

})
