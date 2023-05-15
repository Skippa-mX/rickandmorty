<template>
  <div class="wrapper">
    <character-list :characters="characters"></character-list>
<!--    <h6 v-for="character in characters.results" :key="character.id">{{character.name}}</h6>-->
  </div>
</template>


<script>
import axios from "axios"
import CharacterList from "@/components/CharacterList";


export default {
  async mounted() {
    this.characters = await this.getCharacterList()
    console.log(this.characters)
  },
  components:{
    CharacterList
  },
  data(){
    return{
      characters:[]
    }
  },
  methods:{
    async getCharacterList(){
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character').then(res => res.data)
        console.log(response)
        return response
      }
      catch (e){
        alert('err')
      }

    }
  }
}
</script>


<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: "Roboto Thin",sans-serif
.wrapper
  width: 100vw
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
</style>
