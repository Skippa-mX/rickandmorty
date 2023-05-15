<template>
  <div class="navbar">
    <custom-button @click='goToPages("/")'>bebe</custom-button>
    <custom-button @click='goToPages("/characters")'>bebe</custom-button>
    <custom-button @click='goToPages("/about")'>bebe</custom-button>
  </div>
</template>

<script>

import router from "@/router/router";

export default {
  name: "navBar",
  methods:{
    goToPages(path){
      router.push(path)
    }
  }
}
</script>

<style scoped>

</style>
