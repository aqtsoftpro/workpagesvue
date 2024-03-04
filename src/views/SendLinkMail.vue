<template>
    <div>
        <!-- ========== Login Area end============= -->
        <div class="login-area pt-120 mb-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-wrapper">
                            <div class="form-title">
                                <h3 v-if="sessionData">{{ sessionData }}!</h3>
                                <h3 v-else>Resend Email Link!</h3>
                                <span></span>
                            </div>
                            <form>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-inner mb-25">
                                            <label for="email">Click here to send email again to verify link</label>
                                            <div class="d-flex">
                                                <span class="title fw-bold">Email: <h5>{{ JSON.parse(currentUser)[0].email }}</h5></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-inner">
                                            <button v-if="!this.isLoading" @click="resendEmail" class="primry-btn-2" type="button">Send Verify Request
                                                Again</button>
                                            <button v-else class="primry-btn-2" type="button">
                                                <span class="me-3 fs-6 text-white">Processing...</span>
                                                <i class="fa fa-spinner fa-spin text-white ms-3" style="font-size:24px">
                                                </i>
                                            </button>
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
            },
            isLoading: false,
            sessionData: '',
        }
    },
    computed: {
        ...mapGetters([
            'token',
            'currentUser'
        ]),
    },
    components: {
        SignIn,
    },
    mounted() {
        this.sessionData = sessionStorage.getItem('email_status');
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
        },
        resendEmail() {
            this.isLoading = true;
            try {
                this.$store.dispatch('resendEmail')
                window.setTimeout(() => {
                    this.isLoading = false;
                }, 8000);
            } catch (error) {
                console.log(error);
            }
        }
    },
})
export default class Login extends Vue { }
</script>
  