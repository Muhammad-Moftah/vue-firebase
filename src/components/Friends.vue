<template>
    <section>
        <h4 class="p-2 text-white bg-secondary w-25 mx-auto">All Friends</h4>
        <div v-for="(friend, index) in allfriends" :key="index">
            <p class=" d-inline-block mx-2" @click="onlineSwitch(friend)">
                {{ index + 1 + " " + friend.name }}
            </p>
            <button class="btn btn-danger d-inline-block" @click="unfriend(friend.name)">
                Delete
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                title: "Frontend"
            };
        },
        name: "Onlinefriends",
        props: ["allfriends"],
        methods: {
            onlineSwitch(x) {
                x.online = !x.online;
            },
            unfriend(name) {
                this.$emit("delete", {
                    name
                });
            }
        }
    };
</script>

<style></style>