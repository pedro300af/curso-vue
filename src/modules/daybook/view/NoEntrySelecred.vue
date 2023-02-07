<template>
    <div class="d-flex justify-content-center">
        <h1 class="aling-self-center">No hay nada selecciondo</h1>
    </div>
    <FabVue/>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components:{
    FabVue: defineAsyncComponent(()=>import('../components/FabVue.vue'))
  }
}
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
</style>
