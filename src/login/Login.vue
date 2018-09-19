<template>
    <div class="wrapper">
        <div class="text-box">
            <h2 class="main-title">EДИНЫЙ АККАУНТ ДЛЯ ВСЕХ СЕРВИСОВ OTAU</h2>
        </div>
        <div class="login-box">
            <router-view/>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    background-image: url(../assets/bg.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    display: flex;

           @media only screen and (max-width: 690px){
                flex-direction: column;
            }

    & > div { // helper
        // border: 1px solid red;
        padding: 0 10px;
    }

    & .text-box {
        flex: 0 0 50%;

        display: flex;
        justify-content: flex-end;
        align-items: center;

         @media only screen and (max-width: 690px){
                justify-content: center;
                flex: 0 0 10%;
            }

        & .main-title {
            width: 370px;
            font-size: 3.2rem;
            text-align: right;
            font-weight: 500;
            letter-spacing: .2rem;
            // text-shadow: var(--shadow-white);
            text-shadow:
                -1px -1px 0 rgba(255, 255, 255, 0.39),
                1px -1px 0 rgba(255, 255, 255, 0.39),
                -1px 1px 0 rgba(255, 255, 255, 0.39),
                1px 1px 0 rgba(255, 255, 255, 0.39);

            @media only screen and (max-width: 860px){
                font-size: 2.2rem;
            }

        }
    }

    & .login-box {
        flex: 1;

        display: flex;
        justify-content: flex-start;
        align-items: center;

          @media only screen and (max-width: 690px){
                justify-content: center;
            }
    }
}

        // & > input {
        //     background: none;
        //     border: 1px solid #d1d1d1;
        //     padding: 6px 7px;
        //     border-radius: 4px;
        //     font-family: Lato,sans-serif!important;
        //     font-size: 1.5rem;
        //     vertical-align: middle;
        //     margin: 0px;

        //     &:focus {
        //         border-color: #eaeaea;
        //         box-shadow: 0 0 0 2px #eaeaea;
        //         outline: none;
        //     }

        //     &[type=text]::-ms-clear {
        //         display: none;
        //     }
        // }
</style>
