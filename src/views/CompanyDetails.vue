<template>
    <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner" v-if="company" :style="{ backgroundImage: 'url(' + company.cover_photo + ')' }">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                    </div>
                </div>
            </div>
        </div>
        <!-- ========== Inner Banner end============= -->
        <!-- ========== Job Details Start============= -->
        <div class="company-details-area mb-120">
            <div class="container" v-if="company">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="post-thumb">
                            <div class="company-logo">
                                <img :src="(company.logo) ? company.logo : '/assets/images/bg/company-logo/company-01.png'"
                                    alt="">
                            </div>
                        </div>
                        <div class="company-area">
                            <div class="company-info">
                                <h4>{{ company.name }}</h4>
                                <ul>
                                    <li><img src="assets/images/icon/map-2.svg" alt=""> {{ company.location }}</li>
                                    <li><img src="assets/images/icon/category-2.svg" alt=""><span class="title">Category:
                                        </span> {{ company.company_type }}</li>
                                </ul>
                            </div>
                            <div class="company-contact">
                                <div class="websitet-link">
                                    <p><img src="assets/images/icon/web-5.svg" alt="">Website Link:</p>
                                    <a :href="company.weblink">{{ company.weblink }}</a>
                                </div>
                                <div class="social-area">

                                    <ul>
                                        <li><a :href="company.facebook"><i class="bx bxl-facebook"></i></a></li>
                                        <li><a :href="company.twitter"><i class="bx bxl-twitter"></i></a></li>
                                        <li><a :href="company.linkedin"><i class="bx bxl-linkedin"></i></a></li>
                                        <li><a :href="company.dribble"><i class="bx bxl-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="company-details-content">
                                    <h5>About Company</h5>
                                    <p>{{ company.about }}</p>
                                    <br>
                                    <span><b>{{ company.location }}</b></span>
                                    <br><br>
                                    <h5>Our Technologies</h5>

                                    <div class="row pt-20">
                                        <div class="col-sm-6 mb-50">
                                            <div class="working-process">
                                                <div class="icon">
                                                    <img src="assets/images/icon/creative-design.svg" alt="">
                                                </div>
                                                <div class="work-content">
                                                    <div class="sl">01</div>
                                                    <h6>Creative Design</h6>
                                                    <p>Creative design is a process that involves creating.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 mb-50">
                                            <div class="working-process">
                                                <div class="icon">
                                                    <img src="assets/images/icon/react-next.svg" alt="">
                                                </div>
                                                <div class="work-content">
                                                    <div class="sl">02</div>
                                                    <h6>React Next.JS</h6>
                                                    <p>Creative design is a process that involves creating.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 mb-50">
                                            <div class="working-process">
                                                <div class="icon">
                                                    <img src="assets/images/icon/html-tem.svg" alt="">
                                                </div>
                                                <div class="work-content">
                                                    <div class="sl">03</div>
                                                    <h6>HTML Template</h6>
                                                    <p>Creative design is a process that involves creating.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 mb-50">
                                            <div class="working-process">
                                                <div class="icon">
                                                    <img src="assets/images/icon/wordpress.svg" alt="">
                                                </div>
                                                <div class="work-content">
                                                    <div class="sl">04</div>
                                                    <h6>WordPress</h6>
                                                    <p>Creative design is a process that involves creating.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="company-dt-sb mb-60">
                                    <div class="company-overview-area mb-50">
                                        <h5>Company Overview:</h5>
                                        <ul>
                                            <li><span>Company Name:</span> {{ company.name }}</li>
                                            <li><span>Category:</span> {{ company.company_type }}</li>
                                            <li><span>Location:</span> {{ company.location }}</li>
                                            <li><span>Member Since:</span> {{ company.join_on }}</li>
                                            <li><span>Company size:</span> {{ company.company_size }}</li>
                                            <li><span>Completed Job:</span> 0</li>
                                            <!-- <li><span>Last Job Posted:</span>{{company.jobs[0].posted_on}} </li> -->
                                        </ul>
                                    </div>
                                    <a class="primry-btn-2 lg-btn" href="job-listing1.html">Job Available ({{
                                        company.jobs.length }} )</a>
                                    <!-- Commented as per meeting in march -->
                                    <!-- <a class="primry-btn-1 lg-btn" href="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3634979,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866">Go Our Site Map</a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h4>Latest Jobs:</h4>
                        </div>
                        <div v-for="job in company.jobs" :key="job.id" class="col-lg-12 mb-30">
                            <div class="job-listing-card">
                                <div class="job-top">
                                    <div class="job-list-content">
                                        <div class="company-area">
                                            <div class="logo">
                                                <img :src="job.company_logo" alt="">
                                            </div>
                                            <div class="company-details">
                                                <div class="name-location">
                                                    <h5><a href="job-details.html">{{ job.job_title }}</a></h5>
                                                    <p><a href="company-details.html">{{ job.company }}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="job-discription">
                                            <ul>
                                                <li>
                                                    <p><span class="title">Location:</span> {{ job.location }}</p>
                                                </li>
                                                <li>
                                                    <p><span class="title">Salary:</span> <span class="time">{{
                                                        job.salary_range }}</span></p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <p><span class="title">Experience:</span> {{ job.exprience }} Years</p>
                                                </li>
                                                <li>
                                                    <p><span class="title">Published:</span> {{ job.posted_on }}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bookmark">
                                        <i class="bi bi-bookmark-fill"></i>
                                    </div>
                                </div>
                                <div class="job-type-apply">
                                    <p><img src="assets/images/icon/company-4.svg" alt=""> Job Applied: <span> {{
                                        job.applications_count }} Person</span></p>
                                    <div class="job-type">
                                        <span class="light-yellow">{{ job.working_mode }}</span>
                                        <!-- <span class="light-purple">Part Time</span>
                                    <span class="light-blue">Remote</span> -->
                                    </div>
                                    <div class="apply-btn">
                                        <router-link :to="`job-details?job_id=${job.id}`"><span><img
                                                    src="assets/images/icon/apply-ellipse.svg" alt=""></span>Apply
                                            Now</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pagination-area">
                            <nav aria-label="...">
                                <ul class="pagination">
                                    <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1"></a></li>
                                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">01</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">02</a></li>
                                    <li class="page-item"><a class="page-link" href="#">03</a></li>
                                    <li class="page-item"><a class="page-link" href="#"></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <!-- <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h4>Latest Jobs:</h4>
                    </div> -->
                <div class="row mt-5">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h4>Reviews ({{ company_reviews_count }}):</h4>
                        </div>

                        <div class="be-comment-block">

                            <div class="be-comment" v-for="item in company_reviews">
                                <div class="be-img-comment">
                                    <a href="blog-detail-2.html">

                                        <img v-if="checkReviewImageExists(item.author_image)" :src="item.author_image"
                                            alt="Image" class="be-ava-comment">
                                        <img v-else src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""
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
                            <form class="form-block" v-if="role == 2">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <textarea class="form-input" v-model="reviewForm.review"
                                                placeholder="Your Review"></textarea>
                                        </div>
                                    </div>
                                    <button @click="createReview" class="primry-btn-2 lg-btn w-unset" type="button">Submit
                                        Review</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ========== Job Details e nd============= -->
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CompanyDetail from '../views/CompanyDetails.vue'; // @ is an alias to /src
import { mapGetters } from 'vuex';
import { useRoute } from 'vue-router';

