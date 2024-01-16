<template>
    <pdf v-if="url" :src="url" :page="1">
      <template slot="loading">
        loading content here...
      </template>
    </pdf>
  </template>
  
  <script>
  import pdf from 'pdfvuer'
  import 'pdfjs-dist/build/pdf.worker.entry' // not needed since v1.9.1  
  export default {
    components: {
      pdf
    },
    data() {
      return {
        url: null
      }
    },
    mounted() {
      this.url = this.$route.query.url
      console.log(this.url)
    }
  }
  </script>