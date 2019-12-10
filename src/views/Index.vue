<template>
  <section class="index my-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-3" v-for="(smoothi, index) in smoothies" :key="smoothi.id">
        <article class="card text-left shadow">
          <div class="card-body">
            <h5 class="card-title"> <span class="badge badge-primary">{{index + 1}}</span> {{smoothi.title}}</h5>
            <h6 class="card-subtitle mb-4 text-muted">{{smoothi.slug}}</h6>
            <span class="badge badge-success p-2 mr-1 mb-1" v-for="(food,index) in smoothi.ingerdients" :key='index'>{{food}}</span>      
            <button @click="deleteSmoothi(smoothi.index)" href="#" class="btn btn-danger card-link d-block mt-2"><i class="fas fa-trash-alt"></i></button>
          </div>
        </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        smoothies: [{
            title: "Moftah",
            slug: "Frontend Developer",
            ingerdients: ["Milk", "Coffe"],
            id:1
          },
          {
            title: "Basel",
            slug: "Backend Developer",
            ingerdients: ["Burger", "Banana"],
            id:2
          },
          {
            title: "Dabour",
            slug: "Scrum Master",
            ingerdients: ["Pepsi", "Botato"],
            id:3
          }
        ]
      }
    },
    components: {},
    methods: {
      deleteSmoothi(id){
        // this.smoothies = this.smoothies.filter( smoothi => {
        //   return smoothi.id != id;
        // })
        console.log(id);
        this.smoothies.splice((id - 1), 1)
      }

    }
  };
</script>