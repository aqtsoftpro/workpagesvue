<template>
    <div class="dashboard-area pt-120 mb-120">
        <div class="container">
            <div class="row g-lg-4 gy-5 mb-90">
                <user-menu />
                <div class="col-lg-9">
                    <div class="my-profile-inner">

                        <div class="form-wrapper mb-60">
                            <!-- <div class="section-title">
                                <h5>My Profile</h5>
                            </div> -->
                            <form class="profile-form">
                                <div class="row">

                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Full Name*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/user-2.svg" alt="">
                                                <input v-model="user.name" type="text">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Gender</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/language-2.svg" alt="">
                                                <select class="form-select" v-model="user.gender">
                                                    <option value="">Select Gender</option>
                                                    <option value="male" :selected="user.gender == 'male'">Male</option>
                                                    <option value="female" :selected="user.gender == 'female'">Female
                                                    </option>
                                                    <option value="unspecified"
                                                        :selected="user.gender == 'unspecified'">
                                                        Unspecified</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner mb-25">
                                            <label>Your DOB</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/clock-2.svg " alt="">
                                                <Calendar v-model="user.dob" dateFormat="dd-mm-yy" :maxDate="maxDate" />
                                                <!-- dateFormat="dd-mm-yyyy" -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner mb-50">
                                            <label>Street</label>
                                            <textarea v-model="user.address"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner mb-25">
                                            <label>Location</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/company-2.svg" alt="">
                                                <select class="form-select" v-model="user.location_id">
                                                    <option value="">Select Location</option>
                                                    <option v-for="state in states" :value="state.id"
                                                        :selected="user.location_id == state.id">{{ state.name }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Country</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/company-2.svg" alt="">
                                                <select class="form-select" v-model="user.current_job_location_id">
                                                    <option value="">Select Location</option>
                                                    <option v-for="location in locationsOptions" :value="location.id"
                                                        :selected="user.current_job_location_id == location.id">{{
                                                            location.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Phone Number*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/phone-2.svg" alt="">
                                                <input v-model="user.phone" type="text">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Email*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/email-2.svg" alt="">
                                                <input v-model="user.email" type="email" readonly>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Job Title*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/designation-2.svg" alt="">
                                                <select class="form-select" v-model="user.designation_id">
                                                    <option value="">Select Job Title</option>
                                                    <option v-for="designation in designationsOptions"
                                                        :value="designation.id"
                                                        :selected="user.designation_id == designation.id">{{
                                                            designation.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Education</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/qualification-2.svg" alt="">
                                                <select class="form-select" v-model="user.qualification_id">
                                                    <option value="">Select Education</option>
                                                    <optgroup v-for="(group, index) in degreeGroups" :label="index">
                                                        <option v-for="item in group" :value="item.id"
                                                            :selected="user.qualification_id == item.id">{{ item.name }}
                                                        </option>
                                                    </optgroup>

                                                    <!-- <option v-for="qualification in qualificationsOptions" :value="qualification.id" :selected="user.qualification_id == qualification.id">{{ qualification.name }}</option> -->
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Select Availability</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/qualification-2.svg" alt="">
                                                <select class="form-select" v-model="user.availability_id">
                                                    <option value="">Select Availability</option>
                                                    <option v-for="availability in employeeAvailabilityList" :value="availability.id"
                                                        :selected="user.availability_id == availability.id">{{ availability.name }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="password2">Upload Resume</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/create-resume.svg" alt="" width="16">
                                                <input type="file" @change="cvHandle" placeholder="upload file"
                                                accept=".pdf,application/pdf,image/jpeg,image/jpg,image/png,image/webp" />
                                            </div>
                                            <label v-if="user.cv !== null">Resume already uploaded</label>
                                        </div>
                                    </div>


                                    <div class="col-md-12">
                                        <div class="form-inner mb-50">
                                            <label>Description - Write a brief summary about you</label>
                                            <textarea v-model="user.description"></textarea>
                                        </div>
                                    </div>





                                    <div class="col-lg-12">
                                        <div class="company-images-area mb-50">
                                            <div class="row g-lg-4 gy-5">
                                                <div class="col-lg-6 devaider1 position-relative">
                                                    <div class="company-logo-area">
                                                        <h5>Upload Display Picture: </h5>
                                                        <div class="drag-area">
                                                            <p>Upload Logo</p>
                                                            <button type="button" class="upload-btn"><i
                                                                    class="bi bi-plus-lg"></i></button>
                                                            <input v-on:change="handlePhotoUpload" type="file" accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/jpg,image/png,image/webp" />
                                                        </div>
                                                        <span>Maximum File Upload: 2 MB</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <img v-if="logoVisible" width="200" :src="user.photo" alt="">
                                                    <img :src="preview" width="200" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-md-12">
    <div class="d-flex justify-content-between align-items-center">
      <h6>Casual Portal Visibility</h6>
      <div class="form-check form-switch mt-2">
        <div class="visibility-switch-container" :class="{ disabled: visibilityIsDisabled }">
          <span class="visibility-status-label">{{ user.casual_portal_visibility ? "Visible" : "Not Visible" }}</span>
          <InputSwitch 
            v-model="user.casual_portal_visibility"
         
            :pt="{ slider: 'my-switch-slider' }"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-12 mb-5">
    <div class="d-flex justify-content-between align-items-center">
      <h6>Employee Directory Visibility</h6>
      <div class="form-check form-switch mt-2">
        <div class="visibility-switch-container" :class="{ disabled: visibilityIsDisabled }">
          <span class="visibility-status-label">{{ user.employee_directory_visibility ? "Visible" : "Not Visible" }}</span>
          <InputSwitch 
            v-model="user.employee_directory_visibility"
     
            :pt="{ slider: 'my-switch-slider' }"
          />
        </div>
      </div>
    </div>
  </div>

                                    <div class="col-md-12">
                                        <div class="form-inner">
                                            <button v-if="!isLoading" @click="updateProfile"
                                                class="primry-btn-2 lg-btn w-unset" type="button">Update Profile
                                            </button>
                                            <button v-else class="primry-btn-2 lg-btn w-unset" type="button">
                                                <span class="me-3 fs-6 text-white">Processing...</span>
                                                <i class="fa fa-spinner fa-spin text-white ms-3" style="font-size:24px">
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="form-wrapper mt-5">
                            <form class="profile-form">
                                <div class="section-title2">
                                    <h5 class="d-flex align-items-baseline gap-1"><img
                                            src="assets/images/icon/profile-settings.svg" alt=""> Upload Documents </h5>
                                </div>
                                <div class="change-password-area mb-40">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="info-title">
                                                <h6>You can upload your leagal documents here</h6>
                                                <div class="dash"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-inner mb-25">
                                                <label>Document Name</label>
                                                <div class="input-area">
                                                    <img src="/assets/images/icon/education.svg" alt="" width="16">
                                                    <Dropdown v-model=documentForm.title :options="documents"
                                                        @change="setTitle" ref="suburb_id" optionLabel="name"
                                                        optionValue="name" placeholder="Select Title" class="w-full 
                                                    md:w-24rem" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-inner mb-25">
                                                <label for="password2">Document Detail*</label>
                                                <!-- <img src="/assets/images/icon/lock-2.svg" alt=""> -->
                                                <textarea v-model="documentForm.detail"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-inner mb-25">
                                                <label for="password2">Upload File*</label>
                                                <div class="input-area">
                                                    <img src="/assets/images/icon/create-resume.svg" alt="" width="16">
                                                    <input type="file" @change="fileHandle" placeholder="upload file" />
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-md-12 pt-10">
                                            <div class="form-inner">
                                                <button v-if="!isLoading" @click="documentStore"
                                                    class="primry-btn-2 lg-btn w-unset" type="button">Save
                                                    Changes</button>
                                                <button v-else class="primry-btn-2 lg-btn w-unset" type="button">
                                                    <span class="me-3 fs-6 text-white">Processing...</span>
                                                    <i class="fa fa-spinner fa-spin text-white ms-3"
                                                        style="font-size:24px">
                                                    </i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!-- <div class="form-wrapper mb-5">
                            <div class="section-title">
                                <h5>Other Details:</h5>
                            </div>
                            <form class="profile-form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Introduction Short video</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/devlopment-06.svg" alt="" width="16">
                                                <input type="file" @change="otherFileHandle" placeholder="https://example-instagram.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner">
                                            <button v-if="!otherDetail.loading" @click="updateUserDetail" class="primry-btn-2 lg-btn w-unset" type="button">Update Detail</button>
                                            <button v-else class="primry-btn-2 lg-btn w-unset" type="button">
                                                <span class="me-3 fs-6 text-white">Processing...</span>
                                                <i class="fa fa-spinner fa-spin text-white ms-3" style="font-size:24px">
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div> -->

                        <div class="form-wrapper">
                            <div class="section-title">
                                <h5>Social Network:</h5>
                            </div>
                            <form class="profile-form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Facebook</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/facebook-2.svg" alt="">
                                                <input type="text" v-model="social.facebook"
                                                    placeholder="https://example-facebook.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Twitter</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/twiter-2.svg" alt="">
                                                <input type="text" v-model="social.twitter"
                                                    placeholder="https://example-twitter.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>LinkedIn</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/linkedin-2.svg" alt="">
                                                <input type="text" v-model="social.linkedin"
                                                    placeholder="https://example-linkedin.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Instagram</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/instagram.svg" alt="" width="16">
                                                <input type="text" v-model="social.instagram"
                                                    placeholder="https://example-instagram.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner">
                                            <button @click="updateUserSocial" class="primry-btn-2 lg-btn w-unset"
                                                type="button">Update Social Info</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.form-wrapper form .form-inner span {
    font-size: 1rem !important;
    padding: 10px !important;
}

.p-dropdown {
    width: 100% !important;
}

/* .form-wrapper form .form-inner .input-area::before {
  content: "";
  width: 1px;
  height: 14px;
  background: #D9D9D9;
  position: absolute;
  left: 39px;
  top: 50%;
  transform: translateY(-50%);
  line-height: 1;
} */
</style>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';
import UserMenu from './UserMenu.vue';
import { mapGetters } from 'vuex';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import InputSwitch from 'primevue/inputswitch';
import moment from 'moment';

@Options({
    components: {
        'user-menu': UserMenu,
        Dropdown,
        Calendar,
        InputSwitch,
    },
    data() {
        return {
            preview: null,
            maxDate: null,
            user: {
                name: '',
                gender: '',
                photo: '',
                age: '',
                dob: '',
                email: '',
                phone: '',
                current_job_location_id: 2,
                designation_id: '',
                qualification_id: '2',
                description: '',
                address: '',
                suburb_id: '',
                location_id: '',
                availability_id: '',
                cv: '',
                casual_portal_visibility: false,
                employee_directory_visibility: false,
            },
            social: {
                user_id: null,
                facebook: null,
                twitter: null,
                linkedin: null,
                pinterest: null,
                instagram: null,
                behance: null,
            },

            otherDetail: {
                active_job: null,
                country_id: 2,
                profile_status: null,
                is_available: null,
                intro_video: null,
                loading: false
            },

            qualificationsOptions: [],
            languagesOptions: [],
            locationsOptions: [],
            degreeGroups: [],
            designationsOptions: [],
            logoVisible: true,
            isLoading: false,
            subrubsList: [],
            statesList: [],
            employeeAvailabilityList: [],

            documents: [
                { id: 1, name: 'Work Rights' },
                { id: 2, name: 'Licence' },
                { id: 3, name: 'Qualifications' },
                { id: 4, name: 'Experience Letter' }
            ],

            documentForm: {
                title: '',
                detail: '',
                file_path: ''
            },
            visibilityIsDisabled: false
        }
    },
    created() {
        this.maxDate = new Date();
    },
    computed: {
        ...mapGetters([
            'currentUser',
            'designations',
            'qualifications',
            'locations',
            'languages',
            'userSocials',
            'suburbs',
            'employeeAvailability',
            'userDetails',
            'states'
        ]),
        statesList(): Array<{ id: number; name: string }> {
      return this.states;
    }
    },
    methods: {
        changeLanguage(event: any) {
            this.user.language_id = event.value
        },
        changeQualification(event: any) {
            this.user.qualification_id = event.value
        },
        changeDesignation(event: any) {
            this.user.designation_id = event.value
        },
        changeLocation(event: any) {
            this.user.location_id = event.value
        },
        changeSuburb(event: any) {
            this.user.suburb_id = event.value
        },
        changeAvilibility(event: any) {
            this.user.availability_id = event.value
        },
        async updateProfile() {
 
            this.isLoading = true;
            try {
                this.user.dob = moment(this.user.dob).format('DD-MM-YYYY');
                console.log(this.user);
                await this.$store.dispatch('updateProfile', this.user);
                window.setTimeout(() => {
                    this.isLoading = false
                }, 6000)
            } catch (error) {
                console.log(error);

            }

        },

        updateUserSocial() {
            this.$store.dispatch('updateUserSocials', this.social)
        },

        async updateUserDetail() {
            this.otherDetail.loading = true;
            try {
                await this.$store.dispatch('updateUserDetail', this.otherDetail);
                window.setTimeout(() => {
                    this.otherDetail.loading = false;
                }, 1000);
            } catch (error) {
                console.log(error);

            }
        },

        handlePhotoUpload(event: any) {
            this.logoVisible = false;
            this.user.photo = event.target.files[0];
            this.preview = URL.createObjectURL(event.target.files[0]);
        },

        otherFileHandle(event: any) {
            const file = event.target.files[0];
            console.log(event);
            this.otherDetail.intro_video = file;
            console.log('no data found');
        },

        documentStore() {
            this.$store.dispatch('documentStore', this.documentForm)
            this.documentForm.title = ''
            this.documentForm.file_path = ''
            this.documentForm.detail = ''
        },

        fileHandle(event: any) {
            const file = event.target.files[0];
            console.log(event);
            this.documentForm.file_path = file;
            console.log('no data found');
        },

        cvHandle(event: any) {
            const file = event.target.files[0];
            console.log(event);
            this.user.cv = file;
            console.log('no data found');
        },


    },
    mounted() {
        this.$store.dispatch('getCurrentUser')
        this.user = JSON.parse(this.currentUser)[0]
        console.log('user_info',this.user.location_id);
        this.user.casual_portal_visibility = this.user.userMeta?.casual_portal_visibility == "1" ? true : false;

        this.user.employee_directory_visibility = this.user.userMeta?.employee_directory_visibility == "1" ? true : false;
        this.social.user_id = this.user.id
        this.$store.dispatch('getDesignations', '')
        this.$store.dispatch('getQualifications', '')
        this.$store.dispatch('getLocations', '')
        this.$store.dispatch('getLanguages', '')
        this.$store.dispatch('getSuburb', '')
        this.$store.dispatch('getStates', '')
        this.$store.dispatch('getEmployeeAvailability', '')
        this.$store.dispatch('getUserSocials', this.user.id)
        this.$store.dispatch('getUserDetails', '')

        //   this.designationsOptions = await this.designations
        //   this.qualificationsOptions = await this.qualifications
        //   this.languagesOptions = await this.languages
        //   this.locationsOptions = await this.locations
        this.social = this.userSocials
        let Script = document.createElement("script");
        Script.setAttribute("src", "/assets/js/main.js");
        document.head.appendChild(Script);
    },
    watch: {
        userSocials() {
            this.social = this.userSocials.data
            this.social.user_id = this.user.id
        },
        currentUser() {
            this.user = JSON.parse(this.currentUser)[0]
            this.user.current_job_location_id = JSON.parse(this.currentUser)[0].current_job_location_id ?? 2;
            this.user.location_id = JSON.parse(this.currentUser)[0].location_id ?? 2;
            this.user.casual_portal_visibility = this.user.userMeta?.casual_portal_visibility == "1" ? true : false;
            this.user.employee_directory_visibility = this.user.userMeta?.employee_directory_visibility == "1" ? true : false;
        },
        userDetails() {
            this.otherDetail.active_job = this.userDetails?.active_job;
            this.otherDetail.location_id = this.userDetails?.location_id ?? 2;
            this.otherDetail.current_job_location_id = this.userDetails?.current_job_location_id ?? 2;
            this.otherDetail.profile_status = this.userDetails?.profile_status;
            this.otherDetail.is_available = this.userDetails?.is_available;
            this.otherDetail.intro_video = this.userDetails?.intro_video;
        },
        suburbs() {

            this.subrubsList = this.suburbs;
        },
    
        employeeAvailability() {
            this.employeeAvailabilityList = this.employeeAvailability;
        },
        locations() {
            this.locationsOptions = this.locations
        },
        designations() {
            this.designationsOptions = this.designations
        },
        qualifications() {
            this.degreeGroups = this.qualifications
            this.qualificationsOptions = this.qualifications
        },

    }
})
export default class UserProfile extends Vue { }
</script>
