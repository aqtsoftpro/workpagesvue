<template>
    <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner" :style="bgImage">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="banner-content text-center">
                            <h1 :style="textColor">Casual Portal</h1>
                            <span></span>

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
                        <div v-if="filterVisible" class="table-wrapper2">
                            <div class="table-filter-area mb-30">
                                <form @submit.prevent="filterSeeker">
                                    <div class="form-wrap style-2 style-3 employer-search-reponsive-filter">
                                        <div class="form-inner jobseeker-filter-1">
                                            <div class="input-area">
                                                <img src="assets/images/icon/search-2.svg" alt="">
                                                <input type="text" v-model="searchQuery.keyword" placeholder="Search">
                                            </div>
                                        </div>
                                        <div class="form-inner jobseeker-filter-1">
                                            <select class="form-select" v-model="searchQuery.availability_id">
                                                <option value="">Select Availability</option>
                                                <option v-for="availability in employeeAvailabilityList"
                                                    :value="availability.id"
                                                    :selected="searchQuery.availability_id == availability.id">{{
                                                    availability.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-inner jobseeker-filter-1">
                                            <select class="form-select" v-model="searchQuery.location_id">
                                                <option value="">Select Location</option>
                                                <option v-for="location in locationsOptions" :value="location.id"
                                                    :selected="searchQuery.location_id == location.id">{{ location.name
                                                    }}
                                                </option>
                                            </select>
                                        </div>
                                        <button type="submit" class="primry-btn-1">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div class="job-listing-wrrap">

                            <div v-if="bulkContainer" class="p-3 mb-3 contact-seeker-panel container">
                                <div class="row">
                                    <div class="col-lg-6 wp-bulk-selection">
                                        <button class="primry-btn-2 p-1 px-3 me-2 d-inline-block"
                                            @click="bulkSelection()">Bulk Selection</button>
                                    </div>
                                    <div v-if="selectedSeekers.length > 0" class="col-lg-6 wp-bulk-option">
                                        <button class="primry-btn-2 p-1 px-3 me-2 d-inline-block"
                                            @click="openForm(selectedSeekersInfo)">Send Sms</button>
                                        <button class="primry-btn-2 p-1 px-3 d-inline-block"
                                            @click="openMailForm(selectedSeekersInfo)">Send Email</button>
                                    </div>
                                </div>
                            </div>


                            <!-- {{ searchSeeker }} -->
                            <div v-if="!showForm && !mailFormShow" class="row ">
                                <div v-if="pageLoading" class="p-5">
                                    <div class="d-flex justify-content-center py-5">
                                        <ProgressSpinner />
                                    </div>
                                </div>
                                <div v-else v-for="seeker in jobSeekers" :key="seeker.id" class="col-lg-12 mb-30">

                                    <div class="job-listing-card" :class="{
                                        'selected-seekers': selectedSeekers.includes(seeker.id),
                                        'contact-seeker-card': bulkSelectionVar
                                    }" @click="toggleSeekerSelection(seeker, seeker.id, bulkSelectionVar)">

                                        <div class="job-top  jon-top-mr-b">
                                            <div class="job-list-content">
                                                <div class="company-area d-flex flex-column justify-content-between gap-3">
                                                    <div>
                                                        <div class="logo">
                                                            <img :src="(seeker.photo) ? seeker.photo : 'https://loremflickr.com/52/52/logo,organisation/all'"
                                                                alt="">
                                                        </div>
                                                        <div class="company-details">
                                                            <div class="name-location">
                                                                <router-link :to="'job-seeker/' + seeker.id">
                                                                    <h5>{{ seeker.name }}</h5>
                                                                </router-link>
                                                                <!-- <div>{{ seeker.description }}</div> -->
                                                            </div>
                                                        </div>
                                                    </div>

                                                    
                                                    <div>
                                                        <button class="primry-btn-2 p-1 px-3 me-2 d-inline-block" @click="openForm(seeker)">Send Sms</button>
                                                        <button class="primry-btn-2 p-1 px-3 d-inline-block" @click="openMailForm(seeker)">Send Email</button>
                                                    </div>

                                                </div>
                                                <div class="job-discription">
                                                    <ul>
                                                        <li>
                                                            <p><span class="title">Designation:</span> {{
                                                                seeker.designtion?.name ?? 'No Designation' }}</p>
                                                        </li>
                                                        <li>
                                                            <p><span class="title">Location:</span> {{
                                                                seeker.job_location?.name ?? 'No Location' }}</p>
                                                        </li>
                                                        <li>
                                                            <p><span class="title">Qualification:</span> {{
                                                                seeker.qualification?.name ?? 'No Qualification' }}</p>
                                                        </li>
                                                        <li v-if="seeker.description">
                                                            <p><span class="title">Summary:</span> {{
                                                                seeker.description.length > 100 ?
                                                                seeker.description.substring(0, 75) + '...' :
                                                                seeker.description }}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <span class="d-flex flex-column justify-content-between gap-3">Total
                                                reviews: ({{ seeker.reviews.length }})

                                                <router-link :to="'job-seeker/' + seeker.id"
                                                    class="router-link-active active primry-btn-1 hover-white user-btn-custom py-2 px-3">
                                                    <!-- <span><img src="assets/images/icon/apply-ellipse.svg" alt=""></span> -->
                                                    Detail Job Seeker
                                                </router-link>
                                            </span>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-12 d-flex justify-content-center">
                                    <Paginator v-model:first="currentPage" :rows="rowsPerPage"
                                        :totalRecords="totalPages" @page="handlePageChange">
                                    </Paginator>
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
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-inner mb-25">
                                                        <label for="message">Message *</label>
                                                        <textarea v-model="smsForm.message" id="message"
                                                            placeholder="Message"
                                                            :disabled="smsForm.last_four == null"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-inner">
                                                        <button v-if="!isLoading" class="primry-btn-2 lg-btn w-unset"
                                                            type="button" @click="sendMessage"
                                                            :disabled="smsForm.last_four == null">Send SMS</button>
                                                        <button v-if="isLoading" class="primry-btn-2 lg-btn w-unset"
                                                            type="button">
                                                            <span class="me-3 fs-6 text-white">Processing...</span>
                                                            <i class="fa fa-spinner fa-spin text-white ms-3"
                                                                style="font-size:24px">
                                                            </i>
                                                        </button>

                                                        <button v-if="!isLoading"
                                                            class="primry-btn-2 lg-btn w-unset float-end" type="button"
                                                            @click="closeForm">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div v-if="mailFormShow" class="row">
                                <div class="col-12">
                                    <div class="form-wrapper">
                                        <div class="section-title text-center">
                                            <h4>Send Email </h4>
                                            <div class="dash"></div>
                                        </div>
                                        <form class="profile-form">
                                            <div class="section-title2">
                                                <h5>To: {{ mailForm.full_name }}</h5>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-inner mb-25">
                                                        <label for="subject">Subject *</label>
                                                        <div class="input-area">
                                                            <img src="/assets/images/icon/company-2.svg" alt="">
                                                            <input v-model="mailForm.subject" type="text" id="subject"
                                                                name="subject">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-inner mb-25">
                                                        <label for="mailBody">Message Body*</label>
                                                        <textarea v-model="mailForm.body" id="mailBody"
                                                            placeholder="Write here..."></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-inner">
                                                        <button v-if="!isLoading" class="primry-btn-2 lg-btn w-unset"
                                                            type="button" @click="sendEmail">Send Mail</button>
                                                        <button v-else class="primry-btn-2 lg-btn w-unset"
                                                            type="button">
                                                            <span class="me-3 fs-6 text-white">Processing...</span>
                                                            <i class="fa fa-spinner fa-spin text-white ms-3"
                                                                style="font-size:24px">
                                                            </i>
                                                        </button>
                                                        <button v-if="!isLoading"
                                                            class="primry-btn-2 lg-btn w-unset float-end" type="button"
                                                            @click="closeMailForm">Cancel</button>
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

<style scoped>
.hover-white:hover {
    color: rgb(255, 255, 255) !important;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProgressSpinner from 'primevue/progressspinner';
import Paginator from 'primevue/paginator';
import { mapGetters } from 'vuex';

@Options({
    components: {
        ProgressSpinner,
        Paginator
    },
    data() {
        return {
            jobs: [],
            smsForm: {
                user_id: '',
                subject: '',
                message: '',
                receiver_number: '',
                full_name: '',
                last_four: null,
            },

            mailForm: {
                user_id: [],
                subject: '',
                body: '',
                full_name: [],
            },
            showForm: false,
            mailFormShow: false,
            isLoading: false,
            jobSeekers: [],
            currentPage: 1,
            totalPages: 0,
            rowsPerPage: 10,
            pageLoading: false,
            bgImage: '',
            textColor: '',
            searchQuery: {
                keyword: '',
                availability_id: '',
                location_id: '',
            },
            search_availability: [],
            employeeAvailabilityList: [],
            locationsOptions: [],
            selectedSeekers: [],
            selectedSeekersInfo: [],
            bulkSelectionVar: false,
            bulkContainer: true,
            filterVisible: true,
        }
    },
    methods: {
        getJobDetail(job_key: any, job_slug: any) {
            return {
                path: '/job-details/' + job_key + '/' + job_slug
                // path: '/job-details/${job_key}/${job_slug}'
            };
        },

        async handlePageChange(event: any) {

            this.pageLoading = true; // Show loader
            const pageId = event.page;

            const formData = new FormData();
            formData.append('pageId', pageId);
            
            try {
                await this.$store.dispatch('searchSeeker', formData);
                window.setTimeout(() => {
                    this.pageLoading = false; // Show loader
                }, 1000);
            } catch (error) {
                console.log(error);

            }

        },
        toggleSeekerSelection(seeker: any, seekerId: any, bulkSelectionVar: any) {

            const index = this.selectedSeekers.indexOf(seekerId);
            if (bulkSelectionVar) {
                if (index === -1) {
                    this.selectedSeekers.push(seekerId);
                    this.selectedSeekersInfo.push({
                        id: seeker.id,
                        name: seeker.name,
                        phone: seeker.phone ?? 'N/A',
                        email: seeker.email ?? 'N/A',
                    });
                } else {
                    this.selectedSeekers.splice(index, 1);
                    this.selectedSeekersInfo.splice(index, 1);
                }
            }
        },


        bulkSelection() {

            this.bulkSelectionVar = true;
            console.log('bulk');

        },

        openForm(seekers: any) {
            if (typeof seekers === 'object' && seekers !== null && !Array.isArray(seekers)) {
                this.smsForm.user_id = seekers.id + ",";
                this.smsForm.full_name = seekers.name + " (" + (seekers.phone ? seekers.phone.toString().slice(-4) : 'N/A') + ")";
                this.smsForm.receiver_number = seekers.phone + ",";
            }
            else{
                this.smsForm.user_id = seekers.map((seeker: { id: number }) => seeker.id).join(', ');
                this.smsForm.full_name = seekers.map((seeker: { name: string; phone: string }, index: number) => `${seeker.name} (${seeker.phone.toString().slice(-4) ?? 'N/A'})`).join(', ');
                this.smsForm.receiver_number = seekers.map((seeker: { phone: string }) => seeker.phone).join(', ');
            }
            this.smsForm.last_four = true;
            this.showForm = true;
            window.scrollTo(0, 0);
            this.bulkContainer = false;
            this.filterVisible = false;
        },
        closeForm() {
            this.smsForm.user_id = '';
            this.smsForm.subject = '';
            this.smsForm.message = '';
            this.smsForm.receiver_number = '';
            this.smsForm.full_name = '';
            this.showForm = false;
            this.bulkContainer = true;
            this.filterVisible = true;
        },
        openMailForm(seekers: any) {
            if (typeof seekers === 'object' && seekers !== null && !Array.isArray(seekers)) {
                this.mailForm.user_id = seekers.id + ",";
                this.mailForm.full_name = seekers.name + ",";
            }
            else{
                this.mailForm.user_id = seekers.map((seeker: { id: number }) => seeker.id).join(', ');
                this.mailForm.full_name = seekers.map((seeker: { name: string }) => seeker.name).join(', ');
            }
            this.mailFormShow = true;
            window.scrollTo(0, 0);
            this.bulkContainer = false;
            this.filterVisible = false;
        },
        closeMailForm() {
            this.mailForm.user_id = [];
            this.mailForm.subject = '';
            this.mailForm.body = '';
            this.mailForm.full_name = [];
            this.mailFormShow = false;
            this.bulkContainer = true;
            this.filterVisible = true;
        },
        async sendMessage() {
            const userConfirmed = window.confirm("Are you sure you want to send this sms?");
    
            if (!userConfirmed) {
                return;
            }

            this.smsForm.message ='';
            this.isLoading = true;
            await this.$store.dispatch('sendMessage', this.smsForm);
            window.setTimeout(() => {
                this.isLoading = false;
                this.closeForm;
            }, 3000);
        },

        async sendEmail() {

            const userConfirmed = window.confirm("Are you sure you want to send this email?");
    
    if (!userConfirmed) {
        return;
    }

            this.isLoading = true;
            
            this.mailForm.subject = '';
            this.mailForm.body = '';
            await this.$store.dispatch('sendEmail', this.mailForm);
            window.setTimeout(() => {
                this.isLoading = false;
                this.closeMailForm;
            }, 6000);
        },

        async filterSeeker() {
            const formData = new FormData();

            formData.append('keyword', this.searchQuery.keyword);
            formData.append('availability_id', this.searchQuery.availability_id);
            formData.append('location_id', this.searchQuery.location_id);

            await this.$store.dispatch('searchSeeker', formData);
        }
    },
    computed: {
        ...mapGetters([
            'searchResult',
            'searchSeeker',
            'loggedIn',
            'globalVariables',
            'employeeAvailability',
            'locations',
        ]),

    },
    mounted() {
        let query = this.$route.query

        this.$store.dispatch('searchJobs', query);
        this.$store.dispatch('searchSeeker', this.searchQuery );
        this.$store.dispatch('getGlobalVariables');
        this.$store.dispatch('getEmployeeAvailability', '');
        this.$store.dispatch('getLocations', '')
    },
    watch: {

        searchResult() {
            this.jobs = this.searchResult
        },
        searchSeeker() {
            this.jobSeekers = this.searchSeeker.Listing,
                this.totalPages = this.searchSeeker.count;
        },
        globalVariables() {
            this.bgImage = 'background-image: url(' + this.globalVariables._banner_image + ')';
            this.textColor = 'color: ' + this.globalVariables._banner_text_color + ' !important;';
        },
        employeeAvailability() {
            this.employeeAvailabilityList = this.employeeAvailability;
        },
        locations() {
            this.locationsOptions = this.locations
        },
    }
})
export default class JobSeekerList extends Vue { }
</script>