<script lang="ts" setup>
const props = defineProps<{
  title: string;
  jaTitle: string;
}>();


function getImagePath(title: string) {
  return `/25/tokiwa/images/TopPageLink/${title}.webp`
}
const imageUrl = computed(() => getImagePath(props.title))
</script>
<template>
  <div class="component-root">
    <NuxtLink :to="`/${title}`">
      <div class="wrapper">
        <img :src="imageUrl" alt="" />
        <div class="texts">
          <p class="text-tp">{{ title.toUpperCase() }}</p>
          <p class="text-bt">{{ jaTitle }}</p>
        </div>
      </div>
      <div class="top-outline"></div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.component-root {
  width: 98.5vw;
  position: relative;
  transition: all 0.5s ease;
  .wrapper {
    width: 100%;
    aspect-ratio: 5 / 1;
    transform: skewY(-4deg);
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      filter: blur(7px) grayscale(20%);
      transition: all 0.3s ease;
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
      left: 55%;
      color: white;
      width: 50%;
      letter-spacing: 8px;
      font-size: 40px;
      font-weight: 700;
      text-shadow: 4px 4px 3px #000000de;
      transition: all 0.3s;
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
        letter-spacing: 5px;
      }
      @include sm {
        font-size: 13px;
        letter-spacing: 3px;
      }
    }
  }
  .top-outline {
    position: absolute;
    inset: 0;
    top: -3%;
    background-color: white;
    width: 100%;
    aspect-ratio: 500 / 105;
    z-index: -1;
    transform: skewY(-3deg);
  }
}
.component-root:hover {
  cursor: pointer;
  .wrapper {
    img {
      filter: blur(4px) grayscale(0%);
      transition: all 0.3s ease;
    }
    .texts {
      transition: all 0.3s;
      transform: translateX(-10%);
    }
  }
}
</style>
