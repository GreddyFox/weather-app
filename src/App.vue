<template>

  <div id="app">
    <main>
      <searchBar @pickCity="showWeather"/>

      <div class="container">
        <ul>
          <li>Temperature now: {{ this.weather?.main.temp }}</li>
          <li>Feels like: {{ this.weather?.main.feels_like }}</li>
          <li>City: {{ this.weather?.name }}</li>
        </ul>
<!--        <button  v-if="this.city !== ''" @click="getWeather(this.city)">dai pogodu</button>-->
      </div>

    </main>
  </div>
</template>

<script>

import {loadWeather} from "@/api";
import SearchBar from "@/components/SearchBar";
export default {
  name: 'app',
  components: {SearchBar},
  data() {
    return {
     // city: '', //уже не нужно,если реазиловано через отдельный компонент поиска
      weather: null
    }
  },

  methods: {
    // getWeather(cityName) { робит
    //   setInterval(async () => {
    //    const w = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`)
    //         .then(res => res.json());
    //    console.log(w);
    //    this.weather = w
    //   }, 5000)
    // }

    // getWeather(cityName) {
    //   setInterval(async  () => {
    //     const w = await loadWeather(cityName);
    //     console.log(w);
    //     this.weather = w
    //   }, 5000)
    // }
    // getWeather(cityName){
    //   const w = loadWeather(cityName);
    //   this.weather = w;
    // },
    // showWeather(city) {
    //   const w = loadWeather(city);
    //   this.weather = w;
    // }
    showWeather(city) {
      setInterval(async  () => {
            const w = await loadWeather(city);
            console.log(w);
            this.weather = w
          }, 5000)
    }

  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}

#app {
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  background-image: url('./assets/landscape.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

main {
  min-height: 100vh;
  padding: 25px;

}

.container {
  font-size: 24px;
  width: 350px;
  height: 200px;
  text-align: center;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
}




ul {
  padding: 10px;
  list-style-type: none;
}

li {
  padding: 5px;
  text-align: left;
}



</style>
