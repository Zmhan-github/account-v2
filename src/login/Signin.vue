<template>
<form class="form">
    <header class="logo-box">
        <img src="../assets/otau_logo.png" alt="otau-logo" height="32">
    </header>

    <div class="form-group">
        <label for="login"><img src="../assets/login.png" alt="login"></label>
        <input
            id="login"
            type="text"
            autocomplete="off"
            placeholder="Номер телефона"
            max-lenght="16">
    </div>

    <div class="form-group">
        <label for="password"><img src="../assets/password.png" alt="pass"></label>
        <input id="password" autocomplete="off" type="password" placeholder="Пароль">
    </div>

    <button class="btn" disabled>Войти</button>

    <footer class="links-box">
        <router-link to="/register">Регистрация</router-link>
        <router-link to="/">Забыли пароль?</router-link>
    </footer>
</form>
</template>


<style lang="scss">

.form {
    width: 290px;
    height: 280px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .logo-box {
        position: absolute;
        top: 30px;
    }

    &-group {
        margin: 8px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        


        & > input {
            background: none;
            border: none;
            padding: 6px 7px;
            border-radius: 4px;
            font-family: Lato,sans-serif!important;
            font-size: 1.5rem;
            vertical-align: middle;
            margin: 0px;

            &:focus {
                border-color: none;
                outline: none;
            }

            &[type=text]::-ms-clear {
                display: none;
            }
        }
    }

    & .btn {
        height: 32px;
        width: 70%;
        color: #fff;
        background-color: #078add;
        border-radius: 20px;
        border: none;
        outline: none;
        font-size: 1.5rem;
        margin-top: 8px;
        cursor: pointer;

        &:hover {
            background-color: #0776bd;
        }
    }

    & .links-box {
        position: absolute;
        bottom: 20px;

        & > a {
            display: block;
            text-align: center;
            font-weight: 700;
            text-decoration: none;
            color: #078add;
            font-size: 1.5rem;

            &:hover {
                color: #044e7c;
            }
        }
    }
}
</style>