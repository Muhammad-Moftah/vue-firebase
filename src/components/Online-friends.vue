<template>
    <section>
        <h4 class="p-2 text-white bg-primary w-25 mx-auto" >Online Friends</h4>
        <div v-for="(friend, index) in allfriends" :key="index">
            <p  @click="onlineSwitch(friend)" class="text-bold-50 text-success" v-if="friend.online">{{ friend.name}}</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Onlinefriends",
        props: ["allfriends"],
        methods: {
           onlineSwitch(x) {
                x.online = !x.online;
            }
        }
    };
</script>

<style>
</style>