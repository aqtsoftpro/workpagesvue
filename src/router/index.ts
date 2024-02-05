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
    component: CasualPortal
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
    path: '/company',
    children: [
      {
        path: '/company/dashboard',
        component: CompanyDashboard,
        meta: { requiresAuth: true, role1: 'Employer' }
      },
      {
        path: '/company/profile',
        component: CompanyProfile,
        meta: { requiresAuth: true, role1: 'Employer' }
      },
      {
        path: '/company/job-list',
        component: CompanyJobList,
        meta: { requiresAuth: true, role1: 'Employer' }
      },
      {
        path: '/company/applications',
        component: CompanyApplicationList,
        meta: { requiresAuth: true, role1: 'Employer' }
      },
      {
        path: '/company/create-job',
        component: CreateJob,
        meta: { requiresAuth: true, role1: 'Employer' }
      },
      {
        path: '/company/update-job/:job_key/:job_slug',
        component: UpdateJob,
        meta: { requiresAuth: true, role1: 'Employer' }
      },      
      {
        path: '/company/plan',
        component: CompanyPlan,
        meta: { requiresAuth: true, role1: 'Employer' }
      },
      {
        path: '/company/settings',
        component: CompanySettings,
        meta: { requiresAuth: true, role1: 'Employer' }
      },
    ]
  },
  {
    path: '/user',
    children: [
      {
        path: '/user/dashboard',
        component: UserDashboard,
        meta: { requiresAuth: true}
      },
      {
        path: '/user/profile',
        component: UserProfile,
        meta: { requiresAuth: true}
      },
      {
        path: '/user/portfolio',
        component: UserPortfolio,
        meta: { requiresAuth: true}
      },
      {
        path: '/user/jobs',
        component: UserJobs,
        meta: { requiresAuth: true}
      },
      {
        path: '/user/bookmarks',
        component: UserBookmarks,
        meta: { requiresAuth: true, }
      },
      {
        path: '/user/edit-resume',
        component: UserEditResume,
        meta: { requiresAuth: true, }
      },
      {
        path: '/user/view-resume',
        component: UserViewResume,
        meta: { requiresAuth: true, }
      },
      {
        path: '/user/settings',
        component: UserSettings,
        meta: { requiresAuth: true, }
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
    if (to.meta.role1 && !currentUser[0].roles[0].name == to.meta.role1) {
      // User doesn't have the required role, redirect to unauthorized page or handle accordingly
      next('/unauthorized');
      return;
    }
  }

  // Continue to the route
  next();
});

export default router
