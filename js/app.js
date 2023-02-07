
        // DEFAULT WEATHER
        const defaultWeather = function () {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=5e16d5e4b55fd67a39bfec295921d630`;

            fetch(url)
                .then(response => response.json())
                .then(data => getWether(data))
                .catch(error => alert('Error !'));


        }();  

        // Search Weather by City name Function here!
        const searchTemperature = () => {
            const cityName = document.getElementById('city-name').value;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5e16d5e4b55fd67a39bfec295921d630`;

            fetch(url)
                .then(response => response.json())
                .then(data => getWether(data))
                .catch(error => alert('Error !'));

        }



        // Get Wether function here
        const getWether = data => {

            // DOM FUNCTION HERE
            const dom = (targetId, variableForInject) => {
                document.getElementById(targetId).innerText = variableForInject;
            }

            // Temperature
            const temperature = Math.round((data.main.temp - 32) * 5 / 9);
            dom('temperature', temperature);

            // Weather Status
            const weather = data.weather[0];
            const weatherStatus = weather.main;
            dom('weather-status', weatherStatus);

            //  ICON
            const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
            document.getElementById('icon').setAttribute('src', iconUrl)

            // Location
            const weatherLocation = data.name;
            dom('weather-location', weatherLocation);

        }
