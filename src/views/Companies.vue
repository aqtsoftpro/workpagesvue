<template>
  <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content text-center">
                        <h1>Company Listing</h1>
                        <span></span>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="">Home</router-link></li>
                                <li class="breadcrumb-item active" aria-current="page">Company Listing</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ========== Inner Banner end============= -->
    <!-- ========== Job Listing Start============= -->
    <div class="company-listing-area pt-120 mb-120" id="scrollTarget">
        <div class="container">
            <div class="row g-lg-4 gy-5">
                <div class="col-lg-4 order-lg-1 order-2">
                    <div class="job-sidebar">
                        <div class="job-widget style-1 mb-20">
                            <div class="check-box-item">
                                <h5 class="job-widget-title">Company Category</h5>
                                <div class="checkbox-container">
                                    <ul>
                                        <li v-for="category in companyTypeFilters" :key="category.id">
                                            <label class="containerss">
                                                <!-- <input type="checkbox" v-model="categoryFilter[category.id]" :true-value="[]"> -->
                                                <input type="checkbox" :value="category.id" v-model="CompanyTypeFilter"  @change="filterJobs">

                                                <!-- <span class="checkmark" v-on:click="filterJobs()"></span>
                                                <span class="text"  v-on:click="filterJobs()">{{ category.name }} {{ category.id }}</span> -->

                                                <span class="checkmark"></span>
                                                <span class="text">{{ category.name }}</span>

                                                <span class="qty">({{ category.counts }})</span>
                                            </label>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="job-widget mb-20">
                            <div class="check-box-item">
                                <h5 class="job-widget-title">Country/ Location</h5>
                                <div class="checkbox-container">
                                    <ul>
                                        <li v-for="category in companyLocationFilters" :key="category.id">
                                            <label class="containerss">
                                                <!-- <input type="checkbox" v-model="categoryFilter[category.id]" :true-value="[]"> -->
                                                <input type="checkbox" :value="category.id" v-model="CompanyLocationFilter"  @change="filterJobs">

                                                <!-- <span class="checkmark" v-on:click="filterJobs()"></span>
                                                <span class="text"  v-on:click="filterJobs()">{{ category.name }} {{ category.id }}</span> -->

                                                <span class="checkmark"></span>
                                                <span class="text">{{ category.name }}</span>

                                                <span class="qty">({{ category.counts }})</span>
                                            </label>
                                        </li>
                                     
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        
     
             
                    </div>
                </div>
                <div class="col-lg-8 order-lg-2 order-1">
                    <div class="company-listing-wrap">
                        <div class="row g-4 mb-25">
                            <div class="col-lg-6 d-flex align-items-center">
                                <p class="show-item">Showing results 10 in {{ totalPages }} jobs list</p>
                            </div>



                        </div>
                        <div class="row g-4 mb-70">
                            <div v-if="isLoading">
                                <ProgressSpinner  />
                            </div>
                            <div v-else v-for="company in companies" :key="company.id" class="col-md-6">
                                <div class="company-list-card1">
                                    <div class="company-area">
                                        <div class="logo">
                                            <img :src="(company.logo) ? company.logo : '/templates/assets/images/bg/company-logo/company-01.png'" alt="">
                                        </div>
                                       <div class="company-content">
                                        <div class="company-details">
                                            <div class="name-location">
                                                <h5>
                                                    <!-- <router-link to="/company-details"> -->
                                                    {{ company.name }}
                                                <!-- </router-link> -->
                                            </h5>
                                                <p><img src="templates/assets/images/icon/location.svg" alt="">
                                                    {{ company.location }}
                                                    <!-- Dhaka, Bangladesh -->
                                                </p>
                                            </div>
                                  
                                        </div>
                                        <div class="job-details-vacancies">
                                            <div class="vacancies">
                                                <p>Vacancies: <span>{{ company.jobs_count }}</span></p>
                                            </div>
                                            <div class="apply-btn">
                                                <router-link :to="getCompanyDetail(company.id)"><span><img src="templates/assets/images/icon/apply-ellipse.svg" alt=""></span>View Details</router-link>
                                            </div>
                                        </div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            
                       
                        </div>
                        <div class="row">
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
import CompaniesListing from '../views/Companies.vue'; // @ is an alias to /
import ProgressSpinner from 'primevue/progressspinner';
import Paginator from 'primevue/paginator';
import axios from 'axios';
import { apiUrl, adminDashboardUrl, adminDashboardDomain } from '../utils/config';


@Options({
  components: {
    CompaniesListing,
    ProgressSpinner,
    Paginator
  },
  data(){
    return {
        companies: [],
        // jobCategoryFilter: [],
        CompanyTypeFilter: [],
        CompanyLocationFilter: [],
        // SalaryRangeFilter: [],
        // JobPostedOnFilter: [],
        isLoading: false,
        currentPage : 1,
        totalPages : 0,
        rowsPerPage : 10,
    }
  },
  computed: {
    ...mapGetters([
        'companiesListing',
        'companyTypeFilters',
        'companyLocationFilters',
    ])
  },
  mounted(){
    this.$store.dispatch('getCompaniesListing', '');
    this.$store.dispatch('getFilterTypeofCompanies', '');
    this.$store.dispatch('getFilterLocationCompanies', '');
    // console.log(this.companies);

    let Script = document.createElement("script");
    Script.setAttribute("src", "/templates/assets/js/main.js");
    document.head.appendChild(Script);
  },
  methods: {
    filterJobs()
        {
            this.isLoading = true; // Show loader
            const CompanyTypes = this.CompanyTypeFilter;
            const CompanyLocations = this.CompanyLocationFilter;
            const pageId = 0;
            this.currentPage = 1;
            this.fetchListing(CompanyTypes, CompanyLocations, pageId);
        },

    handlePageChange(event:any) 
        {  
            this.isLoading = true; // Show loader
            const element = window.document.getElementById('scrollTarget');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            const CompanyTypes = this.CompanyTypeFilter;
            const CompanyLocations = this.CompanyLocationFilter;
            const pageId = event.page;
            this.fetchListing(CompanyTypes, CompanyLocations, pageId);

        },

    fetchListing(CompanyTypes:any, CompanyLocations:any, pageId:any)
        {
            axios.get(apiUrl + 'CompaniesListing?pageId=' + pageId + '&companyTypes=' + CompanyTypes + '&companyLocations=' + CompanyLocations, {
            // headers: {
            //     'authorization': 'Bearer ' + localStorage.getItem('token')
            //     } 
            })
            .then(res => {
                this.companies = res.data.Listing; // Store fetched data
                this.totalPages = res.data.count;
                
            })
            .catch(err => {
            })
            .finally(() => {
            this.isLoading = false; // Hide loader
            });

        },

    getCompanyDetail(company_id:any) {
      return {
        path: '/company-details/'+company_id
      };
    },

  },
  watch: {
    companiesListing(){
        this.companies = this.companiesListing.Listing;
        console.log(this.companies);
        this.totalPages =  this.companiesListing.count
    }
  }
  
})
export default class Companies extends Vue {}
</script>
