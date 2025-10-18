<script setup lang="ts">
import { onMounted } from 'vue'
import leafImageSrc from '../assets/images/leaf.png'  // ← 一個上のassets/imagesからインポート
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
// リーフONOFF
const showLeaf = computed(() => route.meta.hideHeader !== true)

onMounted(() => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.width = window.innerWidth
  canvas.height = canvas.scrollHeight

  const leafImage = new Image()
  leafImage.src = leafImageSrc  // importしたパスをセット

  class Leaf {
    x: number
    y: number
    z: number
    size: number
    speedY: number
    swingAmplitude: number
    swingSpeed: number
    angle: number
    rotation: number
    rotationSpeed: number

    constructor() {
      this.reset()
    }

    reset() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.z = Math.random()
      this.size = 30 + this.z * 30
      this.speedY = 0.2 + this.z * 0.8
      this.swingAmplitude = 60 + this.z * 30
      this.swingSpeed = 0.005 + this.z * 0.01
      this.angle = Math.random() * Math.PI * 2
      this.rotation = Math.random() * 360
      this.rotationSpeed = (Math.random() - 0.5) * 0.5
    }

    update() {
      this.y += this.speedY
      this.x += Math.sin(this.angle) * this.swingAmplitude * this.swingSpeed
      this.angle += this.swingSpeed
      this.rotation += this.rotationSpeed
      if (this.y > canvas.height + 50) this.reset()
    }

    draw() {
      if (!leafImage.complete) return

      ctx.save()
      ctx.translate(this.x, this.y)
      ctx.rotate((this.rotation * Math.PI) / 180)

      //  const blur = (1 - this.z) * 4
      //  ctx.filter = `blur(${blur.toFixed(2)}px)`

      const size = this.size
      ctx.drawImage(leafImage, -size / 2, -size / 2, size, size)

      ctx.restore()
      ctx.filter = 'none'
    }
  }

  const leaves: Leaf[] = []
  for (let i = 0; i < 20; i++) {
    leaves.push(new Leaf())
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const leaf of leaves) {
      leaf.update()
      leaf.draw()
    }
    requestAnimationFrame(animate)
  }

  leafImage.onload = () => {
    animate()
  }

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
  canvas.height = canvas.scrollHeight
  })
})

// クリック時にトップへ戻る関数
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<template>
  <div class="layout-root">
    <HeaderComponent />
    <slot />
    <div class="background-container">
      <div class="background-img" />
      <canvas id="canvas" v-if="showLeaf"></canvas>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;700&display=swap');
.layout-root {
  font-family: 'Kaisei Decol', sans-serif;
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
#canvas{
  inset:0;
  position: absolute;
  z-index: -80;
  height: 100%;
  width: 100%;
  filter: blur(2px);
}
//.floating-button {
//  position: fixed;
//  bottom: 2rem; // 下に余裕（余白）を持たせる
//  right: 2rem;  // 右に余裕を持たせる
//  width: 80px;  // 元画像が例えば160pxなら半分
//  height: 80px;
//
//  img {
//    width: 100%;
//    height: 100%;
//    object-fit: contain;
//  }
//}
//.floating-button {
//  position: fixed;
//  bottom: 2rem;
//  right: 2rem;
//  width: 80px;
//  height: 80px;
//  z-index: 1000; // 他の要素より上に
//
//  img {
//    width: 100%;
//    height: 100%;
//    object-fit: contain;
//    pointer-events: auto; // 念のためクリックできるように
//  }
//  &:hover {
//    transform: scale(1.1) translateY(-2px); // 拡大 + ちょっと上に
//    cursor: pointer;
//  }
//}
//.floating-button {
//  transition: transform 0.2s ease;
//
//  &:hover {
//    transform: scale(1.1); // 少し拡大
//    cursor: pointer;       // マウスカーソルをポインターに
//  }
//  @include sm {
//    width: 60px;
//    height: 60px;
//    bottom: 1.5rem;
//    right: 1.5rem;
//  }
//}

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
  @include md{
    width: 80px;
    height: 80px;
    font-size: 15px;
  }
  @include sm{
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
  @include sm{
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    margin-bottom: 8px;
  }
}
</style>
