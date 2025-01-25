<template>
    <div class="dashboard-area pt-120 mb-120">
        <div class="container">
            <div class="row g-lg-4 gy-5 mb-90">
                <user-menu />
                <div class="col-lg-9">
                    <div class="form-wrapper">
                        <form class="profile-form">
                            <div class="section-title2">
                                <h5 class="d-flex align-items-baseline gap-1"><img
                                        src="assets/images/icon/profile-settings.svg" alt=""> Profile Settings </h5>
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
                                                <input v-model="changepass.password" type="password" name="password" @change="passCheck"
                                                    id="password" placeholder="Password">
                                                <i class="bi bi-eye-slash" id="togglePassword"></i>
                                            </div>
                                            <span v-if="!validPass" style="color: red !important; font-size: small !important; position: relative; left: 5px; top: 0.2rem !important;">{{ validationMessage }}</span>

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="password2">Confirm Password*</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/lock-2.svg" alt="">
                                                <input type="password" name="confirmpassword" v-model="confirm_pass" id="password2" @change="isConfirm"
                                                    placeholder="Confirm Password" />
                                                <i class="bi bi-eye-slash" id="togglePassword2"></i>
                                            </div>
                                            <span v-if="!confirmPass" style="color: red !important; font-size: small !important; position: relative; left: 5px; top: 3px !important;">{{ confirmText }}</span>

                                        </div>
                                    </div>
                                    <div class="col-md-12 pt-10">
                                        <div class="form-inner">
                                            <button @click="updatePassword" class="primry-btn-1 lg-btn w-unset" :disabled="!confirmPass || !validPass"
                                                type="button">Save Changes</button>
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
                                                <h6>Are you available to interview ?</h6>
                                            </div>
                                            <div class="form-check form-switch ms-auto">
                                                <InputSwitch v-model="is_available" :pt="{ slider: 'my-switch-slider' }" @change="updateAvailable({'is_available':is_available == true ? 'yes' : 'no'})" />
                                            </div>
                                        </div>
                                        <div class="single-permission mb-2">
                                            <div class="title">
                                                <h6>Receive application & update notification </h6>
                                            </div>
                                            <div class="form-check form-switch ms-auto">
                                                <InputSwitch :pt="{ slider: 'my-switch-slider' }"  v-model="applicationShortlistedEmailAlert" />
                                            </div>
                                        </div>

                                        <div class="single-permission mb-3">
                                            <div class="title">
                                                <h6>Disable Account</h6>
                                                <p>If you log in again you will be able to see all previous information.</p>
                                            </div>
                                            <div class="form-check form-switch ms-auto">
                                                <InputSwitch v-model="disableAccount" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 pt-50">
                                <div class="form-inner">
                                    <button v-if="!isLoading" @click="updateSettings" class="primry-btn-2 lg-btn w-unset"
                                        type="button">Save Changes</button>
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

<style>

/* .p-inputswitch .p-highlight .p-inputswitch-slider {
    background: #010536 !important;
} */

/* .p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover).p-highlight .p-inputswitch-slider {
    background: #010536 !important;
} */

.my-switch-slider {
  background-color: #010536 !important;
}

.my-switch-slider input[type="checkbox"]:checked {
    background: #010536;
}

</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import UserMenu from './UserMenu.vue';
import { mapGetters } from 'vuex';
import InputSwitch from 'primevue/inputswitch';
import Dropdown from 'primevue/dropdown';

@Options({
    components: {
        'user-menu': UserMenu,
        InputSwitch,
        Dropdown,
    },
    data() {
        return {
            changepass: {
                password: '',
                user_id: '',
            },
            confirm_pass: '',
            validPass: true,
            validationMessage:"",
            confirmPass: true,
            confirmText: "",
            userMeta: {
                user_id: '',
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
            mapAddress: '',
            isLoading: false,
            documentForm: {
                title: '',
                detail: '',
                file_path: ''
            },
            documents: [
                { id: 1, name: 'Work Rights' },
                { id: 2, name: 'Licence' },
                { id: 3, name: 'Qualifications' },
                { id: 4, name: 'Experience Letter' }
            ],

            profile_status: false,
            is_available: false,

        }
    },
    computed: {
        ...mapGetters([
            'currentUser',
            'userSetting',
            'userDetails',
            'userDocuments',
        ])
    },
    methods: {
        updatePassword() {
            console.log(this.changepass);
            this.$store.dispatch('updatePassword', this.changepass)
            window.setTimeout(() => {
                this.changepass.password = '';
                this.confirm_pass = '';
            }, 3000);
        },
        async updateSettings(event: any) {
            this.isLoading = true;
            this.userMeta.application_shortlisted_email_alert = this.applicationShortlistedEmailAlert ? true : false;
            this.userMeta.application_rejected_email_alert = this.applicationShortlistedEmailAlert ? true : false;
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

        documentStore() {
            this.$store.dispatch('documentStore', this.documentForm)
            this.documentForm.title = ''
            this.documentForm.file_path = ''
            this.documentForm.detail = ''
        },

        deletUser() {
            this.$store.dispatch('deletUser', this.userMeta.user_id)
        },

        passCheck() {
            const password = this.changepass.password;
            const minLength = /(?=.{8,})/;
            const hasUpperCase = /(?=.*[A-Z])/;
            const hasNumber = /(?=.*[0-9])/;
            const hasSpecialChar = /(?=.*[!@#$%^&*])/;
            if (!minLength.test(password)) {
                this.validPass = false;
                this.validationMessage = 'Password must be at least 8 characters long.';
            } else if (!hasUpperCase.test(password)) {
                this.validPass = false;
                this.validationMessage = 'Password must contain at least one uppercase letter.';
            } else if (!hasNumber.test(password)) {
                this.validPass = false;
                this.validationMessage = 'Password must contain at least one number.';
            } else if (!hasSpecialChar.test(password)) {
                this.validPass = false;
                this.validationMessage = 'Password must contain at least one special character.';
            } else {
                this.validPass = true;
            }
        },

        isConfirm() {
            if (this.changepass.password !== this.confirm_pass) {
                this.confirmPass = false;
                this.confirmText = 'Confirm passwor should match with password. '
            }
            else {
                this.confirmPass = true;
            }
        },

        setTitle(event: any) {
            this.documentForm.title = event.value;
        },

        fileHandle(event: any) {
            const file = event.target.files[0];
            console.log(event);
            this.documentForm.file_path = file;
            console.log('no data found');
        },

        updateStatus(data: Object){            
            this.$store.dispatch('updateStatus', data)
        },

        updateAvailable(data: Object){            
            this.$store.dispatch('updateStatus', data)
        },
    },
    async mounted() {
        await this.$store.dispatch('getUserDetails', '')
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
        this.userMeta.disable_account = this.user.userMeta?.disable_account == 1? true: false;
        // this.profile_status = this.userDetails.profile_status == 'opened' ? true: false;
        // this.is_available = this.userDetails.is_available == 'yes' ? true: false;
        let Script = document.createElement("script");
        Script.setAttribute("src", "/assets/js/main.js");
        document.head.appendChild(Script);
    },
    watch: {
        userDetails() {
            this.profile_status = this.userDetails.profile_status == 'opened' ? true: false;
            this.is_available = this.userDetails.is_available == 'yes' ? true: false;
        }
    }

})
export default class UserSettings extends Vue { }
</script>
