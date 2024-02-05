<template>    
<div class="top-bar3">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 d-flex align-items-center justify-content-sm-between justify-content-center">

                <div class="header-main-logo d-lg-block d-none">
                    <router-link to="/"><img alt="image" class="img-fluid" src="/assets/images/work-pages-logo-cropped.png" width="250"></router-link>
                </div>

                <div class="top-bar-right">
                    <div class="social-area">
                        <ul>
                            <li v-if="globalSettings['_social_media_facebook']">
                                <a v-bind:href="globalSettings['_social_media_facebook']"><i class="bx bxl-facebook"></i></a>
                            </li>
                            <li v-if="globalSettings['_social_media_twitter']">
                                <a v-bind:href="globalSettings['_social_media_twitter']"><i class="bx bxl-twitter"></i></a>
                            </li>
                            <li v-if="globalSettings['_social_media_linkedin']">
                                <a v-bind:href="globalSettings['_social_media_linkedin']"><i class="bx bxl-linkedin"></i></a>
                            </li>
                            <li v-if="globalSettings['_social_media_instagram']">
                                <a to="globalSettings['_social_media_instagram']"><i class="bx bxl-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

<header class="header-area style-4">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="menu-area">
                    <div class="header-logo">
                        <router-link to="/"><img alt="image" class="img-fluid" src="assets/images/work-pages-logo-cropped.png"></router-link>
                    </div>
                    
                    <div class="main-menu">
                        <div class="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
                            <div class="mobile-logo-wrap">
                                <router-link to="/"><img alt="image" src="assets/images/work-pages-logo-cropped.png" width="200"></router-link>
                            </div>
                            <div @click="openMobileMenuToggle" class="menu-close-btn">
                                <i class="bi bi-x-lg"></i>
                            </div>
                        </div>
                        
                            <ul class="menu-list">
                                <li>
                                    <router-link to="/" @click="closeResponsiveMenu">Home</router-link>
                                </li>
                                <li>
                                    <router-link to="/about-us" @click="closeResponsiveMenu">About Us</router-link>
                                </li>
                                <li>
                                    <router-link to="/plans" @click="closeResponsiveMenu">Price</router-link>
                                </li>
                                <!-- <li>
                                    <router-link to="/casual-portal" @click="closeResponsiveMenu">Casual Portal</router-link>
                                </li> -->
                                <li>
                                    <router-link to="/charity-partner" @click="closeResponsiveMenu">Charity Partner</router-link>
                                </li>

                                <!-- <li>
                                    <router-link to="/job-listing" @click="closeResponsiveMenu">Job Listing</router-link>
                                </li>
                                <li>
                                    <router-link to="/job-categories" @click="closeResponsiveMenu">Job Categories</router-link>
                                </li>
                                <li>
                                    <router-link to="/companies" @click="closeResponsiveMenu">companies</router-link>
                                </li> -->

                                <li>
                                    <router-link to="/contact-us" @click="closeResponsiveMenu">Contact</router-link>
                                </li>
                            </ul>

                            <div class="for-mobile-menu d-lg-none d-block">
                                <div class="sign-in-btn mb-10">
                                    <router-link class="primry-btn-1 user-btn-custom" to="/login" @click="closeResponsiveMenu">
                                        <i class="bi bi-key-fill" style="margin-right:10px"></i>
                                            Sign In
                                    </router-link>
                                </div>
                                <div class="post-job-btn mb-10">
                                    <router-link class="primry-btn-1 user-btn-custom" :to="{path:'/job-seeker-register'}" @click="closeResponsiveMenu">
                                        <i class="bi bi-person-circle" style="margin-right:10px"></i>
                                            Job Seeker Signup
                                    </router-link>
                                </div>
                                <div class="post-job-btn mb-10">
                                    <router-link class="primry-btn-1 user-btn-custom" :to="{path:'/employer-register'}" @click="closeResponsiveMenu">
                                        <i class="bi bi-person-circle" style="margin-right:10px"></i>
                                            Employer Signup
                                    </router-link>
                                </div>
                                <div class="social-area">
                                    <ul>
                                        <li v-if="globalSettings['_social_media_facebook']">
                                            <a v-bind:href="globalSettings['_social_media_facebook']"><i class="bx bxl-facebook"></i></a>
                                        </li>
                                        <li v-if="globalSettings['_social_media_twitter']">
                                            <a v-bind:href="globalSettings['_social_media_twitter']"><i class="bx bxl-twitter"></i></a>
                                        </li>
                                        <li v-if="globalSettings['_social_media_linkedin']">
                                            <a v-bind:href="globalSettings['_social_media_linkedin']"><i class="bx bxl-linkedin"></i></a>
                                        </li>
                                        <li v-if="globalSettings['_social_media_instagram']">
                                            <a to="globalSettings['_social_media_instagram']"><i class="bx bxl-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>

                    <div class="header-main-logo d-none">
                        <router-link to="/"><img alt="image" class="img-fluid" src="assets/images/work-pages-logo-cropped.png"></router-link>
                    </div>
                    <div  class="nav-right d-flex jsutify-content-end align-items-center">
                        <ul>
                        <!-- <ul v-if="checkCountryIP == 'PK' || checkCountryIP == 'AUS'"> -->
                            <li v-if="!loggedIn" class="d-md-flex d-none">
                                <div class="create-profile-btn">
                                    <router-link class="primry-btn-1 user-btn-custom" to="/login">
                                        <i class="bi bi-key-fill" style="margin-right:10px"></i>
                                            Sign In
                                    </router-link>
                                </div>
                            </li>                                
                            <li v-if="!loggedIn" class="d-md-flex d-none">
                                <div class="sign-in-btn">
                                    <router-link class="primry-btn-1 user-btn-custom" :to="{path:'/job-seeker-register'}">
                                        <i class="bi bi-person-circle" style="margin-right:10px"></i>
                                            Job Seeker Signup
                                    </router-link>
                                </div>
                            </li>
                            <li v-if="!loggedIn" class="d-md-flex d-none">
                                <div class="sign-in-btn">
                                    <router-link class="primry-btn-1 user-btn-custom" :to="{path:'/employer-register'}">
                                        <i class="bi bi-person-circle" style="margin-right:10px"></i>
                                            Employer Signup</router-link>
                                </div>
                            </li>
                            <li v-if="loggedIn" class="d-md-flex d-none">
                                <div class="sign-in-btn">
                                    <router-link v-if="this.role == 'Job Seeker'" class="primry-btn-1 user-btn-custom" :to="{path:'/user/dashboard'}">
                                        <i class="bi bi-speedometer2" style="margin-right:10px"></i>
                                            Dashboard</router-link>
                                    <router-link v-if="this.role == 'Employer'" class="primry-btn-1 user-btn-custom" :to="{path:'/company/dashboard'}">
                                        <i class="bi bi-speedometer2" style="margin-right:10px"></i>
                                            Dashboard</router-link>
                                </div>
                            </li>
                            <li v-if="loggedIn" class="d-md-flex d-none">
                                <div class="sign-in-btn">
                                    <router-link v-if="this.role == 'Job Seeker'" class="primry-btn-1 user-btn-custom" :to="{path:'/user/settings'}">
                                        <i class="bi bi-speedometer2" style="margin-right:10px"></i>
                                            Settings</router-link>
                                    <router-link v-if="this.role == 'Employer'" class="primry-btn-1 user-btn-custom" :to="{path:'/company/settings'}">
                                        <i class="bi bi-speedometer2" style="margin-right:10px"></i>
                                            Settings</router-link>
                                </div>
                            </li>
                            <li v-if="loggedIn" class="d-md-flex d-none">
                                <div class="sign-in-btn">
                                    <a href="#" class="primry-btn-1 user-btn-custom" @click="logout">
                                        <i class="bi bi-door-closed" style="margin-right:10px"></i>
                                            Logout</a>
                                </div>
                            </li>
                        </ul>
                        <div class="sidebar-button mobile-menu-btn ">
                            <i class="bi bi-list"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>    

  
  
    <router-view/>


