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
                                                <img src="/templates/assets/images/icon/user-2.svg" alt="">
                                                <input v-model="user.name" type="text" >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Gender*</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/language-2.svg" alt="">
                                                <select class="">
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
                                                <img src="/templates/assets/images/icon/clock-2.svg " alt="">
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
                                                <img src="/templates/assets/images/icon/company-2.svg" alt="">
                                                <Dropdown 
                                                v-model=this.user.suburb_id                                       
                                                :options="suburbs"
                                                @change="changeSuburb"
                                                ref="suburb_id"
                                                optionLabel="name" 
                                                optionValue="id"
                                                placeholder="Select Suburb"
                                                class="w-full
                                                md:w-14rem" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Phone Number*</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/phone-2.svg" alt="">
                                                <input v-model="user.phone" type="text" >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Email*</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/email-2.svg" alt="">
                                                <input v-model="user.email" type="email" readonly>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Current Job Place</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/company-2.svg" alt="">
                                                <Dropdown 
                                                v-model=this.user.current_job_location_id                                       
                                                :options="locations"
                                                @change="changeLocation"
                                                ref="location"
                                                optionLabel="name" 
                                                optionValue="id"
                                                placeholder="Select Location"
                                                class="w-full
                                                md:w-14rem" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Designation*</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/designation-2.svg" alt="">
                                                <Dropdown 
                                                v-model=this.user.designation_id                                        
                                                :options="designations"
                                                @change="changeDesignation"
                                                ref="designation"
                                                optionLabel="name" 
                                                optionValue="id"
                                                placeholder="Select Designation"
                                                class="w-full
                                                md:w-14rem" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Qualification*</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/qualification-2.svg" alt="">
                                                <Dropdown 
                                                v-model=this.user.qualification_id                                       
                                                :options="qualifications"
                                                @change="changeQualification"
                                                ref="qualification"
                                                optionLabel="name" 
                                                optionValue="id"
                                                placeholder="Select Qualification"
                                                class="w-full
                                                md:w-14rem" />

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
                                            <button @click="updateProfile" class="primry-btn-2 lg-btn w-unset" type="button">Update Profile</button>
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
                                                <img src="/templates/assets/images/icon/facebook-2.svg" alt="">
                                                <input type="text" v-model="social.facebook" placeholder="https://example-facebook.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Twitter</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/twiter-2.svg" alt="">
                                                <input type="text" v-model="social.twitter" placeholder="https://example-twitter.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>LinkedIn</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/linkedin-2.svg" alt="">
                                                <input type="text" v-model="social.linkedin" placeholder="https://example-linkedin.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Pinterest</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/pinterest-2.svg" alt="">
                                                <input type="text" v-model="social.pinterest" placeholder="https://example-pinterest.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Dribbble</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/dribble-2.svg" alt="">
                                                <input type="text" v-model="social.dribbble" placeholder="https://example-dribbble.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-50">
                                            <label>Behance</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/behance-2.svg" alt="">
                                                <input type="text" v-model="social.behance" placeholder="https://example-behance.com">
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
        qualificationsOptions: [],
        languagesOptions: [],
        locationsOptions: [],
        designationsOptions: [],
        logoVisible : true,
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
        'suburbs'
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
    updateProfile(){
        this.user.dob = moment(this.user.dob).format('YYYY-MM-DD');
        this.$store.dispatch('updateProfile', this.user)
    },

    updateUserSocial(){
        
        this.$store.dispatch('updateUserSocials', this.social)
    },

    handlePhotoUpload(event:any){
        this.logoVisible = false;
        this.user.photo = event.target.files[0];
        this.preview = URL.createObjectURL(event.target.files[0]);
    }
  },
  async mounted() {
      this.user = JSON.parse(this.currentUser)[0]
      this.social.user_id = this.user.id
      this.$store.dispatch('getDesignations', '')
      this.$store.dispatch('getQualifications', '')
      this.$store.dispatch('getLocations', '')
      this.$store.dispatch('getLanguages', '')
      this.$store.dispatch('getSuburb', '')
      this.$store.dispatch('getUserSocials', this.user.id)
    //   this.designationsOptions = await this.designations
    //   this.qualificationsOptions = await this.qualifications
    //   this.languagesOptions = await this.languages
    //   this.locationsOptions = await this.locations

    let Script = document.createElement("script");
      Script.setAttribute("src", "/templates/assets/js/main.js");
      document.head.appendChild(Script);
  },
  watch: {
    userSocials() {
        this.social = this.userSocials.data
        this.social.user_id = this.user.id        
    },
    currentUser(){
        this.user = JSON.parse(this.currentUser)[0]
    }
  }
})
export default class UserProfile extends Vue {}
</script>
