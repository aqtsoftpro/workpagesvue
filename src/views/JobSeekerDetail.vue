<template>
    <div>
          <!-- ========== Inner Banner Start============= -->
          <div class="inner-banner">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="banner-content text-center">
                          <h1>Jobseeker Details</h1>
                          <span></span>
                          <nav aria-label="breadcrumb">
                              <ol class="breadcrumb">
                                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                  <li class="breadcrumb-item active" aria-current="page">Job Seeker Details</li>
                              </ol>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- ========== Inner Banner end============= -->
      <!-- ========== Job Details Start============= -->
      <div class="job-details-pages pt-120 mb-120">
        <!-- {{ jobSeekerDetail }} -->
          <div class="container" v-if="jobSeekerDetail">
              <!-- {{ job_seeker_detail }} -->
              <div class="row g-lg-4 gy-5">
                  <div class="col-lg-8">
                      <div class="job-details-content">
                          <div class="job-list-content">
                              <div class="company-area">
                                  <div class="logo">
                                      <img width="200" v-if="jobSeekerDetail.photo"  :src="jobSeekerDetail.photo" />
                                      <!-- <img v-else src="/assets/images/bg/company-logo/company-01.png" alt=""> -->
                                  </div>
                                  <div class="company-details">
                                      <div class="name-location">
                                          <h5><a href="#">{{ jobSeekerDetail.name }}</a></h5>
                                          <!-- {{ jobSeekerDetail.id }} -->
                                          <p>{{jobSeekerDetail.description}}</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="job-discription">
                                  <ul class="one">
                                      <li>
                                          <img src="/assets/images/icon/map-2.svg" alt="">
                                          <p><span class="title">Location:</span> {{ jobSeekerDetail.location?.name }}</p>
                                      </li>
                                      <li>
                                          <img src="/assets/images/icon/category-2.svg" alt="">
                                          <p><span class="title">Designation:</span> {{ jobSeekerDetail.designation?.name }}</p>
                                      </li>
                                  </ul>
                                  <ul>
                                      <li>
                                          <img src="/assets/images/icon/company-2.svg" alt="">
                                          <p><span class="title">Qualification:</span> {{ jobSeekerDetail.qualification?.name }}</p>
                                      </li>
                                      <li>
                                          <!-- <img src="/assets/images/icon/salary-2.svg" alt=""> -->
                                          <img src="/assets/images/icon/map-2.svg" alt="">
                                          <p><span class="title">Current Job Location:</span> {{ jobSeekerDetail.job_location?.name }}</p>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="card">
                        <div class="card-body">
                            <div class="card-title">
                                <h4>Job Seeker Detail:</h4>
                            </div>
                            <div class="row">
                                <div v-for="document in jobSeekerDetail.documents" class="col-md-6">
                                    <span class="fw-bold">
                                        {{ document.title }}
                                    </span>
                                    <br>
                                    <span>
                                        {{ document.detail }}
                                    </span>
                                    <br>
                                    <a :href="document.file_path" target="_blank" download > 
                                        <img src="/assets/images/icon/down.svg" alt="" width="30">
                                    </a>
                                </div>
                            </div>
                        </div>

                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="job-details-sidebar mb-120">
                          <div class="job-summary-area mb-50" style="height: 558px !important;">
                              <div class="job-summary-title">
                                  <h6>Job Seeker Summary:</h6>
                              </div>
                              <!-- <ul>
                                  <li><p><span class="title">Job Posted:</span> {{ job_seeker_detail.posted_on }}</p></li>
                                  <li><p><span class="title">Expiration:</span> {{ job_seeker_detail.expiration }}</p></li>
                                  <li><p><span class="title">Vacancy:</span> {{ job_seeker_detail.vacancy }} Person.</p></li>
                                  <li><p><span class="title">Experiences:</span> {{  job_seeker_detail.experience  }} Years.</p></li>
                                  <li><p><span class="title">Education:</span>{{ job_seeker_detail.qualification }}</p></li>
                                  <li><p><span class="title">Gender:</span> {{ job_seeker_detail.gender }}</p></li>
                              </ul> -->
                          </div>
                          <div class="location-area">
                              <h6>Get Location:</h6>
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564763018799!2d90.36349791490355!3d23.834071191491947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1674212581590!5m2!1sen!2sbd" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div v-if="role == 'Job Seeker' && !user_job_seeker_detail_applied" class="col-lg-12" id="user-applied-on-job-form">
                      <div class="related-jobs" id="scrollTarget">
                          <div class="section-title mb-40">
                              <h3>Apply For {{ job_seeker_detail.job_title }}</h3>
                          </div>
                      </div>
  
                      <div class="row g-lg-4 gy-5">
                          <div class="col-lg-8">
                              <div class="my-profile-inner">
                                  
                                  <div class="form-wrapper mb-60">
                                      <form class="profile-form">
                                   
                                          <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-inner mb-25">
                                                      <label>Upload your resume*</label>
                                                      <div class="input-area">
                                                          <img src="/assets/images/icon/user-2.svg" alt="">
                                                          <input v-on:change="onFileSelected" type="file" name="cv" />
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-inner mb-25">
                                                      <label>Your Current Designation</label>
                                                      <div class="input-area">
                                                          <img src="/assets/images/icon/clock-2.svg " alt="">
                                                          <input type="text" v-model="application.designation" placeholder="What is your current designation" />
                                                      </div>
                                                  </div>
                                              </div>                                    
                                              <div class="col-md-6">
                                                  <div class="form-inner mb-25">
                                                      <label>Your Exprience</label>
                                                      <div class="input-area">
                                                          <img src="/assets/images/icon/clock-2.svg " alt="">
                                                          <input type="text" v-model="application.experience" placeholder="How many years of experince do you have ?" />
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-inner mb-25">
                                                      <label>Expected Salary</label>
                                                      <div class="input-area">
                                                          <img src="/assets/images/icon/clock-2.svg " alt="">
                                                          <input type="text" v-model="application.salary" placeholder="What is your expected salary ?" />
                                                      </div>
                                                  </div>
                                              </div>                                    
  
                                              <div class="col-md-12">
                                                  <div class="form-inner">
                                                      <button v-if="!isLoading" @click="applyForPosition"  class="primry-btn-2 lg-btn w-unset" type="button">Submit Application</button>
                                                      <button v-else class="primry-btn-2 lg-btn w-unset" type="button">
                                                          <span class="me-3 fs-6 text-white">Processing...</span>
                                                          <i class="fa fa-spinner fa-spin text-white ms-3" style="font-size:24px">
                                                          </i>
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                      </form>
                                  </div>      
                              </div> 
                          </div>
                      </div>
                      <hr>
                  </div>
              </div>
              <div class="row">
                <div class="row mt-5">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h4>Reviews ({{ jobSeekerDetail.reviews?.length }}):</h4>
                        </div>
                        <div class="be-comment-block">
                            <div class="be-comment" v-for="item in jobSeekerDetail.reviews">
                                <div class="be-img-comment">
                                    <a href="blog-detail-2.html">
                                        <!-- <img v-if="checkReviewImageExists(item.author_image)" :src="item.author_image"
                                            alt="Image" class="be-ava-comment"> -->
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""
                                            class="be-ava-comment">
                                    </a>
                                </div>
                                <div class="be-comment-content">

                                    <span class="be-comment-name">
                                        <a href="blog-detail-2.html">{{ item.author_name }}</a>
                                    </span>
                                    <span class="be-comment-time">
                                        <i class="fa fa-clock-o"></i>
                                        May 27, 2015 at 3:14am
                                        {{ item.reviewed_on }}
                                    </span>

                                    <p class="be-comment-text">
                                        {{ item.review }}
                                    </p>
                                </div>
                            </div>
                            <form class="form-block">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="form-group mb-3">
                                            <textarea class="form-input" v-model="reviewForm.review"
                                                placeholder="Your Review"></textarea>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="number" class="form-input" max="5" min="0" v-model="reviewForm.rating" >
                                        </div>
                                    </div>
                                    <div class="col">
                                        <button @click="createReview" class="primry-btn-2 lg-btn w-unset" type="button">Submit
                                        Review</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
      <!-- ========== Job Details End============= -->
    </div>  
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import { mapState } from 'vuex';
  import { useRoute } from 'vue-router'
  
  @Options({
    data(){
      return{
          job_id: null,
          job_seeker_detail: [],
          reviewForm: {
                company_id: null,
                user_id: '',
                review: null,
                rating: 5,
          }, 
          permission: null,
      }
    },
    computed: {
        ...mapState([
            'jobSeekerDetail',
            'currentUser',
            'loggedIn'
        ]),
  
    },
    mounted(){
        const route = useRoute()
        this.$store.dispatch('getUserDetail', route.params.id)
        if (this.currentUser) {
            this.user = JSON.parse(this.currentUser)[0]
            this.role = this.user.roles[0].id
            this.reviewForm.user_id = route.params.id
            this.permission = this.user.sub_accesses[0] ?? null;
            console.log(this.user.id);
        }
    },

    methods: {
        isPDF(url: any) {
            if (!url) return false; // Return false if URL is undefined or empty
            return url.toLowerCase().endsWith('.pdf');
        },
        isImage(url:any) {
            if (!url) return false; // Return false if URL is undefined or empty
            const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
            const ext = url.toLowerCase().slice(-4); // Consider the last 4 characters as the extension
            return imageExtensions.includes(ext);
        },

        async createReview() {
            console.log(this.reviewForm);
            try {
                await this.$store.dispatch('createUserReview', this.reviewForm);
                window.setTimeout(() => {
                    this.reviewForm.review = '';
                    this.reviewForm.rating = 5;
                }, 1000);
            } catch (error) {
                console.log(error);
                
            }
        },
    },


  })
  export default class jobSeekerDetail extends Vue {}
  </script>
  