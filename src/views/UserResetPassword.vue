<template>
    <div>
        <!-- ========== Login Area end============= -->
        <div class="login-area pt-120 mb-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-wrapper">
                            <div class="form-title">
                                <h3>Update Your Password Here!</h3>
                                <span></span>
                            </div>
                            <form>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-inner mb-25">
                                            <label for="email">Email*</label>
                                            <div class="input-area">
                                                <img src="templates/assets/images/icon/email-2.svg" alt="">
                                                <input v-model="user.email" type="email" id="email" name="email"
                                                    placeholder="info@example.com">
                                            </div>
                                            <input type="hidden" v-model="user.token">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-inner">
                                            <label for="email">Password*</label>
                                            <input v-model="user.password" type="password" name="password" id="password"
                                                placeholder="Password" />
                                            <i class="bi bi-eye-slash" id="togglePassword"></i>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-inner">
                                            <label for="email">Confirm Password*</label>
                                            <input v-model="user.confired_password" type="password" name="password"
                                                id="password" placeholder="Password" />
                                            <i class="bi bi-eye-slash" id="togglePassword"></i>
                                        </div>
                                    </div>
                                    <!-- <div class="col-lg-12">
                                        <div class="form-agreement form-inner d-flex justify-content-between flex-wrap">
                                            <div class="form-group">
                                                <input type="checkbox" id="html">
                                                <label for="html">Remember Me</label>
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="col-lg-12">
                                        <div class="form-inner">
                                            <button @click="ChangePassword" class="primry-btn-2" type="button">Update Your Password</button>
                                        </div>
                                    </div>
                                    <h6>Don’t have an account?<br>
                                        <hr>

                                    </h6>
                                    <small class="col-lg-6">
                                        <router-link :to="{ name: 'job-seeker-register' }">Job Seeker Sign Up</router-link>
                                    </small>
                                    <small class="col-lg-6 text-right">
                                        <router-link :to="{ name: 'job-seeker-register' }">Company Sign Up</router-link>
                                    </small>

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
        ])
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
                'device_name': 'web',
            }
            this.$store.dispatch('passwordChange', credentials)
            // if(this.user.email == 'company@demo.com' && this.user.password == '1234') {
            //     router.push('/company/dashboard');
            // } else if(this.user.email == 'user@demo.com' && this.user.password == '1234'){
            //     router.push('/user/dashboard');
            // } else {
            //     toast.error("Login Error !", {
            //         position: toast.POSITION.BOTTOM_RIGHT,
            //     });
            // }
        }
    },
    mounted() {

        let Script = document.createElement("script");
        Script.setAttribute("src", "/templates/assets/js/main.js");
        document.head.appendChild(Script);

        const myToken = this.$route.params.tokenData;
        
        this.user.token = myToken;

        const emailParam = this.$route.query.email;

        this.user.email = emailParam;

    },
})
export default class Login extends Vue { }
</script>
  