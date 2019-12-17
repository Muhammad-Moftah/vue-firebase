<template>
  <div id="app">
    <Navbar />
    <router-view />

    <div id="scroll">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate quod ad quia delectus odit ipsam. Modi, eligendi necessitatibus. Officiis excepturi alias quasi odit quo harum doloribus quod repudiandae assumenda. <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa deleniti, quod eveniet magni commodi libero autem officiis doloribus nostrum asperiores consequatur sit quaerat exercitationem mollitia facilis? Id, illo eius.
      <br>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptatibus dolor eaque esse dignissimos recusandae suscipit natus! Adipisci vitae veniam consectetur placeat, debitis quo officiis ipsam blanditiis voluptatem cum? Voluptatem.
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.scroll {
  border: 1px solid #2c3e50;
  border-radius: 5px;
  display: block;
  margin: 20px auto;
  padding: 10px;
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  background-color: grey;
}

/* ==== Style Scrollbar ==== */
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar {
  width: 13px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #0000003d;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #8f8f8f;
}
body{
  overflow-y: overlay;
}

#scroll{
  width: 300px;
  border-radius: 5px;
  padding: 5px;
  margin: 20px auto;
  border: 1px solid grey;
  height: 200px;
  overflow: overlay;
  transition: all 0.5s ease
}

/* #scroll::-webkit-scrollbar{
  width: 7px;
}
#scroll:hover::-webkit-scrollbar{
  width: 13px;
} */
/* ===== Styling Select ===== */
::-moz-selection {
  color: white;
  background-color: #26a69a;
}
::selection {
  color: white;
  background-color: #26a69a;
}

</style>
