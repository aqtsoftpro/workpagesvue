<template>
  <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner" :style="bgImage">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content text-center">
                        <h1 :style="textColor">Frequently Asked Questions</h1>
                        <span></span>
                        <!-- <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item" :style="textColor"><router-link to="index.html" :style="textColor">Home</router-link></li>
                                <li class="breadcrumb-item active" :style="textColor" aria-current="page">Charity Partner  </li>
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
            <div class="row mb-5">
                <div class="col-lg-12">
                    <div v-html="cmsPageInfo" ></div>
                    <!-- <div class="section-title text-center">
                        <h5 class="title">
                            Partner with us to transform lives through employment, to create self-reliant communities!
                        </h5>
                    </div> -->
                </div>
            </div>
            <!-- <div class="col-lg-12">

            </div> -->
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
      bgImage: '',
      textColor: '',
    }
  },
  computed: {
    ...mapGetters([
        'cmsPages',
        'globalVariables'
    ])
  },
  mounted() {
    var credentials = {
        'page_slug': 'faq',
    }
    this.$store.dispatch('getCMSPages', credentials);
    this.$store.dispatch('getGlobalVariables');
  },
  watch: {
    cmsPages()
    {
      this.cmsPageInfo = this.cmsPages
      console.log(this.cmsPages);
    },

    globalVariables() {
      this.bgImage = 'background-image: url('+this.globalVariables._banner_image+')';
      this.textColor = 'color: '+this.globalVariables._banner_text_color+' !important;';
    }
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
export default class Faq extends Vue {}
</script>
