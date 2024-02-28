<template>
    <div class="dashboard-area pt-120 mb-120">
        <div class="container">
            <div class="row g-lg-4 gy-5 mb-90">
                <user-menu />
                <div class="col-lg-9">
                    <div class="my-profile-inner">
                        
                        <div class="form-wrapper mb-60">
                            <div class="section-title">
                                <h5>My Profile</h5>
                            </div>
                            <form class="profile-form">
                                <div class="row">
                                                                        
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>full Name*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/user-2.svg" alt="">
                                                <input v-model="user.name" type="text" >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Gender*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/language-2.svg" alt="">
                                                <select class="form-select" v-model="user.gender">
                                                    <option value="">Select Gender</option>
                                                    <option value="male" v-bind:selected="user.gender =='male'">Male</option>
                                                    <option value="female"  v-bind:selected="user.gender =='female'">Female</option>
                                                    <option value="unspecified"  v-bind:selected="user.gender =='unspecified'">Un Specified</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner mb-25">
                                            <label>Your DOB*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/clock-2.svg " alt="">
                                                <Calendar v-model="user.dob"  :maxDate="maxDate"   />
                                          
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner mb-50">
                                            <label>Complete Address</label>
                                            <textarea v-model="user.address"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner mb-25">
                                            <label>Subrub</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/company-2.svg" alt="">
                                                <Dropdown 
                                                v-model=this.user.suburb_id                                       
                                                :options="subrubsList"
                                                @change="changeSuburb"
                                                ref="suburb_id"
                                                optionLabel="name" 
                                                optionValue="id"
                                                placeholder="Select Suburb"
                                                class="w-full 
                                                md:w-24rem" />
                                                <!-- <select class="form-select" v-model="user.suburb_id" @change="changeSuburb">
                                                    <option value="">Select Suburb</option>

                                                    <option v-for="suburb in suburbs" :value="suburb.id" v-bind:selected="user.gender =='male'">{{ suburb.name }}</option>

                                                </select> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Phone Number*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/phone-2.svg" alt="">
                                                <input v-model="user.phone" type="text" >
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
                                            <label>Current Job Place</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/company-2.svg" alt="">
                                                <Dropdown 
                                                v-model=this.user.current_job_location_id                                       
                                                :options="locationsOptions"
                                                @change="changeLocation"
                                                ref="location"
                                                optionLabel="name" 
                                                optionValue="id"
                                                placeholder="Select Location"
                                                class="w-full 
                                                md:w-24rem" />

                                                <!-- <select class="form-select" v-model="user.current_job_location_id" @change="changeLocation">
                                                    <option value="">Select Location</option>

                                                    <option v-for="location in locations" :value="location.id">{{ location.name }}</option>
                                                </select> -->
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Designation*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/designation-2.svg" alt="">
                                                <Dropdown 
                                                v-model=this.user.designation_id                                        
                                                :options="designationsOptions"
                                                @change="changeDesignation"
                                                ref="designation"
                                                optionLabel="name" 
                                                optionValue="id"
                                                placeholder="Select Designation"
                                                class="w-full 
                                                md:w-24rem"/>

                                                <!-- <select class="form-select" v-model="user.designation_id" @change="changeDesignation">
                                                    <option value="">Select Designation</option>
                                                    <option v-for="designation in designations" :value="designation.id">{{ designation.name }}</option>
                                                </select> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Qualification*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/qualification-2.svg" alt="">
                                                <Dropdown 
                                                v-model=this.user.qualification_id                                       
                                                :options="qualificationsOptions"
                                                @change="changeQualification"
                                                ref="qualification"
                                                optionLabel="name" 
                                                optionValue="id"
                                                placeholder="Select Qualification"
                                                class="w-full 
                                                md:w-24rem"/>

                                                <!-- <select class="form-select" v-model="user.qualification_id" @change="changeQualification">
                                                    <option value="">Select Qualification</option>
                                                    <option v-for="qualification in qualifications" :value="qualification.id">{{ qualification.name }}</option>
                                                </select> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner mb-50">
                                            <label>Description</label>
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
                                                            <button type="button" class="upload-btn"><i class="bi bi-plus-lg"></i></button>
                                                            <input v-on:change="handlePhotoUpload" type="file" />
                                                        </div>
                                                        <span>Maximum File Upload: 2 MB</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <img v-if="logoVisible" width="200" :src="user.photo" alt="">
                                                    <img  :src="preview" width="200" alt=""> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-inner">
                                            <!-- <span class="fa-spinner"></span> -->
                                            <button v-if="!isLoading" @click="updateProfile" class="primry-btn-2 lg-btn w-unset" type="button">Update Profile
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

                        <div class="form-wrapper mb-5">
                            <div class="section-title">
                                <h5>Other Details:</h5>
                            </div>
                            <form class="profile-form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>User Active Job</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/job2.svg" alt="" width="16">
                                                <input type="text" v-model="otherDetail.active_job" placeholder="Job Name">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Nationality</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/nid.svg" alt="">
                                                <Dropdown 
                                                v-model=otherDetail.country_id                                     
                                                :options="locationsOptions"
                                                @change="changeLocation"
                                                ref="location"
                                                optionLabel="name" 
                                                optionValue="id"
                                                placeholder="Select Location"
                                                class="w-full 
                                                md:w-24rem" />
                                                <!-- <input type="text" v-model="otherDetail.country_id" placeholder="https://example-twitter.com"> -->
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Profile Status</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/linkedin-2.svg" alt="">
                                                <input type="text" v-model="otherDetail.profile_status" placeholder="https://example-linkedin.com">
                                            </div>
                                        </div>
                                    </div> -->
                                    <!-- <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Pinterest</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/pinterest-2.svg" alt="">
                                                <input type="text" v-model="otherDetail.is_available" placeholder="https://example-pinterest.com">
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Introduction Short video</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/devlopment-06.svg" alt="" width="16">
                                                <input type="file" @change="otherFileHandle" placeholder="https://example-dribbble.com">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="col-md-6">
                                        <div class="form-inner mb-50">
                                            <label>Behance</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/behance-2.svg" alt="">
                                                <input type="text" v-model="social.behance" placeholder="https://example-behance.com">
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="col-md-12">
                                        <div class="form-inner">
                                            <button @click="updateUserDetail" class="primry-btn-2 lg-btn w-unset" type="button">Update Detail</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
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
                                                <input type="text" v-model="social.facebook" placeholder="https://example-facebook.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Twitter</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/twiter-2.svg" alt="">
                                                <input type="text" v-model="social.twitter" placeholder="https://example-twitter.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>LinkedIn</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/linkedin-2.svg" alt="">
                                                <input type="text" v-model="social.linkedin" placeholder="https://example-linkedin.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Dribbble</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/dribble-2.svg" alt="">
                                                <input type="text" v-model="social.dribbble" placeholder="https://example-dribbble.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner">
                                            <button @click="updateUserSocial" class="primry-btn-2 lg-btn w-unset" type="button">Update Social Info</button>
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
import moment from 'moment';

