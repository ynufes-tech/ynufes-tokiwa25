<script setup lang="ts">
</script>

<template>
  <div class="layout-root">
  <!-- <HeaderComponent />-->
  <slot />
  <!-- <div class="background-container">
    <div class="background-img" />
  </div> -->
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.page-root {
  padding-top: 4rem;
}
</style>
<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;
.layout-root {
  font-family: 'Kaisei Decol', sans-serif;
  color: #000000;
  position: relative;
  font-size: 24px;
  @include lg {
    font-size: 22px;
  }
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 17px;
  }
}
p {
  font-size: 24px;
  @include lg {
    font-size: 22px;
  }
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 17px;
  }
}
// .background-container {
//   width: 100%;
//   height: 100vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   z-index: -100;
//   overflow: hidden;
// }
.layout-root {
  inset: 0;
  position: relative;
  background-image:
    linear-gradient(to bottom,#E94A22 3%,#E9443C 12%,#EF6140 30%,#F97D47 50% ,#F69869 75% ,#F49085 91%);
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
//   @include sm {
//     background-image: url(@/assets/images/mobile-background-img.png);
//   }
}
.layout-root::before {
  inset: 0;
  content: "";
  position: absolute;
  background-image: url('@/assets/images/background-texture.webp');
  background-size: cover;
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -99;
  mix-blend-mode: multiply;
  opacity: .15;
}
</style>