<template>
    <div>
          <!-- ========== Inner Banner Start============= -->
          <div class="inner-banner">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="banner-content text-center">
                          <h1>Unauthorized</h1>
                          <span></span>
                          <nav aria-label="breadcrumb">
                              <ol class="breadcrumb">
                                  <li class="breadcrumb-item">
                                      <!-- <router-link to="index.html"> -->
                                          403
                                      <!-- </router-link> -->
                                  </li>
                                  <li class="breadcrumb-item active" aria-current="page">This action is Unauthorized...! </li>
                              </ol>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- ========== Inner Banner end============= -->
      <!-- ========== Job Listing Start============= -->
      <div class="job-listing-area pt-120 mb-120" id="scrollTarget">
          <div class="container">

          </div>
      </div>
      <!-- ========== Job Listing e nd============= -->
    </div>
    
  
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import { mapGetters } from 'vuex';
  import Jobs from '../views/JobListing.vue'; // @ is an alias to /src
 
  
  @Options({
    components: {
      Jobs,      
    },
    data(){
      return {
          jobs: [],

      }
    },
    computed: {
      ...mapGetters([
          'trending_jobs_categories',
          'jobTypeFilters',
          'jobPostedFilters',
          'salaryRangeFilters',
          'jobsListing',
          'loggedIn'
      ])
    },

  })
  export default class JobListing extends Vue {}
  </script>
  