<template>
    <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner" :style="bgImage">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="banner-content text-center">
                            <h1 :style="textColor">Contact</h1>
                            <span></span>
                            <!-- <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item" :style="textColor"><a :style="textColor" href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" :style="textColor" aria-current="page">Contact</li>
                            </ol>
                        </nav> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ========== Inner Banner end============= -->
        <!-- ========== Contact Pages Start============= -->
        <div class="contact-pages-area pt-120 mb-20">
            <div class="container">
                <div v-html="cmsPages"></div>
            </div>
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
                                                    <img src="assets/images/icon/email-2.svg" alt="">
                                                </div>
                                                {{ globalSettings._site_email }}
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img src="assets/images/icon/phone-5.svg" alt="">
                                                </div>
                                                {{ globalSettings._site_contact_no }}
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img src="assets/images/icon/location.svg" alt="">
                                                </div>
                                                {{ globalSettings._site_address }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row g-lg-4 gy-5">
                    <div class="col-lg-6">
                        <div class="contect-content">
                            <h4>Need Any Help? Contact Us</h4>
                            <p>
                                We are commited to providing you with the support you need whether you have questions,
                                need assistance, or want more inforamtion about our services, our team is here to help.
                            </p>
                            <p>Feel free to us the contact details below to get in touch with us directly:</p>
                            <!-- <div class="support">
                                <div class="icon">
                                    <img src="assets/images/icon/footer-support-icon.svg" alt="">
                                </div>
                                <div class="content">
                                    <h5>Support Line:</h5>
                                    <a href="tel:{{ globalSettings._site_support_no }}">{{
                                        globalSettings._site_support_no }}</a>
                                </div>
                            </div> -->


                            <div>
                                <h5 class="mb-3" >Support Line:</h5>
                                <h6 class="title">
                                    <img src="assets/images/icon/footer-support-icon.svg" alt="">
                                    <a href="tel:{{ globalSettings._site_support_no }}">{{ globalSettings._site_support_no }}</a>
                                </h6>
                            </div>


                            <div>
                                <h4 class="title">Our Availabilty: </h4>
                                <ul>
                                    <li><span class="fw-bold"> Customer Service Team:</span>
                                        Available from <span>9:00 AM to 5:00PM,</span> Monday to Friday. We are ready to
                                        address any queries related to your account,
                                        job posting and general inquiries during these ours.
                                    </li>
                                    <li>
                                        <span class="fw-bold">Recruitment Hub:</span>
                                        Provied Extended coverage <span>24 hours a day, 6 days a week</span> to insure
                                        your receive timely support for urgent recruitment related matters.
                                    </li>
                                </ul>
                            </div>
                            <div class="service-available">
                                <!-- <span>N:B</span>
                                <p>Our Customer Service team are available from 9am to 5pm, Monday to Friday. Our
                                    Recruitment Hub provides coverage 24 hours a day, 6 days per week.</p> -->
                                <p>We aim to make your experience with WORKPAGES seamless and hassle-free if you need
                                    further contact details, such as our email or office address, please visit the
                                    relevant section on our website. </p>
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
                                                <img src="assets/images/icon/user-2.svg" alt="">
                                                <input type="text" id="name" name="name" placeholder="Mr. Jackson Mile"
                                                    v-model="formData.name" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="email">Email*</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/email-2.svg" alt="">
                                                <input type="email" id="email" name="email"
                                                    placeholder="info@example.com" v-model="formData.email" required>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="col-md-6">
                                    <div class="form-inner mb-25">
                                        <label for="phonenumber">Phone*</label>
                                        <div class="input-area">
                                            <img src="assets/images/icon/phone-2.svg" alt="">
                                            <input type="text" id="phonenumber" name="phonenumber" placeholder="+880-17 *** *** **" v-model="formData.phone" required>
                                        </div>
                                    </div>
                                </div> -->
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label for="jobplace">Company Name (Optional)</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/company-2.svg" alt="">
                                                <input type="text" id="jobplace" name="jobplace"
                                                    placeholder="Your Company Name" v-model="formData.company_name">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner mb-25">
                                            <label for="jobplace">Subject</label>
                                            <div class="input-area">
                                                <img src="assets/images/icon/company-2.svg" alt="">
                                                <input type="text" id="jobplace" name="jobplace"
                                                    placeholder="Your Subject" v-model="formData.company_name">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner mb-40">
                                            <label for="description">Message*</label>
                                            <textarea name="description" id="description" placeholder="Your Message..."
                                                v-model="formData.message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-inner">
                                            <!-- <button class="primry-btn-2 lg-btn w-unset" type="submit">Send Message</button> -->
                                            <button class="primry-btn-2 lg-btn w-unset" type="submit"
                                                :disabled="loading">
                                                <b v-if="loading"><b class="spinner-border spinner-border-sm"
                                                        role="status" aria-hidden="true"></b> Send Message...</b>
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
            loading: false,
            bgImage: '',
            textColor: '',
        }
    },
    computed: {
        ...mapGetters([
            'globalVariables',
            'cmsPages'
        ])
    },
    methods: {
        async submitForm() {
            try {
                this.loading = true
                await this.sendDataToServer(this.formData);
                this.formData = {};
            } catch (error) {
                console.log(error);

            }



        },
        sendDataToServer(data: any) {

            axios.post(apiUrl + 'emails/contactUs', data)
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

    mounted() {
        this.$store.dispatch('getGlobalVariables');
        var credentials = {
            'page_slug': 'contact',
        }
        this.$store.dispatch('getCMSPages', credentials);
        this.$store.dispatch('getGlobalVariables');
    },
    watch: {
        globalVariables() {
            this.bgImage = 'background-image: url(' + this.globalVariables._banner_image + ')';
            this.textColor = 'color: ' + this.globalVariables._banner_text_color + ' !important;';
            this.globalSettings = this.globalVariables;
        },
    }

})
export default class ContactUs extends Vue { }
</script>
