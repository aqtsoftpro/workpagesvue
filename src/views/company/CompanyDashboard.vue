<template>
    <div>
        <!-- ========== Dashboard Area end============= -->
        <div class="dashboard-area company-dashboard pt-120 mb-120">
            <div class="container">
                <div class="row g-lg-4">
                    <company-menu />
                    <!-- Company Menu Here -->
                    <div class="col-lg-12">
                        <div class="dashboard-inner">
                            <div class="author-and-action-btn-area two mb-40">
                                <div class="author-area two">
                                    <div class="author-img">
                                        <img width="200" v-if="company_logo" :src="company_logo" />
                                        <img v-else src="/assets/images/icon/user-2.svg" alt="">
                                    </div>
                                    <div class="author-content">
                                        <span>Hello,</span>
                                        <h4 v-if="this.user"> {{ user.name }} </h4>
                                    </div>
                                </div>

                                <div class="action-btn-group">
                                    <ul>
                                        <li><router-link to="/company/profile"><span><img
                                                        src="/assets/images/icon/edit2.svg" alt=""></span>Edit
                                                Profile</router-link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="counter-area">
                                <div class="row g-4 justify-content-center mb-30">
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="counter-single two">
                                            <div class="counter-icon">
                                                <img src="/assets/images/icon/save-job.svg" alt="image">
                                            </div>
                                            <div class="coundown">
                                                <p>Live Jobs</p>
                                                <div class="d-flex align-items-center">
                                                    <h3 class="odometer">
                                                        {{ company?.data.live_jobs }}
                                                    </h3>
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="counter-single three">
                                            <div class="counter-icon">
                                                <img src="/assets/images/icon/pending-icon.svg" alt="image">
                                            </div>
                                            <div class="coundown">
                                                <p>Pending Job</p>
                                                <div class="d-flex align-items-center">
                                                    <h3 class="odometer">
                                                        {{ company?.data.pending_jobs }}
                                                    </h3>
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="counter-single four">
                                            <div class="counter-icon">
                                                <img src="/assets/images/icon/closed-icon.svg" alt="image">
                                            </div>
                                            <div class="coundown">
                                                <p>Closed Jobs</p>
                                                <div class="d-flex align-items-center">
                                                    <h3 class="odometer">
                                                        {{ company?.data.closed_jobs }}
                                                    </h3>
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-4 justify-content-cente">
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="counter-single">
                                            <div class="counter-icon">
                                                <img src="/assets/images/icon/total-view-icon.svg" alt="image">
                                            </div>
                                            <div class="coundown">
                                                <p>Total Reviews / Total Applied</p>
                                                <div class="d-flex align-items-center">
                                                    <h3 class="odometer">
                                                        <!-- <span></span><span></span> -->
                                                    </h3>
                                                    <span>{{ companyCounts.reviews_count }}</span>/<span>{{
                                                        companyCounts.total_applied_job }}</span>

                                                    <!-- <span>+</span> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="counter-single three">
                                            <div class="counter-icon">
                                                <img src="/assets/images/icon/highlight-icon.svg" alt="image">
                                            </div>
                                            <div class="coundown">
                                                <p>Highlighted Jobs</p>
                                                <div class="d-flex align-items-center">
                                                    <h3 class="odometer">
                                                        {{ companyCounts.highlighted_jobs }}
                                                    </h3>
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="counter-single four">
                                            <div class="counter-icon">
                                                <img src="/assets/images/icon/featured-icon.svg" alt="image">
                                            </div>
                                            <div class="coundown">
                                                <p>Our Followers</p>
                                                <div class="d-flex align-items-center">
                                                    <h3 class="odometer">
                                                        {{ companyCounts.followers_count }}
                                                    </h3>
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="counter-area">
                                <h6 class="text-center">Click here to get all jobseeker ralated to your company:
                                    <router-link class="primary-btn-2 lg-btn" to="/company/jobseekers">Job Seeker</router-link>
                                </h6>
                            </div> -->
                            <div class="new-applied-job-area">
                                <!-- <input type="hidden" :value="companyApplications"> -->
                                <h5>New Applied List:</h5>
                                <div class="table-wrapper2">
                                    <table class="eg-table table category-table mb-0">
                                        <tbody v-if="newApplications.length > 0">
                                            <tr v-for="application in newApplications" :key="application.id">
                                                <td data-label="Candidate Name">
                                                    <div class="employee-info">
                                                        <div class="employee-img">
                                                            <router-link :to="'/job-seeker/'+application.user?.id">
                                                                <img v-if="application.user?.photo" :src="application.user?.photo" alt="">
                                                                <img v-else src="/assets/images/icon/user-2.svg" alt="">
                                                            </router-link> 
                                                            <!-- <img :src="application.user?.photo" alt=""> -->
                                                        </div>
                                                        <div class="employee-content">
                                                            {{ application.user_name }}
                                                            <button type="button" class="btn btn-primary"
                                                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                                @click="seekerDetail(application.user_id)">{{
                                                                    application.job.job_title }}</button>

                                                            <!-- <span><img src="/assets/images/icon/company-2.svg" alt="">{{
                                                                application.job.location }}</span> -->
                                                            <span>Total reviews: ({{ application.user.reviews.length }})</span>
                                                            <p><span>Applied On:</span> {{ application.applied_on }}</p>
                                                            <p><span>Status:</span> {{ application.status_name }}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Carrer Summary">
                                                    <div class="carrer-summary">
                                                        <h6>Colliegate Ltd <span>(Teaching Assistant)</span></h6>
                                                        <ul>
                                                            <li><span>Experience:</span> {{ application.experience }} Years
                                                            </li>
                                                            <li><span>Salary:</span> {{ application.job.currency }} {{
                                                                application.salary }} / {{ application.job.payment_mode }}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td data-label="Actions">
                                                    <div class="action-btn-group">
                                                        <ul>
                                                            <li v-if="this.user.sub_accesses.length > 0">
                                                                <button v-if="!cvClicked && (filteredSubAccesses[0].cv_credit > 0)" class="review" @click="downloadCv(application.cv)">
                                                                    <img src="/assets/images/icon/docs.svg" alt=""> Download CV
                                                                </button>
                                                                <button v-if="cvClicked && (filteredSubAccesses[0].cv_credit > 0)" class="review" >
                                                                    <img src="/assets/images/icon/docs.svg" alt=""> Downloading...
                                                                </button>
                                                            </li>
                                                            <li v-if="application.status_name != 'Shortlisted'">
                                                                <button v-if="!application.isLoading" @click="updateCandidateApplication('shortlist', application)"><img
                                                                        src="/assets/images/icon/shortlist-icon.svg" alt="">
                                                                    Shortlist</button>
                                                                    <button v-else>processing...</button>
                                                            </li>
                                                            <li v-if="application.status_name != 'Rejected'"><button v-if="!application.isLoading"
                                                                    @click="updateCandidateApplication('reject', application)"
                                                                    class="reject"><img
                                                                        src="/assets/images/icon/rejected-icon.svg" alt="">
                                                                    Reject</button>
                                                                    <button v-else >processing...</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ========== Dashboard Area end============= -->
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CompanyMenu from './CompanyMenu.vue';
import { mapGetters } from 'vuex';
import axios from 'axios';
// import ConfirmPopup  from "primevue/confirmpopup";
// import useConfirm  from "primevue/useconfirm";
interface SubAccess {
  id: number;
  subscription_id: number;
  user_id: number;
  post_for: number;
  allow_ads: string;
  allow_edits: string;
  cv_access: number;
  cv_credit: number;
  msg_credit: number;
  allow_ref: string;
  allow_right: string;
  allow_others: string;
  h_s_screen: string;
  allow_interview: string;
  recruiter_dash: string;
  casual_portal: string;
  rec_support: string;
  expired_at: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

@Options({
    components: {
        'company-menu': CompanyMenu,
        // ConfirmPopup,
        // useConfirm
    },
    data() {
        return {
            user: null,
            company_logo: null,
            live_jobs: 20,
            pending_jobs: 0,
            closed_jobs: 0,
            total_viewed: 0,
            total_applied: 0,
            highlighted_jobs: 0,
            our_followers: 0,
            applications: [],
            shortlistConfirm: false,
            shortlistMessage: "Are you sure?",
            shortlistHeader: "Confirmation",
            confirmVisible: true,
            message: "Are you sure?",
            header: "Confirmation",
            companyCounts: {},
            cvStatus: false,
            cvClicked: false,
            isLoading: false,
        }
    },

    computed: {
        ...mapGetters([
            'currentUser',
            'companyApplications',
            'company',
            'companyDashCounts'
        ]),

        newApplications() {
            return this.applications.filter((item: any) => item.status_id == 1).map((item : any) => ({
                ...item,
                isLoading: false
            }));
        },
        
        filteredSubAccesses(): SubAccess[] {
            return this.user.sub_accesses ?? this.user.sub_accesses.filter((subAccess: SubAccess) => subAccess.cv_credit > 0);
        },

    },
    async mounted() {
        this.user = JSON.parse(this.currentUser)[0]
        this.$store.dispatch('getUserInfo')
        this.$store.dispatch('getCompanyApplications', this.user.company.id)
        this.$store.dispatch('getCompany', this.user.id)
        this.$store.dispatch('getCompanyUsers');
        this.$store.dispatch('companyData');
        this.company_logo = this.user.company.logo
        // this.live_jobs = 
        let Script = document.createElement("script");
        Script.setAttribute("src", "/assets/js/main.js");
        document.head.appendChild(Script);
    },
    methods: {
        async updateCandidateApplication(status: string, application: any) {
            application.isLoading = true;
            try {
                await this.$store.dispatch('updateCandidateApplication', { status: status, application_id: application.id });
                window.setTimeout(() => {
                    this.isLoading = false;
                }, 6000);
            } catch (error) {
                console.log(error);
            }
        },

        seekerDetail(userId: any) {
            this.cvStatus = true;
            console.log(userId);
        },

        async downloadCv(cvUrl: any) {
            this.cvClicked = true;
            try {
                await this.$store.dispatch('donwload', cvUrl);
                window.setTimeout(() => {
                    // window.open(cvUrl, '_blank');
                    this.cvClicked = false;
                }, 3000);
            } catch (error) {
                console.log(error);
            }

        }
    },
    watch: {
        companyApplications() {
            this.applications = this.companyApplications.data
        },
        company() {
            this.company_logo = this.company.data.logo
            console.log(this.company.data.logo);
        },
        companyDashCounts() {
            this.companyCounts = this.companyDashCounts
        },
        currentUser() {
            this.user = JSON.parse(this.currentUser)[0]
        },
        // applications() {
        //     this.applications.filter((item: any) => item.status_id === 1);
        // }

    }
})
export default class CompanyDashboard extends Vue { }
</script>
