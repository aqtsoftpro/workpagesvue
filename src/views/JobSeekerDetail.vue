<template>
    <div>
          <!-- ========== Inner Banner Start============= -->
          <div class="inner-banner" :style="bgImage">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="banner-content text-center">
                          <h1 :style="textColor">Jobseeker Details</h1>
                          <span></span>
                          <!-- <nav aria-label="breadcrumb">
                              <ol class="breadcrumb">
                                  <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                  <li class="breadcrumb-item active" aria-current="page">Job Seeker Details</li>
                              </ol>
                          </nav> -->
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- ========== Inner Banner end============= -->
      <!-- ========== Job Details Start============= -->
      <div class="job-details-pages pt-120 mb-120">
        <!-- {{ jobSeekerDetail }} -->
          <div class="container" v-if="jobSeekerData">
              <!-- {{ job_seeker_detail }} -->
              <div class="row g-lg-4 gy-5">
                  <div class="col-lg-8">
                      <div class="job-details-content">
                          <div class="job-list-content">
                              <div class="company-area">
                                  <div class="logo">
                                      <img width="200" v-if="jobSeekerData.photo"  :src="jobSeekerData.photo" />
                                      <!-- <img v-else src="/assets/images/bg/company-logo/company-01.png" alt=""> -->
                                  </div>
                                  <div class="company-details">
                                      <div class="name-location">
                                          <h5><a href="#">{{ jobSeekerData.name }}</a></h5>
                                          <!-- {{ jobSeekerData.id }} -->
                                          <!-- <p>{{jobSeekerData.description}}</p> -->
                                      </div>
                                  </div>
                              </div>
                              <div class="job-discription">
                                  <ul class="one">
                                      <li>
                                          <img src="/assets/images/icon/map-2.svg" alt="">
                                          <p><span class="title">Location:</span> {{ jobSeekerData.location?.name }}</p>
                                      </li>
                                      <!-- <li>
                                          <img src="/assets/images/icon/category-2.svg" alt="">
                                          <p><span class="title">Designation:</span> {{ jobSeekerData.designation?.name }}</p>
                                      </li> -->
                                  </ul>
                                  <ul>
                                      <li>
                                          <img src="/assets/images/icon/company-2.svg" alt="">
                                          <p><span class="title">Qualification:</span> {{ jobSeekerData.qualification?.name }}</p>
                                      </li>
                                      <!-- <li>
                                          <img src="/assets/images/icon/map-2.svg" alt="">
                                          <p><span class="title">Current Job Location:</span> {{ jobSeekerData.job_location?.name }}</p>
                                      </li> -->
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="card" style="height: 45em !important;">
                        <div class="card-body">
                            <div class="card-title">
                                <h4>Job Seeker Detail:</h4>
                            </div>
                            <!-- <div v-if="permission" class="row" style="height: 40em; overflow-y: scroll !important;">
                                <div v-for="document in jobSeekerData.documents" class="col-md-6 my-5">
                                    <div class="d-flex flex-column border border-1 bg-light p-3" style="border-radius: 8px !important;">
                                        <span class="fw-bold text-center">
                                            {{ document.title }}
                                        </span>
                                        <br>
                                        <span>
                                            {{ document.detail }}
                                        </span>
                                        <br>
                                        <div class="d-flex justify-content-end">
                                            <a v-if="document.title == 'Work Rights' && permission.allow_right == 'yes'" :href="document.file_path" target="_blank" download> 
                                                <img src="/assets/images/icon/down.svg" alt="" width="30">
                                            </a>
                                            <a v-if="document.title == 'Licence' && permission.allow_others == 'yes'" :href="document.file_path" target="_blank" download> 
                                                <img src="/assets/images/icon/down.svg" alt="" width="30">
                                            </a>
                                            <a v-if="document.title == 'Qualifications' && permission.allow_others == 'yes'" :href="document.file_path" target="_blank" download> 
                                                <img src="/assets/images/icon/down.svg" alt="" width="30">
                                            </a>
                                            <a v-if="document.title == 'Experience Letter' && permission.allow_others == 'yes'" :href="document.file_path" target="_blank" download> 
                                                <img src="/assets/images/icon/down.svg" alt="" width="30">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                            <div v-if="jobSeekerData.description !== null" class="row">
                                {{ jobSeekerData.description }}
                            </div>
                            <div v-else>
                                <h5>No Description Found!...</h5>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div v-if="jobSeekerData" class="job-details-sidebar mb-120">
                          <div class="job-summary-area mb-50" style="height: 558px !important;">
                              <div class="job-summary-title">
                                  <h6>Job Seeker Summary:</h6>
                              </div>
                              <ul v-if="jobSeekerData" >
                                  <li><p><span class="title">Name:</span> {{ jobSeekerData?.name }}</p></li>
                                  <li><p><span class="title">Email:</span> {{ jobSeekerData?.email }}</p></li>
                                  <li><p><span class="title">Phone:</span> {{ jobSeekerData?.phone }}</p></li>
                                  <li><p><span class="title">Gender:</span> {{ jobSeekerData?.gender }}</p></li>
                                  <li><p><span class="title">Designation:</span> {{ jobSeekerData?.designtion }}</p></li>
                                  <li><p><span class="title">Address:</span> {{ jobSeekerData?.address }}</p></li>
                              </ul>
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
                            <h4>Reviews ({{ jobSeekerData.reviews?.length }}):</h4>
                        </div>
                        <div class="be-comment-block">
                            <div class="be-comment" v-for="item in jobSeekerData.reviews">
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
          jobSeekerData: null,
          bgImage: '',
          textColor: '',
      }
    },
    computed: {
        ...mapState([
            'jobSeekerDetail',
            'currentUser',
            'loggedIn',
            'globalVariables'
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
        this.jobSeekerData = this.jobSeekerDetail
        this.$store.dispatch('getGlobalVariables');
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
            const route = useRoute()
            try {
                await this.$store.dispatch('createUserReview', this.reviewForm);
                window.setTimeout(() => {
                    this.reviewForm.review = '';
                    this.reviewForm.rating = 5;
                    this.$store.dispatch('getUserDetail', route.params.id)
                }, 1000);
            } catch (error) {
                console.log(error);
                
            }
        },
    },

    watch: {
        jobSeekerDetail() {
            this.jobSeekerData = this.jobSeekerDetail;
        },
        globalVariables() {
            this.bgImage = 'background-image: url('+this.globalVariables._banner_image+')';
            this.textColor = 'color: '+this.globalVariables._banner_text_color+' !important;';
        }
    }


  })
  export default class jobSeekerDetail extends Vue {}
  </script>
  