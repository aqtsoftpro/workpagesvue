<template>
  <div class="dashboard-area pt-120 mb-120">
    <div class="container">
      <div class="row g-lg-4 gy-5 mb-90">
        <user-menu />
        <div class="col-lg-9">
          <div class="my-profile-inner">

            <div class="form-wrapper mb-60">
              <div class="section-title">
                <h5>My Portfolio</h5>
                <button v-if="!showForm" class="primry-btn-2 lg-btn float-end" @click="this.showForm = true">
                  Add New Item
                </button>
                <button v-if="showForm" class="primry-btn-2 lg-btn float-end" @click="cancelForm">
                  Cancel Form
                </button>
              </div>

              <form v-if="showForm" id="myForm" class="edit-profile-form profile-form mb-4" enctype="multipart/form-data">

                <div class="row">
                  <div class="col-md-12">
                    <div class="form-inner mb-25">
                      <label>Title*</label>
                      <div class="input-area">
                        <input type="text" v-model="portfolio.title" name="tile">
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-inner mb-25">
                      <label>Description*</label>
                      <textarea v-model="portfolio.description" id="description" required></textarea>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-inner mb-25">
                      <label>Work or page url*</label>
                      <div class="input-area">
                        <input type="text" v-model="portfolio.url" name="url">
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-inner mb-25">
                      <label>Start Date*</label>
                      <div class="input-area">
                        <input type="date" v-model="portfolio.start_date" name="startDate">
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-inner mb-25">
                      <label>End Date*</label>
                      <div class="input-area">
                        <input type="date" v-model="portfolio.end_date" name="endDate">
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-inner mb-25">
                      <label>Skill Used*</label>
                      <textarea v-model="portfolio.skill_used" id="description"></textarea>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-inner mb-25">
                      <label>Video Link Url*</label>
                      <div class="input-area">
                        <input type="text" v-model="portfolio.video_links" name="portfolioID">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-inner mb-25">
                      <label>Other File*</label>
                      <div class="input-area">
                        <input type="file" @change="otherFileHandle" name="otherFile">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-inner mb-25">
                      <label>Images*</label>
                      <div class="input-area">
                        <input type="file" @change="handleFileChange" name="images[]" multiple>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="file-previews">
                      <div class="row">
                        <div class="col-md-6 mb-3" v-for="(image, index) in portfolio.images" :key="index">
                          <div class="file-previews" style="position: relative; width: 680px! ;">
                            <span class="float-end point" @click="removeImage(index)">x</span>
                            <img :src="image.preview" alt="Preview" style="width : 100%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-inner">
                      <button @click="updatePortfolio" class="primry-btn-2 lg-btn w-unset" type="button">
                        {{ portfolio.id == null ? 'Save Portfolio' : 'Update Portfolio' }}</button>
                    </div>
                  </div>
                </div>

                <!-- <div class="portfolio-row" v-for="index in porfolioCount" :key="index">

                  <div class="section-title2">
                    <h5>Portfolio Item {{ index }} :</h5>
                  </div>

                  <div class="col-md-12">
                    <div class="form-inner mb-25">
                      <label>Title*</label>
                      <div class="input-area">
                        <input type="text" v-model="portfolio.portfolioID[index]" name="portfolioID">
                        <input type="text" v-model="portfolio.name[index]" name="name" placeholder="Portfolio Title">
                        <input type="text" v-model="item.portfolioID" name="portfolioID">

                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-inner mb-20">
                      <label>Description*</label>
                      <textarea name="description" v-model="portfolio.description[index]"
                        placeholder="Portfolio Description" spellcheck="false"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-inner mb-25">
                      <label>Images*</label>
                      <div class="input-area"><img src="/templates/assets/images/icon/company-2.svg " alt="">
                        <input type="file" name="images" @change="previewFiles(index)" multiple>
                      </div>
                    </div>

                    <div  class="file-previews">
                      <div v-for="(preview, index) in filePreviews[index]" :key="index">
                        <img v-if="preview.type === 'image'" :src="preview.url" alt="Image Preview">
                      </div>
                    </div>

                  </div>

                  <div class="col-md-12">
                    <hr>
                  </div>

                </div> -->

                <!-- <div class="col-md-12">
                  <div class="form-inner">
                    <button @click="updatePortfolio" class="primry-btn-2 lg-btn w-unset" type="button">Update
                      Portfolio</button>

                  </div>
                </div> -->
              </form>
              <div v-if="showPortfolio" class="edit-profile-form profile-form mb-4">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-header d-flex justify-content-between">
                        <div class="card-title">
                          {{ viewPortfolio.title }}
                        </div>
                        <div>
                          <button class="btn btn-primary" @click="showPortfolio = false">x</button>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <h5 class="title">Title: </h5><span class="title">{{ viewPortfolio.title }}</span>
                        </div>
                        <div class="d-flex justify-content-between">
                          <h5 class="title">Description: </h5><span class="title">{{ viewPortfolio.description }}</span>
                        </div>
                        <div class="d-flex justify-content-between">
                          <h5 class="title">Url: </h5><span class="title">{{ viewPortfolio.url }}</span>
                        </div>
                        <div class="d-flex justify-content-between">
                          <h5 class="title">Start Date: </h5><span class="title">{{ viewPortfolio.start_date }}</span>
                        </div>
                        <div class="d-flex justify-content-between">
                          <h5 class="title">End Date: </h5><span class="title">{{ viewPortfolio.end_date }}</span>
                        </div>
                        <div class="d-flex justify-content-between">
                          <h5 class="title">Skill Used: </h5><span class="title">{{ viewPortfolio.skill_used }}</span>
                        </div>
                        <div class="d-flex justify-content-between">
                          <h5 class="title">Video Links: </h5>
                          <a :href="viewPortfolio.video_links" target="_blank" rel="noopener noreferrer"
                            class="text-primary">{{ viewPortfolio.video_links }}</a>
                        </div>

                        <div class="d-flex justify-content-around">
                          <button class="btn btn-danger" @click="deletePortfolio(viewPortfolio)">Delete</button>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="edit-profile-form profile-form">
                <!-- {{  userPortfolio }} -->
                <div class="row">
                  <div v-if="userPortfolio.data">
                    <h5 v-if="userPortfolio.data.length == 0">No Portfolio...</h5>
                  </div>
                  <div v-for="portfolio in userPortfolio.data" class="col-md-6 mb-4">
                    <div class="card">
                      <div class="card-header d-flex justify-content-between">
                        <h6 class="card-title">
                          {{ portfolio.title }}
                        </h6>
                        <div class="d-flex justify-content-between">
                          <span class="btn" @click="editView(portfolio)">
                            <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M11.8798 1.19201C11.9563 1.26957 11.9993 1.37462 11.9993 1.48414C11.9993 1.59365 11.9563 1.6987 11.8798 1.77627L11.0253 2.64024L9.3868 0.98512L10.2413 0.121149C10.3181 0.0435774 10.4223 0 10.5309 0C10.6395 0 10.7437 0.0435774 10.8205 0.121149L11.8798 1.19118V1.19201ZM10.4461 3.22449L8.8076 1.56938L3.22607 7.20836C3.18098 7.2539 3.14704 7.30944 3.12694 7.37056L2.46745 9.36829C2.45549 9.40471 2.45379 9.44377 2.46254 9.48111C2.4713 9.51844 2.49016 9.55259 2.51702 9.57972C2.54388 9.60685 2.57768 9.62591 2.61464 9.63475C2.65161 9.64359 2.69028 9.64188 2.72633 9.62979L4.70399 8.96361C4.76442 8.94355 4.8194 8.90955 4.86456 8.8643L10.4461 3.22532V3.22449Z">
                              </path>
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0 10.7585C0 11.0878 0.12947 11.4035 0.359928 11.6363C0.590385 11.8691 0.902953 11.9999 1.22887 11.9999H10.2406C10.5665 11.9999 10.8791 11.8691 11.1095 11.6363C11.34 11.4035 11.4694 11.0878 11.4694 10.7585V5.79319C11.4694 5.68345 11.4263 5.5782 11.3495 5.50061C11.2727 5.42301 11.1685 5.37941 11.0598 5.37941C10.9512 5.37941 10.847 5.42301 10.7702 5.50061C10.6934 5.5782 10.6502 5.68345 10.6502 5.79319V10.7585C10.6502 10.8683 10.607 10.9735 10.5302 11.0511C10.4534 11.1287 10.3492 11.1723 10.2406 11.1723H1.22887C1.12023 11.1723 1.01604 11.1287 0.939222 11.0511C0.862403 10.9735 0.819246 10.8683 0.819246 10.7585V1.6554C0.819246 1.54566 0.862403 1.44041 0.939222 1.36281C1.01604 1.28522 1.12023 1.24162 1.22887 1.24162H6.55397C6.66261 1.24162 6.7668 1.19803 6.84362 1.12043C6.92044 1.04283 6.96359 0.937583 6.96359 0.827842C6.96359 0.718101 6.92044 0.612854 6.84362 0.535256C6.7668 0.457657 6.66261 0.414063 6.55397 0.414062H1.22887C0.902953 0.414063 0.590385 0.544846 0.359928 0.777642C0.12947 1.01044 0 1.32618 0 1.6554V10.7585Z">
                              </path>
                            </svg>
                          </span>
                          <span class="btn" @click="viewPort(portfolio)">
                            <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14 5C14 5 11.375 0 7 0C2.625 0 0 5 0 5C0 5 2.625 10 7 10C11.375 10 14 5 14 5ZM1.02637 5C1.44945 4.33193 1.93606 3.70971 2.47887 3.14273C3.605 1.97091 5.145 0.909091 7 0.909091C8.855 0.909091 10.3941 1.97091 11.522 3.14273C12.0648 3.70971 12.5514 4.33193 12.9745 5C12.9237 5.07909 12.8678 5.16636 12.8039 5.26182C12.5108 5.69818 12.0776 6.28 11.522 6.85727C10.3941 8.02909 8.85413 9.09091 7 9.09091C5.145 9.09091 3.60588 8.02909 2.478 6.85727C1.93519 6.29028 1.44946 5.66807 1.02637 5Z" />
                                <path
                                    d="M7 2.72721C6.41984 2.72721 5.86344 2.96665 5.4532 3.39287C5.04297 3.81909 4.8125 4.39717 4.8125 4.99993C4.8125 5.6027 5.04297 6.18078 5.4532 6.60699C5.86344 7.03321 6.41984 7.27266 7 7.27266C7.58016 7.27266 8.13656 7.03321 8.5468 6.60699C8.95703 6.18078 9.1875 5.6027 9.1875 4.99993C9.1875 4.39717 8.95703 3.81909 8.5468 3.39287C8.13656 2.96665 7.58016 2.72721 7 2.72721ZM3.9375 4.99993C3.9375 4.15606 4.26016 3.34676 4.83449 2.75005C5.40882 2.15334 6.18777 1.81812 7 1.81812C7.81223 1.81812 8.59118 2.15334 9.16551 2.75005C9.73984 3.34676 10.0625 4.15606 10.0625 4.99993C10.0625 5.8438 9.73984 6.65311 9.16551 7.24982C8.59118 7.84652 7.81223 8.18175 7 8.18175C6.18777 8.18175 5.40882 7.84652 4.83449 7.24982C4.26016 6.65311 3.9375 5.8438 3.9375 4.99993Z" />
                            </svg>
                          </span>
                        </div>

                        <!-- <router-link >
                            <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14 5C14 5 11.375 0 7 0C2.625 0 0 5 0 5C0 5 2.625 10 7 10C11.375 10 14 5 14 5ZM1.02637 5C1.44945 4.33193 1.93606 3.70971 2.47887 3.14273C3.605 1.97091 5.145 0.909091 7 0.909091C8.855 0.909091 10.3941 1.97091 11.522 3.14273C12.0648 3.70971 12.5514 4.33193 12.9745 5C12.9237 5.07909 12.8678 5.16636 12.8039 5.26182C12.5108 5.69818 12.0776 6.28 11.522 6.85727C10.3941 8.02909 8.85413 9.09091 7 9.09091C5.145 9.09091 3.60588 8.02909 2.478 6.85727C1.93519 6.29028 1.44946 5.66807 1.02637 5Z" />
                                <path
                                    d="M7 2.72721C6.41984 2.72721 5.86344 2.96665 5.4532 3.39287C5.04297 3.81909 4.8125 4.39717 4.8125 4.99993C4.8125 5.6027 5.04297 6.18078 5.4532 6.60699C5.86344 7.03321 6.41984 7.27266 7 7.27266C7.58016 7.27266 8.13656 7.03321 8.5468 6.60699C8.95703 6.18078 9.1875 5.6027 9.1875 4.99993C9.1875 4.39717 8.95703 3.81909 8.5468 3.39287C8.13656 2.96665 7.58016 2.72721 7 2.72721ZM3.9375 4.99993C3.9375 4.15606 4.26016 3.34676 4.83449 2.75005C5.40882 2.15334 6.18777 1.81812 7 1.81812C7.81223 1.81812 8.59118 2.15334 9.16551 2.75005C9.73984 3.34676 10.0625 4.15606 10.0625 4.99993C10.0625 5.8438 9.73984 6.65311 9.16551 7.24982C8.59118 7.84652 7.81223 8.18175 7 8.18175C6.18777 8.18175 5.40882 7.84652 4.83449 7.24982C4.26016 6.65311 3.9375 5.8438 3.9375 4.99993Z" />
                            </svg>
                        </router-link> -->

                        <!-- <router-link>
                            <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8798 1.19201C11.9563 1.26957 11.9993 1.37462 11.9993 1.48414C11.9993 1.59365 11.9563 1.6987 11.8798 1.77627L11.0253 2.64024L9.3868 0.98512L10.2413 0.121149C10.3181 0.0435774 10.4223 0 10.5309 0C10.6395 0 10.7437 0.0435774 10.8205 0.121149L11.8798 1.19118V1.19201ZM10.4461 3.22449L8.8076 1.56938L3.22607 7.20836C3.18098 7.2539 3.14704 7.30944 3.12694 7.37056L2.46745 9.36829C2.45549 9.40471 2.45379 9.44377 2.46254 9.48111C2.4713 9.51844 2.49016 9.55259 2.51702 9.57972C2.54388 9.60685 2.57768 9.62591 2.61464 9.63475C2.65161 9.64359 2.69028 9.64188 2.72633 9.62979L4.70399 8.96361C4.76442 8.94355 4.8194 8.90955 4.86456 8.8643L10.4461 3.22532V3.22449Z"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.7585C0 11.0878 0.12947 11.4035 0.359928 11.6363C0.590385 11.8691 0.902953 11.9999 1.22887 11.9999H10.2406C10.5665 11.9999 10.8791 11.8691 11.1095 11.6363C11.34 11.4035 11.4694 11.0878 11.4694 10.7585V5.79319C11.4694 5.68345 11.4263 5.5782 11.3495 5.50061C11.2727 5.42301 11.1685 5.37941 11.0598 5.37941C10.9512 5.37941 10.847 5.42301 10.7702 5.50061C10.6934 5.5782 10.6502 5.68345 10.6502 5.79319V10.7585C10.6502 10.8683 10.607 10.9735 10.5302 11.0511C10.4534 11.1287 10.3492 11.1723 10.2406 11.1723H1.22887C1.12023 11.1723 1.01604 11.1287 0.939222 11.0511C0.862403 10.9735 0.819246 10.8683 0.819246 10.7585V1.6554C0.819246 1.54566 0.862403 1.44041 0.939222 1.36281C1.01604 1.28522 1.12023 1.24162 1.22887 1.24162H6.55397C6.66261 1.24162 6.7668 1.19803 6.84362 1.12043C6.92044 1.04283 6.96359 0.937583 6.96359 0.827842C6.96359 0.718101 6.92044 0.612854 6.84362 0.535256C6.7668 0.457657 6.66261 0.414063 6.55397 0.414062H1.22887C0.902953 0.414063 0.590385 0.544846 0.359928 0.777642C0.12947 1.01044 0 1.32618 0 1.6554V10.7585Z"></path>
                            </svg>
                        </router-link> -->
                        <!-- <button @click="viewPort(portfolio)">kjlkjlk</button> -->
                      </div>
                      <div class="card-body">
                        <p>{{ portfolio.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <form @submit.prevent="addPortfolioItem">
      <div v-for="(item, index) in newItem" :key="index">
        <div>
          <label for="title">Title:</label>
          <input v-model="item.name" type="text" id="title" required />
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea v-model="item.description" id="description" required></textarea>
        </div>
        <div>
          <label for="images">Images:</label>
          <input v-model="item.images" type="file" id="images" required placeholder="Comma-separated image URLs" />
        </div>
        <button @click="removeItem(index)" type="button">Remove</button>
      </div>
      <button type="button" @click="addItem">Add Item</button>
      <button type="submit">Submit</button>
    </form>

    <h2>Portfolio</h2>
    <div v-for="(item, index) in portfolioItems" :key="index">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <div v-for="(image, i) in item.images" :key="i">
        <img :src="image" alt="Portfolio Image" />
      </div>
    </div> -->
</template>

<style>
.point {
  cursor: pointer;
  /* Change cursor to pointer on hover */
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import UserMenu from './UserMenu.vue';
import { mapGetters } from 'vuex';

import moment from 'moment';

@Options({
  components: {
    'user-menu': UserMenu,
  },
  data() {
    return {
      portfolio: {
        title: '',
        description: '',
        url: '',
        start_date: '',
        end_date: '',
        skill_used: '',
        images: [],
        video_links: '',
        other_file: null,
        user_id: '',
        id: null
      },
      porfolioCount: 0,
      inputFields: [0, 1, 2], // You can adjust the number of input fields as needed
      imagePreviews: {},
      globalSettings: [],
      previewImage: null,
      showForm: false,
      showPortfolio: false,
      viewPortfolio: {
        id: '',
        title: '',
        description: '',
        url: '',
        start_date: '',
        end_date: '',
        skill_used: '',
        images: [],
        video_links: '',
        other_file: null,
        user_id: '',
      }
    }
  },
  beforeCreate() {

  },
  created() {
    this.maxDate = new Date();
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'userPortfolio',
      'globalVariables'
    ])
  },
  methods: {
    loadPortfolioWithCount(portfolioCount: any) {

      this.$store.dispatch('getGlobalVariables');
      this.globalSettings = this.globalVariables;
      // this.porfolioCount = 3;
      console.log(this.globalSettings);
      // this.porfolioCount  = 8;

    },
    editView(portfolioItem: any) {
      this.showPortfolio = false;
      this.showForm = true;
      this.portfolio.title = portfolioItem.title;
      this.portfolio.description = portfolioItem.description;
      this.portfolio.url = portfolioItem.url;
      this.portfolio.start_date = portfolioItem.start_date;
      this.portfolio.end_date = portfolioItem.end_date;
      this.portfolio.skill_used = portfolioItem.skill_used;
      this.portfolio.video_links = portfolioItem.video_links;
      this.portfolio.id = portfolioItem.id;
      this.portfolio.user_id = portfolioItem.user_id;
    },

    viewPort(item: any) {
      this.showPortfolio = true;
      this.showForm = false;
      this.viewPortfolio.id = item.id;
      this.viewPortfolio.title = item.title;
      this.viewPortfolio.description = item.description;
      this.viewPortfolio.url = item.url;
      this.viewPortfolio.start_date = item.start_date;
      this.viewPortfolio.end_date = item.end_date;
      this.viewPortfolio.skill_used = item.skill_used;
      this.viewPortfolio.video_links = item.video_links;
    },

    cancelForm() {
      Object.assign(this.portfolio, {
        title: '',
        description: '',
        url: '',
        start_date: '',
        end_date: '',
        skill_used: '',
        images: [],
        video_links: '',
        other_file: null,
        user_id: '',
        id: null
      });
      this.showForm = false;
    },

    otherFileHandle(event: any) {
      const file = event.target.files[0];
      console.log(event);

      this.portfolio.other_file = file;
      console.log(this.portfolio.other_file);
      console.log('no data found');



      // const reader = new FileReader();
      // reader.onload = () => {
      //   // this.previewImage = reader.result;
      // };

      // reader.onerror = (error) => {
      //   console.error('Error reading the file', error);
      // };

      // reader.readAsDataURL(file);
    },


    removeImage(index: number) {
      this.portfolio.images.splice(index, 1);

      // this.$nextTick(() => {
      //   const fileInput = this.$refs.fileInput;

      //   if (fileInput) {
      //     // Update the file input value to trigger the change event
      //     fileInput.value = ''; // Clear the value
      //     fileInput.value = null; // Set the value to null (for some browsers)

      //     // Dispatch a change event to notify Vue about the change
      //     const changeEvent = new Event('change');
      //     fileInput.dispatchEvent(changeEvent);
      //   }
      // });
    },

    // Method to handle file input change
    // handleFileChange(event: any) {
    //   const file = event.target.files[0];
    //   this.portfolio.images = file;

    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     this.previewImage = reader.result;
    //   };

    //   reader.onerror = (error) => {
    //     console.error('Error reading the file', error);
    //   };

    //   reader.readAsDataURL(file);
    // },


    handleFileChange(event: any) {
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Read the image file and set the previewImage to show the image preview
        const reader = new FileReader();
        reader.onload = () => {
          // Create an object to store both the file and its preview
          const imageObject = {
            file: file,
            type: file.type,
            preview: reader.result as string
          };

          // Store the image object in the array
          this.portfolio.images.push(imageObject);
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      }
    },

    // deletePort

    deletePortfolio(item: any) {
      var data = item 
      console.log(data);
      
      this.$store.dispatch('deletePort', data)
    },

    
    // updatePortfolio(event: any) {
    //   var data = this.portfolio
    //   // console.log(this.portfolio);  
    //   // { user_id: this.user.id, portfolio: this.portfolio }  
    //   this.$store.dispatch('updateUserPortfolio', data)
    //   this.showForm = false;
    //   event.target.reset();
    // },

    async updatePortfolio(event: any) {
      var data = this.portfolio;
      try {
        await this.$store.dispatch('updateUserPortfolio', data);
        // Reset all fields in the form
        Object.assign(this.portfolio, {
          title: '',
          description: '',
          url: '',
          start_date: '',
          end_date: '',
          skill_used: '',
          images: [],
          video_links: '',
          other_file: null,
          id: null
        });
        this.showForm = false;
      } catch (error) {
        // Handle errors if needed
        console.error(error);
      }
    },

    previewImages(inputIndex: any) {

      if (!this.imagePreviews[inputIndex]) {
        this.imagePreviews[inputIndex] = [];
      }

      this.imagePreviews[inputIndex] = []; // Clear existing image previews

      const inputElement = document.querySelectorAll(`#input-${inputIndex}`)[0];
      console.log(inputElement);
      if (inputElement instanceof HTMLInputElement && inputElement.files) {
        const files = inputElement.files;

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const fileURL = URL.createObjectURL(file);
          console.log(fileURL);
          this.imagePreviews[inputIndex].push({ url: fileURL });
        }
      }

      // for (let i = 0; i < files.length; i++) {
      //   const file = files[i];
      //   const fileURL = URL.createObjectURL(file);
      //   this.imagePreviews[inputIndex].push({ url: fileURL });
      // }

    },


  },
  async mounted() {
    this.user = JSON.parse(this.currentUser)[0]
    this.$store.dispatch('getUserPortfolio', this.user.id)
    this.$store.dispatch('getGlobalVariables');
    this.portfolio.user_id = this.user.id;

    // this.loadPortfolioWithCount();

    let Script = document.createElement("script");
    Script.setAttribute("src", "/templates/assets/js/main.js");
    document.head.appendChild(Script);
  },
  watch: {
    currentUser() {
      this.user = JSON.parse(this.currentUser)[0];
    },

    userPortfolio() {

      // for (let i = 0; i < this.userPortfolio.data.length; i++) {
      // console.log(this.arr[i]);
      // console.log(this.userPortfolio.data[i]);
      this.portfolio.title = this.userPortfolio.data[0]?.name;
      this.portfolio.description = this.userPortfolio.data[0]?.description;
      // this.portfolio.portfolioID[i + 1] = this.userPortfolio.data[i].id;
      // }

    },
    globalVariables() {
      this.globalSettings = this.globalVariables;
    }


  }
})
export default class UserProfile extends Vue { }
</script>
