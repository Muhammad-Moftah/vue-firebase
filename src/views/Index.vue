<template>
  <section class="index">
    <div class="container">
      <div class="row">
        <div class="col l4 m6 s12 left-align " v-for="(smoothie, index) in smoothies" :key="index">
          <article class="card blue-grey darken-1">
            <div class="card-content">
              <span class="new badge py-3 valign-wrapper center-align" :data-badge-caption="index + 1"></span>
              <h6 class="white-text">{{ smoothie.title }}</h6>
              <h5 class="valign-wrapper white-text flow-text">{{ smoothie.slug }} </h5>
              <span class="new badge green accent-4 left ml-0 mr-2" v-for="(food, index) in smoothie.ingredients"
                :key="index" :data-badge-caption="food"></span>
            </div>
            <div class="card-action mt-3">
              <button @click="deleteSmoothi(smoothie.id)" href="#" class=" left btn red lighten-2 waves-effect">
                <i class="fas fa-trash-alt"></i>
              </button>
              <router-link tag="button" :to="{name:'EditSmoothie', params:{smoothie_slug:smoothie.slug}}"
                class="right btn orange darken-1 waves-effect">
                <i class="material-icons">edit</i>
              </router-link>
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
        smoothies: []
      };
    },
    components: {},
    methods: {
      deleteSmoothi(id) {
        db.collection('allsmoothies').doc(id).delete().then(() => {
          this.smoothies = this.smoothies.filter(smoothie => {
            return smoothie.id != id
          })
        })
      }
    }, //end Methods
    created() {
      db.collection('allsmoothies').get()
        .then(allDocuments => {
          allDocuments.forEach(doc => {
            let smoothie = doc.data();
            smoothie.id = doc.id
            this.smoothies.push(smoothie)
          })
        })
    }
  };
</script>
<style scoped>
  .card h5 {
    height: 70px;
  }

  article {
    padding: 0 10px;
    border-radius: 75px/200px !important;
    overflow: hidden;
  }
</style>