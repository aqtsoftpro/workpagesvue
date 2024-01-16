<template>
<div>        <!-- ========== Inner Banner Start============= -->
    <div class="inner-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content text-center">
                        <h1>View Resume</h1>
                        <span></span>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">View Resume</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="job-details-pages pt-120 mb-120">
        <div class="container">
            <div class="row g-lg-4 gy-5">
                <div class="col-lg-8">
                    <div class="my-profile-inner">
                        <pdf-vuer />
                    </div>
                </div>
            </div>
        </div>
    </div>                    
</div>  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import JobDetail from './JobDetails.vue'; // @ is an alias to /src
import PdfVuer from './pdfvuer.vue';
import { mapState } from 'vuex';

@Options({
  components: {
    JobDetail,
    'pdf-vuer' : PdfVuer
  },
  data(){
    return{
        job_id: null,
        current_job: [],
        jobs: [],
        application: {
            salary: null,
            experience: null,
            user_id: null,
            company_id: null,
            status_id: 1,
            job_id: null,
            cv: null
        }
    }
  },
  computed: {
      ...mapState([
        'currentUser',
      ])
  },
  mounted(){


    
  },
  methods: {
    
    
  },
  watch: {
      
  }
})
export default class JobDetails extends Vue {}
</script>
