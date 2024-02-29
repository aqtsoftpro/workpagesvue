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
                            <!-- <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                  <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Candidate</button>
                                  <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Company</button>
                                </div>
                              </nav> -->
                              <div class="tab-content" id="nav-tabContent">
                                <!-- <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> 
                                    <form>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="firstname1">First Name*</label>
                                                    <div class="input-area">
                                                        <img src="assets/images/icon/user-2.svg" alt="">
                                                        <input v-model="userForm.first_name" type="text" id="firstname1" name="firstname1" placeholder="Mr. Robert">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="lastname1">Last Name*</label>
                                                    <div class="input-area">
                                                        <img src="assets/images/icon/user-2.svg" alt="">
                                                        <input v-model="userForm.last_name" type="text" id="lastname1" name="lastname1" placeholder="Jonson">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="username">User Name*</label>
                                                    <div class="input-area">
                                                        <img src="assets/images/icon/user-2.svg" alt="">
                                                        <input v-model="userForm.username" type="text" id="username" name="username" placeholder="robertjonson">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="email">Email*</label>
                                                    <div class="input-area">
                                                        <img src="assets/images/icon/email-2.svg" alt="">
                                                        <input v-model="userForm.email" type="text" id="email" name="email" placeholder="info@example.com">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="password">Password*</label>
                                                    <input v-model="userForm.password" type="password" name="password" id="password" placeholder="Password" />
                                                    <i class="bi bi-eye-slash" id="togglePassword"></i>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner">
                                                    <label for="password2">Confirm Password*</label>
                                                    <input v-model="confirm_password" type="password" name="confirmpassword" id="password2" placeholder="Confirm Password" />
                                                    <i class="bi bi-eye-slash" id="togglePassword2"></i>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-agreement form-inner d-flex justify-content-between flex-wrap">
                                                    <div class="form-group two">
                                                        <input type="checkbox" id="html1">
                                                        <label for="html1">Here, I will agree company terms & conditions.</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-inner">
                                                    <button @click="createUser" class="primry-btn-2" type="button">Sign Up</button>
                                                </div>
                                            </div>
                                            <h6>Already have an account? <router-link to="/login"> Login</router-link> Here</h6>
                                            <div class="login-difarent-way">
                                                <div class="row g-4">
                                                    <div class="col-md-6">
                                                        <a href="https://myaccount.google.com/"><img src="assets/images/icon/google1.svg" alt="">Log in with Google</a>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <a href="https://www.facebook.com/"><img src="assets/images/icon/facebook1.svg" alt="">Log in with Facebook</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div> -->
                                <!-- <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"> -->
                                    <!-- <Form @submit="createEmployer()"> -->
                                    <form @submit.prevent="createEmployer()"  >

                                        
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
<!-- 
                                                        <Field
                                                            name="company_type_id" 
                                                            as="select" 
                                                            class=""
                                                            v-model=this.employerForm.company_type_id
                                                            :rules="companyType" >
                                                            <option value="">Select Company Type</option>
                                                            <option v-for="companyType in companyTypes" :key="companyType.id" :value="companyType.id">{{ companyType.name }}</option>
                                                        </Field>     -->
                                                    </div>
                                                    <!-- <ErrorMessage class="text-danger" name="company_type" /> -->
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-inner mb-25">
                                                    <label for="email">Suburb</label>
                                                    <div class="input-area">
                                                        <img src="assets/images/icon/loction.svg" alt="">
                                                        <!-- <input v-model="userForm.suburb_id" type="text" id="suburns" name="suburb" placeholder="Select Suburb"> -->
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
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="password">Password*</label>
                                                    <input
                                                        name="password"
                                                        v-model="employerForm.password" 
                                                        type="password"  
                                                        id="password" 
                                                        placeholder="Password"
                                                        ref="password_comp"
                                                        :rules="passWord" 
                                                    />
                                                    <i class="bi bi-eye-slash" id="togglePassword3"></i>
                                                </div>
                                                <!-- <ErrorMessage class="text-danger" name="password" /> -->
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner">
                                                    <label for="retype_password">Confirm Password*</label>
                                                    <input 
                                                        name="retype_password"
                                                        v-model="confirm_password" 
                                                        type="password"
                                                        id="retype_password"
                                              
                                                        placeholder="Confirm Password"
                                                        :rules="RetypePassWord"
                                                        
                                                    />
                                                    <i class="bi bi-eye-slash" id="togglePassword4"></i>
                                                </div>
                                                <!-- <ErrorMessage class="text-danger"  id="password-mismatched" name="retype_password" /> -->
                                   
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
                                                    <button v-if="!isLoading" @click="createEmployer" class="primry-btn-2" type="button">Sign Up</button>
                                                    <button v-else class="primry-btn-2" type="button">
                                                        <span class="me-3 fs-6 text-white">Processing...</span>
                                                        <i class="fa fa-spinner fa-spin text-white" style="font-size:24px">
                                                        </i>
                                                    </button>
                                                </div>
                                            </div>
                                            <h6>Already have an account? <router-link to="/login"> Login</router-link> Here</h6>
                                            <div class="login-difarent-way">
                                                <div class="row g-4">
                                                    <div class="col-md-6">
                                                        <a href="https://myaccount.google.com/"><img src="assets/images/icon/google1.svg" alt="">Log in with Google</a>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <a href="https://www.facebook.com/"><img src="assets/images/icon/facebook1.svg" alt="">Log in with Facebook</a>
                                                    </div>
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
// import { useForm, Form, Field } from 'vee-validate';
// import * as yup from 'yup';


// const { errors, defineInputBinds } = useForm({
//   validationSchema: toTypedSchema(
//     yup.object({
//         emailn: yup.string().email().required(),
//       password: yup.string().min(6).required(),
//     })
//   ),
// });

// const email = defineInputBinds('email');
// const password = defineInputBinds('password');

@Options({
  components: {
    SignUp,
    Dropdown,
    // Form,
    // Field,
    // ErrorMessage
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
            type: 'employer'
            
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
        // const password_check = this.$refs.form;
        // console.log(password_check);
        // if(password_check)
        // {   
        //     // const password_check_val = password_check.value;
        //     console.log(password_check);
        // }
        // // const password_check = document.getElementById('password').value;
        // const retype_password_check = this.$refs.confirm_password;
        // // let retype_password_check = this.confirm_password;
        // // let password_check = this.password;
        // // console.log(password_check.value);
        // // console.log(password_check);
        // if(retype_password_check != password_check)
        // {
        //     return 'Password Mismatched';
        // }
 
        return true;
        },
        createUser() {
            this.$store.dispatch('signUpUser', this.userForm)
        },

        createEmployer() {
                this.isLoading = true;
                console.log(this.employerForm);
                try {
                    this.$store.dispatch('signUpCompany', this.employerForm);
                    // this.isLoading = false;
                } catch (error) {
                    console.log(error);
                    // this.isLoading = false;
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
      this.$store.dispatch('getCompanyTypes', '');
      this.$store.dispatch('getSuburb', '');

    let Script = document.createElement("script");
    Script.setAttribute("src", "/assets/js/main.js");
    document.head.appendChild(Script);
    }
  
})
export default class Register extends Vue {}
</script>