@Options({
  components: {
    'user-menu': UserMenu,
    Dropdown,
    Calendar,
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
            current_job_location_id: '',
            designation_id: '',
            qualification_id: '2',
            description: '',
            address: '',
            suburb_id:'',
        },
        social: {
            user_id: null,
            facebook: null,
            twitter: null,
            linkedin: null,
            pinterest: null,
            dribbble: null,
            behance: null,
        },

        otherDetail: {
            active_job: null,
            country_id: null,
            profile_status: null,
            is_available: null,
            intro_video: null,
        },

        qualificationsOptions: [],
        languagesOptions: [],
        locationsOptions: [],
        designationsOptions: [],
        logoVisible : true,
        isLoading: false,
        subrubsList: [],
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
        'userDetails'
    ])
  },
  methods: {
    changeLanguage(event:any){
        this.user.language_id = event.value
    },
    changeQualification(event:any){
        this.user.qualification_id = event.value
    },

    changeDesignation(event:any){
        this.user.designation_id = event.value
    },
    changeLocation(event:any){
        this.user.location_id = event.value
    },
    changeSuburb(event:any){
            this.user.suburb_id = event.value
        },
    async updateProfile(){
        this.isLoading = true;
        try {
            this.user.dob = moment(this.user.dob).format('YYYY-MM-DD');
            await this.$store.dispatch('updateProfile', this.user);
            window.setTimeout(() => {
                this.isLoading = false
            }, 3000)
        } catch (error) {
            console.log(error);
            
        }

    },

    updateUserSocial(){        
        this.$store.dispatch('updateUserSocials', this.social)
    },

    updateUserDetail(){
        this.$store.dispatch('updateUserDetail', this.otherDetail)
    },

    handlePhotoUpload(event:any){
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
  },
  mounted() {
        // this.$store.dispatch('getUserInfo')
        this.user = JSON.parse(this.currentUser)[0]
        this.social.user_id = this.user.id
        this.$store.dispatch('getDesignations', '')
        this.$store.dispatch('getQualifications', '')
        this.$store.dispatch('getLocations', '')
        this.$store.dispatch('getLanguages', '')
        this.$store.dispatch('getSuburb', '')
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
    currentUser(){
        this.user = JSON.parse(this.currentUser)[0]
    },

    userDetails() {
        this.otherDetail.active_job = this.userDetails.active_job;
        this.otherDetail.country_id = this.userDetails.country_id;
        this.otherDetail.profile_status = this.userDetails.profile_status;
        this.otherDetail.is_available = this.userDetails.is_available;
        this.otherDetail.intro_video = this.userDetails.intro_video;
    },
    suburbs() {
       this.subrubsList =  this.suburbs;
    },
    locations() {
        this.locationsOptions = this.locations
    },

    designations() {
        this.designationsOptions = this.designations
    },

    qualifications() {
        this.qualificationsOptions = this.qualifications
    },

  }
})
export default class UserProfile extends Vue {}
</script>
