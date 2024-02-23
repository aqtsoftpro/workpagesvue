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
            <div v-if="!isLoading" v-html="cmsPages"></div>
            <div v-else class="blur">
              <div class="spin-loader"></div>
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
        'page_slug': 'about-us',
    }
    this.$store.dispatch('getCMSPages', credentials);
    console.log('mounting');
    // console.log(this.meta.roles);
    
  },
  watch: {
    cmsPages()
    {
      this.cmsPageInfo = this.cmsPages
      console.log(this.cmsPages);
      window.setTimeout(() => {
          this.isLoading = false;
      }, 5000);
    },
  }
})
export default class PrivacyPolicies extends Vue {}
</script>
