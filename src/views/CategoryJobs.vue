<template>
    <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner" :style="bgImage">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="banner-content text-center">
                            <h1 :style="textColor">{{ jobs.data ? jobs.data[0]?.category : 'No Category' }}</h1>
                            <!-- <span></span>
                          <nav aria-label="breadcrumb">
                              <ol class="breadcrumb">
                                  <li class="breadcrumb-item" :style="textColor"><router-link to="/" :style="textColor">Home</router-link></li>
                                  <li class="breadcrumb-item active" :style="textColor" aria-current="page">Category Jobs / {{ jobs[0]?.category }}</li>
                              </ol>
                          </nav> -->
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
                            <div class="row g-4 mb-25">
                                <div class="col-lg-6 d-flex align-items-center">
                                    <p v-if="jobs.total > 0" class="show-item">Showing results {{ jobs.per_page }} in {{ jobs.total }} jobs
                                        list</p>
                                </div>
                                <div class="col-lg-6 d-flex align-items-center justify-content-lg-end">
                                    <div class="grid-select-area">

                                    </div>
                                </div>
                            </div>
                            <div class="row ">
                                <div v-for="job in jobs.data" :key="job.id" class="col-lg-12 mb-30">
                                    <div class="job-listing-card">
                                        <div class="job-top">
                                            <div class="job-list-content">
                                                <div class="company-area" style="min-width: fit-content;">
                                                    <div class="logo">
                                                        <img :src="(job.company_logo) ? job.company_logo : '/assets/images/work-pages-logo.png'"
                                                            alt="">
                                                    </div>
                                                    <div class="company-details">
                                                        <div class="name-location">
                                                            <h5><router-link
                                                                    :to="getJobDetail(job.job_key, job.job_slug)">{{
                                                                        job.job_title }}</router-link></h5>
                                                            <p><router-link
                                                                    :to="'/company-details?company_id=' + job.company_id">{{
                                                                        job.company }}</router-link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="job-discription">
                                                    <ul>
                                                        <li>
                                                            <p><span class="title">Salary:</span> {{ job.salary_range }}
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><span class="title">Application Close:</span>{{
                                                                job.expiration }}</p>
                                                        </li>
                                                        <li>
                                                            <p style="line-height: 1.5rem;"><span class="title">Summary:
                                                                </span>{{ job.job_description.slice(0, 30) }}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!-- <router-link v-if="loggedIn" to="/bookmark" class="bookmark">
                                            <i class="bi bi-bookmark-fill"></i>
                                        </router-link>
                                        <router-link v-else :to="{ name: 'login' }" class="bookmark">
                                            <i class="bi bi-bookmark-fill"></i>
                                        </router-link>                                         -->
                                        </div>

                                        <div class="job-type-apply">
                                            <div class="job-type">
                                                <span class="light-green">{{ job.working_mode }} {{ job.expiration
                                                    }}</span>
                                                <!-- <span class="light-purple">Part Time</span>
                                            <span class="light-blue">Remote</span> -->
                                            </div>
                                            <!-- v-if="!isJobExpired(job.expiration)" -->
                                            <div v-if="!isJobExpired(job.expiration)" class="apply-btn">
                                                <router-link v-if="loggedIn" class="primry-btn-2 y-btn lg-btn"
                                                    :to="getJobDetail(job.job_key, job.job_slug, 'apply')">
                                                    Apply Now</router-link>
                                                <router-link v-else :to="{ name: 'login' }"
                                                    class="primry-btn-2 y-btn lg-btn">
                                                    Login to apply</router-link>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>


                                <div v-if="jobs.total > 0" class="col-lg-12 d-flex justify-content-center">
                                    <div class="pagination-area">
                                        <nav aria-label="...">
                                            <ul class="pagination">
                                                <!-- <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1"></a></li>
                                            <li class="page-item active" aria-current="page"><a class="page-link" href="#">01</a></li> -->

                                                <li v-for="item in jobs.links" class="page-item"
                                                    :class="{ 'active': item.active == true, 'd-none': item.label.includes('Previous') || item.label.includes('Next') }">
                                                    <!-- <a class="page-link" href="#">{{ item.label }}</a> -->
                                                    <button class="page-link" @click="toPage(item.url)"> {{ item.url ==
                                                        null ? '<' : item.label }} </button>
                                                </li>

                                                <!-- <li class="page-item"><a class="page-link" href="#">03</a></li>
                                            <li class="page-item"><a class="page-link" href="#"></a></li> -->
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div v-else class="col-lg-12 d-flex justify-content-center">
                                    <div class="pagination-area">
                                        <h5 class="title">No result found</h5>
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

