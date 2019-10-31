<template>
    <div class="home-container">
        <p>token:{{token}}</p>
        <p>code:{{code}}</p>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route.params);
        this.token = this.$route.params.token
        this.code = this.$route.params.code
    },
    data() {
        return {
            token: '',
            code: ''
        }
    },

}
</script>