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
                            <input type="hidden" :value="this.applications">
                            <TabMenu :model="items" @tab-change="onTabChange">
                                <template #item="{ item, props }">
                                    <a v-ripple v-bind="props.value" class="me-3">
                                        <span class="font-bold">{{ item.label }}</span>
                                    </a>
                                </template>
                            </TabMenu>
                            <!-- Display the content of the active tab -->
                            <div v-if="activeItem === 0" class="new-applied-job-area">
                                <h5> Shortlisted Applications List:</h5>
                                <div class="table-wrapper2">
                                    <table class="eg-table table category-table mb-0">
                                        <tbody>
                                            <tr v-if="shortlistedApplications.length > 0"
                                                v-for="application in shortlistedApplications" :key="application.id">

                                                <td data-label="Candidate Image">
                                                    <div class="employee-info">
                                                        <div class="employee-img">
                                                            <router-link :to="'/job-seeker/' + application.user.id">
                                                                <img v-if="application.user?.photo !== null"
                                                                    :src="application.user?.photo" alt="">
                                                                <img v-else src="/assets/images/icon/user-2.svg" alt="">
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </td>


                                                <td data-label="Candidate Name">
                                                    <div class="employee-info">
                                                        <div class="employee-content">
                                                            {{ application.user_name }}
                                                            <button type="button" class="btn btn-primary"
                                                                data-bs-toggle="modal" data-bs-target="#exampleModal">{{
                                                                    application.job?.job_title }}</button>
                                                            <!-- Modal -->
                                                            <!-- <span><img src="/assets/images/icon/company-2.svg" alt="">{{ application.job?.location ?? 'No Location' }}</span> -->
                                                            <p>
                                                                <span>Total reviews: ({{ application.user.reviews.length
                                                                    }})</span>
                                                            </p>

                                                            <p><span>Applied On:</span> {{ application.applied_on }}</p>
                                                            <p><span>Status:</span> {{ application.status_name }}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Career Summary">
                                                    <div class="carrer-summary">
                                                        <h6>Colliegate Ltd <span>(Teaching Assistant)</span></h6>
                                                        <ul>
                                                            <li><span>Experience:</span> {{ application.experience }}
                                                                Years</li>
                                                            <li><span>Salary:</span> {{ application.job?.currency }} {{
                                                                application.salary }} / {{
                                                                    application.job?.payment_mode }}</li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td data-label="Actions">
                                                    <div class="action-btn-group">
                                                        <ul>
                                                            <li v-if="this.permission !== null">
                                                                <button
                                                                    v-if="!application.isLoading && (this.permission?.cv_credit > 0)"
                                                                    class="review" @click="downloadCv(application)">
                                                                    <img src="/assets/images/icon/docs.svg" alt="">
                                                                    Download CV
                                                                </button>
                                                                <button
                                                                    v-if="application.isLoading && (this.permission?.cv_credit > 0)"
                                                                    class="review">
                                                                    <img src="/assets/images/icon/docs.svg" alt="">
                                                                    Downloading...
                                                                </button>
                                                            </li>
                                                            <li v-if="application.status_name != 'Shortlisted'">
                                                                <button v-if="!application.editClicked"
                                                                    @click="updateCandidateApplication('shortlist', application)">
                                                                    <img src="/assets/images/icon/shortlist-icon.svg"
                                                                        alt=""> Shortlist</button>
                                                                <button v-else>processing...</button>
                                                            </li>

                                                            <li v-if="application.status_name != 'Rejected'">
                                                                <button v-if="!application.editClicked"
                                                                    @click="updateCandidateApplication('reject', application)"
                                                                    class="reject">
                                                                    <img src="/assets/images/icon/rejected-icon.svg"
                                                                        alt=""> Reject</button>
                                                                <button v-else>processing...</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div v-if="activeItem === 1" class="new-applied-job-area">
                                <h5> Rejected Applications List:</h5>
                                <div class="table-wrapper2">
                                    <table class="eg-table table category-table mb-0">
                                        <tbody>

                                            <tr v-if="this.rejectedApplications.length > 0"
                                                v-for="application in rejectedApplications" :key="application.id">

                                                <td data-label="Candidate Image">
                                                    <div class="employee-info">
                                                        <div class="employee-img">
                                                            <router-link :to="'/job-seeker/' + application.user.id">
                                                                <img v-if="application.user?.photo !== null"
                                                                    :src="application.user?.photo" alt="">
                                                                <img v-else src="/assets/images/icon/user-2.svg" alt="">
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td data-label="Candidate Name">
                                                    <div class="employee-info">

                                                        <div class="employee-content">
                                                            {{ application.user_name }}
                                                            <button type="button" class="btn btn-primary"
                                                                data-bs-toggle="modal" data-bs-target="#exampleModal">{{
                                                                    application.job?.job_title }}</button>
                                                            <!-- Modal -->
                                                            <!-- <span><img src="/assets/images/icon/company-2.svg" alt="">{{ application.job?.location ?? 'No Location' }}</span> -->
                                                            <p>
                                                                <span>Total reviews: ({{ application.user.reviews.length
                                                                }})</span>
                                                            </p>

                                                            <p><span>Applied On:</span> {{ application.applied_on }}</p>
                                                            <p><span>Status:</span> {{ application.status_name }}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Career Summary">
                                                    <div class="carrer-summary">
                                                        <h6>Colliegate Ltd <span>(Teaching Assistant)</span></h6>
                                                        <ul>
                                                            <li><span>Experience:</span> {{ application.experience }}
                                                                Years</li>
                                                            <li><span>Salary:</span> {{ application.job?.currency }} {{
                                                                application.salary }} / {{
                                                                    application.job?.payment_mode }}</li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td data-label="Actions">
                                                    <div class="action-btn-group">
                                                        <ul>
                                                            <li v-if="this.permission !== null">
                                                                <button
                                                                    v-if="!application.isLoading && (this.permission?.cv_credit > 0)"
                                                                    class="review" @click="downloadCv(application)">
                                                                    <img src="/assets/images/icon/docs.svg" alt="">
                                                                    Download CV
                                                                </button>
                                                                <button
                                                                    v-if="application.isLoading && (this.permission?.cv_credit > 0)"
                                                                    class="review">
                                                                    <img src="/assets/images/icon/docs.svg" alt="">
                                                                    Downloading...
                                                                </button>
                                                            </li>
                                                            <li v-if="application.status_name != 'Shortlisted'">
                                                                <button v-if="!application.editClicked"
                                                                    @click="updateCandidateApplication('shortlist', application)">
                                                                    <img src="/assets/images/icon/shortlist-icon.svg"
                                                                        alt=""> Shortlist
                                                                </button>
                                                                <button v-else>processing...</button>
                                                            </li>
                                                            <li v-if="application.status_name != 'Rejected'">
                                                                <button v-if="!application.editClicked"
                                                                    @click="updateCandidateApplication('reject', application)"
                                                                    class="reject">
                                                                    <img src="/assets/images/icon/rejected-icon.svg"
                                                                        alt=""> Rejected
                                                                </button>
                                                                <button v-else>processing...</button>
                                                            </li>
                                                            <li>
                                                                <button
                                                                    @click="deleteCandidateApplication(application.id)"
                                                                    class="reject"><img
                                                                        src="/assets/images/icon/rejected-icon.svg"
                                                                        alt=""> Delete</button>
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

