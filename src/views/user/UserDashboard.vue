<template>
    <div class="dashboard-area pt-120 mb-120">
        <div class="container">
            <div class="row g-lg-4 gy-5 mb-90">
                <!-- User Menu Here -->
                <user-menu />
                <div class="col-lg-9">
                    <div class="dashboard-inner">
                         <div class="author-area">
                            <div class="author-img">
                                <img v-if="imageExists" :src="user.photo">
                                <img v-else src="/templates/assets/images/bg/no-image.jpg">
                            </div>
                            <div class="author-content">
                                <span>Hello, I’m</span>
                                <h4>{{ user.name  }}</h4>
                            </div>
                         </div>
                         <div class="counter-area">
                            <div class="row g-lg-4 g-md-5 gy-5 justify-content-center">
                                <div class="col-lg-4 col-sm-6">
                                    <div class="counter-single">
                                        <div class="counter-icon">
                                            <img src="/templates/assets/images/icon/tt-applied.svg" alt="image">
                                        </div>
                                        <div class="coundown">
                                            <p>Total Applied</p>
                                            <div class="d-flex align-items-center">
                                                <h3 class="odometer">
                                                    0
                                                </h3>
                                                <span>+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6">
                                    <div class="counter-single two">
                                        <div class="counter-icon">
                                            <img src="/templates/assets/images/icon/save-job.svg" alt="image">
                                        </div>
                                        <div class="coundown">
                                            <p>Saved Jobs</p>
                                            <div class="d-flex align-items-center">
                                                <h3 class="odometer">
                                                    0
                                                </h3>
                                                <span>+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="col-lg-3 col-sm-6">
                                    <div class="counter-single three">
                                        <div class="counter-icon">
                                            <img src="/templates/assets/images/icon/massage.svg" alt="image">
                                        </div>
                                        <div class="coundown">
                                            <p>Message</p>
                                            <div class="d-flex align-items-center">
                                                <h3 class="odometer">
                                                    120
                                                </h3>
                                                <span>+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <div class="col-lg-4 col-sm-6">
                                    <div class="counter-single four">
                                        <div class="counter-icon">
                                            <img src="/templates/assets/images/icon/cv-review.svg" alt="image">
                                        </div>
                                        <div class="coundown">
                                            <p>Review CV</p>
                                            <div class="d-flex align-items-center">
                                                <h3 class="odometer">
                                                    0
                                                </h3>
                                                <span>+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="table-wrapper">
                            <h5 class="title">Current Applied Jobs:</h5>
                            <div class="scroll-table">
                                <table class="eg-table table category-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Job Tittle</th>
                                            <th>Apply Date</th>
                                            <th>Company</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="application in jobApplications" :key="application.id">
                                            <td data-label="Job Title">
                                                <div class="company-info">
                                                    <div class="logo">
                                                        <img src="/templates/assets/images/bg/company-logo/company-06.png" alt="">
                                                    </div>
                                                    <div class="company-details">
                                                        <div class="top">
                                                            <h6><a href="job-details.html">{{ application.job.job_title }}</a></h6>
                                                            <span><img src="/templates/assets/images/icon/calender2.svg" alt=""> 1 days ago</span>
                                                        </div>
                                                        <ul>
                                                            <li><img src="/templates/assets/images/icon/location.svg" alt=""> {{ application.job.location }}</li>
                                                            <li>
                                                                <img src="/templates/assets/images/icon/arrow2.svg" alt="">
                                                                <p><span class="title">Salary:</span> {{ application.job.salary_range }}</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-label="Apply Job">{{ application.applied_on  }}</td>
                                            <td data-label="Company"><a class="view-btn" href="company-details.html">{{ application.job.company }} </a></td>
                                            <td data-label="Status"><span class="eg-btn purple-btn">{{ application.status_name }}</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <!-- <div class="row">
                <div class="col-lg-12">
                    <div class="featured-jobs-area">
                        <div class="section-title">
                            <h4>Featured Jobs:</h4>
                        </div>
                    </div>
                </div>
                <div class="swiper feature-slider2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="feature-card2">
                                <div class="company-area">
                                    <span></span>
                                    <div class="logo">
                                        <img src="/templates/assets/images/bg/company-logo/company-02.png" alt="">

                                    </div>
                                    <div class="company-details">
                                        <div class="name-location">
                                            <h5><a href="job-details.html">UI/UX Engineer</a> <span>Full Time, Remote<span></span></span></h5>
                                            <ul>
                                                <li><a href="company-details.html">Norland Company</a></li>
                                                <li class="verified"><img src="/templates/assets/images/icon/verified.svg" alt=""> Verified Company</li>
                                            </ul>
                                        </div>
                                        <div class="bookmark">
                                            <i class="bi bi-bookmark-fill"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="job-discription">
                                    <ul class="one">
                                        <li>
                                            <p><span class="title">Location:</span> Chicago, Australia</p>
                                        </li>
                                        <li>
                                            <p><span class="title">Salary:</span> $90-$140 / <span class="time">Per Hour</span></p>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <p><span class="title">Experience:</span> 2-3 Years</p>
                                        </li>
                                        <li>
                                            <p><span class="title">Deadline:</span><span class="time"> 3 February, 2023</span></p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="job-type-apply">
                                    <div class="apply-btn">
                                        <a href="job-details.html"><span><img src="/templates/assets/images/icon/apply-ellipse.svg" alt=""></span>Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="feature-card2">
                                <div class="company-area">
                                    <span></span>
                                    <div class="logo">
                                        <img src="/templates/assets/images/bg/company-logo/company-03.png" alt="">

                                    </div>
                                    <div class="company-details">
                                        <div class="name-location">
                                            <h5><a href="job-details.html">React JS Developer</a>  <span>Full Time, Remote<span></span></span></h5>
                                            <ul>
                                                <li><a href="company-details.html">UX.UI Company</a></li>
                                                <li class="verified"><img src="/templates/assets/images/icon/verified.svg" alt=""> Verified Company</li>
                                            </ul>
                                        </div>
                                        <div class="bookmark">
                                            <i class="bi bi-bookmark-fill"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="job-discription">
                                    <ul class="one">
                                        <li>
                                            <p><span class="title">Location:</span> Dhaka, Bangladesh</p>
                                        </li>
                                        <li>
                                            <p><span class="title">Salary:</span> $80K-$110K / <span class="time">Per Month</span></p>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <p><span class="title">Experience:</span> 2-3 Years</p>
                                        </li>
                                        <li>
                                            <p><span class="title">Deadline:</span><span class="time"> 3 February, 2023</span></p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="job-type-apply">
                                    <div class="apply-btn">
                                        <a href="job-details.html"><span><img src="/templates/assets/images/icon/apply-ellipse.svg" alt=""></span>Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="feature-card2">
                                <div class="company-area">
                                    <span></span>
                                    <div class="logo">
                                        <img src="/templates/assets/images/bg/company-logo/company-04.png" alt="">

                                    </div>
                                    <div class="company-details">
                                        <div class="name-location">
                                            <h5><a href="job-details.html">Receptionist</a>  <span>Full Time, Part Time<span></span></span></h5>
                                            <ul>
                                                <li><a href="company-details.html">Germaine Group Ltd</a></li>
                                                <li class="verified"><img src="/templates/assets/images/icon/verified.svg" alt=""> Verified Company</li>
                                            </ul>
                                        </div>
                                        <div class="bookmark">
                                            <i class="bi bi-bookmark-fill"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="job-discription">
                                    <ul class="one">
                                        <li>
                                            <p><span class="title">Location:</span> West London, Uk</p>
                                        </li>
                                        <li>
                                            <p><span class="title">Salary:</span> $50K-$60K / <span class="time">Per Hour</span></p>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <p><span class="title">Experience:</span> 2-2.5 Years</p>
                                        </li>
                                        <li>
                                            <p><span class="title">Deadline:</span><span class="time"> 4 February, 2023</span></p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="job-type-apply">
                                    <div class="apply-btn">
                                        <a href="job-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt=""></span>Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import UserMenu from './UserMenu.vue';
import { mapGetters } from 'vuex';

@Options({
  components: {
    'user-menu': UserMenu
  },
  data() {
    return {
        user: {},
        jobApplications: [],
        adminURL: null,
        imageExists: false,
    }
  },
  computed: {
    ...mapGetters([
       'currentUser',
       'candidateApplications',
       'adminDashboardDomain'
    ])
  },
  mounted() {
    this.user = JSON.parse(this.currentUser)[0]
    this.$store.dispatch('getCandidateApplications', this.user.id);

    let Script = document.createElement("script");
      Script.setAttribute("src", "/templates/assets/js/main.js");
      document.head.appendChild(Script);
  },
  watch: {
    candidateApplications() {
      this.jobApplications = this.candidateApplications.Listing
    }
  }
})
export default class UserDashboard extends Vue {}
</script>
