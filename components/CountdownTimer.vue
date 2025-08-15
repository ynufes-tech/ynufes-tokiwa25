<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  title: string
  targetDate: string
}>()

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let timer: number | undefined

const updateCountdown = () => {
  const now = new Date().getTime()
  const target = new Date(props.targetDate).getTime()
  const diff = target - now

  if (diff <= 0) {
    days.value = hours.value = minutes.value = seconds.value = 0
    clearInterval(timer)
    return
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24)
  minutes.value = Math.floor((diff / (1000 * 60)) % 60)
  seconds.value = Math.floor((diff / 1000) % 60)
}

onMounted(() => {
  updateCountdown()
  timer = window.setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="countdown-wrapper">
    <h2>{{ title }}</h2>
    <div class="time-container">
      <div class="time-box time-box-lg">
        <span class="num">{{ days }}</span>
        <span class="label label-lg">Days</span>
      </div>
      <div class="time-boxes">
        <div class="time-box">
          <span class="num">{{ hours }}</span>
          <span class="label">Hours</span>
        </div>
        <div class="time-box">
          <span class="num">{{ minutes }}</span>
          <span class="label">Minutes</span>
        </div>
        <div class="time-box">
          <span class="num">{{ seconds }}</span>
          <span class="label">Seconds</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.countdown-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  background: rgba(255, 236, 184, 0.3);
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(234, 195, 153, 1);
  margin-top: 10vh;
  max-width: 100%;

  @include sm {
    margin-top: 0;
  }

  h2 {
    font-size: 37px;
    margin-bottom: 20px;
    font-weight: bold;
    @include md {
      font-size: 24px;
    }
  }

  .time-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 8vh;
    
    @include sm {
      gap: 10px;
      margin-top: 0;
      flex-direction: column;
    }
  }

  .time-boxes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;

    @include md {
      gap: 18px;
    }

    @include sm {
      gap: 13px;
    }
  }

  /* 共通ボックススタイル */
  .time-box {
    background: rgba(217, 217, 217, 0.6);
    box-shadow: -1px 5px 5px rgba(102, 102, 102, 0.24) inset;
    padding: 9px 20px;
    border-radius: 9px;
    width: 90px;
    position: relative;
    text-align: center;

    @include md {
      width: 50px;
    }

    .num {
      display: block;
      font-size: 4rem;
      font-weight: 500;
      
      @include md {
        font-size: 2.5rem;
      }

      @include sm {
        font-size: 2rem;
      }
    }

    .label {
      font-size: 1rem;
      letter-spacing: 8px;
      margin-top: 2vh;
      display: inline-block;
      transform: translateX(30%); /* ラベルを右に少しずらす */
      
      @include md {
        font-size: 0.7rem;
        letter-spacing: 5px;
        transform: translateX(10%); /* ラベルを右に少しずらす */
      }
      @include sm {
        letter-spacing: 2px;
        transform: translateX(0%); /* ラベルを右に少しずらす */
      }
    }
  }

  .time-box-lg {
    min-width: 130px;
    top: -40px;
    left: -30px;
    position: relative;

    .label-lg {
      font-size: 2rem;
      transform: translateX(60%); /* ラベルを右に少しずらす */

      @include md {
        font-size: 1rem;
      }

      @include sm {
        transform: translateX(0%); /* ラベルを右に少しずらす */
      }
    }

    @include md {
      min-width: 70px;
      left: -10px;
    }

    @include sm {
      min-width: 100px;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-self: center;
    }
  }
}
</style>
