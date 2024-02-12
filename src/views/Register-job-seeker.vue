<template>
  <div>
    <!-- ========== Login Area end============= -->
    <div class="register-area pt-120 mb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                     <div class="form-wrapper">
                        <div class="form-title">
                            <h3>Job Seeker Signup</h3>
                            <span></span>
                        </div>
                        <div class="register-tab">
                            <!-- <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                  <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Candidate</button>
                                  <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Company</button>
                                </div>
                              </nav> -->
                              <!-- <div class="tab-content" id="nav-tabContent"> -->
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> 
                                    <form>
                                        <div class="row">
                                          
                                        </div>    
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
                                            <div class="col-md-12">
                                                <div class="form-inner mb-25">
                                                    <label for="email">Suburb</label>
                                                    <div class="input-area">
                                                        <img src="/assets/images/icon/company-2.svg" alt="">
                                                        <!-- <input v-model="userForm.suburb_id" type="text" id="suburns" name="suburb" placeholder="Select Suburb"> -->
                                                        <Dropdown
                                                            name="suburb_id"
                                                            @change="changeSuburb"
                                                            v-model=this.userForm.suburb_id
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
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="firstname1">Display Picture</label>
                                                    <!-- <cropper :src="image.src" @change="photoChange" :debounce="false"	:stencil-props="{aspectRatio: 1}"/> -->
                                                    <!-- <preview :width="120" :height="120" :src="image.src" :coordinates="userForm.coordinates" /> -->
                                                       
                                                    <div class="button-wrapper">
                                                        <button class="btn btn-primary col-md-2 " type="button" @click="$refs.file.click()">
                                                            <input @change="photoChange" ref="file" accept="image/*" type="file" id="photo" name="photo" style="display:none" >  
                                                            Load Image                                                      
                                                        </button>
                                                    </div>    
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <img width="200" ref="photo" :src="photoPreview" alt="">  
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
                                </div>
                                <!-- <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <form>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="firstname">First Name*</label>
                                                    <div class="input-area">
                                                        <img src="assets/images/icon/user-2.svg" alt="">
                                                        <input v-model="employerForm.first_name" type="text" id="firstname" name="firstname" placeholder="Mr. Robert">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="lastname">Last Name*</label>
                                                    <div class="input-area">
                                                        <img src="assets/images/icon/user-2.svg" alt="">
                                                        <input v-model="employerForm.last_name" type="text" id="lastname" name="lastname" placeholder="Jonson">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="username">User Name*</label>
                                                    <div class="input-area">
                                                        <img src="assets/images/icon/user-2.svg" alt="">
                                                        <input v-model="employerForm.username" type="text" id="username1" name="username" placeholder="robertjonson">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="email">Email*</label>
                                                    <div class="input-area">
                                                        <img src="assets/images/icon/email-2.svg" alt="">
                                                        <input v-model="employerForm.email" type="text" id="email1" name="email" placeholder="info@example.com">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="companyname">Company Name*</label>
                                                    <div class="input-area">
                                                        <img src="assets/images/icon/company-2.svg" alt="">
                                                        <input v-model="employerForm.company_name" type="text" id="companyname" name="companyname" placeholder="Mr. Robert">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label>Company Type*</label>
                                                    <div class="input-area">
                                                        <img src="assets/images/icon/category-2.svg" alt="">
                                                        <Dropdown 
                                                            @change="changeCompanyType"
                                                            v-model=this.employerForm.company_type_id 
                                                            :options="companyTypes" 
                                                            ref="companyType"
                                                            optionLabel="name" 
                                                            optionValue="id"
                                                            placeholder="Select Language" 
                                                            class="w-full" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner mb-25">
                                                    <label for="password">Password*</label>
                                                    <input v-model="employerForm.password" type="password" name="password" id="password3" placeholder="Password" />
                                                    <i class="bi bi-eye-slash" id="togglePassword3"></i>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inner">
                                                    <label for="password4">Confirm Password*</label>
                                                    <input v-model="confirm_password" type="password" name="confirmpassword" id="password4" placeholder="Confirm Password" />
                                                    <i class="bi bi-eye-slash" id="togglePassword4"></i>
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
                                            <div class="col-md-12">
                                                <div class="form-inner">
                                                    <button @click="createEmployer" class="primry-btn-2" type="button">Sign Up</button>
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
                                </div>
                            </div> -->
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ========== Login Area end============= -->
  </div>  
</template>

