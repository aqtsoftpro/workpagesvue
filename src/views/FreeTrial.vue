<template>
    <div>
      <!-- ========== Login Area end============= -->
      <div class="register-area pt-120 mb-120">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                       <div class="form-wrapper">
                          <div class="form-title">
                              <h3>Employer Signup</h3>
                              <span></span>
                          </div>
                          <div class="register-tab">
                                <div class="tab-content" id="nav-tabContent">
                                      <form @submit.prevent="freeTrial()"  >
                                          <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-inner mb-25">
                                                      <label for="first_tname">First Name*</label>
                                                      <div class="input-area">
                                                          <img src="assets/images/icon/user-2.svg" alt="">
                                                          <input
                                                          name="first_name"
                                                          v-model="employerForm.first_name" 
                                                          type="text" id="first_name" 
                                                          placeholder="Mr. Robert"
                                                          :rules="firstName"
                                                          /> 
                                                      </div>
  
                                                      <!-- <Field name="first_name" v-model="employerForm.first_name"  type="text" class="form-control" :class="{ 'is-invalid': errors.employerForm.first_name }" />
                                                          <div class="invalid-feedback">{{errors.employerForm.first_name}}</div> -->
  
                
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-inner mb-25">
                                                      <label for="last_name">Last Name*</label>
                                                      <div class="input-area">
                                                          <img src="assets/images/icon/user-2.svg" alt="">
                                                          <input
                                                              name="last_name"
                                                              v-model="employerForm.last_name" 
                                                              type="text" 
                                                              id="last_name"  
                                                              placeholder="Jonson"
                                                              :rules="lastName" 
                                                          />
  
  
  
                          
                                                      </div>
                                                      <!-- <ErrorMessage class="text-danger" name="last_name" /> -->
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-inner mb-25">
                                                      <label for="username">User Name*</label>
                                                      <div class="input-area">
                                                          <img src="assets/images/icon/user-2.svg" alt="">
                                                          <input
                                                              name="username"
                                                              v-model="employerForm.username" 
                                                              type="text" 
                                                              id="username"  
                                                              placeholder="robertjonson"
                                                              :rules="userName"
                                                              />
                                                      </div>
                                                      <!-- <ErrorMessage class="text-danger" name="username" /> -->
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-inner mb-25">
                                                      <label for="email">Email*</label>
                                                      <div class="input-area">
                                                          <img src="assets/images/icon/email-2.svg" alt="">
                                                          <input 
                                                          name="email"
                                                          v-model="employerForm.email" 
                                                          type="email"
                                                          id="email" 
                                                          placeholder="robert@gmail.com"
                                                          :rules="validateEmail" 
                                                          />
                                                      </div>
                                                      <!-- <ErrorMessage class="text-danger" name="email" /> -->
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-inner mb-25">
                                                      <label for="company_name">Company Name*</label>
                                                      <div class="input-area">
                                                          <img src="assets/images/icon/company-2.svg" alt="">
                                                          <input
                                                              name="company_name"
                                                              v-model="employerForm.company_name" 
                                                              type="text" 
                                                              id="company_name" 
                                                              placeholder="Mr. Robert"
                                                              :rules="companyName"
                                                          />
                                                      </div>
                                                      <!-- <ErrorMessage class="text-danger" name="company_name" /> -->
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-inner mb-25">
                                                      <label>Company Type*</label>
                                                      <div class="input-area">
                                                          <img src="assets/images/icon/category-2.svg" alt="">
                                                          <Dropdown
                                                              name="company_type"
                                                              @change="changeCompanyType"
                                                              v-model=this.employerForm.company_type_id 
                                                              :options="companyTypes" 
                                                              ref="companyType"
                                                              optionLabel="name" 
                                                              optionValue="id"
                                                              placeholder="Select Language" 
                                                              class="w-full"
                                                              
                                                              />
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-12">
                                                  <div class="form-inner mb-25">
                                                      <label for="email">Suburb</label>
                                                      <div class="input-area">
                                                          <img src="assets/images/icon/loction.svg" alt="">
                                                          <Dropdown
                                                              name="suburb_id"
                                                              @change="changeSuburb"
                                                              v-model=this.employerForm.suburb_id
                                                              :options="suburbs" 
                                                              ref="suburb_id"
                                                              optionLabel="name" 
                                                              optionValue="id"
                                                              placeholder="Select Suburb" 
                                                              class="w-full"
                                                              />
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-12">
                                                  <div class="form-agreement form-inner d-flex justify-content-between flex-wrap">
                                                      <div class="form-group two">
                                                          <input type="checkbox" id="html">
                                                          <label for="html">Here, I will agree company terms & conditions.</label>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-12" id="form-error">
                                              </div>
                                              <div class="col-md-12">
                                                  <div class="form-inner">
                                                      <button v-if="!isLoading" @click="freeTrial" class="primry-btn-2" type="button">Subscribe for demo trial</button>
                                                      <button v-else class="primry-btn-2" type="button">
                                                          <span class="me-3 fs-6 text-white">Processing...</span>
                                                          <i class="fa fa-spinner fa-spin text-white" style="font-size:24px">
                                                          </i>
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                      </form>
                                  <!-- </div> -->
                                </div>
                          </div>
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
  import SignUp from './Register-employer.vue'; // @ is an alias to /src
  import { mapGetters } from 'vuex';
  import Dropdown from 'primevue/dropdown';
  import { useRoute } from 'vue-router'
  
  @Options({
    components: {
      SignUp,
      Dropdown,
    },
    data() {
      return {
          userForm: {
              first_name: null,
              last_name: null,
              username: null,
              email: null,
              password: null,
              type: 'user'
          },
          employerForm: {
              first_name: null,
              last_name: null,
              username: null,
              company_name: null,
              company_type_id: null,
              suburb_id: null,
              email: null,
              password: null,
              type: 'employer',
              planId: null,
              
          },
          confirm_password: null,
          isLoading: false,
     
      }  
    },
    computed: {
        ...mapGetters([
            'signUpUser',
            'companyTypes',
            'signUpCompany',
            'suburbs'
      ])
    },
    methods: {
          onSubmit(values:any) {
  
          },
  
          firstName(value:any) {
          if (!value) {
              return 'First name required';
          }
          return true;
          },
  
          lastName(value:any) {
          if (!value) {
              return 'Last name required';
          }
          return true;
          },
  
          userName(value:any) {
          if (!value) {
              return 'Username required';
          }
          return true;
          },
  
          companyName(value:any) {
          if (!value) {
              return 'Company Name required';
          }
          return true;
          },
  
          companyType(value:any) {
          if (!value) {
              return 'Company Type required';
          }
          return true;
          },
  
          validateEmail(value:any) {
          if (!value) {
              return 'Email required';
          }
          const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
          if (!regex.test(value)) {
              return 'This field must be a valid email';
          }
          return true;
          },
  
          passWord(value:any) {
          if (!value) {
              return 'Password required';
          }
          return true;
          },
  
          RetypePassWord(value:any) {
            if (!value) {
                return 'Retype Password required';
            }
            return true;
          },
          createUser() {
              this.$store.dispatch('signUpUser', this.userForm)
          },
  
          freeTrial() {
            this.isLoading = true;
            console.log(this.employerForm);
            try {
            //   this.$store.dispatch('signUpCompany', this.employerForm);
                this.$store.dispatch('companyFreeTrial', this.employerForm);
                this.isLoading = false;
            } catch (error) {
                console.log(error);
                this.isLoading = false;
            }
          },
          changeCompanyType(event:any){
              this.employerForm.company_type_id = event.value
          },
          changeSuburb(event:any){
              this.userForm.suburb_id = event.value
          },
      },
    mounted() 
      {
        const route = useRoute();
        console.log(route.params.id);
        this.employerForm.planId = route.params.id;
        this.$store.dispatch('getCompanyTypes', '');
        this.$store.dispatch('getSuburb', '');
        let Script = document.createElement("script");
        Script.setAttribute("src", "/assets/js/main.js");
        document.head.appendChild(Script);
      }
    
  })
  export default class freeTrial extends Vue {}
  </script>
  