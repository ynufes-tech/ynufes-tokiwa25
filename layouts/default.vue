<script setup lang="ts">
import { onMounted } from "vue";
import leafImageSrc from "~/assets/images/leaf.png"; // ← 一個上のassets/imagesからインポート
import { useRoute } from "vue-router";
import { computed } from "vue";
import type { Container } from '@tsparticles/engine'
const route = useRoute();
// リーフONOFF
const showLeaf = computed(() => route.meta.hideHeader !== true);

const options = {
  fullScreen: {
    enable: false, // ← これで固定Canvasをやめる
  },
  background: {
    color: "transparent", // 背景を透明にする
  },
  particles: {
    number: { value: 20 }, // 粒子の数
    shape: {
      type: "image",
      options: {
        image: { src: leafImageSrc }, // 透過PNGを指定
      },
    },
    size: { value: { min: 18, max: 28 } }, // 雪の粒の大きさ
    opacity: { value: 0.7 },
    move: {
      enable: true,
      speed: 3.0, // 落ちる速さ
      direction: "bottom",
      random: true,
      straight: false,
      outModes: { default: "out" }, // 下に行ったら消える
    },
    rotate: {
      value: { min: 0, max: 180 },
      direction: "random",
      animation: { enable: true, speed: 2 }, // 回転速度
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push", // ← これでクリックで粒子追加
      },
      onHover: { enable: false },
    },
    modes: {
      push: { quantity: 3 }, // クリックで5粒子追加
    },
  },
  detectRetina: true,
};

const onLoad = (container: Container) => {
  container.pause();
  setTimeout(() => container.play(), 2000);
};

// クリック時にトップへ戻る関数
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <div class="layout-root">
    <HeaderComponent />
    <slot />
      <div class="background-img" />
      <NuxtParticles id="tsparticles" v-if="showLeaf" :options="options" @load="onLoad">
      </NuxtParticles>
    <!-- フローティングボタン -->
    <div class="page-top" @click="scrollToTop">
      <div class="arrow"></div>
      <p>Page Top</p>
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
@import url("https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;700&display=swap");
.layout-root {
  font-family: "Kaisei Decol", sans-serif;
  color: #000000;
  position: relative;
  font-size: 24px;
  padding-bottom: 8rem;
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
#tsparticles {
  inset: 0;
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  filter: blur(1.5px);
}

.page-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  object-fit: contain;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #f46b45, #fbc16a);
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Zen Old Mincho", sans-serif;
  font-size: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
  @include md {
    width: 80px;
    height: 80px;
    font-size: 15px;
  }
  @include sm {
    width: 70px;
    height: 70px;
    font-size: 13px;
  }
}

/* ホバーで少し浮く効果 */
.page-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* 上矢印部分 */
.arrow {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 15px solid white;
  margin-bottom: 8px;
  @include sm {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    margin-bottom: 8px;
  }
}
</style>
