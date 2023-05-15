<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "customButton"
}
</script>

<style lang="sass" scoped>
  button
    background: rgb(226,158,241)
    background: linear-gradient(167deg, rgba(226,158,241,1) 0%, rgba(130,74,209,1) 46%, rgba(77,175,242,1) 100%)
    width: 100px
    padding: 10px



</style>
