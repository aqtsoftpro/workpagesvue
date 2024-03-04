import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store/index';
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import CasualPortal from '../views/CasualPortal.vue'
import CharityPartner from '../views/CharityPartner.vue'
import Login from '../views/Login.vue'
import adminLogin from '../views/adminLogin.vue'
import JobSeekerRegister from '../views/Register-job-seeker.vue'
import EmployerRegister from '../views/Register-employer.vue'
import JobListing from '../views/JobListing.vue'
import JobSearch from '../views/JobSearch.vue'
import CompanyViseJob from '../views/CompanyViseJob.vue'
import JobFeatured from '../views/JobFeatured.vue'
import JobDetails from '../views/JobDetails.vue'
import JobCategories from '../views/JobCategories.vue'
import CategoryJobs from '../views/CategoryJobs.vue'
import Companies from '../views/Companies.vue'
import CompanyDetails from '../views/CompanyDetails.vue'
import CompanyDashboard from '../views/company/CompanyDashboard.vue'
import CompanyApplicationList from '../views/company/CompanyApplication.vue'
import CompanyJobList from '../views/company/CompanyJobList.vue'
import CompanyProfile from '../views/company/CompanyProfile.vue'
import CompanyPlan from '../views/company/CompanyPlan.vue'
import CompanySettings from '../views/company/CompanySettings.vue'
import CompanyRegisterationCompleted from '../views/CompanyRegistrationCompleted.vue'
import AccountVerification from '../views/AccountVerification.vue'
import UserDashboard from '../views/user/UserDashboard.vue'
import UserProfile from '../views/user/UserProfile.vue'
import UserPortfolio from '../views/user/UserPortfolio.vue'
import UserJobs from '../views/user/UserJobs.vue'
import UserBookmarks from '../views/user/UserBookmarks.vue'
import UserEditResume from '../views/user/UserEditResume.vue'
import UserViewResume from '../views/user/UserViewResume.vue'
import UserSettings from '../views/user/UserSettings.vue'
import Plans from '../views/Plans.vue'
import ContactUs from '../views/ContactUs.vue'
import CreateJob from '../views/company/CreateJob.vue'
import UpdateJob from '../views/company/UpdateJob.vue'
import JobApply from '../views/JobApply.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsConditions from '../views/TermsConditions.vue'
import ViewCv from '../views/ViewCv.vue'
import ForgotPassord from '../views/UserForgotPassword.vue'
import ResetPassord from '../views/UserResetPassword.vue'
import UserVerifyLink from '../views/UserVerifyLink.vue'
import Unauthorize from '../views/Unauthorize.vue'
import SendLinkMail from '../views/SendLinkMail.vue'
import JobSeekerDetail from '../views/JobSeekerDetail.vue'
import JobSeekerList from '../views/JobSeekerList.vue'
import CompanySeekers from '../views/company/CompanySeekers.vue'
import CreateAd from '../views/company/CreateAd.vue'
import CompanyJobAd from '../views/company/CompanyJobAd.vue'
import FreeTrial from '../views/FreeTrial.vue'

