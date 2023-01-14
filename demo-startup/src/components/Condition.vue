<template>
    <div>
        <p v-if="age>18">i am an adult</p>
        <p v-else-if="age==18">i am exactly adult</p>
        <p v-else>i am a child</p>
        <button @click="changeAge">change age</button>
        <hr>
        <template v-if="age==18">
            <p>test</p>
            <p>test</p>
            <p>test</p>
        </template>
        <hr>
        <p v-show="gender=='male'">male</p>
        <p v-show="gender=='female'">female</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                age:18,
                gender:"male"
            }
        },methods:{
            changeAge(){
                this.age=17;
            }
        }
    }
</script>

<style scoped>

</style>