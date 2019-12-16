<template>
  <section class="index">
    <div class="container">
      <div class="row">
        <div class="col l4 m6 s12 left-align " v-for="(smoothi, index) in smoothies" :key="smoothi.index">
          <article class="card blue-grey darken-1">
            <div class="card-content">
              <span class="new badge py-3 valign-wrapper center-align" :data-badge-caption="index + 1"></span>
              <h6 class="white-text">{{ smoothi.title }}</h6>
              <h5 class="valign-wrapper white-text flow-text">
                {{ smoothi.slug }}
              </h5>
              <span class="new badge green accent-4 left" v-for="(food, index) in smoothi.ingerdients" :key="index"
                :data-badge-caption="food"></span>
            </div>
            <div class="card-action mt-3">
              <button @click="deleteSmoothi(index)" href="#" class=" left btn red lighten-2 waves-effect">
                <i class="fas fa-trash-alt"></i>
              </button>
              <aside class="clearfix"></aside>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import db from "@/firebase/init.js";
  export default {
    name: "Index",
    data() {
      return {
        smoothies: [{
            title: "Moftah",
            slug: "Developer One",
            ingerdients: ["Milk", "Coffe"]
          },
          {
            title: "Basel",
            slug: "Developer Two ",
            ingerdients: ["Burger", "Banana"]
          },
          {
            title: "Dabour",
            slug: "Developer Three",
            ingerdients: ["Pepsi", "Botato"]
          },
          {
            title: "Basel",
            slug: "Developer Four ",
            ingerdients: ["Burger", "Banana"]
          },
          {
            title: "Dabour",
            slug: "Developer Five",
            ingerdients: ["Pepsi", "Botato"]
          },
          {
            title: "Basel",
            slug: "Developer Six ",
            ingerdients: ["Burger", "Banana"]
          }
        ]
      };
    },
    components: {},
    methods: {
      deleteSmoothi(index) {
        this.smoothies.filter(single => {
          return single.title != this.smoothies[index].title;
        });
      }
    }, //end Methods
    created(){
      db.collection('allsmoothies').get()
      .then(snapshot => {
        snapshot.forEach (doc =>{
          console.log(doc.data())
        })
      })
    }  
  };
</script>
<style>
  .card h5 {
    height: 70px;
  }
</style>