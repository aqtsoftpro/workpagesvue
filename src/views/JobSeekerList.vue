<template>
    <div>
          <!-- ========== Inner Banner Start============= -->
          <div class="inner-banner">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="banner-content text-center">
                          <h1>Job Seeker Listing</h1>
                          <span></span>
                          <nav aria-label="breadcrumb">
                              <ol class="breadcrumb">
                                  <li class="breadcrumb-item"><router-link to="index.html">Home</router-link></li>
                                  <li class="breadcrumb-item active" aria-current="page">Job Seeker Listing</li>
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
                          <div v-if="!showForm" class="row ">
                              <div v-for="seeker in searchSeeker" :key="seeker.id" class="col-lg-12 mb-30">
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
                                                <button class="primry-btn-2 p-1 px-3" @click="openForm(seeker)">Create Sms</button>
                                            </div>

                                            <div class="apply-btn">
                                                <router-link :to="'job-seeker/' + seeker.id">
                                                    <span><img src="assets/images/icon/apply-ellipse.svg" alt=""></span>
                                                    Detail Job Seeker
                                                </router-link>
                                            </div>
                                        </div>
                                  </div>
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
                                                <h5>To: {{ smsForm.full_name }}</h5>
                                            </div>
                                            <div class="row" >
                                                <div class="col-md-12">
                                                    <div class="form-inner mb-25">
                                                        <label for="subject">Subject *</label>
                                                        <div class="input-area">
                                                            <img src="/assets/images/icon/company-2.svg" alt="">
                                                            <input v-model="smsForm.subject" type="text" id="subject"
                                                                name="subject">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-inner mb-25">
                                                        <label for="message">Message *</label>
                                                            <textarea v-model="smsForm.message" id="message" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-inner">
                                                        <button v-if="!isLoading"
                                                            class="primry-btn-2 lg-btn w-unset" type="button" @click="sendMessage">Send SMS</button>
                                                        <button v-else class="primry-btn-2 lg-btn w-unset" type="button">
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
  
  @Options({
    data(){
      return {
          jobs: [],
          smsForm: {
            user_id: '',
            subject: '',
            message: '',
            receiver_number: '',
            full_name: '',
        },
        showForm: false,
        isLoading: false,
      }
    },
    methods: {
      getJobDetail(job_key:any, job_slug:any) {    
        return {
          path: '/job-details/'+job_key+'/'+job_slug
          // path: '/job-details/${job_key}/${job_slug}'
        };
      },
  
    //   parsedExpirationDate(expirationDate:any) {
    //     // Split the expiration date string into month, day, and year
    //     const [month, day, year] = expirationDate.split(' ');
    //     // Type annotation for monthMap
    //     const monthMap: { [key: string]: number } = {
    //       'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3,
    //       'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7,
    //       'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    //     };
  
    //     // Create and return a Date object using the parsed month, day, and year
    //     return new Date(year, monthMap[month], parseInt(day, 10));
    //   },
      
    //   isJobExpired(expirationDate: any) {
    //     const today = new Date();
    //     const expiration = this.parsedExpirationDate(expirationDate);
    //     return expiration < today; // Returns true if the job is expired
    //   },

      openForm(seeker: any) {
            this.smsForm.user_id = seeker.id;
            this.smsForm.full_name = seeker.name;
            this.smsForm.receiver_number = seeker.phone;
            this.showForm = true;
        },
        closeForm() {
            this.smsForm.user_id = '';
            this.smsForm.subject = '';
            this.smsForm.message = '';
            this.smsForm.receiver_number = '';
            this.smsForm.full_name = '';
            this.showForm = false;
        },
        async sendMessage() {
            this.isLoading = true;
            await this.$store.dispatch('sendMessage', this.smsForm);
            window.setTimeout(() => {
                this.isLoading = false;
                this.closeForm;
            }, 3000);
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
      this.$store.dispatch('searchJobs', query);
      this.$store.dispatch('searchSeeker');
      
    },
    watch: {
      searchResult(){
          console.log(this.searchResult);
          this.jobs = this.searchResult
      },
    }
  })
  export default class JobSeekerList extends Vue {}
  </script>
  