<style>
.form-wrapper form .form-inner span {
    font-size: 1rem !important;
    padding: 10px !important;
}
.p-dropdown {
    width: 100% !important;
    padding: 0 !important;
    margin-right: 5px !important;
    border-radius: 5px;
    padding-left: 0px !important;
}
</style>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SignUp from './Register-job-seeker.vue'; // @ is an alias to /src
import { mapGetters } from 'vuex';
import Dropdown from 'primevue/dropdown';
import { Cropper, Preview } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';


function getMimeType(file:any, fallback = null) {
	const byteArray = (new Uint8Array(file)).subarray(0, 4);
    let header = '';
    for (let i = 0; i < byteArray.length; i++) {
       header += byteArray[i].toString(16);
    }
	switch (header) {
        case "89504e47":
            return "image/png";
        case "47494638":
            return "image/gif";
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
        case "ffd8ffe3":
        case "ffd8ffe8":
            return "image/jpeg";
        default:
            return fallback;
    }
}

@Options({
  components: {
    SignUp,
    Dropdown,
    Cropper,
    Preview
  },
    data() {
        return {
            photoPreview: null,
            coordinates: {
				width: 0,
				height: 0,
				left: 0,
				top: 0,
			},
            image: {
				src: null,
				type: null,
                coordiantes: null,
			},
            userForm: {
                coordinates: null,
                photo: null,
                first_name: null,
                last_name: null,
                suburb_id: null,
                username: null,
                email: null,
                password: null,
                type: 'user',
                device_name: 'web app',
            },
            employerForm: {
                first_name: null,
                last_name: null,
                username: null,
                company_name: null,
                company_type_id: null,
                email: null,
                password: null,
                type: 'employer',
                device_name: 'web app',      
            },
            confirm_password: null,
        }  
    },
    computed: {
        ...mapGetters([
            'signUpUser',
            'companyTypes',
            'suburbs'
        ])
    },
    methods: {
        createUser() {
            this.$store.dispatch('signUpUser', this.userForm)
        },

        createEmployer() {
            this.$store.dispatch('signUpUser', this.employerForm)
        },
        changeCompanyType(event:any){
            this.employerForm.company_type_id = event.value
        },
        changeSuburb(event:any){
            this.userForm.suburb_id = event.value
        },

        onPhotoSelected(event:any){
            this.userForm.photo = URL.createObjectURL(event.target.files[0])
        },

        photoChange(event:any){
            // this.coordiantes = coordinates
            // this.image.src = photo
            //this.userForm.coordinates = coordinates
            this.photoPreview = URL.createObjectURL(event.target.files[0]);
            this.userForm.photo = event.target.files[0];
            
        },
        crop() {
                const { canvas } = this.$refs.cropper.getResult();
                canvas.toBlob((blob:any) => {
                    // Do something with blob: upload to a server, download and etc.
                }, this.image.type);
            },
        reset() {
            this.image = {
                src: null,
                type: null
            }
        },
        loadImage(event:any) {
            event.preventDefault();
            // Reference to the DOM input element
            const { files } = event.target;
            // Ensure that you have a file before attempting to read it
            if (files && files[0]) {
                // 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
                if (this.image.src) {
                    URL.revokeObjectURL(this.image.src)
                }
                // 2. Create the blob link to the file to optimize performance:
                const blob = URL.createObjectURL(files[0]);
                
                // 3. The steps below are designated to determine a file mime type to use it during the 
                // getting of a cropped image from the canvas. You can replace it them by the following string, 
                // but the type will be derived from the extension and it can lead to an incorrect result:
                //
                // this.image = {
                //    src: blob;
                //    type: files[0].type
                // }
                
                // Create a new FileReader to read this image binary data
                const reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e:any) => {
                    // Note: arrow function used here, so that "this.image" refers to the image of Vue component
                    this.image = {
                        // Set the image source (it will look like blob:http://example.com/2c5270a5-18b5-406e-a4fb-07427f5e7b94)
                        src: blob,
                        // Determine the image type to preserve it during the extracting the image from canvas:
                        type: getMimeType(e.target.result, files[0].type),
                    };
                };
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsArrayBuffer(files[0]);
            }
        },
        destroyed() {
            // Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
            if (this.image.src) {
                URL.revokeObjectURL(this.image.src)
            }
        }   

  },
  mounted() {
    this.$store.dispatch('getCompanyTypes', '');
    this.$store.dispatch('getSuburb', '');

    let Script = document.createElement("script");
    Script.setAttribute("src", "/assets/js/main.js");
    document.head.appendChild(Script);
  }
  
})
export default class Register extends Vue {}
</script>
