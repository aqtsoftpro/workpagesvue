<template>
    <div class="dashboard-area company-dashboard pt-120 mb-120">
        <div class="container">
            <div class="row g-lg-4 gy-5 mb-90">
                <company-menu />
                <div class="col-lg-12">
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
                        </form>
                        <form class="profile-form">    
                            <div class="phone-email-area">
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
                                                <input type="text" id="pphonenumber" name="pphonenumber" placeholder="+880-17 *** *** **">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="sphonenumber">Secondary Number*</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/phone-2.svg" alt="">
                                                <input type="text" id="sphonenumber" name="sphonenumber" placeholder="+880-17 *** *** **">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="pemail">Primary Email*</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/email-2.svg" alt="">
                                                <input type="text" id="pemail" name="pemail" placeholder="info@example.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-35">
                                            <label for="semail">Secondary Email*</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/email-2.svg" alt="">
                                                <input type="text" id="semail" name="semail" placeholder="info@example.com">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="change-area">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="info-title">
                                            <h6>Change Location</h6>
                                            <div class="dash"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner mb-25">
                                            <label for="location">Get Location*</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/map-2.svg" alt="">
                                                <input type="text" id="location" name="location" @change="loadGoogleMap" placeholder="Mirpur-12, Block-C, Road-3/20, Dhaka">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="location-map mb-35">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116795.52186985579!2d90.31523677800563!3d23.82357482672597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1673956671914!5m2!1sen!2sbd" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                            
                                            <iframe :src="mapAddress" width="600" height="450"></iframe>

                                       </div>
                                    </div>
                                </div>
                            </div>
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
                                                <h6>All Jobs Applications Alert</h6>
                                            </div>
                                            <div class="form-check form-switch">
                                                <InputSwitch v-model="jobsApplicationsEmailAlert"  />
                                            </div>
                                        </div>
                                        <!-- <div class="single-permission mb-30">
                                            <div class="title">
                                                <h6>Resume Visibility</h6>
                                            </div>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault2">
                                            </div>
                                        </div>
                                        <div class="single-permission mb-3">
                                            <div class="title">
                                                <h6>Disable Account</h6>
                                                <p>If you log in again you will able to see all the match jobs and get all information.</p>
                                            </div>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault3">
                                            </div>
                                        </div>
                                        <div class="single-permission align-items-start">
                                            <div class="title">
                                                <h6>Delete Account</h6>
                                                <p>If you delete your account, you will no longer be able to get information about the matched jobs.</p>
                                            </div>
                                            <div class="delete-btn">
                                                <button type="reset">Delete Account</button>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 pt-50">
                                <div class="form-inner">
                                    <button @click="updateSettings" class="primry-btn-2 lg-btn w-unset" type="button">Update Change</button>
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
import Settings from './CompanySettings.vue'; // @ is an alias to /src
import { mapGetters } from 'vuex';
import CompnayMenu from './CompanyMenu.vue';
import InputSwitch from 'primevue/inputswitch';

@Options({
  components: {
    Settings,
    'company-menu': CompnayMenu,
    InputSwitch,
  },
  data() {
        return {
            changepass: {
                password: '',
                user_id: '',
            },
            userMeta: {
                jobs_applications_email_alert: '',
                company_address: '',
            },
            jobsApplicationsEmailAlert: false,
            mapAddress:'',


        }
    },
    computed: {
    ...mapGetters([
        'currentUser',
    ])
  },
  methods: {
    updatePassword() {
        console.log(this.changepass);
        this.$store.dispatch('updatePassword', this.changepass)
    },
    updateSettings(event:any) {
        if (this.jobsApplicationsEmailAlert) 
            {
                this.userMeta.jobs_applications_email_alert = true
            }
            else
            {
                this.userMeta.jobs_applications_email_alert = false 
            }
        // this.$store.dispatch('updatePassword', this.changepass)
    },
    loadGoogleMap() {

        const encodedAddress = encodeURIComponent('Hathi Chowk Road, Saddar, Rawalpindi');
        console.log(encodedAddress);
        this.mapAddress = 'https://www.google.com/maps/embed?pb='+encodedAddress;
        // this.mapAddress = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116795.52186985579!2d90.31523677800563!3d23.82357482672597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1673956671914!5m2!1sen!2sbd';
        
    }

  },
  mounted() {
        this.user = JSON.parse(this.currentUser)[0]
        this.changepass.user_id = this.user.id
        
        // this.jobsApplicationsEmailAlert = true;
        // typeof yourVariable !== "undefined" && yourVariable === true
        if (typeof this.user.userMeta.jobs_applications_email_alert !== 'undefined' && this.user.userMeta.jobs_applications_email_alert === 'true') 
            {
                console.log('true');
                this.jobsApplicationsEmailAlert = true
            }
            else
            {
                this.jobsApplicationsEmailAlert = false 
            }

        let Script = document.createElement("script");
        Script.setAttribute("src", "/templates/assets/js/main.js");
        document.head.appendChild(Script);
  },
})
export default class CompanySettings extends Vue {}
</script>
