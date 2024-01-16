<template>
  <div>
  </div>  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import company from '../views/Company/index.vue'; // @ is an alias to /src

@Options({
  components: {
    company,
  },
})
export default class Company extends Vue {}
</script>
