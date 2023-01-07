<template>
  <div class="search">
    <input placeholder="Search..." v-model="city">
    <button @click="findCity()">?</button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return{
      city: ''
    }
  },
  emits: {
    "pickCity": value => typeof value === "string"
  },
  methods:{
    findCity() {
      this.$emit("pickCity", this.city)
      this.city =""
    }
  }
}
</script>

<style >
.search {
  text-align: center;
  margin: 10px;

}
input {
  width: 300px;
  height: 30px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;

}
button {
  width: 50px;
  height: 30px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  text-align: center;
  vertical-align: middle;

}


</style>