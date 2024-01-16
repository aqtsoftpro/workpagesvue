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
                                            <input type="text" id="name" name="name" placeholder="Mr. Jackson Mile">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-inner mb-25">
                                        <label for="email">Email*</label>
                                        <div class="input-area">
                                            <img src="assets/images/icon/email-2.svg" alt="">
                                            <input type="text" id="email" name="email" placeholder="info@example.com">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-inner mb-25">
                                        <label for="phonenumber">Phone*</label>
                                        <div class="input-area">
                                            <img src="assets/images/icon/phone-2.svg" alt="">
                                            <input type="text" id="phonenumber" name="phonenumber" placeholder="+880-17 *** *** **">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-inner mb-25">
                                        <label for="jobplace">Company Name (Optional)</label>
                                        <div class="input-area">
                                            <img src="assets/images/icon/company-2.svg" alt="">
                                            <input type="text" id="jobplace" name="jobplace" placeholder="Company Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-inner mb-40">
                                        <label for="description">Message</label>
                                        <textarea name="description" id="description" placeholder="Message..."></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-inner">
                                        <button class="primry-btn-2 lg-btn w-unset" type="submit">Become a Charity Partner</button>
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
    }
  },
  computed: {
    ...mapGetters([
        'cmsPages',
    ])
  },
  mounted() {
    this.$store.dispatch('getCMSPages', 'privacy-policy');
    console.log('mounting');
  },
  watch: {
    cmsPages()
    {
      this.cmsPageInfo = this.cmsPages
      console.log(this.cmsPages);
    },
  }
})
export default class PrivacyPolicies extends Vue {}
</script>
