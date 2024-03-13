<template>
    <div>
          <!-- ========== Inner Banner Start============= -->
          <div class="inner-banner">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="banner-content text-center">
                          <h1>Casual Portal</h1>
                          <span></span>
                          <nav aria-label="breadcrumb">
                              <ol class="breadcrumb">
                                  <li class="breadcrumb-item"><router-link to="index.html">Home</router-link></li>
                                  <li class="breadcrumb-item active" aria-current="page">Casual Portal</li>
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
              <div class="row g-lg-4 gy-5">
            
                  <div class="col-lg-12 order-lg-2 order-1">
                      <div class="job-listing-wrrap">
                        <!-- {{ searchSeeker }} -->
                          <div v-if="!showForm && !mailFormShow" class="row ">
                            <div v-if="pageLoading" class="p-5">
                                <div class="d-flex justify-content-center py-5">
                                    <ProgressSpinner  />
                                </div>
                            </div>
                              <div v-else v-for="seeker in jobSeekers" :key="seeker.id" class="col-lg-12 mb-30">
                                  <div class="job-listing-card">
                                      <div class="job-top">
                                          <div class="job-list-content">
                                              <div class="company-area">
                                                  <div class="logo">
                                                          <img :src="(seeker.photo) ? seeker.photo : 'https://loremflickr.com/52/52/logo,organisation/all'" alt="">
                                                  </div>
                                                  <div class="company-details">
                                                      <div class="name-location">
                                                        <router-link :to="'job-seeker/'+seeker.id">
                                                            <h5>{{ seeker.name }}</h5>
                                                        </router-link>
                                                        <p>{{ seeker.description }}</p>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="job-discription">
                                                  <ul>
                                                      <li>
                                                          <p><span class="title">Location:</span> {{ seeker.job_location?.name ?? 'No Location' }}</p>                                                
                                                      </li>
                                                      <li>
                                                          <p><span class="title">Qualification:</span>{{ seeker.qualification?.name ?? 'No Qualification' }}</p>                                                
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <span>Total reviews: ({{ seeker.reviews.length }})</span>
                                      </div>
                                      <div class="job-type-apply">
                                            <div class="job-type">
                                                <span class="light-blue">{{ seeker.designation ?? "No Designation" }}</span>
                                                <button class="primry-btn-2 p-1 px-3" @click="openForm(seeker)">Send Sms</button>
                                                <button class="primry-btn-2 p-1 px-3" @click="openMailForm(seeker)">Send Email</button>
                                            </div>
                                            
                                            <div class="apply-btn">
                                                <div class="msg-btn">
                                                    <!-- <button class="primry-btn-2 p-1 px-3 mb-2 me-0" @click="openMailForm(seeker)">Send Email</button> -->
                                                    <router-link :to="'job-seeker/' + seeker.id">
                                                        <span><img src="assets/images/icon/apply-ellipse.svg" alt=""></span>
                                                        Detail Job Seeker
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                  </div>
                              </div>
                              <div class="col-lg-12 d-flex justify-content-center">
                                <Paginator v-model:first="currentPage" :rows="rowsPerPage" :totalRecords="totalPages" @page="handlePageChange">
                                </Paginator>
                            </div>
                          </div>
                          
                          <div v-if="showForm" class="row">
                                <div class="col-12">
                                    <div class="form-wrapper">
                                        <div class="section-title text-center">
                                            <h4>Message</h4>
                                            <div class="dash"></div>
                                        </div>
                                        <form class="profile-form">
                                            <div class="section-title2">
                                                <h5>To: {{ smsForm.full_name }} Phone: {{ smsForm.last_four ?? "Not exists" }}</h5>                                            </div>
                                            <div class="row" >
                                                <div class="col-md-12">
                                                    <div class="form-inner mb-25">
                                                        <label for="message">Message *</label>
                                                            <textarea v-model="smsForm.message" id="message" placeholder="Message" :disabled="smsForm.last_four == null"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-inner">
                                                        <button v-if="!isLoading"
                                                            class="primry-btn-2 lg-btn w-unset" type="button" @click="sendMessage" :disabled="smsForm.last_four == null">Send SMS</button>
                                                        <button v-if="isLoading" class="primry-btn-2 lg-btn w-unset" type="button">
                                                            <span class="me-3 fs-6 text-white">Processing...</span>
                                                            <i class="fa fa-spinner fa-spin text-white ms-3"
                                                                style="font-size:24px">
                                                            </i>
                                                        </button>

                                                        <button v-if="!isLoading"
                                                            class="primry-btn-2 lg-btn w-unset float-end" type="button" @click="closeForm">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                          <div v-if="mailFormShow" class="row">
                                <div class="col-12">
                                    <div class="form-wrapper">
                                        <div class="section-title text-center">
                                            <h4>Send Email </h4>
                                            <div class="dash"></div>
                                        </div>
                                        <form class="profile-form">
                                            <div class="section-title2">
                                                <h5>To: {{ mailForm.full_name }}</h5>
                                            </div>
                                            <div class="row" >
                                                <div class="col-md-12">
                                                    <div class="form-inner mb-25">
                                                        <label for="subject">Subject *</label>
                                                        <div class="input-area">
                                                            <img src="/assets/images/icon/company-2.svg" alt="">
                                                            <input v-model="mailForm.subject" type="text" id="subject"
                                                                name="subject">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-inner mb-25">
                                                        <label for="mailBody">Message Body*</label>
                                                            <textarea v-model="mailForm.body" id="mailBody" placeholder="Write here..."></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-inner">
                                                        <button v-if="!isLoading"
                                                            class="primry-btn-2 lg-btn w-unset" type="button" @click="sendEmail">Send Mail</button>
                                                        <button v-else class="primry-btn-2 lg-btn w-unset" type="button">
                                                            <span class="me-3 fs-6 text-white">Processing...</span>
                                                            <i class="fa fa-spinner fa-spin text-white ms-3"
                                                                style="font-size:24px">
                                                            </i>
                                                        </button>
                                                        <button v-if="!isLoading"
                                                            class="primry-btn-2 lg-btn w-unset float-end" type="button" @click="closeMailForm">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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
  import ProgressSpinner from 'primevue/progressspinner';
  import Paginator from 'primevue/paginator';
  import { mapGetters } from 'vuex';
  
  @Options({
    components: {
        ProgressSpinner,
        Paginator  
    },
    data(){
      return {
          jobs: [],
          smsForm: {
            user_id: '',
            subject: '',
            message: '',
            receiver_number: '',
            full_name: '',
            last_four: null,
          },

          mailForm: {
            user_id: '',
            subject: '',
            body: '',
            full_name: '',
          },
        showForm: false,
        mailFormShow: false,
        isLoading: false,
        jobSeekers: [],
        currentPage : 1,
        totalPages : 0,
        rowsPerPage : 10,
        pageLoading: false
      }
    },
    methods: {
      getJobDetail(job_key:any, job_slug:any) {    
        return {
          path: '/job-details/'+job_key+'/'+job_slug
          // path: '/job-details/${job_key}/${job_slug}'
        };
      },

        async handlePageChange(event:any) {
            
            this.pageLoading = true; // Show loader
            const pageId = event.page;
            try {
                await this.$store.dispatch('searchSeeker', {'pageId': pageId});
                window.setTimeout(() => {
                    this.pageLoading = false; // Show loader
                }, 1000);
            } catch (error) {
                console.log(error);
                
            }

        },

        openForm(seeker: any) {
            this.smsForm.user_id = seeker.id;
            this.smsForm.full_name = seeker.name;
            this.smsForm.receiver_number = seeker.phone;
            this.smsForm.last_four = seeker.phone?.toString().slice(-4) ?? null;
            this.showForm = true;
            window.scrollTo(0, 0);
        },
        closeForm() {
            this.smsForm.user_id = '';
            this.smsForm.subject = '';
            this.smsForm.message = '';
            this.smsForm.receiver_number = '';
            this.smsForm.full_name = '';
            this.showForm = false;
        },
        openMailForm(seeker: any) {
            this.mailForm.user_id = seeker.id;
            this.mailForm.full_name = seeker.name;
            this.mailFormShow = true;
            window.scrollTo(0, 0);
        },
        closeMailForm() {
            this.mailForm.user_id = '';
            this.mailForm.subject = '';
            this.mailForm.body = '';
            this.mailForm.full_name = '';
            this.mailFormShow = false;
        },
        async sendMessage() {
            this.isLoading = true;
            await this.$store.dispatch('sendMessage', this.smsForm);
            window.setTimeout(() => {
                this.isLoading = false;
                this.closeForm;
            }, 3000);
        },

        async sendEmail() {
            this.isLoading = true;
            await this.$store.dispatch('sendEmail', this.mailForm);
            window.setTimeout(() => {
                this.isLoading = false;
                this.closeMailForm;
            }, 6000);
        },
    },  
    computed: {
      ...mapGetters([
          'searchResult',
          'searchSeeker',
          'loggedIn'
      ]),
  
    },
    mounted() {
      let query = this.$route.query
      console.log(query);
      
      this.$store.dispatch('searchJobs', query);
      this.$store.dispatch('searchSeeker', '');
      
    },
    watch: {
      searchResult(){
          console.log(this.searchResult);
          this.jobs = this.searchResult
      },
      searchSeeker(){
        this.jobSeekers = this.searchSeeker.Listing,
        this.totalPages = this.searchSeeker.count;
      },
    }
  })
  export default class JobSeekerList extends Vue {}
  </script>
  