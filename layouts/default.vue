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
</script>

<template>
  <div class="layout-root">
    <HeaderComponent />
    <slot />
    <div class="background-container">
      <div class="background-img" />
      <canvas id="canvas" v-if="showLeaf"></canvas>
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
</style>
