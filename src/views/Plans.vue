<template>
    <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="banner-content text-center">
                            <h1>Pricing Plan</h1>
                            <span></span>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Pricing Plan</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ========== Inner Banner end============= -->
        <!-- ========== Pricing Plan Start============= -->
        <div class="pricing-plan-area pt-120 mb-120">
            <div class="container">
                <div class="row g-4 mb-70 justify-content-center align-items-center">
                    <div v-for="(plan, index) in allPlans" class="col-lg-4 col-md-6">
                        <div class="pricing-plan-card1" :class="{'bg-card1': index % 2 === 0, 'bg-card2': index % 2 !== 0 }" style="height: 50em;">
                            <div class="pricing-plan-header">
                                <div class="starting-form">
                                    <span v-if="plan.main_icon == '' || plan.main_icon == null" ><img src="assets/images/icon/price-star.svg" alt=""> {{ plan.name }}</span>
                                    <span v-else  ><i style="color: #e59a22;">{{ plan.main_icon }}</i style="color: yellowgreen;"> {{ plan.name }}</span>
                                </div>
                                <div class="preview-btn">
                                    <a href="#">Preview Sample</a>
                                </div>
                            </div>
                            <div class="price-area">
                                <h3>${{ plan.price }} / <span>Per Job +VAT</span></h3>
                            </div>
                            <div class="">
                                <ul class="priceing-list h-fix mb-4">
                                    <li v-for="point in plan.keypoints">
                                            <div class="icon">
                                            <span v-if="point.icon !== null || point.icon !== ''" style="color: rgb(255, 215, 0); margin-right: 1em;">{{ point.icon }}</span>
                                            <span v-else style="color: rgb(255, 215, 0); margin-right: 1em;">&#10006;</span>
                                        </div>
                                        <p>{{ point.title }}</p>
                                    </li>
                                    <!-- <li>
                                        <div class="icon">
                                            <span v-if="plan.post_for > 0" style="color: rgb(255, 215, 0); margin-right: 1em;">&#10004;</span>
                                            <span v-else style="color: rgb(255, 215, 0); margin-right: 1em;">&#10006;</span>
                                        </div>
                                        <p>Your ad will be posted for {{ plan.post_for?? "30" }} days</p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span v-if="plan.allow_ads == 'yes'" style="color: rgb(255, 215, 0); margin-right: 1em;">&#10004;</span>
                                            <span v-else style="color: rgb(255, 215, 0); margin-right: 1em;">&#10006;</span>
                                        </div>
                                        <p>Unlimited ads</p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span v-if="plan.allow_ads == 'yes'" style="color: rgb(255, 215, 0); margin-right: 1em;">&#10004;</span>
                                            <span v-else style="color: rgb(255, 215, 0); margin-right: 1em;">&#10006;</span>
                                        </div>
                                        <p>Unlimited edits</p>
                                    </li> -->
                                </ul>
                            </div>
                            <!-- <div class="primry-btn-2 custom-btn lg-btn mx-4 py-2">
                                <h5 class="title ms-4">
                                    ---Access Permission Area---
                                </h5>
                            </div>
                            <div class="mt-4">
                                <ul class="priceing-list h-fix">
                                    <li>
                                        <div class="icon">
                                            <span v-if="plan.post_for > 0" style="color: rgb(255, 215, 0); margin-right: 1em;">&#10004;</span>
                                            <span v-else style="color: rgb(255, 215, 0); margin-right: 1em;">&#10006;</span>
                                        </div>
                                        <p>Your ad will be posted for {{ plan.post_for?? "30" }} days</p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span v-if="plan.allow_ads == 'yes'" style="color: rgb(255, 215, 0); margin-right: 1em;">&#10004;</span>
                                            <span v-else style="color: rgb(255, 215, 0); margin-right: 1em;">&#10006;</span>
                                        </div>
                                        <p>Unlimited ads</p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span v-if="plan.allow_edits == 'yes'" style="color: rgb(255, 215, 0); margin-right: 1em;">&#10004;</span>
                                            <span v-else style="color: rgb(255, 215, 0); margin-right: 1em;">&#10006;</span>
                                        </div>
                                        <p>Can change body of your ads after publishing</p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span v-if="plan.allow_edits == 'yes'" style="color: rgb(255, 215, 0); margin-right: 1em;">&#10004;</span>
                                            <span v-else style="color: rgb(255, 215, 0); margin-right: 1em;">&#10006;</span>
                                        </div>
                                        <p>Unlimited edits</p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span v-if="plan.cv_access == 'yes'" style="color: rgb(255, 215, 0); margin-right: 1em;">&#10004;</span>
                                            <span v-else style="color: rgb(255, 215, 0); margin-right: 1em;">&#10006;</span>
                                        </div>
                                        <p>CV Access</p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span v-if="plan.allow_edits == 'yes'" style="color: rgb(255, 215, 0); margin-right: 1em;">&#10004;</span>
                                            <span v-else style="color: rgb(255, 215, 0); margin-right: 1em;">&#10006;</span>
                                        </div>
                                        <p>Pause the ads</p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span v-if="plan.allow_edits == 'yes'" style="color: rgb(255, 215, 0); margin-right: 1em;">&#10004;</span>
                                            <span v-else style="color: rgb(255, 215, 0); margin-right: 1em;">&#10006;</span>
                                        </div>
                                        <p>Delete the ads</p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span v-if="plan.allow_edits == 'yes'" style="color: rgb(255, 215, 0); margin-right: 1em;">&#10004;</span>
                                            <span v-else style="color: rgb(255, 215, 0); margin-right: 1em;">&#10006;</span>
                                        </div>
                                        <p>Close the ads</p>
                                    </li>
                                </ul>
                            </div> -->


                            <div class="d-flex justify-content-center mt-5">
                                <button v-if="!plan.isLoading && plan.price > 0" @click="checkout(plan)" class="primry-btn-2 custom-btn lg-btn" type="button">{{ this.loggedIn == true ? 'Buy Now':'Login To Buy'}} </button>
                                <button v-if="!plan.isLoading && plan.price <= 0" @click="zeroSubscribe(plan)" class="primry-btn-2 custom-btn lg-btn" type="button">{{ this.loggedIn == true ? 'Buy Now':'Login To Buy'}} </button>
                                <button v-if="plan.isLoading" class="primry-btn-2 custom-btn lg-btn" type="button">
                                    <span class="me-3 fs-6 text-white">Processing...</span>
                                    <i class="fa fa-spinner fa-spin text-white ms-3" style="font-size:24px">
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-lg-4 col-md-6">
                        <div class="pricing-plan-card2">
                            <h4>Select An Add-On</h4>
                            <div class="scrolling-wrapper">
                                <div class="pricing-mathord mb-40">
                                    <div class="title-and-btn">
                                        <div class="title">
                                            <h5>Featured Jobs</h5>
                                            <h6>(Start $8 + VAT)</h6>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault1">
                                        </div>
                                    </div>
                                    <ul class="priceing-list">
                                        <li>
                                            <div class="icon"><img src="assets/images/icon/check-icon.svg" alt="">
                                            </div>
                                            <p>You can create &nbsp;<span>4 job post.</span></p>
                                        </li>
                                        <li>
                                            <div class="icon"><img src="assets/images/icon/check-icon.svg" alt="">
                                            </div>
                                            <p>Resume and cover letter review and editing services.</p>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="fa-regular fa-circle-check"></i>
                                            </div>
                                            <p>Job displayed for &nbsp;<span>1 weeks.</span></p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pricing-mathord mb-40">
                                    <div class="title-and-btn">
                                        <div class="title">
                                            <h5>Starting + Jobs</h5>
                                            <h6>(Start $10 + VAT)</h6>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault2">
                                        </div>
                                    </div>
                                    <ul class="priceing-list">
                                        <li>
                                            <div class="icon"><img src="assets/images/icon/check-icon.svg" alt="">
                                            </div>
                                            <p>You can create &nbsp;<span>4 job post.</span></p>
                                        </li>
                                        <li>
                                            <div class="icon"><img src="assets/images/icon/check-icon.svg" alt="">
                                            </div>
                                            <p>Resume and cover letter review and editing services.</p>
                                        </li>
                                        <li>
                                            <div class="icon"><img src="assets/images/icon/check-icon.svg" alt="">
                                            </div>
                                            <p>Job displayed for &nbsp;<span>1 weeks.</span></p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pricing-mathord">
                                    <div class="title-and-btn">
                                        <div class="title">
                                            <h5>Featured Jobs</h5>
                                            <h6>(Start $8 + VAT)</h6>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault4">
                                        </div>
                                    </div>
                                    <ul class="priceing-list">
                                        <li>
                                            <div class="icon"><img src="assets/images/icon/check-icon.svg" alt="">
                                            </div>
                                            <p>You can create &nbsp;<span>4 job post.</span></p>
                                        </li>
                                        <li>
                                            <div class="icon"><img src="assets/images/icon/check-icon.svg" alt="">
                                            </div>
                                            <p>Resume and cover letter review and editing services.</p>
                                        </li>
                                        <li>
                                            <div class="icon"><img src="assets/images/icon/check-icon.svg" alt="">
                                            </div>
                                            <p>Job displayed for &nbsp;<span>1 weeks.</span></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="pricing-plan-card3">
                            <h4>Order Summary</h4>
                            <div class="job-qty-area">
                                <h6>Job Quantity</h6>
                                <div class="quantity d-flex align-items-center">
                                    <div class="quantity-nav nice-number d-flex align-items-center">
                                        <input type="number" value="1" min="1">
                                    </div>
                                </div>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Post jobs (02x$20)</td>
                                        <td>$40</td>
                                    </tr>
                                    <tr>
                                        <td>Featured Job </td>
                                        <td>$8</td>
                                    </tr>
                                    <tr>
                                        <td>Sub Total</td>
                                        <td>$28</td>
                                    </tr>
                                    <tr>
                                        <td>VAT (5%)</td>
                                        <td>$2</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>= $30</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h3 class="total-price">$30</h3>
                            <button class="primry-btn-2 lg-btn" type="submit">Buy Now</button>
                        </div>
                    </div> -->
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="add-area">
                            <p><span>N.B:</span> If are you never posted a job in WORKPAGES? Get 15% off in your first job
                                post.</p>
                            <a class="primry-btn-1" href="#">Get Offer</a>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="advertuse-area">
                            <h4>Why Choose Only WORKPAGES for your business Advertise</h4>
                            <ul>
                                <li>
                                    <p><span>10 thousand</span> users daily visitors</p>
                                </li>
                                <li>
                                    <p>Easy to post a job in this site.</p>
                                </li>
                                <li>
                                    <p>More than <span>5 thousand</span> CV’s in CV Bank.</p>
                                </li>
                                <li>
                                    <p>There are more than <span>20 thousand</span> Recruiters Connected here.</p>
                                </li>
                                <li>
                                    <p>The most powerful things that <span>15 thousand</span> viewers per jobs post.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ========== Pricing Plan End============= -->
    </div>
