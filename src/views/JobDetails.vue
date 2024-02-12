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
                                <li class="breadcrumb-item active" aria-current="page">Job Details</li>
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
            <!-- {{ current_job }} -->
            <div class="row g-lg-4 gy-5">
                <div class="col-lg-8">
                    <div class="job-details-content">
                        <div class="job-list-content">
                            <div class="company-area">
                                <div class="logo">
                                    <img width="200" v-if="current_job.company_logo"  :src="current_job.company_logo" />
                                    <img v-else src="/assets/images/bg/company-logo/company-01.png" alt="">
                                </div>
                                <div class="company-details">
                                    <div class="name-location">
                                        <h5><a href="#">{{ current_job.job_title }}</a></h5>
                                        <!-- {{ current_job.id }} -->
                                        <p>{{current_job.working_mode}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="job-discription">
                                <ul class="one">
                                    <li>
                                        <img src="/assets/images/icon/map-2.svg" alt="">
                                        <p><span class="title">Location:</span> {{ current_job.location }}</p>
                                    </li>
                                    <li>
                                        <img src="/assets/images/icon/category-2.svg" alt="">
                                        <p><span class="title">Category:</span> {{ current_job.category }}</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <img src="/assets/images/icon/company-2.svg" alt="">
                                        <p><span class="title">Job Type:</span> {{ current_job.job_type }}</p>
                                    </li>
                                    <li>
                                        <img src="/assets/images/icon/salary-2.svg" alt="">
                                        <p><span class="title">Salary:</span> {{ current_job.salary_range }}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p><span>Job Description:</span>  {{ current_job.job_description }}</p>
                        <br>
                        <p><span>Job Responsibility:</span>  </p>
                        {{ current_job.job_responsibilities }}
                        <h6>Educational Requirements:</h6>
                        <ul>
                            <li>{{ current_job.qualification }}</li>
                        </ul>
                        <h6>Experiences:</h6>
                        <ul>
                            <li>{{ current_job.experience }} Years in this field.</li>
                        </ul>
                        <p><span>Main Duties:</span></p>
                        {{ current_job.job_responsibilities }}
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="job-details-sidebar mb-120">
                        <div class="save-apply-btn d-flex justify-content-end mb-50" id="user-applied-on-job">
                            <ul v-if="role == 2 && !user_current_job_applied">
                                <!-- <li><a class="save-btn" href="#">Save Job <span><i class="bi bi-bookmark-fill"></i></span></a></li> -->
                                <li>
                                    <!-- <router-link class="primry-btn-2 lg-btn" :to="{ name: 'job-apply', query: { job_id: current_job.id, company_id: current_job.company_id }}">Apply Position</router-link> -->
                                    <!-- <router-link class="primry-btn-2 lg-btn" to="#apply_job_continer">Apply Position</router-link> -->
                                    <button class="primry-btn-2 lg-btn" @click="applyBtn"  type="click">Apply Position</button>
                                    
                                </li>
                            </ul>
                            <ul v-if="user_current_job_applied">
                                <b>You already Appied for this job</b>
                            </ul>
                        </div>
                        <div class="job-summary-area mb-50">
                            <div class="job-summary-title">
                                <h6>Job Summary:</h6>
                            </div>
                            <ul>
                                <li><p><span class="title">Job Posted:</span> {{ current_job.posted_on }}</p></li>
                                <li><p><span class="title">Expiration:</span> {{ current_job.expiration }}</p></li>
                                <li><p><span class="title">Vacancy:</span> {{ current_job.vacancy }} Person.</p></li>
                                <li><p><span class="title">Experiences:</span> {{  current_job.experience  }} Years.</p></li>
                                <li><p><span class="title">Education:</span>{{ current_job.qualification }}</p></li>
                                <li><p><span class="title">Gender:</span> {{ current_job.gender }}</p></li>
                            </ul>
                        </div>
                        <div class="view-job-btn mb-30">
                            <a href="job-listing1.html"><img src="/assets/images/icon/company-2.svg" alt="">View All Jobs In This Company</a>
                        </div>
                        <div class="job-share-area mb-50">
                            <h6>Job Link Share:</h6>
                            <ul>
                                <li><span class=""><i @click="copyLink" class='bx bx-link' ></i></span></li>
                                <!-- <button @click="shareOnFacebook">Share on Facebook</button> -->
                                <li><a href="#" @click="shareOnFacebook"><i class='bx bxl-facebook'></i></a></li>
                                <li><a href="#" @click="shareOnTwitter"><i class='bx bxl-twitter' ></i></a></li>
                                <li><a href="#" @click="shareOnLinkedIn"><i class='bx bxl-linkedin' ></i></a></li>
                                <li><a href="#" @click="shareOnInstagram"><i class='bx bxl-instagram-alt' ></i></a></li>
                            </ul>
                        </div>
                        <!-- Commented as per meeting in march -->
                        <!-- <div class="email-area mb-50">
                            <div class="title">
                                <h6><img src="assets/images/icon/email-2.svg" alt="">Email Now</h6>
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
                                    <a href="assets/images/bg/company-gallery-big-01.png" data-fancybox="gallery" class="gallery2-img">
                                        <div class="gallery-wrap">
                                            <img class="img-fluid" src="assets/images/bg/company-gallery-sm-01.png" alt="">
                                            <div class="overlay d-flex align-items-center justify-content-center">
                                                <div class="items-content text-center">
                                                    <img src="assets/images/icon/eye.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="assets/images/bg/company-gallery-big-02.png" data-fancybox="gallery" class="gallery2-img">
                                        <div class="gallery-wrap">
                                            <img class="img-fluid" src="assets/images/bg/company-gallery-sm-02.png" alt="">
                                            <div class="overlay d-flex align-items-center justify-content-center">
                                                <div class="items-content text-center">
                                                    <img src="assets/images/icon/eye.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="assets/images/bg/company-gallery-big-03.png" data-fancybox="gallery" class="gallery2-img">
                                        <div class="gallery-wrap">
                                            <img class="img-fluid" src="assets/images/bg/company-gallery-sm-03.png" alt="">
                                            <div class="overlay d-flex align-items-center justify-content-center">
                                                <div class="items-content text-center">
                                                    <img src="assets/images/icon/eye.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="assets/images/bg/company-gallery-big-04.png" data-fancybox="gallery" class="gallery2-img">
                                        <div class="gallery-wrap">
                                            <img class="img-fluid" src="assets/images/bg/company-gallery-sm-04.png" alt="">
                                            <div class="overlay d-flex align-items-center justify-content-center">
                                                <div class="items-content text-center">
                                                    <img src="assets/images/icon/eye.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="assets/images/bg/company-gallery-big-05.png" data-fancybox="gallery" class="gallery2-img">
                                        <div class="gallery-wrap">
                                            <img class="img-fluid" src="assets/images/bg/company-gallery-sm-05.png" alt="">
                                            <div class="overlay d-flex align-items-center justify-content-center">
                                                <div class="items-content text-center">
                                                    <img src="assets/images/icon/eye.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div v-if="role == 2 && !user_current_job_applied" class="col-lg-12" id="user-applied-on-job-form">
                    <div class="related-jobs" id="scrollTarget">
                        <div class="section-title mb-40">
                            <h3>Apply For {{ current_job.job_title }}</h3>
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
                                                    <button @click="applyForPosition"  class="primry-btn-2 lg-btn w-unset" type="button">Submit Application</button>
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
                <div class="col-lg-12">
                    <div class="related-jobs">
                        <div class="section-title mb-40">
                            <h3>Related Jobs:</h3>
                            <div class="swiper-btn1 d-flex align-items-center">
                                <div class="left-btn prev-4">
                                    <img src="/assets/images/icon/explore-elliose.svg" alt="">
                                </div>
                                <div class="right-btn next-4">
                                    <img src="/assets/images/icon/explore-elliose.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="swiper related-job-slider">
                            <div class="swiper-wrapper">
                                <div v-for="job in jobs" :key="job.id" class="swiper-slide">
                                    <div class="feature-card">
                                        <div class="company-area">
                                            <div class="logo">
                                                <img src="/assets/images/bg/company-logo/company-06.png" alt="">
                                            </div>
                                            <div class="company-details">
                                                <div class="name-location">
                                                    <h5><a href="job-details.html">{{ job.job_title }}</a></h5>
                                                    <p>{{job.working_mode}}</p>
                                                </div>
                                                <!-- <div class="bookmark">
                                                    <i class="bi bi-bookmark"></i>
                                                </div> -->
                                            </div>
                                        </div>
                                        <div class="job-discription">
                                            <ul>
                                                <li>
                                                    <img src="/assets/images/icon/arrow2.svg" alt="">
                                                    <p><span class="title">Salary:</span> {{job.salary_range}} / <span class="time">{{ job.payment_mode }}</span></p>
                                                </li>
                                                <li>
                                                    <img src="/assets/images/icon/arrow2.svg" alt="">
                                                    <p><span class="title">Vacancy:</span> <span> {{ job.vacancy }} Person ({{job.gender}})</span></p>
                                                </li>
                                                <li>
                                                    <img src="/assets/images/icon/arrow2.svg" alt="">
                                                    <p><span class="title">Deadline:</span> <span> {{ job.expiration }}</span></p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="job-type-apply">
                                            <div class="apply-btn">
                                                <router-link :to="{ name: 'job-details', query: {job_id: job.id} }" ><span><img src="/assets/images/icon/apply-ellipse.svg" alt=""></span>Apply Now</router-link>
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
import JobDetail from '../views/JobDetails.vue'; // @ is an alias to /src
import { mapState } from 'vuex';
import { useRoute } from 'vue-router'

@Options({
  components: {
    JobDetail,
  },
  data(){
    return{
        job_id: null,
        current_job: [],
        jobs: [],
        user: null,
        role: null,
        application: {
            salary: null,
            experience: null,
            user_id: null,
            company_id: null,
            status_id: 1,
            job_id: null,
            cv: null
        },
        user_current_job_applied : '',
        currentUri: '',
        
        
    }
  },
  computed: {
      ...mapState([
        'jobDetail',
        'relatedJobs',
        'currentUser',
        'candidateAppliedOnJob'
      ]),

  },
  mounted(){
    const route = useRoute()
    this.$store.dispatch('getJobDetail', route.params.job_key)
    this.$store.dispatch('relatedJobs', '')
    this.user = JSON.parse(this.currentUser)[0]
    this.role = this.user.roles[0].id
    this.currentUri = window.location.href;
    console.log(this.user.id);
    this.application.user_id = JSON.parse(this.currentUser)[0].id
    const applied_job = {
        user_id: this.user.id,
        job_id: this.current_job.id,
    };
    this.$store.dispatch('getCandidateAppliedOnJob', applied_job)

    let Script = document.createElement("script");
      Script.setAttribute("src", "/assets/js/main.js");
      document.head.appendChild(Script);
  },
  methods: {
    shareOnFacebook() {
      // URL of your web app
      const urlToShare = encodeURIComponent(this.currentUri);

      // Create a Facebook share link
      const shareLink = 'https://www.facebook.com/sharer/sharer.php?u=' + urlToShare;

      // Open the Facebook Share Dialog in a new window
      window.open(shareLink, 'Share on Facebook', 'width=600,height=400');
    },

    copyLink(){
        // const urlToShare = encodeURIComponent(this.currentUri);
        // var url = "https://example.com";
        // Get the URL you want to copy
        const url: string = this.currentUri;

        // Decode the URL
        const decodedUrl = decodeURIComponent(url);

        // Create a temporary input element
        const input = document.createElement('input');
        input.setAttribute('value', decodedUrl);
        document.body.appendChild(input);
        input.select();

        // Copy the URL to the clipboard
        document.execCommand('copy');

        // Remove the temporary input element
        document.body.removeChild(input);

        // Log success or failure
        console.log('URL copied to clipboard successfully: ' + decodedUrl);

    },

    shareOnTwitter() {
      this.openShareDialog('https://twitter.com/intent/tweet?url=');
    },
    shareOnLinkedIn() {
      this.openShareDialog('https://www.linkedin.com/shareArticle?url=');
    },
    shareOnInstagram() {
      // Instagram doesn't provide a direct URL sharing API like Facebook, Twitter, and LinkedIn
      // You may consider using Instagram's official Embedding API for sharing images or other content
      // https://developers.facebook.com/docs/instagram/oembed/
      alert('Instagram sharing is not supported directly. Consider using Instagram Embedding API.');
    },
    openShareDialog() {
      // URL of your web app
      const urlToShare = encodeURIComponent('https://your-web-app-url.com');

      // Create a share link
      const shareLink = this.currentUri + urlToShare;

      // Open the Share Dialog in a new window
      window.open(shareLink, 'Share', 'width=600,height=400');
    },


    onFileSelected(event: any){
        this.application.cv = event.target.files[0];
    },
    applyForPosition(){
        console.log(this.application);
        this.$store.dispatch('applyForPosition', this.application)
    },
    applyBtn()
        {
            const element = window.document.getElementById('scrollTarget');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
  },
  watch: {
    
    jobDetail(){
          this.current_job = this.jobDetail
          this.application.job_id = this.current_job.id
          this.application.company_id = this.current_job.company_id
      },
    relatedJobs(){
          this.jobs = this.relatedJobs
      },
      candidateAppliedOnJob(){
          this.user_current_job_applied = this.candidateAppliedOnJob.applied_status
      },  

     
  }
})
export default class JobDetails extends Vue {}
</script>
