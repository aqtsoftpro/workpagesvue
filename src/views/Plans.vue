<template>
    <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner" :style="bgImage">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="banner-content text-center">
                            <h1 :style="textColor">Pricing Plan</h1>
                            <span></span>
                            <!-- <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item" :style="textColor"><router-link to="/" :style="textColor">Home</router-link></li>
                                    <li class="breadcrumb-item active" :style="textColor" aria-current="page">Pricing Plan</li>
                                </ol>
                            </nav> -->
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
                    <Splide :options="{
                        type: 'loop', perPage: 3, pagination: false, breakpoints: {
                            1068: { perPage: 2 }, // For screens <= 768px
                            768: { perPage: 1 }, // For screens <= 576px
                        }
                    }" aria-label="My Favorite Images">
                        <SplideSlide v-for="(plan, index) in allPlans" :key="'plan-'+plan.id+'-'+index">
                            <div class="col-lg-12 col-md-12">
                                <div class="pricing-plan-card1 mx-2 bg-card1"
                                    style="height: 50em;">
                                    <div class="pricing-plan-header">
                                        <div class="starting-form">
                                            <span style="background-color: #010536; color: white; min-height: 5rem; "><img
                                                    src="assets/images/icon/site-fav.png" alt="" width="35"> {{
                                                plan.name }}</span>
                                            <!-- <span v-else  ><i style="color: #e59a22;">{{ plan.main_icon }}</i style="color: yellowgreen;"> {{ plan.name }}</span> -->
                                        </div>
                                        <!-- <div class="preview-btn">
                                            <a href="#">Preview Sample</a>
                                        </div> -->
                                    </div>
                                    <div class="price-area">
                                        <h3>WST ${{ plan.price }}
                                            <!-- / <span>Per Job +VAT</span> -->
                                        </h3>
                                    </div>
                                    <div class="">
                                        <ul class="priceing-list h-fix mb-4">
                                            <li v-for="point in plan.keypoints">
                                                <div class="icon">
                                                    <span v-if="point.icon !== null || point.icon !== ''"
                                                        style="color: #010536; margin-right: 1em;">{{
                                                        point.icon }}</span>
                                                    <span v-else
                                                        style="color: #010536; margin-right: 1em;">&#10006;</span>
                                                </div>
                                                <p>{{ point.title }}</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div v-if="this.paymentMethodCreditCard == 1" class="d-flex justify-content-center mt-5">
                                        <button v-if="this.activePlanId == null && !plan.isLoading && plan.price > 0"
                                            @click="checkout(plan)" class="primry-btn-2 custom-btn lg-btn"
                                            type="button">{{ this.loggedIn == true ? 'Buy Now' : 'Login To Buy' }}
                                        </button>
                                        <button
                                            v-if="this.activePlanId !== null && !plan.isLoading && plan.price > 0 && this.activePlanId == plan.id"
                                            class="primry-btn-2 custom-btn lg-btn" type="button" @click="unsubscribe(plan)">Unsubscribed
                                        </button>
                                        <button v-if="!plan.isLoading && plan.price == 0" @click="zeroSubscribe(plan)"
                                            class="primry-btn-2 custom-btn lg-btn" type="button">{{ this.loggedIn ==
                                            true ? 'Buy Now':'Login To Buy'}} </button>
                                        <button v-if="plan.isLoading" class="primry-btn-2 custom-btn lg-btn"
                                            type="button">
                                            <span class="me-3 fs-6 text-white">Processing...</span>
                                            <i class="fa fa-spinner fa-spin text-white ms-3" style="font-size:24px">
                                            </i>
                                        </button>
                                    </div>
                                    <div v-else class="d-flex justify-content-center mt-5">
                                        <button v-if="this.activePlanId == null && !plan.isLoading && plan.price > 0"
                                            @click="subscribePackage(plan)" class="primry-btn-2 custom-btn lg-btn"
                                            type="button">{{ this.loggedIn == true ? 'Subscribe Now' : 'Login To Buy' }}
                                        </button>
                                        <button
                                            v-if="this.activePlanId !== null && !plan.isLoading && plan.price > 0 && this.activePlanId == plan.id"
                                            class="primry-btn-2 custom-btn lg-btn" type="button" @click="unsubscribe(plan)">Unsubscribed
                                        </button>
                                        <button v-if="!plan.isLoading && plan.price == 0 && this.activePlanId == null" @click="zeroSubscribe(plan)"
                                            class="primry-btn-2 custom-btn lg-btn" type="button">{{ this.loggedIn ==
                                            true ? 'Subscribe Now':'Login To Buy'}} </button>
                                        <button v-if="plan.isLoading" class="primry-btn-2 custom-btn lg-btn"
                                            type="button">
                                            <span class="me-3 fs-6 text-white">Processing...</span>
                                            <i class="fa fa-spinner fa-spin text-white ms-3" style="font-size:24px">
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="add-area">
                            <p><span>Special Offer for First Time Users!</span> New to WORKPAGES? Post your first job for FREE!</p>
                        </div>
                        <div class="add-area" style="gap: 1em;" >
                            <p>Click below to claim your offer:</p>
                            <a class="primry-btn-1" href="#">Post a job for free</a>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="advertuse-area">
                            <h4>Why Choose WORKPAGES for Your Business Advertising?</h4>
                            <ul>
                                <li>
                                    <p><span>Wide Audience Reach: </span> Showcase your jobs to diverse and active audience</p>
                                </li>
                                <li>
                                    <p><span>Simple Job Posting: </span> Post jobs effortlessly and quickly</p>
                                </li>
                                <li>
                                    <p><span>Extensive CV Database: </span>Find the right candidates with access to a large pool of CVs</p>
                                </li>
                                <li>
                                    <p><span>Active Recruiter Network: </span>Connect with a growing community of bussinesses and recruites</p>
                                </li>
                                <li>
                                    <p><span>High Job Engagement: </span>Get your job posts noticed by the right candidates</p>
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
<style scoped>
.custom-btn {
    border-radius: 50px !important;
}

