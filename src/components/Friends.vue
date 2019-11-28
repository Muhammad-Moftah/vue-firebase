<template>
    <section>
        <h4 class="p-2 text-white bg-secondary w-25 mx-auto" >All Friends</h4>
        <div v-for="(friend, index) in allfriends" :key="index">
            <p @click="onlineSwitch(friend)" >{{index + 1 + " " + friend.name}}</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Onlinefriends",
        props:['allfriends'],
        methods: {
            onlineSwitch(x) {
                x.online = !x.online;
            }
        }
    }
</script>

<style>

</style>