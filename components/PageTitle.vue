<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
let titleSwitchClass = "short";
if (props.title.length < 5) {
  titleSwitchClass = "short";
} else if (props.title.length < 10) {
  titleSwitchClass = "medium";
} else {
  titleSwitchClass = "long";
}
</script>

<template>
  <div class="component-root">
    <img src="~/assets/images/title_leaf.svg" id="leftside" alt="" />
    <h1 :class="titleSwitchClass">{{ title }}</h1>
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
    color: white;
    font-family: "Kaisei Decol", serif;
  }
  .short {
    font-size: 64px;
    @include md {
      font-size: 40px;
    }
    @include sm {
      font-size: 28px;
    }
  }
  .medium {
    font-size: 55px;
    @include md {
      font-size: 40px;
    }
    @include sm {
      font-size: 28px;
    }
  }
  .long {
    font-size: 47px;
    @include xl {
      font-size: 44px;
    }
    @include lg {
      font-size: 32px;
    }
    @include md {
      font-size: 5.8vw;//大学祭実行委員会について　+1文字ギリギリ
    }
  }
  #rightside {
    transform: rotateY(180deg);
  }
  img {
    @include xl {
      width: 80px;
    }
    @include lg {
      width: 60px;
    }
    @include md {
      width: 8vw;
    }
  }
}
</style>
