<template>
  <div class="card">
    <div class="card__image">
      <img :src=character.image alt="">
    </div>
    <div class="card__info">
      <div class="section">
        <h1 class="card__info__name" >{{character.name}}</h1>
          <div class="card__info__status">
            <div :class="[this.character.status === 'Alive' ? 'alive' : 'dead','status__icon']">
              Status{{character.status}} Race {{character.species}} Gender{{character.gender}}
            </div>
          </div>
      </div>
      <div class="section">
        <div class="card__info__locations">
          <span>Last known location</span><br>
          <span>{{character.location.name}}</span>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: "CharacterCard",
  props:{
    character:{
      type: Object,
      required: true
    }
  },

}
</script>

<style lang="sass" scoped>
.card
  display: flex
  flex-flow: row wrap
  border: #151515 2px solid
  border-radius: 150px 0
  margin-top: 10px
  padding: 10px
  box-shadow: 5px 5px rgba(39, 39, 39, 0.71)
  background: rgba(63, 130, 243, 0.95)

  &__image
    border-right: #151515 2px solid
    padding: 5px

    img
      max-height: 200px
      border-radius: 120px 2px 2px 2px

  &__info
    display: flex
    flex-flow: column wrap
    justify-content: space-between
    padding-left: 10px



</style>
