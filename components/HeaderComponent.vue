<script lang="ts" setup>
const showHeader = ref(true);
const setBg = ref(false);
onMounted(
  // 参考:
  // https://qiita.com/koji0705/items/bc260ae010abc8fb93f0
  // https://blog.leap-in.com/use-requestanimtionframe/

  // Transitionタグの活用
  // https://ja.vuejs.org/guide/built-ins/transition
  () => {
    let lastScrollPos = window.scrollY;
    let changePos = window.scrollY;
    const minThreshold = 30;
    const maxThreshold = 30;
    let running = false;

    function updateOnScroll(scrollPos, lastScrollPos) {
      setBg.value = scrollPos > 200;
      if (scrollPos > 100) {
        if (scrollPos < lastScrollPos) {
          // scroll up
          // 一定以上スクロールしたらヘッダーを表示
          if (changePos - minThreshold > scrollPos) {
            showHeader.value = true;
            changePos = scrollPos;
          }
        } else {
          // scroll down
          // 一定以上スクロールしたらヘッダーを非表示
          if (changePos + maxThreshold < scrollPos) {
            showHeader.value = false;
            changePos = scrollPos;
          }
        }
      } else {
        showHeader.value = true;
      }
    }

    window.addEventListener("scroll", function () {
      if (!running) {
        window.requestAnimationFrame(function () {
          updateOnScroll(window.scrollY, lastScrollPos);
          lastScrollPos = window.scrollY;
          running = false;
        });
        running = true;
      }
    });
  }
);
</script>
<template>
  <div class="header-component">
    <Transition name="h">
      <div
        v-if="showHeader"
        class="header-frame"
        :class="{ 'header-bg': setBg && showHeader }"
      >
        <div class="header-content">
          <div class="left">
            <NuxtLink class="header-icon" to="/">
              <img
                src="~/assets/images/tokiwa_logo.svg"
                class="header-img"
                alt="ロゴ"
              />
            </NuxtLink>
          </div>
          <div class="right">
            <SNS />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.h-leave-to,
.h-enter-from {
  opacity: 0;
}

.header-component {
  transition: all 0.3s ease-in-out;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
}

.header-frame {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 75px;
  padding-top: 30px;
  transition: all 0.3s ease-in-out;
  align-items: center;
  @include md{
    padding:0 30px;
    padding-top: 30px;
  }
  .header-content {
    width: 100%;
    margin: 0 auto;
    display: flex;
    z-index: 1;
    //width: min(100%, 60rem);
    justify-content: space-between;
    align-items: center;
  }

  // backgroundでtransitionを効かせるために::afterを使用
  // https://qiita.com/hibikikudo/items/6dbc560ea58cf10617fa
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 70%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0.3);
    .gradation {
      background-image: linear-gradient(
        90deg,
        #fce8e8,
        #fdeeee 30%,
        #ea2020 80%
      );
    }
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &.header-bg::after {
    opacity: 1;
  }

  .right {
    justify-self: end;
  }
  .header-img {
    display: flex;
    text-decoration: none;
    width: 13rem;
    @include md {
      width: 8rem;
    }
    @include sm {
      width: 7rem;
    }
    > img {
      margin-right: 20px;
    }
  }
}
</style>
