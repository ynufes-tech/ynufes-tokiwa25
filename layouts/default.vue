<script setup lang="ts">
import { onMounted } from "vue";
import leafImageSrc from "../assets/images/leaf.png"; // ← 一個上のassets/imagesからインポート

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
        image: { src: "/images/leaf.png"}, // 透過PNGを指定
      },
    },
    size: { value: { min: 18, max: 28 } }, // 雪の粒の大きさ
    opacity: { value: 0.7 },
    move: {
      enable: true,
      speed: 2.0, // 落ちる速さ
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
        mode: "push" // ← これでクリックで粒子追加
      },
      onHover: { enable: false }
    },
    modes: {
      push: { quantity: 3 } // クリックで5粒子追加
    }
  },
  detectRetina: true,
};
const onLoad = (container: Container) => {
  container.pause();
  setTimeout(() => container.play(), 2000);
};
</script>

<template>
  <div class="layout-root">
    <HeaderComponent />
    <slot />
    <div class="background-img" />
    <!-- <canvas id="canvas"></canvas> -->
    <NuxtParticles id="tsparticles" :options="options" @load="onLoad">
    </NuxtParticles>
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
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  filter: blur(1.5px);
}
</style>
