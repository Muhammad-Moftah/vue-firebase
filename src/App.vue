<template>
  <div id="app">
    <Navbar />
    <router-view />
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

/* ==== Style Scrollbar ==== */
body{
  min-height: 1200px;
  overflow-y: overlay;
}

h1,
h2,
h3,
h4,
h5,
h6,
a,
button,
input[type=button],
input[type="submit"],
th,
span{
  text-transform: capitalize;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #0000003d;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #575757c2;
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