<style scoped>
.custom-tabmenu>ul {
    display: flex !important;
    justify-content: space-evenly !important;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CompanyMenu from './CompanyMenu.vue';
import { mapGetters } from 'vuex';
import TabMenu from 'primevue/tabmenu';

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
        TabMenu

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
            activeItem: 0, // Initial active tab
            items: [
                { label: 'Shortlisted', value: '0' },
                { label: 'Rejected', value: '1' },
            ],
            cvClicked: false,
            isLoading: false,
            shortlistedApplications: [],
            rejectedApplications: [],
            permission: null,
        }

    },
    computed: {
        ...mapGetters([
            'currentUser',
            'companyApplications',
            'company',
            'shortListedApps',
            'rejectedApps',
            'loginUser'
        ]),
        // shortlistedApplications() {
        //   return this.applications.filter((item:any) => item.status_id == 3);
        // },
        // rejectedApplications() {
        //   return this.applications.filter((item:any) => item.status_id == 5);
        // },
        filteredSubAccesses(): SubAccess[] {
            return this.user?.sub_accesses.filter((subAccess: SubAccess) => subAccess?.cv_credit > 0);
        },


    },
    async mounted() {
        await this.$store.dispatch('getCurrentUser')

        this.user = JSON.parse(this.currentUser)[0]
        this.permission = this.user.sub_accesses ? this.user.sub_accesses[0] : null;
        this.$store.dispatch('getCompanyApplications', this.user.company.id)
        this.$store.dispatch('getShortlisted', this.user.company.id)
        this.$store.dispatch('getRejected', this.user.company.id)
        this.$store.dispatch('getCompany', this.user.id)
        this.company_logo = this.user.company.logo
        this.applications = this.companyApplications.data
        // console.log(companyApplications);
        let Script = document.createElement("script");
        Script.setAttribute("src", "/assets/js/main.js");
        document.head.appendChild(Script);
        // console.log(this.companyApplications);
    },
    methods: {
        async updateCandidateApplication(status: string, application: any) {
            application.editClicked = true;
            try {
                await this.$store.dispatch('updateCandidateApplication', { status: status, application_id: application.id });
                window.setTimeout(() => {
                    application.editClicked = false;
                }, 6000);
            } catch (error) {

            }
        },
        deleteCandidateApplication(application_id: any) {
            this.$store.dispatch('deleteCandidateApplication', { application_id: application_id })
        },

        onTabChange(event: any) {
            console.log(event);
            this.activeItem = event.index;
        },

        async downloadCv(application: any) {
            application.isLoading = true;
            try {
                await this.$store.dispatch('donwload', application.cv);
                window.setTimeout(() => {
                    // window.open(cvUrl, '_blank');
                    application.isLoading = false;
                }, 3000);
            } catch (error) {
                console.log(error);
            }
        }
    },
    watch: {
        companyApplications() {
            console.log(this.companyApplications.data);
            this.applications = this.companyApplications.data
        },
        company() {
            this.company_logo = this.company.data.logo
            console.log(this.company.data.logo);
        },
        shortListedApps() {
            this.shortlistedApplications = this.shortListedApps.map((item: any) => ({
                ...item,
                isLoading: false,
                editClicked: false
            }));
        },
        rejectedApps() {
            this.rejectedApplications = this.rejectedApps.map((item: any) => ({
                ...item,
                isLoading: false,
                editClicked: false
            }));
        },
        currentUser() {
            this.user = JSON.parse(this.currentUser)[0]
            this.permission = this.user.sub_accesses ? this.user.sub_accesses[0] : null;
        },
    }
})
export default class CompanyDashboard extends Vue { }
</script>