<footer class="newletter-container">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 mx-auto">
                <div class="newletter-section">
                    <div class="section-title1 text-center">
                        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                    </div>

                    <div class="input-group">
                        <input v-model="newletter.newsletter_email" type="email" class="form-control" name="newsletter_email" id="newsletter_email" placeholder="Enter your email"/>
                        <span class="input-group-btn">
                        <button class="primry-btn-2 lg-btn" @click="subscribe" type="button">Subscribe Now</button>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    </div>
</footer>

  <footer class="footer1">
        <div  class="container">
            <div  class="row justify-content-start">
            <!-- <div v-if="loggedIn" class="row justify-content-start"> -->
                <div class="col-lg-3 col-md-4 col-sm-6 mb--50 d-flex justify-content-sm-start justify-content-center">
                    <!-- <div v-if="role == 3" class="col-lg-3 col-md-4 col-sm-6 mb--50 d-flex justify-content-sm-start justify-content-center"></div> -->
                    <div class="footer-widget">
                        <div class="widget-title">
                            <h5>Links</h5>
                        </div>
                        <div class="menu-container">
                            <ul>
                                <li><router-link to="/job-listing">Job Listing <i class='bx bx-up-arrow-alt'></i></router-link></li>
                                <li><router-link to="/job-categories">Job Categories <i class='bx bx-up-arrow-alt'></i></router-link></li>
                                <li><router-link to="/companies">Companies <i class='bx bx-up-arrow-alt'></i></router-link></li>
           
                            </ul>
                        </div>
                    </div>
                </div>
                <div v-if="role == 2" class="col-lg-3 col-md-4 col-sm-6 mb--50 d-flex justify-content-md-center justify-content-sm-end justify-content-center">
                    <div class="footer-widget">
                        <div class="widget-title">
                            <h5>For Candidate’s</h5>
                        </div>
                        <div class="menu-container">
                            <ul>
                                <!-- <li><router-link to="/user/profile">Create Resume <i class='bx bx-up-arrow-alt'></i></router-link></li>
                                <li><router-link to="/job-categories">Browse Categories <i class='bx bx-up-arrow-alt'></i></router-link></li> -->
                                <li><router-link to="/user/bookmarks">Save Jobs List <i class='bx bx-up-arrow-alt'></i></router-link></li>
                                <li><router-link to="/job-listing">Browse Jobs <i class='bx bx-up-arrow-alt'></i></router-link></li>
                                <li><router-link to="/user/dashboard">Candidate Dashboard <i class='bx bx-up-arrow-alt'></i></router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div v-if="role == 3" class="col-lg-3 col-md-4 col-sm-6 mb--50 d-flex justify-content-lg-center justify-content-md-end justify-content-sm-start justify-content-center">
                    <div class="footer-widget">
                        <div class="widget-title">
                            <h5>For Employer’s</h5>
                        </div>
                        <div class="menu-container">
                            <ul>
                                <li><router-link to="/company/create-job">Post A Job <i class='bx bx-up-arrow-alt'></i></router-link></li>
                                <li><router-link to="/company/dashboard">Browse Candidates <i class='bx bx-up-arrow-alt'></i></router-link></li>
                                <li><router-link to="/company/job-list">Job Packages <i class='bx bx-up-arrow-alt'></i></router-link></li>
                                <li><router-link to="/company/job-list">Jobs Featured <i class='bx bx-up-arrow-alt'></i></router-link></li>
                                <li><router-link to="/company/dashboard">Employer Dashboard <i class='bx bx-up-arrow-alt'></i></router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-end justify-content-center">
                    <!--<div class="footer-widget four">
                        <div class="widget-title">
                            <h5>Download App</h5>
                        </div>
                        <div class="app-list">
                            <ul>
                                <li>
                                    <router-link to="/"><img src="/assets/images/icon/apple-app.svg" alt=""></router-link>
                                </li>
                                <li>
                                    <router-link to="/"><img src="/assets/images/icon/google-play.svg" alt=""></router-link>
                                </li>
                            </ul>
                        </div>
                    </div>-->
                </div>
            </div>
            <div class="footer-btm">

                <div class="row align-items-center">
                    <div class="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                        <div class="support">
                            <div class="icon">
                                <img src="/assets/images/icon/footer-support-icon.svg" alt="">
                            </div>
                            <div class="content">
                                <h5>Support Line:</h5>
                                <router-link to="">{{ globalSettings['_support_line']  }}</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 d-flex justify-content-lg-end justify-content-center">
                        <div class="footer-btm-menu">
                            <ul>
                                <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                                <li><router-link to="/terms-conditions">Terms of Services</router-link></li>
                                <!-- <li><router-link to="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3634979,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866">Our Sitemap</router-link></li> -->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row border-top align-items-center">
                    <div class="col-lg-6 d-flex  justify-content-lg-start justify-content-center">
                        <div class="copyright-area">
                            <p>©Copyright {{ currentYear }} <router-link to="/">Workpages</router-link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</footer>

