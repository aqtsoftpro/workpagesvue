<template>
  <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content text-center">
                        <h1>Job Listing</h1>
                        <span></span>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <!-- <router-link to="index.html"> -->
                                        Home
                                    <!-- </router-link> -->
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Job Listing  </li>
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
            <div class="row g-lg-4 gy-5">
                <div class="col-lg-4 order-lg-1 order-2">
                    <div class="job-sidebar">
                        <div class="job-widget style-1 mb-20">
                            <div class="check-box-item">
                                <h5 class="job-widget-title">Job Category</h5>
                                <div class="checkbox-container">
                                    <ul>
                                        <li v-for="category in trending_jobs_categories" :key="category.id">
                                            <label class="containerss">
                                                <!-- <input type="checkbox" v-model="categoryFilter[category.id]" :true-value="[]"> -->
                                                <input type="checkbox" :value="category.id" v-model="jobCategoryFilter"  @change="filterJobs">

                                                <!-- <span class="checkmark" v-on:click="filterJobs()"></span>
                                                <span class="text"  v-on:click="filterJobs()">{{ category.name }} {{ category.id }}</span> -->

                                                <span class="checkmark"></span>
                                                <span class="text">{{ category.name }}</span>

                                                <span class="qty">({{ category.cat_counts }})</span>
                                            </label>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="job-widget mb-20">
                            <div class="check-box-item">
                                <h5 class="job-widget-title">Type of Employments</h5>
                                <div class="checkbox-container">
                                    <ul>
                                        <li v-for="jobType in jobTypeFilters" :key="jobType.id">
                                            <label class="containerss">
                                                <input type="checkbox" :value="jobType.id" v-model="JobTypeFilter"  @change="filterJobs">
                                                <span class="checkmark"></span>
                                                <span class="text">{{ jobType.name }}</span>
                                                <span class="qty">({{ jobType.counts }})</span>
                                            </label>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="job-widget mb-20">
                            <div class="check-box-item">
                                <h5 class="job-widget-title">Date of Post</h5>
                                <div class="salary-container">
                                    <ul>
                                        <li v-for="jobPosted in jobPostedFilters" :key="jobPosted.id">
                                            <input class="form-check-input" type="radio" name="showInputBox" 
                                             :value="jobPosted.id" v-model="JobPostedOnFilter"  @change="filterJobs">
                                            <div class="content">
                                                <span class="text">{{ jobPosted.name }}</span>
                                                <span class="qty">({{ jobPosted.counts }})</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="job-widget mb-20">
                            <div class="check-box-item">
                                <h5 class="job-widget-title mb-15">Salary Range</h5>
                                
                                <div class="salary-container">
                                    <ul>
                                        <li v-for="SalaryRange in salaryRangeFilters" :key="SalaryRange.id">
                                            <input class="form-check-input" type="radio" name="showInputBox" 
                                             :value="SalaryRange.id" v-model="SalaryRangeFilter"  @change="filterJobs">
                                            <div class="content">
                                                <span class="text">{{ SalaryRange.name }}</span>
                                                <span class="qty">({{ SalaryRange.counts }})</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 order-lg-2 order-1">
            
                    <div class="job-listing-wrrap"  >
                        <div class="row g-4 mb-25">
                            <div class="col-lg-6 d-flex align-items-center">
                                <p class="show-item">Showing results 10 in {{ totalPages }} jobs list</p>
                            </div>
                        </div>
                        <div class="row">
                            <div v-if="isLoading">
                                <ProgressSpinner  />
                            </div>
                            <div v-else v-for="job in jobs" :key="job.id" class="col-lg-12 mb-30">
                                <div class="job-listing-card">
                                    <div class="job-top">
                                        <div class="job-list-content">
                                            <div class="company-area">
                                                <div class="logo">
                                                        <img :src="(job.company_logo) ? job.company_logo : 'https://loremflickr.com/52/52/logo,organisation/all'" alt="">
                                                </div>
                                                <div class="company-details">
                                                    <div class="name-location">
                                                        <h5>
                                                            <!-- <router-link to="/job-details"> -->
                                                                {{ job.job_title }}
                                                            <!-- </router-link> -->
                                                        </h5>
                                                        <p>
                                                            <!-- <router-link :to="'/company-details?company_id=' + job.company_id">  -->
                                                                
                                                                {{ job.company }}
                                                            <!-- </router-link> -->
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="job-discription">
                                                <ul>
                                                    <li>
                                                        <p><span class="title">Salary:</span> {{ job.salary_range }}</p>                                                
                                                    </li>
                                                    <li>
                                                        <p><span class="title">Deadline:</span>{{ job.expiration }}</p>                                                
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- <router-link v-if="loggedIn" to="/bookmark" class="bookmark">
                                            <i class="bi bi-bookmark-fill"></i>
                                        </router-link>
                                        <router-link v-else :to="{ name: 'login' }" class="bookmark">
                                            <i class="bi bi-bookmark-fill"></i>
                                        </router-link>                                         -->
                                    </div>
                                    <div class="job-type-apply">
                                        <div class="job-type">
                                            <span class="light-green">{{ job.working_mode  }}</span>
                                            <!-- <span class="light-purple">Part Time</span>
                                            <span class="light-blue">Remote</span> -->
                                        </div>
                                        <div class="apply-btn" v-if="!isJobExpired(job.expiration)">
                                            <router-link v-if="loggedIn" :to="getJobDetail(job.job_key, job.job_slug)"><span><img src="assets/images/icon/apply-ellipse.svg" alt=""></span>Apply Now</router-link>
                                            <router-link v-else :to="{ name: 'login'}"><span><img src="assets/images/icon/apply-ellipse.svg" alt=""></span>Login to apply</router-link>
                                        </div>
                                        <div class="apply-btn" v-else>
                                            <span>Expired</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 d-flex justify-content-center">
                                <!-- <div class="pagination-area">
                                    <nav aria-label="...">
                                        <ul class="pagination">
                                            <li class="page-item disabled"><router-link class="page-link" to="#" tabindex="-1"></router-link></li>
                                            <li class="page-item active" aria-current="page"><router-link class="page-link" to="#">01</router-link></li>
                                            <li class="page-item"><router-link class="page-link" to="#">02</router-link></li>
                                            <li class="page-item"><router-link class="page-link" to="#">03</router-link></li>
                                            <li class="page-item"><router-link class="page-link" to="#"></router-link></li>
                                        </ul>
                                    </nav>
                                </div> -->
                                <Paginator v-model:first="currentPage" :rows="rowsPerPage" :totalRecords="totalPages" @page="handlePageChange">
                                </Paginator>


                            </div>
                        </div>
                    </div>
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
import Jobs from '../views/JobListing.vue'; // @ is an alias to /src
import ProgressSpinner from 'primevue/progressspinner';
import Paginator from 'primevue/paginator';
import axios from 'axios';
import { apiUrl, adminDashboardUrl, adminDashboardDomain } from '../utils/config';