<style scoped>
.apply-btn>.y-btn {
    color: #f7f7f2;
}

.y-btn:hover {
    color: black;
}
</style>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import JobCats from '../views/CategoryJobs.vue'; // @ is an alias to /src
import { mapGetters } from 'vuex';
import { useRoute } from 'vue-router';
import Paginator from 'primevue/paginator';


@Options({
    components: {
        JobCats,
        Paginator,
    },
    data() {
        return {
            jobs: [],
            bgImage: '',
            textColor: '',
            currentPage: 1,
            totalPages: 0,
            rowsPerPage: 10,
            currentUser: '',
            role: null,


            // "next_page_url": "http:\/\/127.0.0.1:8000\/api\/categoryJobs\/development?page=2",
            // "path": "http:\/\/127.0.0.1:8000\/api\/categoryJobs\/development",
            // "per_page": 3,
            // "prev_page_url": null,
            // "to": 3,
            // "total": 20

        }
    },
    computed: {
        // ...mapState([
        //     'job',
        // ]),
        ...mapGetters([
            'job',
            'loggedIn',
            'globalVariables',
            'currentUser',
        ]),
    },
    mounted() {
        const route = useRoute()
        console.log(route.params.cat_slug)
        const data = {
            category: route.params.cat_slug,
            page: 1
        };
        this.$store.dispatch('getCategoryJobs', data)
        this.$store.dispatch('getGlobalVariables');
        if (this.currentUser) {
            this.user = JSON.parse(this.currentUser)[0]
            this.role = this.user.roles[0].id
            this.reviewForm.user_id = this.user.id
            console.log(this.user.id);
        }
        
    },
    methods: {
        getJobDetail(job_key: any, job_slug: any) {
            return {
                path: '/job-details/' + job_key + '/' + job_slug
                // path: '/job-details/${job_key}/${job_slug}'
            };
        },

        parsedExpirationDate(expirationDate: any) {
            // Split the expiration date string into month, day, and year
            const [month, day, year] = expirationDate.split(' ');
            // Type annotation for monthMap
            const monthMap: { [key: string]: number } = {
                'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3,
                'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7,
                'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
            };

            // Create and return a Date object using the parsed month, day, and year
            return new Date(year, monthMap[month], parseInt(day, 10));
        },

        toPage(url: any) {

            const urlObj = new URL(url);

            // Extract the category from the pathname
            const pathnameParts = urlObj.pathname.split('/');
            const category = pathnameParts[pathnameParts.length - 1];

            // Extract the page parameter from the query string
            const params = new URLSearchParams(urlObj.search);

            const page = params.get('page');

            this.$store.dispatch('getCategoryJobs', { category: category, page: page })
        },

        isJobExpired(expirationDate: any) {
            if (this.role?.name && this.role?.name == 'Employer') {
                return true;
            }
            const today = new Date();
            const expiration = this.parsedExpirationDate(expirationDate);
            return expiration < today; // Returns true if the job is expired
        }
    },
    watch: {
        job() {
            this.jobs = this.job
        },
        globalVariables() {
            this.bgImage = 'background-image: url(' + this.globalVariables._banner_image + ')';
            this.textColor = 'color: ' + this.globalVariables._banner_text_color + ' !important;';
        }
    }
})
export default class categoryJobs extends Vue { }
</script>
