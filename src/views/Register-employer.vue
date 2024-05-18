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
                                                            @change="fillOther"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div class="col-md-6">
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
                                                </div>
                                            </div> -->
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
                                                        @change="setUserName"
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
                                                            placeholder="Industry Type" 
                                                            class="w-full"
                                                            :rules="companyType"
                                                            />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
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
                                                <div class="form-inner mb-25">
                                                    <label>Address</label>
                                                    <textarea v-model="employerForm.address"></textarea>
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
                                                        @change="passCheck"
                                                    />
                                                    <!-- @change="passCheck" -->
                                                    <i class="bi bi-eye-slash" id="togglePassword3"></i>
                                                </div>
                                                <span v-if="!validPass" style="color: red !important; font-size: small !important; position: relative; left: 5px; top: -1.4rem !important;">{{ validationMessage }}</span>
                                                <!-- <ErrorMessage class="text-danger" name="password" /> -->
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner">
                                                    <label for="retype_password">Confirm Password*</label>
                                                    <input 
                                                        name="retype_password"
                                                        v-model="employerForm.password_confirmation" 
                                                        type="password"
                                                        id="retype_password"
                                              
                                                        placeholder="Confirm Password"
                                                        :rules="RetypePassWord"
                                                        @change="isConfirm"
                                                        
                                                    />
                                                    <i class="bi bi-eye-slash" id="togglePassword4"></i>
                                                </div>
                                                <span v-if="!confirmPass" style="color: red !important; font-size: small !important; position: relative; left: 5px; top: 3px !important;">{{ confirmText }}</span>
                                                <!-- <ErrorMessage class="text-danger"  id="password-mismatched" name="retype_password" /> -->
                                   
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-agreement form-inner d-flex justify-content-between flex-wrap">
                                                    <div class="form-group two">
                                                        <input type="checkbox" v-model="is_agree" id="html">
                                                        <label for="html">By registering, you acknowledge and agree to our terms and conditions</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12" id="form-error">
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-inner">
                                                    <button v-if="!isLoading" @click="createEmployer" class="primry-btn-2" type="button"
                                                    :disabled="!validPass || !confirmPass || !is_agree"
                                                    >Sign Up</button>
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
        validPass: true,
        validationMessage:"",
        confirmPass: true,
        confirmText: "",
        is_agree: false,
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
            password_confirmation: null,
            address: null,
            
        },
        password_confirmation: null,
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

            const password = this.userForm.password;
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
                return true;
            }
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
        // const retype_password_check = this.$refs.password_confirmation;
        // // let retype_password_check = this.password_confirmation;
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
                    window.setTimeout(() => {
                        this.isLoading = false;
                    }, 5000);
                } catch (error) {
                    console.log(error);
                    window.setTimeout(() => {
                        this.isLoading = false;
                    }, 3000);
                }
        },
        changeCompanyType(event:any){
            this.employerForm.company_type_id = event.value
        },
        changeSuburb(event:any){
            this.userForm.suburb_id = event.value
        },

        fillOther() {
            // Remove all spaces from first_name and last_name
            const firstNameNoSpaces = this.employerForm.first_name.replace(/\s+/g, '');
            const lastNameNoSpaces = this.employerForm.last_name.replace(/\s+/g, '');
            this.employerForm.email = firstNameNoSpaces + lastNameNoSpaces + '@example.com';
            this.employerForm.username = this.employerForm.email;
        },

        setUserName() {
            this.employerForm.username = this.employerForm.email
        },

        passCheck() {
            const password = this.employerForm.password;
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
            if (this.employerForm.password !== this.employerForm.password_confirmation) {
                this.confirmPass = false;
                this.confirmText = 'Confirm passwor should match with password. '
            }
            else {
                this.confirmPass = true;
            }
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