@Options({
  components: {
    Jobs,
    ProgressSpinner,
    Paginator
    
  },
  data(){
    return {
        jobs: [],
        jobCategoryFilter: [],
        JobTypeFilter: [],
        SalaryRangeFilter: [],
        JobPostedOnFilter: [],
        isLoading: false,
        currentPage : 1,
        totalPages : 0,
        rowsPerPage : 10,
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
  methods: 
  {
    filterJobs()
        {
            this.isLoading = true; // Show loader

            const jobCategories = this.jobCategoryFilter;
            const jobTypes = this.JobTypeFilter;
            const priceRange = this.SalaryRangeFilter;
            const JobPostedOn = this.JobPostedOnFilter;

            const pageId = 0;
            this.currentPage = 1;
            
            this.fetchListing(jobCategories, jobTypes, priceRange, JobPostedOn, pageId);
        },

    handlePageChange(event:any) 
        {
            
            // this.currentPage.value = event.page + 1; 
            // Paginator pages are 0-based
            console.log(event);
            console.log(this.currentPage);
            
            this.isLoading = true; // Show loader
            const jobCategories = this.jobCategoryFilter;
            const jobTypes = this.JobTypeFilter;
            const priceRange = this.SalaryRangeFilter;
            const JobPostedOn = this.JobPostedOnFilter;

            const pageId = event.page;


            
            this.fetchListing(jobCategories, jobTypes, priceRange, JobPostedOn, pageId);

        },

    fetchListing(jobCategories:any, jobTypes:any, priceRange:any, JobPostedOn:any, pageId:any)
        {
            
            axios.get(apiUrl + 'jobsListing?pageId=' + pageId + '&jobCategories=' + jobCategories + '&jobTypes=' + jobTypes + '&jobSalaryRange=' + priceRange + '&JobPostedOn=' + JobPostedOn, {
            // headers: {
            //     // "Access-Control-Allow-Origin": "*",
            //     // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            //     // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
            //     "Referer": "https://wpages.aqtdemos.com"
            // }
            })
            .then(res => {
                console.log(res);
                this.jobs = res.data.Listing; // Store fetched data
                this.totalPages = res.data.count;
                const element = window.document.getElementById('scrollTarget');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            })
            .catch(err => {

            })
            .finally(() => {
            this.isLoading = false; // Hide loader
            

            });

        },

    getJobDetail(job_key:any, job_slug:any) {    
            return {
                    path: '/job-details/'+job_key+'/'+job_slug
            };
        },  
        
        parsedExpirationDate(expirationDate:any) {
            // Split the expiration date string into month, day, and year
            const [month, day, year] = expirationDate.split(' ');
            // Type annotation for monthMap
            const monthMap: { [key: string]: number } = {
                'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3,
                'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7,
                'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
            };

            // Create and return a Date object using the parsed month, day, and year
            return new Date(year, monthMap[month], parseInt(day, 10));
        },
            
        isJobExpired(expirationDate: any) {
            const today = new Date();
            const expiration = this.parsedExpirationDate(expirationDate);
            return expiration < today; // Returns true if the job is expired
        },

  },  
  mounted() 
  {
    this.$store.dispatch('getFilterCategories', '');
    this.$store.dispatch('getFilterTypeofEmployment', '');
    this.$store.dispatch('getFilterSalaryRange', '');
    this.$store.dispatch('getFilterJobPosted', '');
    this.$store.dispatch('jobsListing');

    let Script = document.createElement("script");
    Script.setAttribute("src", "/assets/js/main.js");
    document.head.appendChild(Script);
  },
  watch: {
    jobsListing(){
        this.jobs = this.jobsListing.Listing;
        this.totalPages =  this.jobsListing.count
    }
  }
})
export default class JobListing extends Vue {}
</script>
