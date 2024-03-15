<template>
    <div class="dashboard-area company-dashboard pt-120 mb-120">
        <div class="container">
            <div class="row">
                <company-menu />
                <div class="col-lg-12">
                    <div class="my-profile-inner ">
                        <div class="form-wrapper">
                            <div class="section-title two">
                                <h5>Update Job</h5>
                                <div class="dash"></div>
                            </div>
                            <form class="profile-form">
                                <div class="section-title2">
                                    <h5>Job Information:</h5>
                                </div>
                                <div class="row" v-if="company">
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="job_title">Job Title*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/company-2.svg" alt="">
                                                <input v-model="jobForm.job_title" type="text" id="job_title" name="job_title" :disabled="!editTitle">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Job Type*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/category-2.svg" alt="">
                                                <Dropdown 
                                                @change="changeJobType"
                                                v-model=this.jobForm.job_type_id 
                                                :options="jobTypes" 
                                                placeholder="Select Job Type"
                                                ref="language"
                                                optionLabel="name" 
                                                optionValue="id"
                                                :disabled="!editTitle"
                                                class="w-full 
                                                md:w-14rem" />
                                            </div>
                                            <!-- <ErrorMessage class="text-danger" name="job_types" /> -->
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Working Mode*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/category-2.svg" alt="">
                                                <Dropdown 
                                                @change="changeWorkingMode"
                                                v-model=this.jobForm.working_mode
                                                :options="working_modes" 
                                                ref="language"
                                                placeholder="Select Working Mode"
                                                optionLabel="name" 
                                                optionValue="id"
                                                :disabled="!editTitle"
                                                class="w-full 
                                                md:w-14rem" />
                                            </div>
                                        </div>
                                    </div>    
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Payment Mode*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/category-2.svg" alt="">
                                                <Dropdown 
                                                @change="changePaymentMode"
                                                v-model=this.jobForm.payment_mode 
                                                :options="payment_modes" 
                                                ref="language"
                                                placeholder="Select Payment Mode"
                                                optionLabel="name" 
                                                optionValue="id"
                                                :disabled="!editTitle"
                                                class="w-full 
                                                md:w-14rem" />
                                            </div>
                                        </div>
                                    </div>          
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Qualification Required*</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/category-2.svg" alt="">
                                                <!-- <Dropdown 
                                                @change="changeQualification"
                                                v-model=this.jobForm.qualification_id 
                                                :options="qualifications" 
                                                ref="language"
                                                placeholder="Select Qualification"
                                                optionLabel="name" 
                                                optionValue="id"
                                                :disabled="!editTitle"
                                                class="w-full 
                                                md:w-14rem" /> -->

                                                <select class="form-select me-1" v-model="this.jobForm.qualification_id" @change="changeQualification" :disabled="!editTitle">
                                                    <option value="">Select Qualification</option>
                                                    <option v-for="qualification in qualifications" :value="qualification.id" >{{ qualification.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> 
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Gender Required</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/category-2.svg" alt="">
                                                <Dropdown 
                                                @change="changeGender"
                                                v-model=this.jobForm.gender 
                                                :options="genders" 
                                                ref="language"
                                                placeholder="Select Gender"
                                                optionLabel="name" 
                                                optionValue="id"
                                                :disabled="!editTitle"
                                                class="w-full 
                                                md:w-14rem" />
                                            </div>
                                        </div>
                                    </div>     
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Job Category</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/category-2.svg" alt="">
                                                <!-- <Dropdown 
                                                @change="changeCategory"
                                                v-model=this.jobForm.category_id
                                                :options="categories" 
                                                ref="language"
                                                placeholder="Select Job Category"
                                                optionLabel="name" 
                                                optionValue="id" 
                                                :disabled="!editCategory"
                                                class="w-full 
                                                md:w-14rem" /> -->

                                                <select class="form-select me-1" v-model="this.jobForm.category_id" @change="changeCategory" :disabled="!editCategory">
                                                    <option value="">Select Job Category</option>
                                                    <option v-for="category in categories" :value="category.id" >{{ category.name }}</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>                                                                                                  
                                    <div class="col-md-12">
                                        <div class="form-inner mb-25">
                                            <label for="description">Job Description*</label>
                                                <textarea v-model="jobForm.job_description" id="description" :disabled="!editBody" placeholder="Job Description"></textarea>
                                        </div>
                                    </div>       
                                    <div class="col-md-12">
                                        <div class="form-inner mb-25">
                                            <label for="description">Job Responsibilities*</label>
                                                <textarea v-model="jobForm.job_responsibilities" :disabled="!editBody" placeholder="Job Responsibilities"></textarea>
                                        </div>
                                    </div>                                                                                                             
                                    <div class="col-md-3">
                                        <div class="form-inner mb-25">
                                            <label for="vacancy">Vacancies</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/company-2.svg" alt="">
                                                <input v-model="jobForm.vacancy" type="text" :disabled="!editBody" id="vacancy" name="companyname" placeholder="Number of vacancies">
                                            </div>
                                        </div>
                                    </div>                                                                  
                                    <div class="col-md-3">
                                        <div class="form-inner mb-25">
                                            <label for="experience">Experience (Years)</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/company-2.svg" alt="">
                                                <input v-model="jobForm.experience" type="text" id="experience" :disabled="!editBody" name="experience" placeholder="1 year">
                                            </div>
                                        </div>
                                    </div>   
                                    <div class="col-md-3">
                                        <div class="form-inner mb-25">
                                            <label for="salary_from">Salary (from)</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/company-2.svg" alt="">
                                                <input v-model="jobForm.salary_from" type="text" :disabled="!editBody" id="salary_from" name="salary_from" placeholder="Salary from">
                                            </div>
                                        </div>
                                    </div> 
                                    <div class="col-md-3">
                                        <div class="form-inner mb-25">
                                            <label for="salary_from">Salary (to)</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/company-2.svg" alt="">
                                                <input v-model="jobForm.salary_to" type="text" :disabled="!editBody" id="salary_to" name="salary_to" placeholder="Salary to">
                                            </div>
                                        </div>
                                    </div> 
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="salary_from">Job Expiery</label>
                                            <div class="input-area">
                                                <img src="/assets/images/icon/company-2.svg" alt="">
                                                <Calendar v-model="jobForm.expiration" dateFormat="dd/mm/yy" :disabled="!editBody" />
                                            </div>
                                        </div>
                                    </div>                                                                                                                                                                                                                                            
                                    <div class="col-md-12">
                                        <div class="form-inner">
                                            <button v-if="!isLoading"  @click="updateJob"  class="primry-btn-2 lg-btn w-unset" type="button">Update Job</button>
                                            <button v-else class="primry-btn-2 lg-btn w-unset" type="button" disabled>
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
.p-dropdown {
    width: 100% !important;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Profile from './CompanyProfile.vue'; // @ is an alias to /src
import CompanyMenu from './CompanyMenu.vue'
import { mapGetters } from 'vuex';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import { useRoute } from 'vue-router'
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
        jobForm: {
            company_id: null,
            location_id: 2,
            job_title: null,
            job_description: null,
            job_responsibilities: null,
            category_id: null,
            working_mode: null,
            payment_mode: null,
            job_type_id: null,
            vacancy: 0,
            qualification_id: null,
            experience: null,
            gender: null,
            salary_from: 0,
            salary_to: 0,
            currency_id: 1,
            expiration: null,
            isLoading: false,
        },
        user: null,
        permission: null,
        editTitle: false,
        editCategory: false,
        editBody: false,
        // editTitle: false,
        currentCompany: [],
        genders: [
            {id:'Any', name: 'Any'},
            {id:'Male', name: 'Male'},
            {id:'Female', name: 'Female'},
        ],
        working_modes: [
            {id:'Full Time', name: 'Full Time'},
            {id:'Part Time', name: 'Part Time'},
        ],
        payment_modes: [
            {id:'Per Month', name: 'Per Month'},
            {id:'Per Week', name: 'Per Week'},
            {id:'Hourly', name: 'Hourly'},
        ]
    }
  },
  methods: {
    onSubmit(values:any) {
        return false;
    },
    jobTypesValidate(value:any) {
        if (!value) {
            return 'Job Type required';
        }
        return true;
    },

    changeJobType(event:any){
        this.jobForm.job_type_id = event.value
    },

    changeCategory(event:any){
        this.jobForm.category_id = event.value
    },

    changeQualification(event:any){
        this.jobForm.qualification_id = event.value
    },

    changeWorkingMode(event:any){
        this.jobForm.working_mode = event.value
    },
    
    changePaymentMode(event:any){
        this.jobForm.payment_mode = event.value
    },
    changeGender(event:any){
        this.jobForm.gender = event.value
    },
    updateCompanyProfile(){
        console.log(this.userForm);
        this.$store.dispatch('updateCompanyProfile', this.userForm);
    },

    async updateJob(){
        this.isLoading = true;
        console.log(this.jobForm);
        try {
            this.isLoading = true;
            await this.$store.dispatch('updateJob',  this.jobForm);
            window.setTimeout(() => {
                this.isLoading = false;
            }, 2000);
        
        } catch (error) {
            console.log(error);
        }
    }
  },
  computed: {
      ...mapGetters([
        'currentUser',
        'company',
        'jobTypes',
        'qualifications',
        'categories',
        'jobDetail',
      ])
  },
  async mounted() {
    const route = useRoute()
    console.log(route.params.job_key);
    
    this.$store.dispatch('getJobDetail', route.params.job_key)
    this.$store.dispatch('getJobTypes', '')
    this.$store.dispatch('getQualifications', '')
    this.$store.dispatch('getCategories', '')
    this.user = JSON.parse(this.currentUser)[0];
    this.permission = this.user.sub_accesses[0] ?? null;
    if (this.permission !== null) {
       this.permission.edit_title == 'yes' ? this.editTitle = true : this.editTitle = false;
       this.permission.edit_categ == 'yes' ? this.editCategory = true : this.editCategory = false;
       this.permission.edit_body == 'yes' ? this.editBody = true : this.editBody = false;
    }
    let Script = document.createElement("script");
    Script.setAttribute("src", "/assets/js/main.js");
    document.head.appendChild(Script);
  }    
  ,
  watch :{
      company(oldUserForm, newUserForm){
        this.currentCompany = this.company
        this.jobForm.company_id = this.currentCompany.data.id
        this.jobForm.location_id = 2
        this.jobForm.category_id = this.currentCompany.data.category_id
      },
      jobDetail(oldUserForm, newUserForm){
        console.log(this.jobDetail)
        this.jobForm = this.jobDetail
        this.jobForm.job_description = this.jobDetail.job_description
        console.log(this.jobForm);
        
        // this.jobForm.job_type_id = this.jobDetail.job_type
      }
      
  }
})
export default class CompanyProfile extends Vue {}
</script>
