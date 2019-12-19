<template>
  <div class="container">
    <h3 class="border mb-5">add Smoothie Page</h3>
      <form class="col s12" @submit.prevent="addSmoothie">
        <div class="row">
          <div class="input-field col offset-s3 s6">
            <input id="Smoothie" type="text" class="validat" v-model="title"/>
            <label for="Smoothie">Smoothie Title</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col offset-s3 s6">
            <input id="ingredient" type="text" class="validat" @keypress.enter.prevent="addIng" v-model="another"/>
            <label for="ingredient">Ingredient</label>
            <span style="position:absolute; right:14px" @click="ingredients = []" class="btn red darken-1 waves-effect">Clear</span>
            <aside>
               <p class="m-0 left-align p-2 card green darken-3 white-text">Your inputs: {{ingredients.toString()}}</p>
            </aside>
            
          </div>
        </div>

        <div class="row">
          <div class="input-field col offset-s3 s6">
            <input id="last_name" type="text" class="validat" />
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <button type="submit" class="waves-light btn">
          <i class="material-icons left">add_circle</i>Add Smoothie
        </button>
      </form>
    </div>
</template>

<script>
  export default {
    name:"AddSmoothie",
    data(){
      return {
        title:"",
        another:null,
        ingredients:[],
        feedback:null
      }
    },
    methods:{
      addSmoothie(){
        console.log("Title = " + this.title)
      },
      addIng(){
        this.ingredients.push(this.another);
        this.another = null;
      }
    }
  };
</script>





