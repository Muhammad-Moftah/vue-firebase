<template>
  <div id="app">
    <Navbar />
    <h1>{{title}}</h1>
    <friends :allfriends=friends @delete="deleteFriend"/>
    <!-- bind the component tag with the name you typed (delete) -->
    
    <onlinefriends :allfriends=friends />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import friends from "./components/Friends";
import onlinefriends from "./components/Online-friends";
export default {
  name: "app",
  data() {
    return {
      title: "Vue app with firebase",
      friends: [
        { name: "Muhmmad", online: true },
        { name: "Ahmed", online: false },
        { name: "Sayed", online: false },
        { name: "Moftah", online: true }
      ]
    };
  },
  components: {
    Navbar,
    friends,
    onlinefriends
  },
  methods:{
      deleteFriend(childName){   
          this.friends = this.friends.filter( friend => {
          return friend.name !== childName.name
        })
      }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a,
.btn,
button {
  text-decoration: none;
  outline: none;
  transition: all 300ms linear 0s;
}

a:hover,
a:focus,
.btn:hover,
.btn:focus,
button:hover,
button:focus {
  text-decoration: none;
  outline: none;
  cursor: pointer;
}

a,
button,
h1,
h2,
h3,
h4,
h5,
h6 {
  text-transform: capitalize;
}
</style>
