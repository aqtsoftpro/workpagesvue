<template>
    <div class="dashboard-area company-dashboard pt-120 mb-120">
        <div class="container">
            <div class="row">
                <company-menu />
                <div class="col-lg-12">
                    <div class="my-profile-inner">
                        <div class="form-wrapper">
                            <div class="section-title two">
                                <h5>Post New Job Ad</h5>
                                {{ advertisement }}
                                <!-- <div class="dash"></div> -->
                            </div>
                            <form class="profile-form">
                                <div class="section-title2">
                                    <h5>Job Information:</h5>
                                </div>
                                <div class="row" v-if="company">
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="job_title">Job Ad Title*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/company-2.svg" alt="">
                                                <input v-model="adForm.title" type="text" id="job_title" name="job_title" :disabled="advertisement.id">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Select Job*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/category-2.svg" alt="">
                                                <Dropdown :disabled="advertisement.id"
                                                @change="changeJob"
                                                v-model=this.adForm.job_id 
                                                :options="companyJobs.Listing" 
                                                placeholder="Select Job Type"
                                                ref="language"
                                                optionLabel="job_title" 
                                                optionValue="id"
                                                class="w-full 
                                                md:w-14rem" />
                                             
                                            </div>
                                            <ErrorMessage class="text-danger" name="job_types" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner mb-25">
                                            <label for="description">Job Description*</label>
                                                <textarea v-model="adForm.description" id="description" placeholder="Job Description"></textarea>
                                        </div>
                                    </div>                                                                                                                                                                                                                                                  
                                    <div class="col-md-12">
                                        <div class="form-inner">
                                            <button v-if="!isLoading && advertisement.id == null" @click="createJobAd"  class="primry-btn-2 lg-btn w-unset" type="button">Post New Job Ad</button>
                                            <button v-if="!isLoading && advertisement.id" @click="updateJobAd"  class="primry-btn-2 lg-btn w-unset" type="button">Update Ad Detaile</button>
                                            <button v-if="isLoading" class="primry-btn-2 lg-btn w-unset" type="button">
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

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Profile from './CompanyProfile.vue'; // @ is an alias to /src
import CompanyMenu from './CompanyMenu.vue'
import { mapGetters } from 'vuex';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
// import { Form, Field, ErrorMessage } from 'vee-validate';
// import * as yup from 'yup';

@Options({
  components: {
    Profile,
    Dropdown,
    Calendar,
    'company-menu': CompanyMenu,
    // Form,
    // Field,
    // ErrorMessage
  },
  data(){
    return{
        adForm: {
            title: '',
            job_id: null,
            description: '',
            ad_id: null,
        },
        currentCompany: [],
        isLoading: false,
    }
  },
  methods: {
    onSubmit(values:any) {
        return false;
    },

    changeJob(event:any){
        this.adForm.job_id = event.value
    },

    async createJobAd(){
        this.isLoading = true;
        console.log(this.adForm);
        try {
          await this.$store.dispatch('storeJobAd', this.adForm);
            this.adForm.title = '',
            this.adForm.job_id = '',
            this.adForm.description = '',
            window.setTimeout(() => {
                this.isLoading = false;
                this.$router.push({ path: '/company/ad-list' });
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    },

    async updateJobAd(){
        this.isLoading = true;
        console.log(this.adForm);
        try {
          await this.$store.dispatch('updateJobAd', this.adForm);
            window.setTimeout(() => {
                this.isLoading = false;
                this.$router.push({ path: '/company/ad-list' });
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

  },
  computed: {
      ...mapGetters([
        'currentUser',
        'company',
        'companyJobs',
        'advertisement',
      ])
  },
    async mounted() {
        let query = this.$route.query
        // If query exists, dispatch the action
        await this.$store.dispatch('getJobAd', query);           
        this.user = JSON.parse(this.currentUser)
        console.log(this.user);
        this.$store.dispatch('getCompany', this.user[0].id)
        this.$store.dispatch('getCompanyJobs', '')
        let Script = document.createElement("script");
        Script.setAttribute("src", "/assets/js/main.js");
        document.head.appendChild(Script);
    },
  watch :{
    advertisement() {
        this.adForm.ad_id = this.advertisement.id,
        this.adForm.title = this.advertisement.title;
        this.adForm.job_id = this.advertisement.job_id;
        this.adForm.description = this.advertisement.description;
    }
  }
})
export default class CreateAd extends Vue {}
</script>
