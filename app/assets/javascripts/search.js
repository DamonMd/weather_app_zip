// potential js solution that i'm working on //


// $( document ).ready(function(){
//   var temperature_one
//   var temperature_two
//
//   var baseUrl = 'api.openweathermap.org/data/2.5/weather?zip='
//   document.querySelector("#submit").addEventListener('click', function(e){
//     e.preventDefault()
//     var zipCode = document.querySelector("#input").value
//     var searchUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us'
//     $.ajax({
//       url: searchUrl,
//       type: 'GET',
//       dataType: 'json'
//     }).done(function(response){
//       console.log(response.main)
//     }).fail(function(){
//       console.log("ajax request not successful")
//     })
//
//
//     function get_average(temp1, temp2){
//       return (temp1 + temp2) / 2
//     }
// })
