<script lang="ts" setup>
const props = defineProps<{
  title: string;
  jaTitle: string;
}>();

function getImagePath(title: string) {
  return new URL(`../assets/images/TopPageLink/${title}.webp`, import.meta.url)
    .href;
}
</script>
<template>
  <div class="component-root">
    <div class="wrapper">
      <img :src="getImagePath(title)" alt="" />
      <div class="texts">
        <p class="text-tp">{{ title.toUpperCase() }}</p>
        <p class="text-bt">{{ jaTitle }}</p>
      </div>
    </div>
    <div class="top-outline"></div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.component-root {
  width: 99vw;
  position: relative;
  transition: all .5s ease;
  .wrapper {
    width: 100%;
    aspect-ratio: 6 / 1;
    transform: skewY(-4deg);
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      filter: blur(7px) grayscale(20%);
      transition: all .3s ease;
      @include md {
        filter: blur(4px);
      }
      @include md {
        filter: blur(3px);
      }
    }
    .texts {
      position: absolute;
      inset: 0;
      top: 25%;
      left: 60%;
      color: white;
      width: 50%;
      letter-spacing: 10px;
      font-size: 40px;
      text-shadow: 4px 4px 4px #000000b3;
      transition: all .3s;
      .text-tp {
        padding-bottom: 3px;
        border-bottom: 1px white solid;
        font-size: 1em;
      }
      .text-bt {
        padding-top: 3px;
        font-size: 0.8em;
      }
      @include lg {
        font-size: 30px;
      }
      @include md {
        font-size: 20px;
      }
      @include sm {
        font-size: 13px;
      }
    }
  }
  .top-outline {
    position: absolute;
    inset: 0;
    top: -3%;
    background-color: white;
    width: 100%;
    aspect-ratio: 600 / 105;
    z-index: -1;
    transform: skewY(-3deg);
  }
}
.component-root:hover{
  cursor: pointer;
  .wrapper{
    img{
      filter: blur(4px) grayscale(0%);
      transition: all .3s ease;
    }
    .texts{
      transition: all .3s;
      transform: translateX(-10%);
    }
  }
}
</style>
