const container = document.querySelector('.container');
const searchBtn = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

const handleSubmit = () => {
  const city = document.querySelector('.search-box input').value;

  const APIkey = '12b94b47b7afc2936476eb9fce157232';

  const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;

  if (city == '') {
    return;
  }

  fetch(ApiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-details .humidity span');
      const wind = document.querySelector('.weather-details .wind span');

      // Handle change image
      switch (data.weather[0].main.toLowerCase()) {
        case 'clear':
          image.src = 'images/clear.png';
          break;
        case 'mist':
          image.src = 'images/mist.png';
          break;
        case 'haze':
          image.src = 'images/mist.png';
          break;
        case 'rain':
          image.src = 'images/rain.png';
          break;
        case 'snow':
          image.src = 'images/snow.png';
          break;
        case 'clouds':
          image.src = 'images/cloud.png';
          break;
        default:
          image.src = 'images/clear.png';
      }

      // Change Temp
      temperature.innerHTML = `${data.main.temp}<span>°C</span>`;
      // Change Desc
      description.innerHTML = `${data.weather[0].description}`;
      // Change Humi
      humidity.innerHTML = `${data.main.humidity}%`;
      // Change Wind
      wind.innerHTML = `${data.wind.speed}Km/h`;
    })
    .catch((error) => {
      console.log(error);
    });
};

searchBtn.addEventListener('click', handleSubmit);
