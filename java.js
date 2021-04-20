
let input = document.querySelector('#inputField');
let button = document.querySelector('.fa-search');
let tempreture = document.querySelector('.temp');
let name = document.querySelector('.name');
let description = document.querySelector('.description');
let humidity = document.querySelector('.humidity');
let tempMin =  document.querySelector('.temp_min');
let tempMax =  document.querySelector('.temp_max');
let icon = document.querySelector('.iconDescription');

window.addEventListener('load', ()=>{

    document.querySelector('.date').innerHTML = Date();

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Rabat,%20MA&units=metric&APPID=3f2e00249583a6a69c48e694bb144fad')
    .then(function(response){

      return response.json()
    })

    .then(function(json){

    tempreture.textContent = Math.round(json.main.temp)+'º';
    name.textContent = json.name;
    description.textContent = json.weather[0].description;
    switch(json.weather[0].description){

      case "clear sky": icon.src = '../icon_condition/clearSky.png';
      break;

      case "few clouds": icon.src = '../icon_condition/few_clouds.png';
      break;

      case "scattered clouds": icon.src = '../icon_condition/scattered_clouds.png';
      break;

      case "broken clouds": icon.src = '../icon_condition/brokenClouds.png';
      break;

      case "shower rain": icon.src = '../icon_condition/shower_rain.png';
      break;

      case "rain": icon.src = '../icon_condition/rain.png';
      break;

      case "thunderstorm": icon.src = '../icon_condition/thunderstorm.png';
      break;

      case "snow": icon.src = '../icon_condition/snow.png';
      break;

      case "mist": icon.src = '../icon_condition/mist.png';
      break;

      default:"error";

    }
    humidity.textContent = 'Humidity: '+json.main.humidity+'%';
    tempMax.textContent = Math.round(json.main.temp_max)+'º';
    tempMin.textContent = Math.round(json.main.temp_min)+'º';
    
    })
  
})

button.addEventListener('click', function(){

      document.querySelector('.date').innerHTML = Date();

})

button.addEventListener('click', () =>{

   fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+',%20MA&units=metric&APPID=3f2e00249583a6a69c48e694bb144fad')
   .then(function(response){
    return response.json()
   })
   
   .then(function(json){

    tempreture.textContent = Math.round(json.main.temp)+'º';
    name.textContent = json.name;
    description.textContent = json.weather[0].description;
    switch(json.weather[0].description){

      case "clear sky": icon.src = '../icon_condition/clearSky.png';
      break;

      case "few clouds": icon.src = '../icon_condition/few_clouds.png';
      break;

      case "scattered clouds": icon.src = '../icon_condition/scattered_clouds.png';
      break;

      case "broken clouds": icon.src = '../icon_condition/brokenClouds.png';
      break;

      case "shower rain": icon.src = '../icon_condition/shower_rain.png';
      break;

      case "rain": icon.src = '../icon_condition/rain.png';
      break;

      case "thunderstorm": icon.src = '../icon_condition/thunderstorm.png';
      break;

      case "snow": icon.src = '../icon_condition/snow.png';
      break;

      case "mist": icon.src = '../icon_condition/mist.png';
      break;

      default:"error";

    }
    humidity.textContent = 'Humidity: '+json.main.humidity+'%';
    tempMax.textContent = Math.round(json.main.temp_max)+'º';
    tempMin.textContent = Math.round(json.main.temp_min)+'º';
    
    
    
    
   })
  
})
  