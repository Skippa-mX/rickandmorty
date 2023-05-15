<template>
  <navBar/>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>

import navBar from "@/components/NavBar";
export default {
  components: {navBar}
}
</script>

<style scoped>

</style>
