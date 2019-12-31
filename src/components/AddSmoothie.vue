<template>
  <div class="container">

    <div class="row">
      <form class="add-form z-depth-2 col offset-l2 l8 s12 pt-0 pb-5 px-0" @submit.prevent="addSmoothie">
        <h5 class="border mb-2 m-0 card py-3 green darken-1 white-text">add Smoothie</h5>
        <div class="row">
          <div class="input-field col offset-s1 s10">
            <input id="Smoothie" type="text" class="validat" v-model="title" required />
            <label for="Smoothie">Smoothie Title</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col offset-s1 s10">
            <input id="slug" type="text" class="validat" v-model="slug" required />
            <label for="slug">Slug</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col offset-s1 s10">
            <input id="ingredient" type="text" class="validat active" @keypress.enter.prevent="addIng" v-model="singleIng" placeholder="Press Enter To Add"/>
            <label for="ingredient" class="active">Ingredient</label>
            <span style="position:absolute; right:90px;text-transform: capitalize;" @click="ingredients = []"
              class="btn red darken-1 waves-effect btn-small" v-if="ingredients.length">Clear</span>

            <span style="position:absolute; right:14px;text-transform: capitalize;" @click="addIng"
              class="btn light-blue darken-3 waves-effect btn-small">Add</span>
            <aside>
              <p class="m-0 left-align p-2 card green darken-2 white-text" v-if="ingredients.length">
                {{ ingredients.toString() }}
              </p>
            </aside>
          </div>
        </div>

        <div class="row mx-2" v-if="feedback">
          <p class="card pink darken-3 col offset-s1 s10 white-text py-2">{{feedback}}</p>
        </div>
        <button type="submit" class="waves-effect btn">
          <i class="material-icons left">add_circle</i> Add Smoothie
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import db from "../firebase/init"
  export default {
    name: "AddSmoothie",
    data() {
      return {
        title: "",
        singleIng: null,
        ingredients: [],
        feedback: null,
        slug: null,
        id:db.collection("allsmoothies").doc().id
      };
    },
    created(){
   
    },
    methods: {
      addSmoothie() {
        if (this.ingredients.length) {
          db.collection("allsmoothies").add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug,
            id:this.id
          }).then(() => this.$router.push('/'))
          
        } else {
          this.feedback = "Add at Least One Ingredient"
        }
      },
      addIng() {
        if (this.singleIng && this.ingredients) {
          this.ingredients.push(this.singleIng)
          this.singleIng = null
          this.feedback = null
        } else {
          this.feedback = "You Must Enter ingredients"
        }
      }
    }
  };
</script>

<style scoped>
  .add-form {
    overflow: hidden;
    border-radius: 50px/100px;
  }
</style>