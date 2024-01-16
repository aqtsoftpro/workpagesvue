<template>
  <div>
        <!-- ========== Login Area end============= -->
        <div class="login-area pt-120 mb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                     <div class="form-wrapper">
                        <div class="form-title">
                            <h3>Admin Log In Here!</h3>
                            <span></span>
                        </div>
                        <form>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-inner mb-25">
                                        <label for="email">Email*</label> 
                                        <div class="input-area">
                                            <img src="templates/assets/images/icon/email-2.svg" alt="">
                                            <input v-model="user.email" type="email" id="email" name="email" placeholder="info@example.com">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-inner">
                                        <label for="email">Password*</label> 
                                        <input v-model="user.password" type="password" name="password" id="password" placeholder="Password"/>
                                        <i class="bi bi-eye-slash" id="togglePassword"></i>
                                    </div>
                                </div>
                                
                                <div class="col-lg-12 mt-4">
                                    <div class="form-inner">
                                        <button @click="login" class="primry-btn-2" type="button">LogIn</button>
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
import SignIn from '../views/adminLogin.vue'; // @ is an alias to /src
import router from '@/router';

import { mapGetters } from 'vuex';

@Options({
    data() {
        return {
            user: {
                email: '',
                password: '',
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
    login() {
        var credentials = {
            'email': this.user.email,
            'password': this.user.password,
            'type': 'user',
            'device_name': 'web',
        }
        this.$store.dispatch('login', credentials)
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
  mounted(){

    let Script = document.createElement("script");
    Script.setAttribute("src", "/templates/assets/js/main.js");
    document.head.appendChild(Script);

    },
})
export default class Login extends Vue {}
</script>
