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
              <button @click="deleteSmoothi(smoothi.id)" href="#" class=" left btn red lighten-2 waves-effect">
                <i class="fas fa-trash-alt"></i>
              </button>
              <aside class="clearfix"></aside>
            </div>
          </article>
        </div>
      </div>
    </div>

     <div id="scroll">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate quod ad quia delectus odit ipsam. Modi, eligendi necessitatibus. Officiis excepturi alias quasi odit quo harum doloribus quod repudiandae assumenda. <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa deleniti, quod eveniet magni commodi libero autem officiis doloribus nostrum asperiores consequatur sit quaerat exercitationem mollitia facilis? Id, illo eius.
      <br>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptatibus dolor eaque esse dignissimos recusandae suscipit natus! Adipisci vitae veniam consectetur placeat, debitis quo officiis ipsam blanditiis voluptatem cum? Voluptatem.
    </div>
  </section>
</template>

<script>
  import db from "@/firebase/init.js";
  export default {
    name: "Index",
    data() {
      return {
        smoothies: []
      };
    },
    components: {},
    methods: {
      deleteSmoothi(id) {
        db.collection('allsmoothies').doc(id).delete().then(()=>{
          this.smoothies = this.smoothies.filter(smoothie => {
            return smoothie.id != id
          })
        })
      }
    }, //end Methods
    created(){
      db.collection('allsmoothies').get()
      .then(allDocuments => {
          allDocuments.forEach (doc =>{
          let smoothie = doc.data();
          smoothie.id = doc.id
          this.smoothies.push(smoothie)
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