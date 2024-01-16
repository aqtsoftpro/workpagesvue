<template>
  <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content text-center">
                        <h1>Job Details</h1>
                        <span></span>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Apply Position</li>
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
        <div class="container" v-if="current_job">
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
                                                <img src="/templates/assets/images/icon/user-2.svg" alt="">
                                                <input v-on:change="onFileSelected" type="file" name="cv" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Your Current Designation</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/clock-2.svg " alt="">
                                                <input type="text" v-model="application.designation" placeholder="What is your current designation" />
                                            </div>
                                        </div>
                                    </div>                                    
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Your Exprience</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/clock-2.svg " alt="">
                                                <input type="text" v-model="application.experience" placeholder="How many years of experince do you have ?" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-inner mb-25">
                                            <label>Expected Salary</label>
                                            <div class="input-area">
                                                <img src="/templates/assets/images/icon/clock-2.svg " alt="">
                                                <input type="text" v-model="application.salary" placeholder="What is your expected salary ?" />
                                            </div>
                                        </div>
                                    </div>                                    

                                    <div class="col-md-12">
                                        <div class="form-inner">
                                            <button @click="applyForPosition"  class="primry-btn-2 lg-btn w-unset" type="button">Submit Application</button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>      
                    </div>  

                </div>
                <div class="col-lg-4">              
                    <div class="job-details-sidebar mb-120">
                        <!-- <div class="save-apply-btn d-flex justify-content-end mb-50">
                            <ul>
                                <li><a class="save-btn" href="#">Save Job <span><i class="bi bi-bookmark-fill"></i></span></a></li>
                                <li><a class="primry-btn-2 lg-btn" href="#">Apply Position</a></li>
                            </ul>
                        </div> -->
                        <div class="job-summary-area mb-50">
                            <div class="logo">
                                    <img width="200" :src="current_job.company_logo" alt="">
                                </div>
                                <div class="company-details">
                                    <div class="name-location">
                                        <h5><a href="#">{{ current_job.job_title }}</a></h5>
                                        <p>{{current_job.working_mode}}</p>
                                    </div>
                                </div>                                
                            <div class="job-summary-title">
                                <h6>Job Summary:</h6>
                            </div>
                            <ul>
                                <li><p><span class="title">Location:</span> {{ current_job.location }}</p></li>
                                <li><p><span class="title">Category:</span> {{ current_job.category }}</p></li>
                                <li><p><span class="title">Job Type:</span> {{ current_job.job_type }}</p></li>
                                <li><p><span class="title">Salary:</span> {{ current_job.salary_range }}</p></li>
                                
                                <li><p><span class="title">Job Posted:</span> {{ current_job.posted_on }}</p></li>
                                <li><p><span class="title">Expiration:</span> {{ current_job.expiration }}</p></li>
                                <li><p><span class="title">Vacancy:</span> {{ current_job.vacancy }} Person.</p></li>
                                <li><p><span class="title">Experiences:</span> {{  current_job.exprience  }} Years.</p></li>
                                <li><p><span class="title">Education:</span>{{ current_job.qualification }}</p></li>
                                <li><p><span class="title">Gender:</span> {{ current_job.gender }}</p></li>
                            </ul>
                        </div>
                        <div class="view-job-btn mb-30">
                            <a href="job-listing1.html"><img src="templates/assets/images/icon/company-2.svg" alt="">View All Jobs In This Company</a>
                        </div>
                        <div class="job-share-area mb-50">
                            <h6>Job Link Share:</h6>
                            <ul>
                                <li><a href="#"><i class='bx bx-link' ></i></a></li>
                                <li><a href="https://www.facebook.com/"><i class='bx bxl-facebook'></i></a></li>
                                <li><a href="https://twitter.com/"><i class='bx bxl-twitter' ></i></a></li>
                                <li><a href="https://www.linkedin.com/"><i class='bx bxl-linkedin' ></i></a></li>
                                <li><a href="https://www.instagram.com/"><i class='bx bxl-instagram-alt' ></i></a></li>
                            </ul>
                        </div>
                        <!-- Commented as per meeting in march -->
                        <!-- <div class="email-area mb-50">
                            <div class="title">
                                <h6><img src="templates/assets/images/icon/email-2.svg" alt="">Email Now</h6>
                            </div>
                            <p>Send your resume at <a href="mailto:info@example.com">info@example.com</a></p>
                        </div>
                        -->
                        <div class="location-area">
                            <h6>Get Location:</h6>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564763018799!2d90.36349791490355!3d23.834071191491947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1674212581590!5m2!1sen!2sbd" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <!-- Commented as per meeting in march -->
                <!-- <div class="col-lg-12 mb-120">
                    <div class="company-gallery">
                        <div class="title">
                            <h5>Company Gallery View</h5>
                        </div>
                        <div class="swiper company-gallery-slider" data-cursor="Drag">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <a href="templates/assets/images/bg/company-gallery-big-01.png" data-fancybox="gallery" class="gallery2-img">
                                        <div class="gallery-wrap">
                                            <img class="img-fluid" src="templates/assets/images/bg/company-gallery-sm-01.png" alt="">
                                            <div class="overlay d-flex align-items-center justify-content-center">
                                                <div class="items-content text-center">
                                                    <img src="templates/assets/images/icon/eye.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="templates/assets/images/bg/company-gallery-big-02.png" data-fancybox="gallery" class="gallery2-img">
                                        <div class="gallery-wrap">
                                            <img class="img-fluid" src="templates/assets/images/bg/company-gallery-sm-02.png" alt="">
                                            <div class="overlay d-flex align-items-center justify-content-center">
                                                <div class="items-content text-center">
                                                    <img src="templates/assets/images/icon/eye.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="templates/assets/images/bg/company-gallery-big-03.png" data-fancybox="gallery" class="gallery2-img">
                                        <div class="gallery-wrap">
                                            <img class="img-fluid" src="templates/assets/images/bg/company-gallery-sm-03.png" alt="">
                                            <div class="overlay d-flex align-items-center justify-content-center">
                                                <div class="items-content text-center">
                                                    <img src="templates/assets/images/icon/eye.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="templates/assets/images/bg/company-gallery-big-04.png" data-fancybox="gallery" class="gallery2-img">
                                        <div class="gallery-wrap">
                                            <img class="img-fluid" src="templates/assets/images/bg/company-gallery-sm-04.png" alt="">
                                            <div class="overlay d-flex align-items-center justify-content-center">
                                                <div class="items-content text-center">
                                                    <img src="templates/assets/images/icon/eye.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="templates/assets/images/bg/company-gallery-big-05.png" data-fancybox="gallery" class="gallery2-img">
                                        <div class="gallery-wrap">
                                            <img class="img-fluid" src="templates/assets/images/bg/company-gallery-sm-05.png" alt="">
                                            <div class="overlay d-flex align-items-center justify-content-center">
                                                <div class="items-content text-center">
                                                    <img src="templates/assets/images/icon/eye.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="col-lg-12">
                    <div class="related-jobs">
                        <div class="section-title mb-40">
                            <h3>Related Jobs:</h3>
                            <div class="swiper-btn1 d-flex align-items-center">
                                <div class="left-btn prev-4">
                                    <img src="templates/assets/images/icon/explore-elliose.svg" alt="">
                                </div>
                                <div class="right-btn next-4">
                                    <img src="templates/assets/images/icon/explore-elliose.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="swiper related-job-slider">
                            <div class="swiper-wrapper">
                                <div v-for="job in jobs" :key="job.id" class="swiper-slide">
                                    <div class="feature-card">
                                        <div class="company-area">
                                            <div class="logo">
                                                <img src="templates/assets/images/bg/company-logo/company-06.png" alt="">
                                            </div>
                                            <div class="company-details">
                                                <div class="name-location">
                                                    <h5><a href="job-details.html">{{ job.job_title }}</a></h5>
                                                    <p>{{job.working_mode}}</p>
                                                </div>
                                                <div class="bookmark">
                                                    <i class="bi bi-bookmark"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="job-discription">
                                            <ul>
                                                <li>
                                                    <img src="templates/assets/images/icon/arrow2.svg" alt="">
                                                    <p><span class="title">Salary:</span> {{job.salary_range}} / <span class="time">{{ job.payment_mode }}</span></p>
                                                </li>
                                                <li>
                                                    <img src="templates/assets/images/icon/arrow2.svg" alt="">
                                                    <p><span class="title">Vacancy:</span> <span> {{ job.vacancy }} Person ({{job.gender}})</span></p>
                                                </li>
                                                <li>
                                                    <img src="templates/assets/images/icon/arrow2.svg" alt="">
                                                    <p><span class="title">Deadline:</span> <span> {{ job.expiration }}</span></p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="job-type-apply">
                                            <div class="apply-btn">
                                                <router-link :to="{ name: 'job-details', query: {job_id: job.id} }" ><span><img src="templates/assets/images/icon/apply-ellipse.svg" alt=""></span>Apply Now</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