@Options({
    components: {
        CompanyDetail,
    },
    data() {
        return {
            company_id: null,
            company: null,
            company_reviews: [],
            company_reviews_count: '',
            user: null,
            role: null,
            reviewForm: {
                company_id: null,
                user_id: '',
                review: null,
            },


        }
    },
    methods: {
        checkReviewImageExists(imagePath: any) {
            // Create a new Image element
            const img = new Image();

            img.src = imagePath;

            // Check if the image can be loaded successfully
            img.onload = () => {
                return true;
            };

            // If the image can't be loaded, return false
            img.onerror = () => {
                return false;
            };
        },
        onSubmit(values: any) {
            return false;
        },
        createReview() {
            console.log(this.reviewForm);
            this.$store.dispatch('createCompanyReview', this.reviewForm);
        }
    },
    computed: {
        ...mapGetters([
            'companyInfo',
            'companyReviews',
            'currentUser',
        ]),
    },
    mounted() {
        const route = useRoute()
        this.$store.dispatch('getCompanyInfo', route.params.id);
        this.$store.dispatch('getCompanyReviews', route.params.id);
        if (this.currentUser) {
            this.user = JSON.parse(this.currentUser)[0]
            this.role = this.user.roles[0].id
            this.reviewForm.user_id = this.user.id
            console.log(this.user.id);
        }
    },
    watch: {
        companyInfo() {
            this.company = this.companyInfo
            this.reviewForm.company_id = this.companyInfo.id
        },
        companyReviews() {
            this.company_reviews = this.companyReviews.review
            this.company_reviews_count = this.companyReviews.reviewCount
        }
    }
})
export default class CompanyDetails extends Vue { }
</script>
