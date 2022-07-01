'use strict';

const API_KEY = '1eee05ff03eb4b3b737abaec5736bd7e';
const weatherInfo = document.querySelector('.weather-info');
const city = weatherInfo.querySelector('span:nth-child(2)');
const weather = weatherInfo.querySelector('span:nth-child(3)');
const temp = weatherInfo.querySelector('span:nth-child(4)');

const onGeoSuccess = (parameter)=>{
    const latitude = parameter.coords.latitude;
    const longitude = parameter.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const onGeoCity = data.name;
        const onGeoWeather = data.weather[0].main;
        const onGeoTemp = data.main.temp;
        city.innerText = onGeoCity;
        weather.innerTExt = onGeoWeather;
        temp.innerText = Math.floor(onGeoTemp) + '°C';
    });
};

const onGeoError = ()=>{
    alert('Can\'t find you.');
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);