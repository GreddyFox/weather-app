const api_key = 'f8b15bea4e81becdd0de5c3a60591a97';

export function loadWeather(city_name) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`)
        .then(res => res.json());
}
// export function loadWeather(city_name) {
//     const weather = {
//         main:  {
//             temp: 1,
//             feels_like: 4,
//         },
//         name: city_name
//     }
//     return weather
// }