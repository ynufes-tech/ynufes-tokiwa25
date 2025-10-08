<script setup lang="ts">
const props = defineProps<{
  event: {
    title: string
    subtitle: string
    top: number
    height: number
  }
}>()
</script>

<template>
  <div
    class="event-card"
    :style="{ top: `${event.top}px`, height: `${event.height - 8}px` }"
  >
    <p class="title">{{ event.title }}</p>
    <p class="subtitle">{{ event.subtitle }}</p>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;

.event-card {
  position: absolute;
  left: 8px;
  right: 8px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.4);
  text-align: center;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  .title {
    font-weight: bold;
    @include md {
      font-size: 20px;
    }
  }
  .subtitle {
    font-size: 14px;
    @include md {
      font-size: 19px;
    }
  }
}
</style>
