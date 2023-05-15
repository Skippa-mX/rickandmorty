<template>
 <div class="character__list">
    <character-card v-for="character in characters.results" :key="character" :character="character"></character-card>
 </div>
</template>

<script>


import CharacterCard from "@/components/CharacterCard";

export default {
  name: "CharacterList",
  components: {CharacterCard},

  props:{
    characters:{
      type:Array,
      required:true,
    }
  }
}
</script>

<style scoped>

</style>
