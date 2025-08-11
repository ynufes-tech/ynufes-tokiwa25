<script lang="ts" setup></script>

<template>
  <div class="component-root">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
  .component-root{
    position: relative;
    margin:0 auto;
    width: 63.8%;
    min-height: 600px;
    background-color: #fbefde80;
    border-radius: 50px;
    border:1px solid #762626;
  }

  .component-root:before{
    content:"";
    position: absolute;
    inset: 0;
    left:-.1%;
    top:-.1%;
    width:100.2%;
    height: 100.2%;
    border:1px solid #762626;
    border-radius: 50px;
  }
  .component-root:after{
    content:"";
    position: absolute;
    inset: 0;
    left:-.4%;
    top:-.8%;
    width:100.8%;
    height: 100.8%;
    border:1px solid #762626;
    border-radius: 50px;
  }
  
</style>