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

              <form v-if="showForm" id="myForm" class="edit-profile-form profile-form" enctype="multipart/form-data">

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
                       {{portfolio.id==null? 'Save Portfolio': 'Update Portfolio'}}</button>
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
              <div class="edit-profile-form profile-form">
                <!-- {{  userPortfolio }} -->
                <div class="row">
                  <div v-if="userPortfolio.data">
                    <h5 v-if="userPortfolio.data.length == 0">No Portfolio...</h5>
                  </div>
                  <div v-for="portfolio in userPortfolio.data" class="col-md-6 mb-4">
                    <div class="card">
                      <div class="card-header">
                        <h6 class="card-title">
                          {{ portfolio.title }}

                        </h6>
                        <button class="primry-btn-2 lg-btn float-end" @click="editView(portfolio)">
                          view or edit
                        </button>
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
      this.showForm = true;
      this.portfolio.title = portfolioItem.title;
      this.portfolio.description = portfolioItem.description;
      this.portfolio.url = portfolioItem.url;
      this.portfolio.start_date = portfolioItem.start_date;
      this.portfolio.end_date = portfolioItem.end_date;
      this.portfolio.skill_used = portfolioItem.skill_used;
      this.portfolio.video_links = portfolioItem.video_links;
      this.portfolio.id = portfolioItem.id;
    },

    cancelForm(){
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
            user_id: '',
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
