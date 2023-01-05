<template>
  <div><button @click="getWeather">dai pogodu</button></div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      weater: null
    }
  },
  methods: {
    async getWeather() {
      const api_key = 'f4ca3fbb5a33c8e080b9f86a603a5926'
      const f = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${api_key}`);
      const data = await f.json();
      console.log(data)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body, html {
  height: 100%;
}

body {
  /* The image used */
  background-image: url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlc3xlbnwwfHwwfHw%3D&w=1000&q=80');

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


</style>
