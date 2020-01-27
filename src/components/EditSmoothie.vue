<template>
    <div class="container">

        <div class="row">
            <form v-if="smoothie" class="edit-form z-depth-2 col offset-l2 l8 s12 pt-0 pb-5 px-0"
                @submit.prevent="editSmoothie">
                <h5 class="border mb-2 m-0 card py-3 green darken-1 white-text">edit Smoothie
                    {{this.$route.params.smoothie_slug}}</h5>
                <div class="row">
                    <div class="input-field col offset-s1 s10">
                        <input id="Smoothie" type="text" class="validat" v-model="smoothie.title" required />
                        <label for="Smoothie" class="active">Name</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col offset-s1 s10">
                        <input id="slug" type="text" class="validat" v-model="smoothie.slug" required />
                        <label for="slug" class="active">Title</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col offset-s1 s10">
                        <input id="ingredient" type="text" class="validat active" @keypress.enter.prevent="addIng"
                            v-model="singleIng" placeholder="Press Enter To Add" />
                        <label for="ingredient" class="active">Skills</label>
                        <span style="position:absolute; right:90px;text-transform: capitalize;"
                            @click="smoothie.ingredients = []" class="btn red darken-1 waves-effect btn-small"
                            v-if="smoothie.ingredients.length">Clear</span>
                        <span style="position:absolute; right:14px;text-transform: capitalize;" @click="addIng"
                            class="btn light-blue darken-3 waves-effect btn-small">Add</span>

                        <aside>
                            <p class="m-0 left-align p-2 card green darken-2 white-text"
                                v-if="smoothie.ingredients.length">
                                {{ smoothie.ingredients.toString() }}
                            </p>
                        </aside>
                    </div>
                </div>

                <div class="row mx-2" v-if="feedback">
                    <p class="card pink darken-3 col offset-s1 s10 white-text py-2">{{feedback}}</p>
                </div>
                <button type="submit" class="waves-effect btn">
                    <i class="material-icons left">add_circle</i> Update Smoothie
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import db from "../firebase/init"
    export default {
        name: "EditSmoothie",
        data() {
            return {
                smoothie: null,
                feedback: null,
                another: null,
                singleIng: null
            };
        },
        methods: {
            editSmoothie() {
                if (this.smoothie.ingredients.length) {
                    db.collection('allsmoothies').doc(this.smoothie.id).update({
                        title: this.smoothie.title,
                        slug: this.smoothie.slug,
                        ingredients: this.smoothie.ingredients
                    }).then(() => this.$router.push('/'))
                } else {
                    this.feedback = "Add at Least One Ingredient"
                }
            },
            addIng() {
                if (this.singleIng && this.smoothie.ingredients) {
                    this.smoothie.ingredients.push(this.singleIng)
                    this.singleIng = null
                    this.feedback = null
                } else {
                    this.feedback = "You Must Enter ingredients"
                }
            }
        },
        created() {
            let ref = db.collection('allsmoothies').where('slug', '==', this.$route.params.smoothie_slug);
            ref.get().then(allDocuments => {
                allDocuments.forEach(doc => {
                    this.smoothie = doc.data()
                    this.smoothie.id = doc.id
                })
            })
        }

    }; //end export
</script>

<style scoped>
    .edit-form {
        overflow: hidden;
        border-radius: 50px/100px;
    }
</style>