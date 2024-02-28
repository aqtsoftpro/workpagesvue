<template>
  <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content text-center">
                        <h1>Charity Partner</h1>
                        <span></span>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="index.html">Home</router-link></li>
                                <li class="breadcrumb-item active" aria-current="page">Charity Partner  </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ========== Inner Banner end============= -->
    <!-- ========== Job Listing Start============= -->
    <div class="job-listing-area pt-120 mb-120">
        <div class="container">
            <div class="col-lg-12">
                <div class="form-wrapper">
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-inner mb-25">
                                    <label for="name">Your Name*</label>
                                    <div class="input-area">
                                        <img src="assets/images/icon/user-2.svg" alt="">
                                        <input type="text" id="name" v-model="charityForm.name" placeholder="Mr. Jackson Mile">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-inner mb-25">
                                    <label for="email">Email*</label>
                                    <div class="input-area">
                                        <img src="assets/images/icon/email-2.svg" alt="">
                                        <input type="text" id="email" v-model="charityForm.email" placeholder="info@example.com">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-inner mb-25">
                                    <label for="phonenumber">Phone*</label>
                                    <div class="input-area">
                                        <img src="assets/images/icon/phone-2.svg" alt="">
                                        <input type="text" id="phonenumber" v-model="charityForm.phone" placeholder="+880-17 *** *** **">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-inner mb-25">
                                    <label for="jobplace">Company Name (Optional)</label>
                                    <div class="input-area">
                                        <img src="assets/images/icon/company-2.svg" alt="">
                                        <input type="text" id="jobplace" v-model="charityForm.company" placeholder="Company Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-inner mb-40">
                                    <label for="description">Address</label>
                                    <textarea v-model="charityForm.address" id="description" placeholder="Your company address"></textarea>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-inner">
                                    <button v-if="!isLoading" @click="charityPartner" class="primry-btn-2 lg-btn w-unset" type="button">Become a Charity Partner</button>
                                    <button v-else class="primry-btn-2 lg-btn w-unset" type="button">
                                        <span class="me-3 fs-6 text-white">Processing...</span>
                                        <i class="fa fa-spinner fa-spin text-white" style="font-size:24px">
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
    <!-- ========== Job Listing e nd============= -->
  </div>  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import PrivacyPolicy from './PrivacyPolicy.vue'; // @ is an alias to /src

@Options({
  components: {
    PrivacyPolicy,
  },
  data(){
    return {
      cmsPageInfo: null,
      charityForm: {
        name: '',
        email: '',
        phone: '',
        comapny: '',
        address: '',
      },
      isLoading: false,
    }
  },
  computed: {
    ...mapGetters([
        'cmsPages',
    ])
  },
  mounted() {
    var credentials = {
        'page_slug': 'privacy-policy',
    }
    this.$store.dispatch('getCMSPages', credentials);
  },
  watch: {
    cmsPages()
    {
      this.cmsPageInfo = this.cmsPages
      console.log(this.cmsPages);
    },
  },
  methods: {
    charityPartner() {
        this.isLoading = true;
        try {
            this.isLoading = true;
            var credentials = this.charityForm;
            this.$store.dispatch('addPartner', credentials)
            console.log('this is just test');
            window.setTimeout(() => {
                this.isLoading = false;
            }, 5000);
        } catch (error) {
            console.log(error);
        }
    }
  },
})
export default class PrivacyPolicies extends Vue {}
</script>
