<template>
    <div class="dashboard-area company-dashboard pt-120 mb-120">
        <div class="container">
            <div class="row">
                <company-menu />
                <div class="col-lg-12">
                    <div class="my-profile-inner">
                        
                        <div class="form-wrapper">
                            <div class="section-title two">
                                <h5>My Profile</h5>
                                <div class="dash"></div>
                            </div>

                            <form class="profile-form">
                            
                                <div class="section-title2">
                                    <h5>Company Information:</h5>
                                </div>
                                <div class="row" v-if="company">
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="companyname">Company Name*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/company-2.svg" alt="">
                                                <input v-model="userForm.name" type="text" id="companyname" name="companyname" placeholder="Elite Hangstroman">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Company Type*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/category-2.svg" alt="">
                                                <!-- <Dropdown 
                                                @change="changeCompanyType"
                                                v-model=userForm.company_type_id 
                                                :options="companyTypes" 
                                                ref="language"
                                                optionLabel="name" 
                                                optionValue="id"
                                                placeholder="Select Company Type" 
                                                class="w-full 
                                                md:w-24rem"
                                                 /> -->
                                                 <select class="form-select" v-model="userForm.company_type_id" @change="changeCompanyType">
                                                    <option value="">Select Company Type*</option>
                                                    <option v-for="companyType in companyTypes" :value="companyType.id">{{ companyType.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="company">Company Size*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/person-2.svg" alt="">
                                                <input v-model="userForm.company_size" type="text" id="company" name="company" placeholder="40 Person">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="email">Email*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/email-2.svg" alt="">
                                                <input v-model="userForm.email" type="text" id="email" name="email" placeholder="info@example.com" >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner mb-25">
                                            <label for="description">Address*</label>
                                                <textarea v-model="userForm.address" id="description" placeholder="Address"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="location">State*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/map-2.svg" alt="">
                                                <Dropdown 
                                                v-model=this.userForm.state_id                                       
                                                :options="states"
                                                @change="changeState"
                                                ref="location"
                                                optionLabel="name" 
                                                optionValue="id"
                                                placeholder="Select State"
                                                class="w-full
                                                md:w-14rem" />
                                                <!-- <select class="form-select" v-model="userForm.state_id" @change="changeState">
                                                    <option value="">Select Location</option>
                                                    <option v-for="state in states" :value="state.id">{{ state.name }}</option>
                                                </select> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="website">Website Link*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/website-2.svg" alt="">
                                                <input v-model="userForm.weblink" type="text" id="website" name="website" placeholder="https://example.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="facebook">Facebook</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/facebook-2.svg" alt="">
                                                <input v-model="userForm.facebook" type="text" id="facebook" name="facebook" placeholder="https://example-facebook.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="twitter">Twitter</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/twiter-2.svg" alt="">
                                                <input v-model="userForm.twitter" type="text" id="twitter" name="twitter" placeholder="https://example-twitter.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="linkedin">LinkedIn</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/linkedin-2.svg" alt="">
                                                <input v-model="userForm.linkedin" type="text" id="linkedin" name="linkedin" placeholder="https://example-linkedin.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="pinterest">Pinterest</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/pinterest-2.svg" alt="">
                                                <input v-model="userForm.pinterest" type="text" id="pinterest" name="pinterest" placeholder="https://example-pinterest.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="dribble">Dribbble</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/dribble-2.svg" alt="">
                                                <input v-model="userForm.dribble" type="text" id="dribble" name="dribble" placeholder="https://example-dribbble.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="behance">Behance</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/behance-2.svg" alt="">
                                                <input v-model="userForm.behance" type="text" id="behance" name="behance" placeholder="https://example-behance.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="company-images-area mb-50">
                                            <div class="row g-lg-4 gy-5">
                                                <div class="col-lg-6 devaider1 position-relative">
                                                    <div class="company-logo-area">
                                                        <h5>Company Logo: </h5>
                                                        <div class="drag-area">
                                                            <p>Upload Logo</p>
                                                            <button type="button" class="upload-btn"><i class="bi bi-plus-lg"></i></button>
                                                            <input v-on:change="handleLogoUpload" type="file" />
                                                            
                                                        </div>
                                                        <span>Maximum File Upload: 2 MB</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="company-cover-photo-area">
                                                        <h5>Company Cover Photo: </h5>
                                                        <div class="drag-area" id="dragArea2">
                                                            <p>Upload Photo</p>
                                                            <button type="button" class="upload-btn"><i class="bi bi-plus-lg"></i></button>
                                                            <input v-on:change="handleCoverUpload" type="file" >
                                                        </div>
                                                        <span>Maximum File Upload: 5 MB</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="userForm.logo || userForm.cover_photo" class="row g-lg-4 gy-5 pt-5">
                                                <div class="col-lg-6 devaider1 position-relative text-center">
                                                    <!-- <img v-if="logoVisible" width="200" :src="userForm.logo" /> -->
                                                    <img width="300" v-if="logoVisible" :src="userForm.logo" />
                                                    <img :src="previewlogo" width="200" alt="">
                                                    
                                                    <!-- <img v-if="logoVisible" width="200" :src="user.photo" alt="">
                                                    <img  :src="preview" width="200" alt="">  -->
                                                    
                                                </div>
                                                <div class="col-lg-6 text-center">
                                                    <img width="300" v-if="coverlogoVisible" :src="userForm.cover_photo" />
                                                    <img :src="previewcoverlogo" width="200" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="section-title2">
                                        <h5>Working Area:</h5>
                                    </div>
                                    <div class="work-area-row">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="working-field">Working Field*</label>
                                                    <div class="input-area">
                                                        <img src="assets/images/icon/company-2.svg" alt="">
                                                        <input type="text" id="working-field" name="working-field" placeholder="Frontend Developer">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label>Add Icon*</label>
                                                    <div class="input-area">
                                                        <img src="assets/images/icon/company-2.svg" alt="">
                                                        <input type="file">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-inner mb-40">
                                                    <label for="description">Short Description*</label>
                                                    <textarea name="description" id="description" placeholder="Company Details*"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="add-remove-btn d-flex align-items-center justify-content-between mb-50">
                                        <div class="add-row">
                                            <button type="button" class="addwork-area-row">Add Working Area+</button>
                                        </div>
                                    </div>-->
                                    <div class="col-md-12">
                                        <div class="form-inner">
                                            <button v-if="!isLoading" @click="updateCompanyProfile"  class="primry-btn-2 lg-btn w-unset" type="button">Update Change</button>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.form-wrapper form .form-inner span {
    font-size: 1rem;
    padding: 10px;
}
.p-dropdown {
    width: 100% !important;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Profile from '../company/CompanyProfile.vue'; // @ is an alias to /src
import CompanyMenu from './CompanyMenu.vue'
import { mapGetters } from 'vuex';
import Dropdown from 'primevue/dropdown';
import Company from './index.vue';


@Options({
  components: {
    Profile,
    Dropdown,
    'company-menu': CompanyMenu
  },
  data(){
    return{
        userForm: {
            name: null,
            location_id: 2,
            state_id: null,
            address:null,
            logo: null,
            cover_photo: null,
            owner: null,
            package_id: null,
            company_type_id: null,
            company_size: null,
            weblink: null,
            facebook: null,
            twitter: null,
            linkedin: null,
            pinterest: null,
            dribble: null,
            behance: null
        },
        user: null,
        logoVisible : true,
        coverlogoVisible: true,
        previewlogo: null,
        previewcoverlogo:null,
        isLoading: false,
        
    }
  },
  methods: {
    changeCompanyType(event:any){
        this.userForm.company_type_id = event.value
    },
    changeLocation(event:any){
        this.userForm.location_id = event.value
    },
    changeState(event:any){
        this.userForm.state_id = event.value
    },
    async updateCompanyProfile(){
        this.isLoading = true;
        try {
          // console.log(this.userForm);
        await this.$store.dispatch('updateCompanyProfile', this.userForm);
        window.setTimeout(() => {
            this.isLoading = false;
        }, 1000);
        } catch (error) {
            console.log(error);
            
        }

    },
    handleLogoUpload(event:any){
        this.logoVisible = false
        this.userForm.logo = event.target.files[0];
        this.previewlogo = URL.createObjectURL(event.target.files[0])
    },

    handleCoverUpload(event:any){
        this.coverlogoVisible = false
        this.userForm.cover_photo = event.target.files[0];
        this.previewcoverlogo = URL.createObjectURL(event.target.files[0])
    }
  },
  computed: {
      ...mapGetters([
        'adminDashboardDomain',
        'currentUser',
        'companyTypes',
        'locations',
        'company',
        'states',
      ])
  },
  async mounted() {
      this.$store.dispatch('getCompanyTypes', '')
      this.$store.dispatch('getStates', '');
      this.user = JSON.parse(this.currentUser)
      this.$store.dispatch('getCompany', this.user[0].id)

      let Script = document.createElement("script");
      Script.setAttribute("src", "/assets/js/main.js");
      document.head.appendChild(Script);
  },
  watch :{
        company(newUserForm){        
        this.userForm = newUserForm.data
        console.log(this.userForm);
      }
  }
})
export default class CompanyProfile extends Vue {}
</script>
<style scoped>
.w-full{
    width: 100%
}
</style>