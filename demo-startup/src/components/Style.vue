<template>
    <div>
        <div :class="{ active: isActive }">font</div>
        <div :class="{ active: isActive }">compute</div>
        <div :class="[msg]">array</div>
        <button @click="change">change active</button>
        <button @click="changeMode">change mode</button>
        <hr>
        <div :style="styleObj">style</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: true,
            error: null,
            msg: "light",

            styleObj: {
                color: "red", 
                fontSize: '20px'
            }
        }
    },
    methods: {
        change() {
            this.isActive = !this.isActive;
        },
        changeMode() {
            this.msg = "dark";
        }
    },
    computed: {
        classIsActive() {
            return {
                active: this.isActive && !error
            }
        }
    }
}
</script>

<style scoped>
.active {
    font-size: larger;
    color: aqua;
}

.light {
    background-color: antiquewhite;
}

.dark {
    background-color: chocolate;
}
</style>