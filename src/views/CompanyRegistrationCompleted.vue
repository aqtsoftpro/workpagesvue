<template>
  <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content text-center">
                        <h1>Employer Registration Completed</h1>
                        <span></span>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="index.html">Home</router-link></li>
                                <li class="breadcrumb-item active" aria-current="page">Employer Registration Completed </li>
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
            <h1>Employer Registration Completed</h1>

<p>Please verify your account in email.</p>


        </div>
    </div>
    <!-- ========== Job Listing e nd============= -->
  </div>  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import Jobs from './CompanyRegistrationCompleted.vue'; // @ is an alias to /src

@Options({
  components: {

  },
  data(){

  },
  computed: {

  },
  mounted() {

  },
  watch: {
 
  }
})
export default class JobListing extends Vue {}
</script>
