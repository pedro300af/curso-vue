<template>
  <h1>home</h1>
  <button @click="goToDaybook" class="btn btn-primary">boton</button>
</template>

<script>
export default {
  methods:{
    goToDaybook(){
      return this.$router.push({name: 'no-entry'})
    }
  }
}
</script>

<style>

</style>