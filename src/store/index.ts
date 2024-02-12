import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import router from '@/router';
import { apiUrl, adminDashboardUrl, adminDashboardDomain } from '../utils/config';
import { loadStripe } from '@stripe/stripe-js';


export default createStore({
  state: {
    adminDashboardDomain: adminDashboardDomain,
    currentUser: (localStorage.getItem('currentUser')) ? localStorage.getItem('currentUser') : null,
    userSetting: [],
    userSocials: {},
    userPortfolio: [],
    token: (localStorage.getItem('token')) ? localStorage.getItem('token') : null,
    loggedIn: (localStorage.getItem('token')) ? true : false,
    designations: [],
    qualifications: [],
    locations: [],
    states: [],
    languages: [],
    categories: [],
    trending_jobs_categories: [],
    company: null,
    companies: [],
    topCompanies: [],
    companiesListing: [],
    companyTypes: [],
    companyJobs: [],

    jobTypes: [],
    job: null,
    jobDetail: [],
    jobs: [],
    latestJobs: [],
    featuredJobs: [],
    jobsListing: [],
    updateJob: [],
    updateJobStatus: [],

    searchResult: [],
    relatedJobs: [],
    candidateApplications: [],
    candidateAppliedOnJob: [],
    companyApplications: [],
    globalVariables: [],
    suburbs: [],
    companyInfo: null,
    companyReviews: null,
    homeStats: [],
    testimonials: [],

    // filters 
    jobTypeFilters: [],
    jobPostedFilters: [],
    salaryRangeFilters: [],

    companyTypeFilters: [],
    companyLocationFilters: [],

    cmsPages: [],

    allPlans: [],
    companySubscriptions: [],

  },
  getters: {
    adminDashboardDomain: state => state.adminDashboardDomain,
    currentUser: state => state.currentUser,
    userSetting: state => state.userSetting,
    userSocials: state => state.userSocials,
    userPortfolio: state => state.userPortfolio,
    token: state => state.token,
    designations: state => state.designations,
    qualifications: state => state.qualifications,
    locations: state => state.locations,
    states: state => state.states,
    languages: state => state.languages,
    categories: state => state.categories,
    trending_jobs_categories: state => state.trending_jobs_categories,
    company: state => state.company,
    companies: state => state.companies,
    topCompanies: state => state.topCompanies,
    companiesListing: state => state.companiesListing,
    companyTypes: state => state.companyTypes,
    companyJobs: state => state.companyJobs,

    loggedIn: state => state.loggedIn,
    jobTypes: state => state.jobTypes,
    job: state => state.job,
    jobDetail: state => state.jobDetail,
    jobs: state => state.jobs,
    latestJobs: state => state.latestJobs,
    featuredJobs: state => state.featuredJobs,

    jobsListing: state => state.jobsListing,
    updateJobStatus: state => state.updateJobStatus,
    updateJob: state => state.updateJob,

    searchResult: state => state.searchResult,
    relatedJobs: state => state.relatedJobs,
    candidateApplications: state => state.candidateApplications,
    candidateAppliedOnJob: state => state.candidateAppliedOnJob,
    companyApplications: state => state.companyApplications,
    globalVariables: state => state.globalVariables,
    suburbs: state => state.suburbs,

    companyInfo: state => state.companyInfo,
    companyReviews: state => state.companyReviews,
    homeStats: state => state.homeStats,
    testimonials: state => state.testimonials,

    // filters
    jobTypeFilters: state => state.jobTypeFilters,
    jobPostedFilters: state => state.jobPostedFilters,
    salaryRangeFilters: state => state.salaryRangeFilters,

    companyTypeFilters: state => state.companyTypeFilters,
    companyLocationFilters: state => state.companyLocationFilters,

    cmsPages: state => state.cmsPages,

    allPlans: state => state.allPlans,
    companySubscriptions: state => state.companySubscriptions,


  },
  mutations: {
    SIGN_UP_USER(state, payload) {
      state.company = payload
    },
    SET_USER_SETTING(state, payload) {
      state.userSetting = payload
    },
    SET_COMPANY_TYPES(state, payload) {
      state.companyTypes = payload
    },
    SET_TESTIMONIAL(state, payload) {
      state.testimonials = payload
    },
    SET_CURRENT_USER(state, payload) {
      state.currentUser = payload
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    SET_QUALIFICATIONS(state, payload) {
      state.qualifications = payload
    },
    SET_LOCATIONS(state, payload) {
      state.locations = payload
    },
    SET_STATES(state, payload) {
      state.states = payload
    },
    SET_DESIGNATIONS(state, payload) {
      state.designations = payload
    },
    SET_LANGUAGES(state, payload) {
      state.languages = payload
    },
    SET_CATEGORIES(state, payload) {
      state.categories = payload
    },
    SET_TRENDING_JOB_CATEGORIES(state, payload) {
      state.trending_jobs_categories = payload
    },
    SET_COMPANIES_LISTING(state, payload) {
      state.companiesListing = payload
    },
    SET_COMPANIES(state, payload) {
      state.companies = payload
    },
    SET_TOP_COMPANIES(state, payload) {
      state.topCompanies = payload
    },
    SET_COMPANY(state, payload) {
      state.company = payload
    },
    SET_JOB_TYPES(state, payload) {
      state.jobTypes = payload
    },
    SET_COMPANY_JOBS(state, payload) {
      state.companyJobs = payload
    },


    SET_JOB(state, payload) {
      state.job = payload
    },
    SET_LATEST_JOBS(state, payload) {
      state.latestJobs = payload
    },
    SET_FEATURED_JOBS(state, payload) {
      state.featuredJobs = payload
    },


    SET_JOB_DETAIL(state, payload) {
      state.jobDetail = payload
    },

    SET_JOBS(state, payload) {
      state.jobs = payload
    },
    SET_RELATED_JOBS(state, payload) {
      state.relatedJobs = payload
    },
    SET_SEARCH_RESULT(state, payload) {
      state.searchResult = payload
    },
    SET_JOB_LISTING(state, payload) {
      state.jobsListing = payload
    },

    SET_JOB_STATUS_UPDATE(state, payload) {
      state.updateJobStatus = payload
    },

    SET_JOB_UPDATE(state, payload) {
      state.updateJob = payload
    },

    SET_CANDIDATE_APPLICATIONS(state, payload) {
      state.candidateApplications = payload
    },
    SET_CANDIDATE_APPLIED_ON_JOB(state, payload) {
      state.candidateAppliedOnJob = payload
    },
    SET_COMPANY_APPLICATIONS(state, payload) {
      state.companyApplications = payload
    },

    SET_GLOBAL_VARIABLES(state, payload) {
      state.globalVariables = payload
    },

    SET_SUBURB(state, payload) {
      state.suburbs = payload
    },

    SET_USER_SOCIALS(state, payload) {
      state.userSocials = payload
    },

    SET_USER_PORTFOLIO(state, payload) {
      state.userPortfolio = payload
    },

    SET_COMPANY_INFO(state, payload) {
      state.companyInfo = payload
    },

    SET_COMPANY_REVIEWS(state, payload) {
      state.companyReviews = payload
    },



    SET_HOME_STATS(state, payload) {
      state.homeStats = payload
    },

    // Filters
    SET_JOBTYPE_FILTER(state, payload) {
      state.jobTypeFilters = payload
    },
    SET_JOB_POSTED_FILTER(state, payload) {
      state.jobPostedFilters = payload
    },
    SET_SALARY_RANGE_FILTER(state, payload) {
      state.salaryRangeFilters = payload
    },

    SET_COMPANY_TYPE_FILTER(state, payload) {
      state.companyTypeFilters = payload
    },
    SET_COMPANY_LOCATION_FILTER(state, payload) {
      state.companyLocationFilters = payload
    },
    SET_CMS_PAGES(state, payload) {
      state.cmsPages = payload
    },

    SET_ALL_PLANS(state, payload) {
      state.allPlans = payload
    },

    SET_SUBSCRIPTIONS(state, payload){
      state.companySubscriptions = payload
    }
  },
  actions: {

    getHomeStats(context) {
      axios.get(apiUrl + 'homeStats')
        .then(res => {
          context.commit('SET_HOME_STATS', res.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getGlobalVariables(context) {
      axios.get(apiUrl + 'globalVariables')
        .then(res => {
          context.commit('SET_GLOBAL_VARIABLES', res.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getAllPlans(context, payload) {
      axios.get(apiUrl + 'packages',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(res => {
          let result = res
          context.commit('SET_ALL_PLANS', result.data)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },

    getSuburb(context) {
      axios.get(apiUrl + 'subrubs')
        .then(res => {

          context.commit('SET_SUBURB', res.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    async signUpUser(context, payload) {
      axios.post(apiUrl + 'jobSeekerRegister', payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.status == 'error') {
            toast.error(res.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            })
          }
          else {
            toast.success(res.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            })

            this.dispatch('login', {
              email: payload.email,
              password: payload.password,
              type: payload.type,
              device_name: 'web app'
            })

          }


        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },

    async signUpCompany(context, payload) {
      axios.post(apiUrl + 'company_register', payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          // toast.success(res.data, {
          //   position: toast.POSITION.BOTTOM_RIGHT,
          // })
          console.log(res.data.status);
          if (res.data.status == 'error') {
            toast.error(res.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
          else {
            toast.success(res.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            })

            this.dispatch('login', {
              email: payload.email,
              password: payload.password,
              type: payload.type,
              device_name: 'web app'
            })
          }

        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },

    async goToCheckout(context, payload) {
      try {
        const stripe: any = await loadStripe('pk_test_51JfJYeGcqlJBpQmNnLMma2QkR3tD1sHfsqHY8ojRtaLzWoQ6LO7ZCDaRhnyjApUtK9Z4GgEMIBdETpwfPRVlmzdg00miRTg8Z5'); // Use publishable key

        const response = await axios.post(apiUrl + 'stripe/checkout', payload, {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'multipart/form-data'
          }

        });
        const sessionId = response.data.id;

        const result = await stripe.redirectToCheckout({
          sessionId: sessionId,
        });

        // Check if there's an error during redirection
        if (result.error) {
          console.error(result.error);
          // Handle the error, show a message, or perform any other actions
        } else {
          // The redirection was successful
          console.log('Redirecting to checkout...');
        }

      } catch (error) {
        console.error(error);
        // Handle the error, show a message, or perform any other actions
      }
    },

    updateProfile(context, payload) {
      axios.post(apiUrl + 'user/' + payload.id, payload, {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'multipart/form-data'
        },
        params: {
          _method: "put"
        }

      }).then(res => {
        localStorage.setItem('currentUser', JSON.stringify(res.data.user));
        context.commit('SET_CURRENT_USER', JSON.stringify(res.data.user));
        toast.success(res.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },

    passwordChange(context, payload) {
      axios.post(apiUrl + 'password/reset/', payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },

      }).then(res => {
        toast.success(res.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
        router.push('/login');
      })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },

    deletUser(context, payload) {
      axios.post(apiUrl + 'user/', payload.id, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'authorization': 'Bearer ' + localStorage.getItem('token')
        },
        params: {
          _method: 'delete'
        }

      }).then(res => {
        toast.success(res.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
        router.push('/login');
      })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },

    reset(context, payload) {
      axios.post(apiUrl + 'password/email', payload)
        .then(async res => {
          if (res.data.status == 'error') {
            toast.error(res.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            toast.success('The reset email has been sent.', {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },

    getResetPage(context, payload) {
      axios.get(apiUrl + 'reset-password/' + payload)
        .then(res => {
          let result = res
          console.log(result.data);
          // context.commit('SET_RESET_TOKEN', result.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },



    login(context, payload) {
      axios.post(apiUrl + 'workpages/login', payload)
        .then(async res => {
          if (res.data.status == 'error') {
            toast.error(res.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            let result = await res.data.token

            localStorage.setItem('token', result)
            context.commit('SET_TOKEN', result);

            this.dispatch('getUserInfo', payload.type)
          }
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },

    verifyEmail(context, payload) {
      axios.get(apiUrl + 'verify-email/'+ payload.id +'/'+payload.token+'?expires='+payload.expires+'&signature='+payload.signature,  {
        headers: {
          'Content-Type': 'multipart/form-data',
          'authorization': 'Bearer ' + localStorage.getItem('token')
        },

      }).then(async res => {
          console.log(res);
          
          // if (res.data.status == 'error') {
          //   toast.error(res.data.message, {
          //     position: toast.POSITION.BOTTOM_RIGHT,
          //   });
          // } else {
          //   let result = await res.data.token

          //   localStorage.setItem('token', result)
          //   context.commit('SET_TOKEN', result);

          //   this.dispatch('getUserInfo', payload.type)
          // }
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },

    // verify-email/{id}/{hash}

    subscribe(context, payload) {
      axios.post(apiUrl + 'newletterEmail', payload)
        .then(async res => {
          if (res.data.status == 'error') {
            toast.error(res.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {

            toast.success(res.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            });

          }
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },


    getUserInfo(context, payload) {
      try {
        axios.post(apiUrl + 'workpages/getUser', { token: localStorage.getItem('token') }, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }
        )
          .then(res => {
            let result = res
            console.log(result.data[0])
            if (result.data[0].roles[0].name == 'Job Seeker') {

              localStorage.setItem('currentUser', JSON.stringify(result.data));
              context.commit('SET_CURRENT_USER', JSON.stringify(result.data));
              this.state.loggedIn = true

              if (result.data[0].email_verified_at == null) {
                window.location.href = adminDashboardUrl + result.data[0].email;
                // router.push('/send-email');
              }
              else {
                router.push('/user/dashboard');
              }


            } 
            else if (result.data[0].roles[0].name == 'Employer') {

              localStorage.setItem('currentUser', JSON.stringify(result.data));
              context.commit('SET_CURRENT_USER', JSON.stringify(result.data));
              this.state.loggedIn = true

              this.dispatch('getCompany', result.data[0].id);

              if (result.data[0].email_verified_at == null) {
                window.location.href = adminDashboardUrl + result.data[0].email;
                // router.push('/send-email');
              }
              else {
                router.push('/company/dashboard');
              }

            } 
            else if (result.data[0].roles[0].name == 'Super Admin') {

              if (result.data[0].email_verified_at == null) {
                window.location.href = adminDashboardUrl + result.data[0].email;
                // router.push('/send-email');
              }
              else
              {
                window.location.href = adminDashboardUrl + result.data[0].email;
              }
            }
             else {
              toast.error('You cannot assign admin role!', {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            }
          })
      } catch (err) {
        toast.error('Login Error!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    },

    getUserSocials(context, payload) {
      axios.get(apiUrl + 'getUserSocial' + '/' + payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          let result = res
          context.commit('SET_USER_SOCIALS', result)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },



    updateUserSocials(context, payload) {

      axios.put(apiUrl + 'updateUserSocial' + '/' + payload.user_id, payload, {
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          console.log(payload);
          let result = res
          context.commit('SET_USER_SOCIALS', result.data)
          toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })

        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },

    updateUserPortfolio(context, payload) {
      const url = payload.id ? apiUrl + 'updateUserPortfolio/' + payload.id : apiUrl + 'updateUserPortfolio';
      axios.post(url, payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          let result = res.data
          console.log(result.data);
          context.commit('SET_USER_PORTFOLIO', result)
          context.commit('SET_USER_SOCIALS', result)
          toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },

    getUserPortfolio(context, payload) {
      axios.get(apiUrl + 'getUserPortfolio' + '/' + payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          let result = res

          context.commit('SET_USER_PORTFOLIO', result.data)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },

    updateUserMeta(context, payload) {

      axios.put(apiUrl + 'updateUserMeta' + '/' + payload.user_id, payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          let result = res
          localStorage.setItem('currentUser', JSON.stringify(res.data.user));
          context.commit('SET_CURRENT_USER', JSON.stringify(res.data.user));
          toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })

        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },

    getUserMeta(context, payload) {

      axios.put(apiUrl + 'updateUserMeta' + '/' + payload.user_id, payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          let result = res

          { token: localStorage.getItem('token') }
          // context.commit('SET_USER_SETTING', result.data)
          toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })

        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },



    updatePassword(context, payload) {

      axios.put(apiUrl + 'updatePassword' + '/' + payload.user_id, payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          let result = res
          toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })

        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },

    getQualifications(context, payload) {
      axios.get(apiUrl + 'qualifications')
        .then(res => {
          let result = res
          context.commit('SET_QUALIFICATIONS', result.data)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },
    getLocations(context, payload) {
      axios.get(apiUrl + 'location',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
        .then(res => {
          let result = res
          context.commit('SET_LOCATIONS', result.data)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },
    getStates(context, payload) {
      axios.get(apiUrl + 'states',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
        .then(res => {
          let result = res
          context.commit('SET_STATES', result.data)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },
    getDesignations(context, payload) {
      axios.get(apiUrl + 'designation',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(res => {
          let result = res
          context.commit('SET_DESIGNATIONS', result.data)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },

    getLanguages(context, payload) {
      axios.get(apiUrl + 'language',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(res => {
          let result = res
          context.commit('SET_LANGUAGES', result.data)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
    },

    getCategories(context, payload) {
      axios.get(apiUrl + 'categories',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(res => {
          let result = res
          context.commit('SET_CATEGORIES', result.data)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },

    // Filters for jobs/companies etc

    getFilterCategories(context, payload) {
      axios.get(apiUrl + 'trending_jobs_categories',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(res => {
          let result = res

          context.commit('SET_TRENDING_JOB_CATEGORIES', result.data)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },


    getFilterTypeofEmployment(context, payload) {
      axios.get(apiUrl + 'filter_type_of_employments',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(res => {
          let result = res
          context.commit('SET_JOBTYPE_FILTER', result.data)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },

    getFilterJobPosted(context, payload) {
      axios.get(apiUrl + 'filter_job_posted_on',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(res => {
          let result = res
          context.commit('SET_JOB_POSTED_FILTER', result.data)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },

    getFilterSalaryRange(context, payload) {
      axios.get(apiUrl + 'filter_salary_range',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(res => {
          let result = res
          context.commit('SET_SALARY_RANGE_FILTER', result.data)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },



    // End Filters for jobs/companies etc


    getTrendingJobCategories(context, payload) {
      axios.get(apiUrl + 'trending_jobs_categories',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(res => {
          let result = res

          context.commit('SET_TRENDING_JOB_CATEGORIES', result.data)
        }).catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },

    getCompanyTypes(context, payload) {
      axios.get(apiUrl + 'companyTypes')
        .then(res => {
          let ressult = res
          context.commit('SET_COMPANY_TYPES', ressult.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getCompanyJobs(context, payload) {
      axios.get(apiUrl + 'getCompanyJobs')
        .then(res => {
          context.commit('SET_COMPANY_JOBS', res.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getFilterTypeofCompanies(context, payload) {
      axios.get(apiUrl + 'filter_company_type')
        .then(res => {
          let ressult = res
          console.log(res);
          context.commit('SET_COMPANY_TYPE_FILTER', ressult.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getFilterLocationCompanies(context, payload) {
      axios.get(apiUrl + 'filter_companies_location')
        .then(res => {
          let ressult = res
          console.log(res);
          context.commit('SET_COMPANY_LOCATION_FILTER', ressult.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getTopCompanies(context, payload) {
      axios.get(apiUrl + 'companies')
        .then(res => {
          let result = res
          context.commit('SET_TOP_COMPANIES', result.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getCompaniesListing(context, payload) {
      axios.get(apiUrl + 'CompaniesListing')
        .then(res => {
          let result = res
          console.log(res);
          context.commit('SET_COMPANIES_LISTING', result.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getTestimonials(context, payload) {
      axios.get(apiUrl + 'testimonials')
        .then(res => {
          context.commit('SET_TESTIMONIAL', res.data);
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getCompanyInfo(context, payload) {
      axios.post(apiUrl + 'getCompanyInfo/' + payload)
        .then(res => {
          let result = res
          console.log(result);
          context.commit('SET_COMPANY_INFO', result.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getCompanyReviews(context, payload) {
      axios.get(apiUrl + 'getCompanyReviews/' + payload)
        .then(res => {
          let result = res
          context.commit('SET_COMPANY_REVIEWS', result.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },


    getCompany(context, payload) {
      axios.get(apiUrl + 'getCompanyByUserId/' + payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          context.commit('SET_COMPANY', res.data);
        })
    },

    updateCompanyProfile(context, payload) {

      axios.post(apiUrl + 'updateCompanyProfile/' + payload.id, payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'multipart/form-data'
        },
        params: {
          _method: "post"
        }
      })
        .then(res => {
          console.log(res);
          this.dispatch('getCompany', res.data.company.owner_id
          );
          toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        });
    },

    getJobTypes(context, payload) {
      axios.get(apiUrl + 'jobTypes')
        .then(res => {
          let result = res
          context.commit('SET_JOB_TYPES', result.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    async createJob(context, payload) {
      await axios.post(apiUrl + 'job', payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          console.log(res);
          toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
          // router.push({ path: '/job-details/' + res.data.job.job_key + '/' + res.data.job.job_slug, });
          window.setTimeout(() => {
            router.push({ path: '/company/job-list' });
          }, 2000);
        })
    },

    createCompanyReview(context, payload) {
      axios.post(apiUrl + 'companyReviews', payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          console.log(res);
          toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },

    getJob(context, payload) {
      axios.get(apiUrl + 'getjob/' + payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          context.commit('SET_JOB', res.data);
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getCategoryJobs(context, payload) {
      axios.get(apiUrl + 'categoryJobs/' + payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          console.log(res);
          context.commit('SET_JOB', res.data);
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },



    getJobDetail(context, payload) {
      axios.post(apiUrl + 'jobDetail/' + payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          context.commit('SET_JOB_DETAIL', res.data[0]);
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getJobs(context, payload) {
      axios.get(apiUrl + 'jobs')
        .then(res => {
          context.commit('SET_JOBS', res.data);
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getLatestJobs(context, payload) {
      axios.get(apiUrl + 'latestJobs')
        .then(res => {
          context.commit('SET_LATEST_JOBS', res.data);
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    getFeaturedJobs(context, payload) {
      axios.get(apiUrl + 'featuredJobs')
        .then(res => {
          context.commit('SET_FEATURED_JOBS', res.data);
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },


    relatedJobs(context, payload) {
      axios.get(apiUrl + 'jobs', {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          context.commit('SET_RELATED_JOBS', res.data);
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    applyForPosition(context, payload) {
      axios.post(apiUrl + 'application', payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {

          console.log(res);
          if (res.data.status == 'success') {
            const app_job_btn = document.getElementById("user-applied-on-job") as HTMLDivElement;
            app_job_btn.textContent = "You applied for this job";
            const app_job_form = document.getElementById("user-applied-on-job-form") as HTMLDivElement;
            app_job_form.textContent = "You applied for this job";
          }

          toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
          // router.push({ path: '/user/jobs', query: { job_id: res.data.job.id } });
          window.setTimeout(() => {
            router.push({ path: '/user/jobs'});
          }, 2000);
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    searchJobs(context, payload) {
      axios.post(apiUrl + 'search_jobs', payload)
        .then(res => {
          console.log(res);
          context.commit('SET_SEARCH_RESULT', res.data);
        })
    },

    jobsListing(context, payload) {
      axios.get(apiUrl + 'jobsListing', payload)
        .then(res => {
          context.commit('SET_JOB_LISTING', res.data);
        })
    },

    updateJobStatus(context, payload) {
      axios.post(apiUrl + 'updateJobStatus', payload)
        .then(res => {
          // context.commit('SET_JOB_LISTING', res.data);
          console.log(res);
          toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        })
    },

    updateJob(context, payload) {
      axios.put(apiUrl + 'updateJob/' + payload.id, payload)
        .then(res => {
          // context.commit('SET_JOB_LISTING', res.data);
          console.log(res);
          toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setTimeout(() => {
            window.history.back();
          }, 2000);
        })
    },

    getCandidateApplications(context, payload) {
      axios.get(apiUrl + 'getApplicationsByUserId/' + payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          context.commit('SET_CANDIDATE_APPLICATIONS', res.data);
        })
    },

    getCandidateAppliedOnJob(context, payload) {
      axios.post(apiUrl + 'getCandidateAppiedOnJob/' + payload.user_id + '/' + payload.job_id, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {

          context.commit('SET_CANDIDATE_APPLIED_ON_JOB', res.data);
        })
    },

    getCompanyApplications(context, payload) {
      axios.get(apiUrl + 'getApplicationsByCompany?company_id=' + payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          // console.log(res);
          context.commit('SET_COMPANY_APPLICATIONS', res.data);
        })
    },
    updateCandidateApplication(context, payload) {
      axios.put(apiUrl + 'updateCandidateApplication', payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
          this.dispatch('getCompanyApplications', res.data.data.company_id);
        })
    },
    deleteCandidateApplication(context, payload) {
      axios.put(apiUrl + 'deleteCandidateApplication', payload, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => {
          toast.error(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
          this.dispatch('getCompanyApplications', res.data.data.company_iaxios.getd);
        })
    },

    // getCMSPages(context, payload){
    //   axios.get(apiUrl + 'cmsPages?page_slug='+ payload, {
    //     // headers: {
    //     //   'authorization': 'Bearer ' + localStorage.getItem('token')
    //     // }
    //   })
    //   .then(res => {
    //     // console.log(res.data);
    //     context.commit('SET_CMS_PAGES', res.data);

    //   })
    // },

    async getCMSPages(context, payload) {
      await axios.get(apiUrl + 'cmsPages/?page_slug=' + payload)
        .then(res => {
          let result = res
          // console.log(result.data);
          context.commit('SET_CMS_PAGES', result.data)
        })
        .catch(err => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        })
    },

    // async getCMSPages(context, payload) {
    //   try {
    //     const res = await axios.get(apiUrl + 'cmsPages/?page_slug=' + payload);
    //     // console.log(res.data);
    //     context.commit('SET_CMS_PAGES', res.data);
    //   } catch (err) {
    //     // toast.error(err.message, {
    //     //   position: toast.POSITION.BOTTOM_RIGHT
    //     // });
    //   }
    // },

    companySubscriptions(context, payload) {

      axios.get(apiUrl + 'companySubscriptions', {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(res => {
          // console.log(res);
          context.commit('SET_SUBSCRIPTIONS', res.data);
      })
      .catch(err => {
        console.log(err);
        
      })
    },

    deletePort(context, payload) {
      axios.post(apiUrl + 'delete-portfolio/' + payload.id, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token')
        },
      })
      .then(res => {
        context.commit('SET_USER_PORTFOLIO', res.data)
        toast.success(res.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      })
      .catch(err => {
        console.log(err);
        
      })
    },



    logout(context) {
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
      this.state.loggedIn = false;
      router.push('/');
    }

  },
  modules: {
  }
})
