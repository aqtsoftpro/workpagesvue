<template>
    <div class="dashboard-area pt-120 mb-120">
        <div class="container">
            <div class="row g-lg-4 gy-5 mb-90">
                <user-menu />
                <div class="col-lg-9">
                    <div class="applied-job-area">
                        <div class="table-wrapper">
                            <div class="table-title-filter">
                                <div class="section-title">
                                    <h5>Applied Jobs:</h5>
                                </div>
                            </div>
                            <table class="eg-table table category-table mb-30">
                                <thead>
                                    <tr>
                                        <th>Job Tittle</th>
                                        <th>Apply Date</th>
                                        <th>Company</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="isLoading">
                                        <td colspan="6">
                                            <ProgressSpinner  />
                                        </td>
                                    </tr>
                                    <tr v-else v-for="application in jobApplications" :key="application.id">
                                        <td data-label="Job Title">
                                            <div class="company-info">
                                                <div class="logo">
                                                    <img :src="(application.job.company_logo)?(application.job.company_logo):'/templates/assets/images/bg/company-logo/company-06.png'" alt="">
                                                </div>
                                                <div class="company-details">
                                                    <div class="top">
                                                        <h6><a href="job-details.html">{{ application.job.job_title }}</a></h6>
                                                        <span><img src="/templates/assets/images/icon/calender2.svg" alt=""> 1 days ago</span>
                                                    </div>
                                                    <ul>
                                                        <li><img src="/templates/assets/images/icon/location.svg" alt="">{{ application.job.location }}</li>
                                                        <li>
                                                            <img src="/templates/assets/images/icon/arrow2.svg" alt="">
                                                            <p><span class="title">Salary:</span> {{ application.job.salary_range }}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-label="Apply Job">{{ application.applied_on  }}</td>
                                        <td data-label="Company"><a class="view-btn" href="company-details.html">{{ application.job.company }}</a></td>
                                        <td data-label="Status"><button class="eg-btn purple-btn">{{ application.status_name }}</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="pagination-table-info">

                                <Paginator v-model:first="currentPage" :rows="rowsPerPage" :totalRecords="totalPages" @page="handlePageChange">
                                </Paginator>

                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div> -->


</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import UserMenu from './UserMenu.vue';
import { mapGetters } from 'vuex';
import ProgressSpinner from 'primevue/progressspinner';
import Paginator from 'primevue/paginator';
import axios from 'axios';
import { apiUrl, adminDashboardUrl, adminDashboardDomain } from '../../utils/config';

@Options({
components: {
  'user-menu': UserMenu,
  ProgressSpinner,
  Paginator
},
data() {
  return {
      user: {},
      user_id: {},
      jobApplications: [],
      isLoading: false,
      currentPage : 1,
      totalPages : 0,
      rowsPerPage : 10,
  }
},
computed: {
  ...mapGetters([
    'currentUser',
    'candidateApplications'
  ]),
},
methods: {
    handlePageChange(event:any) 
        {
            this.isLoading = true; // Show loader
            const pageId = event.page;

            axios.get(apiUrl + 'getApplicationsByUserId/'+ this.user_id +'?pageId=' + pageId, {
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token')
                } 
            })
            .then(res => {
                console.log(res.data.Listing);
                this.jobApplications = res.data.Listing; // Store fetched data
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
}, 
mounted() {
    this.user = JSON.parse(this.currentUser)[0]
    this.$store.dispatch('getCandidateApplications', this.user.id)
    this.user_id = this.user.id;

    let Script = document.createElement("script");
    Script.setAttribute("src", "/templates/assets/js/main.js");
    document.head.appendChild(Script);
},
watch: {
    candidateApplications() {
        this.jobApplications = this.candidateApplications.Listing
        this.totalPages =  this.candidateApplications.count;
    }
}
})
export default class UserJobs extends Vue {}
</script>
