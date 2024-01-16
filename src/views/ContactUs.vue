<template>
  <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content text-center">
                        <h1>Contact</h1>
                        <span></span>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ========== Inner Banner end============= -->
    <!-- ========== Contact Pages Start============= -->
    <div class="contact-pages-area pt-120 mb-20">
        <div class="container">
            <div class="row mb-50 d-flex justify-content-center">
                <div class="col-lg-6 mb-20 ">
                    <div class="office-location">
                        <div class="office-categoty">
                            <div class="single-category d-lg-block d-none">
                                <h5>Main Office</h5>
                           
                            </div>
                           
                        </div>
                        <div class="row g-lg-12 gy-5">
                            <div class="col-lg-12">
                                <div class="single-category d-lg-none d-flex justify-content-center">
                                    <h5>Main Office</h5>
                                </div>
                                <div class="single-location">
                                    <h5>{{ globalSettings._site_city }}, {{ globalSettings._site_country }}</h5>
                                    <ul>
                                        <li>
                                            <div class="icon">
                                                <img src="templates/assets/images/icon/phone-5.svg" alt="">

                                    
                                            </div>
                                            {{ globalSettings._site_contact_no }}
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <img src="templates/assets/images/icon/location.svg" alt="">
                                            </div>
                                            {{ globalSettings._site_address }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                          
                        
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-12">
                    <div class="office-location-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564763018799!2d90.36349791490355!3d23.834071191491947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1675482960370!5m2!1sen!2sbd" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div> -->
            </div>
            <div class="row g-lg-4 gy-5">
                <div class="col-lg-6">
                    <div class="contect-content">
                        <h4>Need Any Help?    Contact Us</h4>
                        <p>Alternatively you can also check for the Company email, phone number and address in the official website.</p>
                        <div class="support">
                            <div class="icon">
                                <img src="templates/assets/images/icon/footer-support-icon.svg" alt="">
                            </div>
                            <div class="content">
                                <h5>Support Line:</h5>
                                <a href="tel:{{ globalSettings._site_support_no }}">{{ globalSettings._site_support_no }}</a>
                            </div>
                        </div>
                        <div class="service-available">
                            <span>N:B</span>
                            <p>Our Customer Service Available from 9 am to 6 pm
                                (Saturday to Thursday) </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="contact-form form-wrapper">
                        <form @submit.prevent="submitForm">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-inner mb-25">
                                        <label for="name">Your Name*</label>
                                        <div class="input-area">
                                            <img src="templates/assets/images/icon/user-2.svg" alt="">
                                            <input type="text" id="name" name="name" placeholder="Mr. Jackson Mile" v-model="formData.name" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-inner mb-25">
                                        <label for="email">Email*</label>
                                        <div class="input-area">
                                            <img src="templates/assets/images/icon/email-2.svg" alt="">
                                            <input type="email" id="email" name="email" placeholder="info@example.com" v-model="formData.email" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-inner mb-25">
                                        <label for="phonenumber">Phone*</label>
                                        <div class="input-area">
                                            <img src="templates/assets/images/icon/phone-2.svg" alt="">
                                            <input type="text" id="phonenumber" name="phonenumber" placeholder="+880-17 *** *** **" v-model="formData.phone" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-inner mb-25">
                                        <label for="jobplace">Company Name (Optional)</label>
                                        <div class="input-area">
                                            <img src="templates/assets/images/icon/company-2.svg" alt="">
                                            <input type="text" id="jobplace" name="jobplace" placeholder="Company Name" v-model="formData.company_name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-inner mb-40">
                                        <label for="description">Message*</label>
                                        <textarea name="description" id="description" placeholder="Message..." v-model="formData.message"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-inner">
                                        <!-- <button class="primry-btn-2 lg-btn w-unset" type="submit">Send Message</button> -->
                                        <button class="primry-btn-2 lg-btn w-unset" type="submit" :disabled="loading">
                                            <b v-if="loading"><b class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></b> Send Message...</b>
                                            <b v-else>Send Message</b>
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
    <!-- ========== Contact Pages End============= -->
  </div>  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Contact from '../views/ContactUs.vue'; // @ is an alias to /src
import { mapGetters } from 'vuex';
import axios from 'axios';
import { apiUrl, adminDashboardUrl, adminDashboardDomain } from '../utils/config';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

@Options({
  components: {
    Contact,
  },
  data() {
        return {
            globalSettings: [],
            formData: {},
            loading: false
        }
    },
    computed: {
        ...mapGetters([
            'globalVariables'
        ])
    },
    methods: {
    submitForm() {

      this.loading = true;

      this.sendDataToServer(this.formData);
    },
    sendDataToServer(data:any) {

      axios.post(apiUrl+'emails/contactUs', data)
        .then(response => {
          console.log('Server response:', response.data);
          this.loading = false;
        //   createToast('Form submitted successfully!', {
        //     position: 'top-right',
        //     type: 'success',
        //     duration: 3000
        //   });
        toast.success(response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT
        })
        })
        .catch(err => {
            toast.error(err.message, {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      })
    },
  },

  mounted() 
  {
    this.$store.dispatch('getGlobalVariables');

  },
  watch: {
        globalVariables() {
            this.globalSettings = this.globalVariables;
            console.log(this.globalSettings);
        }
    }

})
export default class ContactUs extends Vue {}
</script>

