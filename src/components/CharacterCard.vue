<template>
  <div class="card">
    <div class="card__image">
      <img :src=character.image alt="">
    </div>
    <div class="card__info">
      <div class="section">
        <h2 class="card__info__name" >{{character.name}}</h2>
          <div class="card__info__status">
            <div :class="[this.character.status === 'Alive' ? 'alive' : 'dead','status__icon']"></div>
            {{character.status}}-{{character.species}}-{{character.gender}}
          </div>
      </div>
      <div class="section">
        <div class="card__info__locations">
          <span>Last known location:</span><br>
          <span>{{character.location.name}}</span>
        </div>
      </div>
        <div class="section">
          <div class="card__info__first-seen">
            <span>First seen episode:</span><br>
            <span>{{episodeName}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {

  name: "CharacterCard",
  props:{
    character:{
      type: Object,
      required: true
    }
  },
  data(){
    return {
      episodeName: ''
    }
  },
   methods:{
    async getFirstSeenEpisode(){
      try {
        const response = await axios.get(this.character.episode[0])
        this.episodeName = response.data.name
      } catch (e){
        console.log('err')
      }
    }
   },
 async mounted() {
    await this.getFirstSeenEpisode()
   }
}
</script>

<style lang="sass" scoped>
.card
  display: flex
  flex-flow: row nowrap
  border: #151515 2px solid
  border-radius: 20px
  margin: 10px
  padding: 10px
  box-shadow: 5px 5px 5px rgba(39, 39, 39, 0.71)
  background: rgba(114, 162, 248, 0.95)
  max-width: 600px

  &__image
    border-right: #151515 2px solid
    padding: 5px

    img
      max-height: 200px
      border-radius: 8px 0 0 8px

  &__info
    display: flex
    flex-flow: column wrap
    justify-content: space-between
    padding-left: 10px





</style>
