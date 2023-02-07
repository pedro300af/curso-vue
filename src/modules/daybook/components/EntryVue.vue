<template>
  <div class="mb-3 pointer p-2 entry-container"
  @click="$router.push({name:'entry', params: {id: 10}})"
  >

    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">01</span>
        <span class="mx-1 fs-5">02</span>
        <span class="mx-2 fw-light">2023</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus natus esse aut corrupti eaque provident, numquam earum nostrum error harum saepe reprehenderit voluptas fugit quasi porro. Enim cum quod ipsum?
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .entry-description{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2 all ease-in;
    &:hover{
    background-color: lighten($color: gray, $amount: 45);
  }
  }
</style>