</template>
<script>
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import axios from 'axios';

Vue.prototype.$globalVar = "Shared Data";

@Options({
    data() {
        return {
            openMobileMenu: false,
            user: {},
            role: null,
            globalSettings: [],
            checkCountryIP:'',
            currentYear: new Date().getFullYear(),
            newletter: {
                newsletter_email: '',
            }
        }
    },
    computed: {
        ...mapGetters([
            'currentUser',
            'loggedIn',
            'globalVariables'
        ])
    },
    methods: {
      openMobileMenuToggle() {
        this.openMobileMenu = !this.openMobileMenu
      },
      // Navigation with responsive
      closeResponsiveMenu() 
        {
            $('.main-menu').removeClass('show-menu');
        },
        logout() {
          this.$store.dispatch('logout');
      },
    getCountryIP() {
            // Use an IP geolocation service like ipinfo.io to determine the user's country
            axios.get('https://ip-api.com/json/')
            .then(response => {
                this.checkCountryIP = response.data.countryCode;
                console.log(this.checkCountryIP);
            })
            .catch(error => {

            });
        },

    subscribe() 
        {
            var newsletter = {
            'newsletter_email': this.newletter.newsletter_email,
        }
            this.$store.dispatch('subscribe', newsletter).then(response => {
                this.newletter.newsletter_email = '';
            });
        }

    },
    mounted() {
        if(this.loggedIn){
            this.user = JSON.parse(this.currentUser)[0]
            this.role = this.user.roles[0].name
        }
        this.$store.dispatch('getGlobalVariables');

        
        // if(!this.loggedIn){
        //     this.$router.push('/')
        // } else {
        //     let user = JSON.parse(this.currentUser)
        //     if(user[0].roles[0].name == 'Employer'){
        //         this.$router.push('/company/dashboard')
        //     } else {
        //         this.$router.push('/user/dashboard')
        //     }
        // }
        this.getCountryIP();
    },
    watch: {
        globalVariables() {
            // this.globalVariables.forEach((item) => {
               
            //     this.globalSettings[item.meta_key] = item.meta_val
              
            // })
            
            this.globalSettings = this.globalVariables;
            this.$globalVar = this.globalVariables;
        }
    }
})    
export default class App extends Vue {}
</script>
<style lang="scss">

</style>
