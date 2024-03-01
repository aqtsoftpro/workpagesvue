<template>
  <div>
        <!-- ========== Login Area end============= -->
        <div class="login-area pt-120 mb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                     <div class="form-wrapper">
                        <div class="form-title">
                            <h3>Reset Password!</h3>
                            <span></span>
                        </div>
                        <form>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-inner mb-25">
                                        <label for="email">Enter your email address to send reset link to</label> 
                                        <div class="input-area">
                                            <img src="assets/images/icon/email-2.svg" alt="">
                                            <input v-model="email" type="email" id="email" name="email" placeholder="info@example.com">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-inner">
                                        <button v-if="!isLoading" @click="reset" class="primry-btn-2" type="button">Send Reset Request</button>
                                        <button v-else class="primry-btn-2" type="button">
                                            <span class="me-3 fs-6 text-white">Processing...</span>
                                            <i class="fa fa-spinner fa-spin text-white" style="font-size:24px">
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
            email: '',
            isLoading: false,
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
    async reset() {
        try {
            this.isLoading = true;
            var credentials = {
                'email': this.email,
            }
            await this.$store.dispatch('reset', credentials)
            window.setTimeout(() => {
                this.isLoading = false
            }, 7000);
        } catch (error) {
            console.log(error);
        }

    }
  },
  mounted(){
    let Script = document.createElement("script");
    Script.setAttribute("src", "/assets/js/main.js");
    document.head.appendChild(Script);

    },
})
export default class Login extends Vue {}
</script>
