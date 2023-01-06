const api_key = 'f4ca3fbb5a33c8e080b9f86a603a5926';

export function loadWeather(city_name) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`)
        .then(res => res.json());
}