</template>
<style>
    .custom-btn {
    border-radius: 50px !important;
    }

    .custom-btn::after{
        border-radius: 50px !important;
    }

    .custom-btn:hover svg{
        border-radius: 50px !important;
    }

    .custom-btn::before{
        border-radius: 50px !important;
    }
    .h-fix {
        height: 28em !important;
        overflow-y: scroll;
    }

    .h-fix::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
    background-color: #d0e0eb; /* Background color of the scrollbar track */
    border-radius: 6px; /* Radius of the scrollbar track */
    }

    .h-fix::-webkit-scrollbar-thumb {
    background-color: #010536; /* Color of the scrollbar thumb */
    border-radius: 6px; /* Radius of the scrollbar thumb */
    }

    .h-fix::-webkit-scrollbar-thumb:hover {
    background-color: #000; /* Color of the scrollbar thumb on hover */
    }

    .h-fix::-webkit-scrollbar-button {
    display: none; /* Hide scrollbar buttons */
    }

    .bg-card1 {
        background-color: rgb(255, 255, 242) !important;
    }

    .bg-card2 {
        background-color: rgb(252, 250, 252) !important;
    }

</style>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PlansListing from '../views/JobListing.vue'; // @ is an alias to /src
import { mapGetters } from 'vuex';
import { loadStripe } from '@stripe/stripe-js';

interface Plan {
    id: number;
    isLoading: boolean;
    // Define other properties of the Plan interface
}

@Options({
    data() {

        // this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY as string;

        return {
            // allPlans: [],
            isLoading: false,
        }
    },
    async created() {
        this.stripe = await loadStripe('pk_test_your_publishable_key');
    },
    components: {
        PlansListing,
    },

    computed: {
        ...mapGetters([
            'allPlans',
            'loggedIn',
        ]),
    },
    mounted() {
        this.$store.dispatch('getAllPlans');
    },

    methods: {
        checkout(plan: Plan) {
            plan.isLoading = true;
            if (this.loggedIn == true) {
                var credentials = {
                    'package': plan.id,
                }
                this.$store.dispatch('goToCheckout', credentials);
            } else {
                this.$router.push('/login');
            }

        },

        async zeroSubscribe(plan: Plan) {
            plan.isLoading = true;
            if (this.loggedIn == true) {
                this.$router.push('/free-trial/' + plan.id);
            } else {
                this.$router.push('/login');
            }
        },
    },
})
export default class Plans extends Vue { }
</script>
