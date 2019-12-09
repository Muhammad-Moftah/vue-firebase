<template>
  <div class="Index">
    <h3>This is Index Page</h3>

    <button class="btn btn-danger" @click='goTo'>Go</button>
  </div>
</template>

<script>

export default {
  name: "Index",
  components: {
  },
  methods:{
    goTo(){
      this.$router.push('about')
    }
  }
};
</script>
