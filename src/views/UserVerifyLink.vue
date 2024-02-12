<template>
    <div>
        <!-- ========== Login Area end============= -->
        <div class="login-area pt-120 mb-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-wrapper">
                            <div class="form-title">
                                <h3>Resend Email Link!</h3>
                                {{ verifyMail }}
                                <span></span>
                            </div>
                            <form>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-inner mb-25">
                                            <label for="email">Click here to send email again to verify link</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/email-2.svg" alt="">
                                                <input v-model="email" type="email" id="email" name="email"
                                                    placeholder="info@example.com" disabled>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-inner">
                                            <button @click="reset" class="primry-btn-2" type="button">Send Verify Request
                                                Again</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ========== Login Area end============= -->
    </div>
</template>
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SignIn from '../views/Login.vue'; // @ is an alias to /src
import router from '@/router';

import { mapGetters } from 'vuex';

@Options({
    data() {
        return {
            user: {
                email: '',
                password: '',
                token: '',
            }
        }
    },
    computed: {
        ...mapGetters([
            'token',
            'currentUser'
        ]),

        verifyMail() {
            var credentials = {
                'id': this.$route.params.id,
                'token': this.$route.params.token,
                'expires': this.$route.query.expires,
                'signature': this.$route.query.signature
            }    
            this.$store.dispatch('verifyEmail', credentials)
        },
    },
    components: {
        SignIn,
    },
    methods: {
        ChangePassword() {
            var credentials = {
                'email': this.user.email,
                'password': this.user.password,
                'password_confirmation': this.user.confired_password,
                'token': this.user.token,
                'type': 'user',
                'device_name': 'web app',
            }
            this.$store.dispatch('passwordChange', credentials)

        }
    },
    mounted() {
        var credentials = {
            'id': this.$route.params.id,
            'token': this.$route.params.token,
            'expires': this.$route.query.expires,
            'signature': this.$route.query.signature
        }      
        this.$store.dispatch('verifyEmail', credentials)
        // let Script = document.createElement("script");
        // Script.setAttribute("src", "/assets/js/main.js");
        // document.head.appendChild(Script);
        
        console.log(this.$route.params);
        console.log(this.$route.query);
        
        // const myToken = this.$route.params.tokenData;
        // this.user.token = myToken;
        // const emailParam = this.$route.query.email;
        // this.user.email = emailParam;
    },
})
export default class Login extends Vue { }
</script>
  