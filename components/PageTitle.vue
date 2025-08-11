<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="component-root">
    <img src="~/assets/images/title_leaf.svg" id="leftside" alt="">
    <h1>{{title}}</h1>
    <img src="~/assets/images/title_leaf.svg" id="rightside" alt="">
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

  .component-root{
    margin:0;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
    font-size:64px;
    font-family:'Kaisei Decol',serif;
    @include sm{
      font-size:35px;//スマホ時サイズ適当です
    }
    }
    #rightside{
      transform: rotateY(180deg);
    }
    img{
      @include sm{
        width: 60px;
      }
    }
  }
  
</style>