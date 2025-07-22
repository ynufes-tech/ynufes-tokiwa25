<script setup lang="ts"></script>

<template>
  <div class="layout-root">
    <HeaderComponent />
    <slot />
    <div class="background-container">
      <div class="background-img" />
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.layout-root {
  padding-top: 4rem;
}
</style>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.layout-root {
  outline: 2px solid blue;
  font-family: "Kaisei Decol", sans-serif;
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
.background-img {
  inset: 0;
  position: absolute;
  background-image: linear-gradient(
    to bottom,
    #e94a22 3%,
    #e9443c 12%,
    #ef6140 30%,
    #f97d47 50%,
    #f69869 75%,
    #f49085 91%
  );
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: -100;
  //   @include sm {
  //     background-image: url(@/assets/images/mobile-background-img.png);
  //   }
}
.background-img::before {
  inset: 0;
  content: "";
  position: absolute;
  background-image: url("@/assets/images/background-texture.webp");
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  z-index: -99;
  mix-blend-mode: multiply;
  opacity: 0.17;
}
</style>
