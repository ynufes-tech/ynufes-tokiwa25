<script lang="ts" setup></script>

<template>
  <div class="component-root">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.component-root {
  font-family: "Zen Old Mincho", sans-serif;
  z-index: 0;
  position: relative;
  margin: 0 auto;
  width: 71.2%;
  background-color: #fbefde80;
  border-radius: 25px;
  border: 1px solid #762626;
}

@include sm {
  .component-root {
    width: 80%;
  }
}

.component-root:before {
  z-index: -1;
  content: "";
  position: absolute;
  inset: 0;
  left: -0.1%;
  top: -3px;
  width: 100.2%;
  height: 100.2%;
  border: 1px solid #762626;
  border-radius: 25px;
}
.component-root:after {
  z-index: -1;
  content: "";
  position: absolute;
  inset: 0;
  left: -0.4%;
  top: -5px;
  width: 100.8%;
  height: calc(100% + 5px);
  border: 1px solid #762626;
  border-radius: 25px;
}
</style>
