<template>
  <div>
        <!-- ========== Inner Banner Start============= -->
        <div class="inner-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content text-center">
                        <h1>Job Category</h1>
                        <span></span>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="index.html">Home</router-link></li>
                                <li class="breadcrumb-item active" aria-current="page">Job Category</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ========== Inner Banner end============= -->
    <!-- ========== Job Listing Start============= -->
    <div class="category-listing-area pt-120 mb-120">
        <div class="container">
            <div class="row g-lg-4">
                <div class="col-lg-12">
                    <div class="row g-4 mb-25">
                        <div class="col-md-6 d-flex align-items-center">
                            <p class="show-item">Showing results 10 in 200 jobs list</p>
                        </div>
                        <div class="col-md-6 d-flex align-items-center justify-content-md-end">
                            <form>
                                <div class="form-inner">
                                    <input type="text" placeholder="Search..">
                                    <button class="primry-btn-2" type="submit"><img src="assets/images/icon/search-category.svg" alt=""></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 cf justify-content-center mb-70">
                        <div class="col" v-for="category in categories" :key=category.id>
                            <div class="single-category">
                                <div class="category-top">
                                    <div class="icon">
                                        <img v-if="category.image" :src="(category.image)" width="24" height="24" alt="">
                                    </div>
                                    <div class="sl-no">
                                        <h6>01</h6>
                                    </div>
                                </div>
                                <div class="category-content">
                                    <h5><router-link to="/job-listing">{{ category.name }}</router-link></h5>
                                    <p>Job Available: <span>{{ category.cat_counts }}</span></p>
                                </div>
                            </div>
                        </div>
                        
                     
                     
                    </div>
                    <div class="row">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <div class="pagination-area">
                                <nav aria-label="...">
                                    <ul class="pagination">
                                        <li class="page-item disabled"><router-link class="page-link" to="#" tabindex="-1"></router-link></li>
                                        <li class="page-item active" aria-current="page"><router-link class="page-link" to="#">01</router-link></li>
                                        <li class="page-item"><router-link class="page-link" to="#">02</router-link></li>
                                        <li class="page-item"><router-link class="page-link" to="#">03</router-link></li>
                                        <li class="page-item"><router-link class="page-link" to="#"></router-link></li>
                                    </ul>
                                </nav>
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

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import Categories from '../views/JobCategories.vue'; // @ is an alias to /src

@Options({
  components: {
    Categories,
  },
  computed: {
    ...mapGetters([
        'categories',

    ]),
  },
  mounted(){
    this.$store.dispatch('getCategories', '');


    let Script = document.createElement("script");
    Script.setAttribute("src", "/assets/js/main.js");
    document.head.appendChild(Script);
    
  },
})
export default class JobCategories extends Vue {}
</script>