import { toast } from 'vue3-toastify'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUs
  },
  {
    path: '/casual-portal',
    name: 'casual-portal',
    // component: CasualPortal
    component: CompanySeekers,
    meta: { requiresAuth: true, role: 'Employer' }
  },
  {
    path: '/charity-partner',
    name: 'charity-partner',
    component: CharityPartner
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/superadmin-9487',
    name: 'superadmin-9487',
    component: adminLogin
  },
  {
    path: '/job-seeker-register',
    name: 'job-seeker-register',
    component: JobSeekerRegister
  },
  {
    path: '/employer-register',
    name: 'employer-register',
    component: EmployerRegister
  },
  {
    path: '/employer-registeration-completed',
    name: 'employer-registeration-completed',
    component: CompanyRegisterationCompleted
  },
  {
    path: '/account-verification',
    name: 'account-verification',
    component: AccountVerification
  },
  {
    path: '/job-listing',
    name: 'job-listing',
    component: JobListing
  },

  {
    path: '/job-search',
    name: 'job-search',
    component: JobSearch,
  },

  {
    path: '/company-job/:company_id',
    name: 'company-job',
    component: CompanyViseJob,
  },

  {
    path: '/featured-jobs',
    name: 'featured-jobs',
    component: JobListing
  },
  {  
    path: '/job-details/:job_key/:job_slug',
    name: 'job-details',
    component: JobDetails
  },  
  {
    path: '/job-apply',
    name: 'job-apply',
    component: JobApply
  },  
  {
    path: '/view-cv',
    name: 'view-cv',
    component: ViewCv
  },
  {
    path: '/job-categories',
    name: 'job-categories',
    component: JobCategories
  },
  {
    path: '/category-jobs/:cat_slug',
    name: 'category-jobs',
    component: CategoryJobs
  },
  {
    path: '/companies',
    name: 'companies',
    component: Companies
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassord
  },

  {
    path: '/reset-password/:tokenData',
    name: 'reset-password',
    component: ResetPassord,
    props: true,
  },

  {
    path: '/verify-email',
    name: 'verify-email',
    component: UserVerifyLink,
    props: true,
  },
  {
    path: '/send-email',
    name: 'send-email',
    component: SendLinkMail,
    props: true,
  },

  {
    path: '/job-seeker-list',
    name: 'job-seeker-list',
    component: JobSeekerList,
    meta: { requiresAuth: true, role: 'Employer' }
  },

  {
    path: '/job-seeker/:id',
    name: 'job-seeker',
    component: JobSeekerDetail,
    // meta: { requiresAuth: true, role: 'Employer', recruiter_dash: 'yes' }
  },

  {
    path: '/free-trial/:id',
    name: 'free-trial',
    component: FreeTrial,
    // meta: { requiresAuth: true, role: 'Employer', recruiter_dash: 'yes' }
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: Unauthorize,
  },

  {
    path: '/company',
    children: [
      {
        path: '/company/dashboard',
        component: CompanyDashboard,
        meta: { requiresAuth: true, role: 'Employer' }
      },
      {
        path: '/company/profile',
        component: CompanyProfile,
        meta: { requiresAuth: true, role: 'Employer' }
      },
      {
        path: '/company/job-list',
        component: CompanyJobList,
        meta: { requiresAuth: true, role: 'Employer', recruiter_dash: 'yes' }
      },
      {
        path: '/company/applications',
        component: CompanyApplicationList,
        meta: { requiresAuth: true, role: 'Employer', recruiter_dash: 'yes' }
      },
      {
        path: '/company/create-job',
        component: CreateJob,
        meta: { requiresAuth: true, role: 'Employer', recruiter_dash: 'yes' }
      },
      {
        path: '/company/update-job/:job_key/:job_slug',
        component: UpdateJob,
        meta: { requiresAuth: true, role: 'Employer', recruiter_dash: 'yes' }
      },      
      {
        path: '/company/plan',
        component: CompanyPlan,
        meta: { requiresAuth: true, role: 'Employer' }
      },
      {
        path: '/company/settings',
        component: CompanySettings,
        meta: { requiresAuth: true, role: 'Employer' }
      },

      {
        path: '/company/jobseekers',
        component: CompanySeekers,
        meta: { requiresAuth: true, role: 'Employer', recruiter_dash: 'yes' }
      },

      {
        path: '/company/post-job-ad',
        component: CreateAd,
        meta: { requiresAuth: true, role: 'Employer', recruiter_dash: 'yes' }
      },

      {
        path: '/company/ad-list',
        component: CompanyJobAd,
        meta: { requiresAuth: true, role: 'Employer', recruiter_dash: 'yes' }
      },
    ]
  },
  // recruiter_dash: 'yes'
  {
    path: '/user',
    children: [
      {
        path: '/user/dashboard',
        component: UserDashboard,
        meta: { requiresAuth: true, role: 'Job Seeker'}
      },
      {
        path: '/user/profile',
        component: UserProfile,
        meta: { requiresAuth: true, role: 'Job Seeker'}
      },
      {
        path: '/user/portfolio',
        component: UserPortfolio,
        meta: { requiresAuth: true, role: 'Job Seeker'}
      },
      {
        path: '/user/jobs',
        component: UserJobs,
        meta: { requiresAuth: true, role: 'Job Seeker'}
      },
      {
        path: '/user/bookmarks',
        component: UserBookmarks,
        meta: { requiresAuth: true, role: 'Job Seeker'}
      },
      {
        path: '/user/edit-resume',
        component: UserEditResume,
        meta: { requiresAuth: true, role: 'Job Seeker'}
      },
      {
        path: '/user/view-resume',
        component: UserViewResume,
        meta: { requiresAuth: true, role: 'Job Seeker'}
      },
      {
        path: '/user/settings',
        component: UserSettings,
        meta: { requiresAuth: true, role: 'Job Seeker'}
      },
    ]
  },
  {
    path: '/company-details/:id',
    name: 'companyDetails',
    component: CompanyDetails
  },
  {
    path: '/plans',
    name: 'plans',
    component: Plans
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUs
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-conditions',
    name: 'terms-conditions',
    component: TermsConditions
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes,
});

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  window.scrollTo(0, 0);

  if (to.meta.requiresAuth) {
    const isLoggedIn = store.state.loggedIn;
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!isLoggedIn) {
      // User is not logged in, redirect to login or handle accordingly
      next('/login');
      return;
    }

    // Check if the user is logged in

    if (!currentUser || !currentUser[0].roles) {
      // User is not logged in or doesn't have roles, redirect to login or handle accordingly
      next('/login');
      return;
    }

    //Check if the user has the required role for the route
    if (to.meta.recruiter_dash && currentUser[0].sub_accesses.length == 0) {
      // User doesn't have the required role, redirect to unauthorized page or handle accordingly
      toast.error('Please purchase a plan to get access', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      window.setTimeout(() => {
        next('/plans');
      }, 2000);
      return;
    }
    if (to.meta.recruiter_dash && currentUser[0].sub_accesses[0].recruiter_dash != to.meta.recruiter_dash) {
      // User doesn't have the required role, redirect to unauthorized page or handle accordingly
      toast.error('Please purchase a plan to get access', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      window.setTimeout(() => {
        next('/plans');
      }, 2000);
      return;
    }

    //Check if the user has the required role for the route
    if (to.meta.allow_ads && currentUser[0].sub_accesses[0].allow_ads != to.meta.allow_ads) {
      // User doesn't have the required role, redirect to unauthorized page or handle accordingly
      next('/plans');
      toast.error('Please purchase a plan to get access', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }

    //Check if subscrition give recruiter access..
    // if (to.meta.role && currentUser[0].roles[0].name != to.meta.role) {
    //   // User doesn't have the required role, redirect to unauthorized page or handle accordingly
    //   next('/unauthorized');
    //   return;
    // }
  }

  // Continue to the route
  next();
});

export default router
