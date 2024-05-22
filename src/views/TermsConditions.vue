<template>
  <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner" :style="bgImage">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content text-center">
                        <h1 :style="textColor">Terms & Conditions</h1>
                        <span></span>
                        <!-- <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item" :style="textColor"><router-link to="index.html" :style="textColor">Home</router-link></li>
                                <li class="breadcrumb-item active" :style="textColor" aria-current="page">Terms & Conditions </li>
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
          <div v-html="cmsPageInfo"></div>
          
        </div>
    </div>
    <!-- ========== Job Listing e nd============= -->
  </div>  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import TermCondition from './TermsConditions.vue'; // @ is an alias to /src

@Options({
  components: {
    TermCondition,
  },
  data(){
    return {
      cmsPageInfo: null,
      bgImage: '',
      textColor: '',
    }
  },
  computed: {
    ...mapGetters([
        'cmsPages',
        'globalVariables',
    ])
  },
  mounted() {
    this.$store.dispatch('getCMSPages', {'page_slug': 'terms-conditions'});
    console.log('mounting');
    this.$store.dispatch('getGlobalVariables');
  },
  watch: 
  {
    cmsPages(){
      this.cmsPageInfo = this.cmsPages
      console.log(this.cmsPages);
    },

    globalVariables() {
      this.bgImage = 'background-image: url('+this.globalVariables._banner_image+')';
      this.textColor = 'color: '+this.globalVariables._banner_text_color+' !important;';
    }
      
  }
})
export default class TermsConditions extends Vue {}
</script>
