<template>
<form class="form register">
    <header class="logo-box">
        <img src="../assets/otau_logo.png" alt="otau-logo" height="32">
    </header>

    <div class="form-group mb-10">
        <label for="login"><img src="../assets/phone.png" alt="phone"></label>
        <input
            id="login"
            type="text"
            autocomplete="off"
            placeholder="Номер телефона"
            max-lenght="16">
    </div>


    <button class="btn" disabled>Далее</button>

    <footer class="links-box">
        <router-link to="/">У меня есть аккаунт</router-link>
    </footer>
</form>
</template>

<style lang="scss" scoped>
.register {
    height: 230px;
}
.mb-10 {
    margin: 10px 0;
}
</style>

<script>
export default {
    mounted() {
        console.log("mounted", this.$route.query.inviter_id);
    },
}
</script>

