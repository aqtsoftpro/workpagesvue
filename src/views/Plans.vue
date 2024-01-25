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
                    <div v-for="plan in allPlans" class="col-lg-4 col-md-6">
                        <div class="pricing-plan-card1">
                            <div class="pricing-plan-header">
                                <div class="starting-form">
                                    <span><img src="assets/images/icon/price-star.svg" alt=""> {{ plan.name
                                    }}</span>
                                </div>
                                <div class="preview-btn">
                                    <a href="#">Preview Sample</a>
                                </div>
                            </div>
                            <div class="price-area">
                                <h3>${{ plan.price }} / <span>Per Job +VAT</span></h3>
                            </div>

                            <ul class="priceing-list">
                                <input type="hidden" name="">
                                <li>
                                    <div class="icon"><img src="assets/images/icon/check-icon.svg" alt=""></div>
                                    <p>You can create more job post.</p>
                                </li>
                                <li>
                                    <div class="icon"><img src="assets/images/icon/check-icon.svg" alt=""></div>
                                    <p>Resume and cover letter review and editing services.</p>
                                </li>
                                <li>
                                    <div class="icon"><img src="assets/images/icon/check-icon.svg" alt=""></div>
                                    <p>Priority access to job listings and job seekers.</p>
                                </li>
                                <li>
                                    <div class="icon"><img src="assets/images/icon/check-icon.svg" alt=""></div>
                                    <p>Job displayed for &nbsp;<span>35 days.</span></p>
                                </li>
                                <li>
                                    <div class="icon"><img src="assets/images/icon/check-icon.svg" alt=""></div>
                                    <p>A dedicated account manager or career counselor.</p>
                                </li>
                                <li>
                                    <div class="icon"><img src="assets/images/icon/check-icon.svg" alt=""></div>
                                    <p><span>Premium</span>&nbsp; support always.</p>
                                </li>
                            </ul>

                            <div class="d-flex justify-content-center mt-5">
                                <button @click="checkout(plan.id)" class="primry-btn-2 custom-btn lg-btn" type="button">Buy Now </button>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4 col-md-6">
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
                                            <div class="icon"><img src="assets/images/icon/check-icon.svg" alt="">
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
                    </div>
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

</style>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PlansListing from '../views/JobListing.vue'; // @ is an alias to /src
import { mapGetters } from 'vuex';
import { loadStripe } from '@stripe/stripe-js';


@Options({
    data() {

        // this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY as string;

        return {
            // allPlans: [],
            plans: [],
        }
    },
    async created() {
        this.stripe = await loadStripe('pk_test_your_publishable_key');
    },
    components: {
        PlansListing,
    },

    computed: {
        ...mapGetters(['allPlans']),
    },
    mounted() {
        this.$store.dispatch('getAllPlans');
    },

    methods: {
        checkout(id: string | number) {
            var credentials = {
                'package': id,
            }
            this.$store.dispatch('goToCheckout', credentials);
        }
    },
})
export default class Plans extends Vue { }
</script>
