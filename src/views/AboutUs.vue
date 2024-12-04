<template>
  <div>
    <!-- ========== Inner Banner Start============= -->
    <div class="inner-banner" :style="bgImage">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-content text-center">
              <h1 :style="textColor">About Us</h1>
              <span></span>
              <!-- <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item" :style="textColor"><router-link to="index.html" :style="textColor">Home</router-link></li>
                                <li class="breadcrumb-item active" aria-current="page" :style="textColor">About Us  </li>
                            </ol>
                        </nav> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ========== Inner Banner end============= -->
    <!-- ========== Job Listing Start============= -->
    <div class="job-listing-area pt-120 mb-120">
      <div class="container">
        <div v-if="!isLoading" v-html="cleanStyleAttribute"> </div>
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
  data() {
    return {
      cmsPageInfo: null,
      isLoading: false,
      bgImage: '',
      textColor: '',
    }
  },
  computed: {
    ...mapGetters([
      'cmsPages',
      'globalVariables'
    ]),

    cleanStyleAttribute() {
      // Replace backslashes inside style attribute
      return this.cmsPages.replace(/style=\\"/g, 'style="').replace(/\\"/g, '"');
    }
  },
  mounted() {
    var credentials = {
      'page_slug': 'about-us',
    }
    this.$store.dispatch('getCMSPages', credentials);
    this.$store.dispatch('getGlobalVariables');
    // console.log(this.meta.roles);

  },
  watch: {
    cmsPages() {
      this.cmsPageInfo = this.cmsPages
      console.log(this.cmsPages);
      window.setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
    globalVariables() {
      this.bgImage = 'background-image: url(' + this.globalVariables._banner_image + '); color: ' + this.globalVariables._banner_text_color + '!important;';
      this.textColor = 'color: ' + this.globalVariables._banner_text_color + ' !important;'
    }
  }
})
export default class PrivacyPolicies extends Vue { }
</script>
