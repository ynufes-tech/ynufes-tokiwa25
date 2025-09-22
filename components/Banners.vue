<script lang="ts" setup></script>
<template>
  <div class="component-root">
    <img src="../assets/images/sponsors/sample_banner.webp" alt="" />
    <img src="../assets/images/sponsors/sample_banner.webp" alt="" />
    <img src="../assets/images/sponsors/sample_banner.webp" alt="" />
    <img src="../assets/images/sponsors/sample_banner.webp" alt="" />
    <img src="../assets/images/sponsors/sample_banner.webp" alt="" />
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.component-root {
  margin: 100px auto;
  margin-bottom: 0;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 3%;
  img {
    max-width: 600px;
    width: 30%;
  }
  @include md {
    width: 96%;
    margin: 50px auto;
    gap: 15px 3%;
    img {
      width: 40%;
    }
  }
  @include sm {
    flex-direction: column;
    align-items: center;
    margin: 30px auto;
    img {
      width: 70%;
      max-width: 600px;
    }
  }
}
</style>