.custom-btn::after {
    border-radius: 50px !important;
}

.custom-btn:hover svg {
    border-radius: 50px !important;
}

.custom-btn::before {
    border-radius: 50px !important;
}

.h-fix {
    height: 28em !important;
    overflow-y: scroll;
}

.h-fix::-webkit-scrollbar {
    width: 8px;
    /* Width of the scrollbar */
    background-color: #050a46;
    /* Background color of the scrollbar track */
    border-radius: 6px;
    /* Radius of the scrollbar track */
}

.h-fix::-webkit-scrollbar-thumb {
    background-color: #010536;
    /* Color of the scrollbar thumb */
    border-radius: 6px;
    /* Radius of the scrollbar thumb */
}

.h-fix::-webkit-scrollbar-thumb:hover {
    background-color: #000;
    /* Color of the scrollbar thumb on hover */
}

.h-fix::-webkit-scrollbar-button {
    display: none;
    /* Hide scrollbar buttons */
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
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { debounce } from 'lodash';
// import '../../public/assets/js/crousel.js'; // Adjust the path if necessary


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
            activePlanId: null,
            bgImage: '',
            textColor: '',
            paymentMethodDirectDeposite:'',
            paymentMethodCreditCard:'',  
            subsUser: null,      
        }
    },
    async created() {
        this.stripe = await loadStripe('pk_test_your_publishable_key');
    },
    components: {
        PlansListing,
        Splide,
        SplideSlide,
    },

    computed: {
        ...mapGetters([
            'allPlans',
            'loggedIn',
            'activeSub',
            'globalVariables',
            'currentUser',

        ]),
    },
    mounted() {
        this.$store.dispatch('getAllPlans');
        if (this.loggedIn == true) {
            this.$store.dispatch('getAciveSub');
        }
        this.$store.dispatch('getGlobalVariables');
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

        subscribePackage(plan: Plan) {
 
            plan.isLoading = true;
            if (this.loggedIn == true) {
                var credentials = {
                    'package': plan.id,
                }
                this.$store.dispatch('goToSubscribePackage', credentials);
            } else {
                this.$router.push('/login');
            }

        },

        subscribe(plan: Plan) {
            plan.isLoading = true;
            if (this.loggedIn == true) {
                var credentials = {
                    'package': plan.id,
                }
                this.$store.dispatch('goToSubscribe', credentials);
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

        unsubscribe(plan: any){

            plan.isLoading = true;    
            const payload = {
            unsubscribe: true,
        };
        this.$store.dispatch('unSubscribe', payload);
        setTimeout(() => {
                window.location.reload();
            }, 2000);
        },


    },

    watch: {
        activeSub() {
            this.activePlanId = this.activeSub?.package_id ?? null;
            console.log("activePlanId", this.activePlanId); 
        },
        globalVariables() {

            this.bgImage = 'background-image: url(' + this.globalVariables._banner_image + ')';
            this.textColor = 'color: ' + this.globalVariables._banner_text_color + ' !important;';
            this.paymentMethodDirectDeposite = this.globalVariables._payment_method_direct_deposite;
            this.paymentMethodCreditCard = this.globalVariables._payment_method_credit_card;
            console.log("paymentMethodDirectDeposite", this.paymentMethodDirectDeposite);
            console.log("paymentMethodCreditCard", this.paymentMethodCreditCard);
        }
    }
})
export default class Plans extends Vue { }
</script>
