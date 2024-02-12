<template>
    <div class="dashboard-area pt-120 mb-120">
        <div class="container">
            <div class="row g-lg-4 gy-5 mb-90">
                <user-menu />
                <div class="col-lg-9">
                    <div class="form-wrapper">
                        <form class="profile-form">
                            <div class="section-title2">
                                <h5 class="d-flex align-items-baseline gap-1"><img src="assets/images/icon/profile-settings.svg" alt=""> Profile Settings </h5>
                            </div>
                            <div class="change-password-area mb-40">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="info-title">
                                            <h6>Change Your Password</h6>
                                            <div class="dash"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="password">New Password*</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/lock-2.svg" alt="">
                                                <input v-model="changepass.password" type="password" name="password" id="password" placeholder="Password">
                                                <i class="bi bi-eye-slash" id="togglePassword"></i>
                                            </div>
                                
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="password2">Confirm Password*</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/lock-2.svg" alt="">
                                                <input type="password" name="confirmpassword" id="password2" placeholder="Confirm Password" />
                                                <i class="bi bi-eye-slash" id="togglePassword2"></i>
                                            </div>
                                
                                        </div>
                                    </div>
                                    <div class="col-md-12 pt-10">
                                        <div class="form-inner">
                                            <button @click="updatePassword"  class="primry-btn-1 lg-btn w-unset" type="button">Update Change</button>
                                        </div>
                                    </div>
                                </div>
                             
                            </div>
                            <!-- <div class="phone-email-area">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="info-title">
                                            <h6>Phone & Email</h6>
                                            <div class="dash"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="pphonenumber">Primary Number*</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/phone-2.svg" alt="">
                                                <input type="text" v-model="userMeta.primary_number" id="pphonenumber" name="pphonenumber" placeholder="+880-17 *** *** **">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="sphonenumber">Secondary Number*</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/phone-2.svg" alt="">
                                                <input type="text" v-model="userMeta.secondary_number" id="sphonenumber" name="sphonenumber" placeholder="+880-17 *** *** **">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="pemail">Primary Email*</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/email-2.svg" alt="">
                                                <input type="text"  v-model="userMeta.primary_email" id="pemail" name="pemail" placeholder="info@example.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-35">
                                            <label for="semail">Secondary Email*</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/email-2.svg" alt="">
                                                <input type="text"  v-model="userMeta.secondary_email" id="semail" name="semail" placeholder="info@example.com">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                         
                            <div class="privacy-security-area">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="info-title">
                                            <h6>Privacy & Security</h6>
                                            <div class="dash"></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="single-permission mb-2">
                                            <div class="title">
                                                <h6>Application Shortlisted Email Alert</h6>
                                            </div>
                                            <div class="form-check form-switch">
                                                <InputSwitch v-model="applicationShortlistedEmailAlert"  />
                                            </div>
                                        </div>
                                        <div class="single-permission mb-2">
                                            <div class="title">
                                                <h6>Application Rejected Email Alert</h6>
                                            </div>
                                            <div class="form-check form-switch">
                                                <InputSwitch v-model="applicationRejectedEmailAlert"  />
                                            </div>
                                        </div>
                                        <!-- <div class="single-permission mb-30">
                                            <div class="title">
                                                <h6>Resume Visibility</h6>
                                            </div>
                                            <div class="form-check form-switch">
                                                <InputSwitch v-model="resumeVisibility"/>
                                            </div>
                                        </div> -->
                                        <div class="single-permission mb-3">
                                            <div class="title">
                                                <h6>Disable Account</h6>
                                                <p>If you log in again you will able to see all the match jobs and get all information.</p>
                                            </div>
                                            <div class="form-check form-switch">
                                                <InputSwitch v-model="disableAccount"/>
                                            </div>
                                        </div>
                                        <!-- <div class="single-permission align-items-start">
                                            <div class="title">
                                                <h6>Delete Account</h6>
                                                <p>If you delete your account, you will no longer be able to get information about the matched jobs.</p>
                                            </div>
                                            <div class="delete-btn">
                                                <button type="reset" @click="deletUser">Delete Account</button>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 pt-50">
                                <div class="form-inner">
                                    <button v-if="!isLoading" @click="updateSettings" class="primry-btn-2 lg-btn w-unset" type="button">Update Change</button>
                                    <button v-else class="primry-btn-2 lg-btn w-unset" type="button">
                                        <span class="me-3 fs-6 text-white">Processing...</span>
                                        <i class="fa fa-spinner fa-spin text-white ms-3" style="font-size:24px">
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import UserMenu from './UserMenu.vue';
import { mapGetters } from 'vuex';
import InputSwitch from 'primevue/inputswitch';

@Options({
    components: {
        'user-menu': UserMenu,
        InputSwitch,
    },
    data() {
        return {
            changepass: {
                password: '',
                user_id: '',
            },
            userMeta: {
                user_id : '',
                company_address: '',
                primary_number: '',
                secondary_number: '',
                primary_email: '',
                secondary_email: '',
                application_shortlisted_email_alert: '',
                application_rejected_email_alert: '',
                resume_visibility: '',
                disable_account: ''
            },
            applicationShortlistedEmailAlert: false,
            applicationRejectedEmailAlert: false,
            resumeVisibility: false,
            disableAccount: false,
            mapAddress:'',
            isLoading: false,
        }
    },
    computed: {
        ...mapGetters([
            'currentUser',
            'userSetting',
    ])
    },
    methods: {
        updatePassword() {
            console.log(this.changepass);
            this.$store.dispatch('updatePassword', this.changepass)
        },
        async updateSettings(event:any) {
            this.isLoading = true;
            this.userMeta.application_shortlisted_email_alert = this.applicationShortlistedEmailAlert ? true : false;
            this.userMeta.application_rejected_email_alert = this.applicationRejectedEmailAlert ? true : false;
            this.userMeta.resume_visibility = this.resumeVisibility ? true : false;
            this.userMeta.disable_account = this.disableAccount ? true : false;
            try {
                await this.$store.dispatch('updateUserMeta', this.userMeta)
                window.setTimeout(() => {
                    this.isLoading = false
                }, 1000);
            } catch (error) {
                console.log(error);
            }
        },

        deletUser(){
            this.$store.dispatch('deletUser', this.userMeta.user_id)
        }
  },
  mounted() {
        this.user = JSON.parse(this.currentUser)[0]
        this.changepass.user_id = this.user.id
        this.userMeta.user_id = this.user.id
        this.applicationShortlistedEmailAlert = this.user.userMeta?.application_shortlisted_email_alert == 1 ? true : false;
        this.applicationRejectedEmailAlert = this.user.userMeta?.application_rejected_email_alert == 1 ? true : false;
        this.resumeVisibility = this.userMeta.resume_visibility == 1 ? true : false;
        this.disableAccount = this.userMeta.disable_account == 1 ? true : false; 
        this.userMeta.primary_number = this.user.userMeta?.primary_number;
        this.userMeta.secondary_number = this.user.userMeta?.secondary_number;
        this.userMeta.primary_email = this.user.userMeta?.primary_email;
        this.userMeta.secondary_email = this.user.userMeta?.secondary_email;
        this.userMeta.resume_visibility = this.user.userMeta?.resume_visibility;
        this.userMeta.disable_account = this.user.userMeta?.disable_account;       
        let Script = document.createElement("script");
        Script.setAttribute("src", "/assets/js/main.js");
        document.head.appendChild(Script);
  },
  watch :{    
  }

})
export default class UserSettings extends Vue {}
</script>
