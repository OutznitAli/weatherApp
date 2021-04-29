let input = document.querySelector('.inputField')
let button = document.querySelector('.fa-search')
let tempreture = document.querySelector('.temp')
let name = document.querySelector('.name')
let description = document.querySelector('.description')
let humidity = document.querySelector('.humidity')
// let tempMin = document.querySelector('.temp_min')
// let tempMax = document.querySelector('.temp_max')
let icon = document.querySelector('.icon')

let getData = (city) => {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      ',%20MA&units=metric&APPID=3f2e00249583a6a69c48e694bb144fad'
  )
    .then(function (response) {
      return response.json()
    })

    .then(function (json) {
      tempreture.textContent = Math.round(json.main.temp) + 'º'
      name.textContent = json.name
      description.textContent = json.weather[0].description
      switch (json.weather[0].icon) {
        case '01n':
          icon.src = '../icon_condition/01n.png'
          break

        case '01d':
          icon.src = '../icon_condition/01d.png'
          break

        case '02n':
          icon.src = '../icon_condition/02n.png'
          break

        case '02d':
          icon.src = '../icon_condition/02d.png'
          break

        case '03n':
          icon.src = '../icon_condition/03n.png'
          break

        case '03d':
          icon.src = '../icon_condition/03d.png'
          break

        case '04n':
          icon.src = '../icon_condition/04n.png'
          break

        case '04d':
          icon.src = '../icon_condition/04d.png'
          break

        case '09n':
          icon.src = '../icon_condition/09n.png'
          break

        case '09d':
          icon.src = '../icon_condition/09d.png'
          break

        case '10n':
          icon.src = '../icon_condition/10n.png'
          break

        case '10d':
          icon.src = '../icon_condition/10d.png'
          break

        case '11n':
          icon.src = '../icon_condition/11n.png'
          break

        case '11d':
          icon.src = '../icon_condition/11d.png'
          break

        case '13n':
          icon.src = '../icon_condition/13n.png'
          break

        case '13d':
          icon.src = '../icon_condition/13d.png'
          break

        case '50n':
          icon.src = '../icon_condition/50n.png'
          break

        case '50d':
          icon.src = '../icon_condition/50d.png'
          break

        default:
          'error'
      }
      humidity.textContent = json.main.humidity + '%'
      // tempMax.textContent = Math.round(json.main.temp_max) + 'º'
      // tempMin.textContent = Math.round(json.main.temp_min) + 'º'
    })
}

window.addEventListener('load', () => {
  // document.querySelector('.date').innerHTML = Date()

  getData('Rabat')
})

input.addEventListener('keypress', (e) => {
  if (e.keyCode == '13') {
    getData(input.value)
  }
})

// button.addEventListener('click', function () {
//   document.querySelector('.date').innerHTML = Date()
// })

button.addEventListener('click', () => {
  getData(input.value)
})
