function getWeather() {
  var city = document.getElementById('city').value;

  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=5d066958a60d315387d9492393935c19';

  makeAjaxRequest(url);
}

function makeAjaxRequest(url) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);

        var temperature = response.main.temp;
        var pressure = response.main.pressure;
        var description = response.weather[0].description;
        var humidity = response.main.humidity;
        var windSpeed = response.wind.speed;
        var windDeg = response.wind.deg;
        var iconCode = response.weather[0].icon;

        document.getElementById('temperature').textContent = 'Температура: ' + temperature + '°C';
        document.getElementById('pressure').textContent = 'Тиск: ' + pressure + ' hPa';
        document.getElementById('description').textContent = 'Опис: ' + description;
        document.getElementById('humidity').textContent = 'Вологість: ' + humidity + '%';
        document.getElementById('wind').textContent = 'Швидкість вітру: ' + windSpeed + ' м/с, Напрям: ' + windDeg + '°';

        document.getElementById('weatherIcon').style.display = 'block';
        document.getElementById('icon').src = 'http://openweathermap.org/img/w/' + iconCode + '.png';
      } else {
        alert('Помилка: ' + xhr.status);
      }
    }
  };

  xhr.open('GET', url, true);

  xhr.send();
}
