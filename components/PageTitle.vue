<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="component-root">
    <img src="~/assets/images/title_leaf.svg" id="leftside" alt="" />
    <h1>{{ title }}</h1>
    <img src="~/assets/images/title_leaf.svg" id="rightside" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.component-root {
  margin: 0;
  margin-top: 100px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  @include sm {
    margin-top: 75px;
  }
  h1 {
    font-size: 64px;
    font-family: "Kaisei Decol", serif;
    color: white;
    @include md {
      font-size: 7vw;
    }
  }
  #rightside {
    transform: rotateY(180deg);
  }
  img {
    @include md {
      width: 10vw;
    }
  }
}
</style>
