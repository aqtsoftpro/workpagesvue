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
                            </div>
                            <form class="edit-profile-form profile-form">
                              
                                        <div class="portfolio-row" v-for="index in porfolioCount" :key="index">

                                          <div class="section-title2">
                                            <h5>Portfolio Item {{ index }} :</h5>
                                          </div>

                                          <div class="col-md-12">
                                              <div class="form-inner mb-25">
                                                  <label>Title*</label>
                                                  <div class="input-area"><img src="/templates/assets/images/icon/company-2.svg " alt="">
                                                    <input type="text" v-model="portfolio.portfolioID[index]" name="portfolioID">
                                                      <input type="text" v-model="portfolio.name[index]" name="name" placeholder="Portfolio Title">
                                                      <!-- <input type="text" v-model="item.portfolioID" name="portfolioID"> -->

                                                  </div>
                                              </div>
                                          </div>
                                          <div class="col-md-12">
                                              <div class="form-inner mb-20">
                                                  <label>Description*</label>
                                                  <textarea name="description" v-model="portfolio.description[index]"  placeholder="Portfolio Description" spellcheck="false"></textarea>
                                              </div>
                                          </div>
                                          <div class="col-md-12">
                                              <div class="form-inner mb-25">
                                                  <label>Images*</label>
                                                  <div class="input-area"><img src="/templates/assets/images/icon/company-2.svg " alt="">
                                                      <!-- <input type="file" name="images" @change="previewFiles(index)" multiple> -->
                                                  </div> 
                                              </div>

                                              <!-- <div  class="file-previews">
                                                <div v-for="(preview, index) in filePreviews[index]" :key="index">
                                                  <img v-if="preview.type === 'image'" :src="preview.url" alt="Image Preview">
                                                </div>
                                              </div> -->
                                          
                                          </div>

                                          <div class="col-md-12">
                                            <hr>
                                          </div>

                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-inner">
                                                <button @click="updatePortfolio" class="primry-btn-2 lg-btn w-unset" type="button">Update Portfolio</button>
                                                
                                            </div>
                                        </div>
                                    </form> 
                        </div>

                        
                        <div v-for="(inputIndex, index) in inputFields" :key="index">
                          <input type="file" @change="previewImages(inputIndex)" accept="image/*" multiple>
                         <!--  <div v-if="imagePreviews[inputIndex].length" class="image-previews">
                            <img v-for="(preview, previewIndex) in imagePreviews[inputIndex]" :key="previewIndex" :src="preview.url" alt="Image Preview">
                          </div> -->
                          <!-- <div v-if="imagePreviews[inputIndex] && imagePreviews[inputIndex].length" class="image-previews">
                            <img v-for="(preview, previewIndex) in imagePreviews[inputIndex]" :key="previewIndex" :src="preview.url" alt="Image Preview">
                          </div> -->
                          <div v-if="!imagePreviews[inputIndex]" class="image-previews">
                            <img v-for="(preview, previewIndex) in imagePreviews[inputIndex]" :key="previewIndex" :src="preview.url" alt="Image Preview">
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
        portfolio : {
            name: [],
            portfolioID: [],
            description: [],
            // images: [],
        },
        porfolioCount : '',
        inputFields: [0, 1, 2], // You can adjust the number of input fields as needed
        imagePreviews: {},
        globalSettings: []
    }
  },
  beforeCreate()
  {
    
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
    loadPortfolioWithCount(portfolioCount:any) {

      this.$store.dispatch('getGlobalVariables');
      this.globalSettings = this.globalVariables;
      // this.porfolioCount = 3;
      console.log(this.globalSettings);
      // this.porfolioCount  = 8;

    },  
    updatePortfolio(event:any) {
            // console.log(this.portfolio);    
            this.$store.dispatch('updateUserPortfolio', {user_id: this.user.id, portfolio: this.portfolio})
    },
    previewImages(inputIndex:any) {
      
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

      // this.loadPortfolioWithCount();

      let Script = document.createElement("script");
        Script.setAttribute("src", "/templates/assets/js/main.js");
        document.head.appendChild(Script);
  },
  watch: {
    currentUser(){
        this.user = JSON.parse(this.currentUser)[0]; 
    },
    userPortfolio()
      {

        for (let i = 0; i < this.userPortfolio.data.length; i++) {
            // console.log(this.arr[i]);
            // console.log(this.userPortfolio.data[i]);
            this.portfolio.name[i+1] = this.userPortfolio.data[i].name;
            this.portfolio.description[i+1] = this.userPortfolio.data[i].description;
            this.portfolio.portfolioID[i+1] = this.userPortfolio.data[i].id;
        }

  

      },
    globalVariables() {
          this.globalSettings = this.globalVariables;
      }
    
    
  }
})
export default class UserProfile extends Vue {}
</script>
