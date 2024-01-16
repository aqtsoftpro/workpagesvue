<template>
  <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content text-center">
                        <h1>About Us</h1>
                        <span></span>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="index.html">Home</router-link></li>
                                <li class="breadcrumb-item active" aria-current="page">About Us  </li>
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

          Under Contruction
    
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
