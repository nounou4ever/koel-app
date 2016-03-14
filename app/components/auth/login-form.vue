<template>
    <form @submit.prevent="login" :class="{ error: failed }">
        <input v-model="url" type="url" placeholder="Koel's Host" autofocus required>
        <input v-model="email" type="email" placeholder="Email Address" required>
        <input v-model="password" type="password" placeholder="Password" required>
        <input type="submit" value="Log In">
    </form>
</template>

<script>
    import Vue from 'vue';

    import ls from '../../services/ls';
    import userStore from '../../stores/user';

    export default {
        data() {
            return {
                url: '',
                email: '',
                password: '',
                failed: false,
            };
        },

        methods: {
            login() {
                this.failed = false;

                Vue.http.options.root = `${this.url}/api`;

                userStore.login(this.email, this.password, () => {
                    this.failed = false;

                    // Reset the password so that the next login will have this field empty.
                    this.password = '';

                    this.$dispatch('user:loggedin');

                    // Save these two variables into storage for later use.
                    ls.set('koelHost', this.url);
                    ls.set('lastLoginEmail', this.email);
                }, () => {
                    this.failed = true;
                });
            },
        },

        /**
         * Try to prefill the form with last-saved information.
         */
        ready() {
            this.url = ls.get('koelHost');
            this.email = ls.get('lastLoginEmail');
        },
    };
</script>

<style lang="sass" scoped>
    @import "../../sass/partials/_vars.scss";
    @import "../../sass/partials/_mixins.scss";
    @import "../../sass/partials/_shared.scss";

    /**
     * I like to move it move it
     * I like to move it move it
     * I like to move it move it
     * You like to - move it!
     */
    @keyframes shake {
        8%, 41% {
            -webkit-transform: translateX(-10px);
        }
        25%, 58% {
            -webkit-transform: translateX(10px);
        }
        75% {
            -webkit-transform: translateX(-5px);
        }
        92% {
            -webkit-transform: translateX(5px);
        }
        0%, 100% {
            -webkit-transform: translateX(0);
        }
    }

    form {
        width: 300px;
        padding: 24px;
        background: rgba(255,255,255,.08);
        border-radius: 8px;
        border: 1px solid #333;

        &.error {
            border-color: #8e4947;
            animation: shake .5s;
        }

        &::before {
            content: " ";
            display: block;
            background: url(../../img/logo.svg) center top no-repeat;
            background-size: 156px;
            height: 172px;
        }
    }

    input {
        display: block;
        margin-top: 12px;
        padding: 8px;
        border: 0;
        background: #fff;
        outline: none;
        width: 100%;
        border-radius: 3px;
    }

    button {
        display: block;
        margin-top: 12px;
        width: 100%;
    }
</style>