import JobDetail from './JobDetails.vue'; // @ is an alias to /src
import { mapState } from 'vuex';

@Options({
  components: {
    JobDetail,
  },
  data(){
    return{
        job_id: null,
        current_job: [],
        jobs: [],
        application: {
            salary: null,
            experience: null,
            user_id: null,
            company_id: null,
            status_id: 1,
            job_id: null,
            cv: null
        }
    }
  },
  computed: {
      ...mapState([
        'currentUser',
        'job',
        'relatedJobs'
      ])
  },
  mounted(){

    this.job_id = this.$route.query.job_id
    this.$store.dispatch('getJob', this.job_id)
    this.$store.dispatch('relatedJobs', '')

    this.application.user_id = JSON.parse(this.currentUser)[0].id
    this.application.company_id = this.$route.query.company_id
    this.application.job_id = this.$route.query.job_id
    
  },
  methods: {
    onFileSelected(event: any){
        this.application.cv = event.target.files[0];
    },
    applyForPosition(){
        console.log(this.application)
        this.$store.dispatch('applyForPosition', this.application)
    }
    
  },
  watch: {
      job(){
          this.current_job = this.job
      },
      relatedJobs(){
          this.jobs = this.relatedJobs
      }
  }
})
export default class JobDetails extends Vue {}
</script>
