<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <div class="backto">
        <NuxtLink class="circle-text-button" :to="link">
          <div class="circle">
            <div class="inner-dot">
            </div>
          </div>
          <span class="text">{{ text }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;

.circle-text-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 12px;
  transition: all 0.3s ease;
  padding: 6px 12px;
  border-radius: 9999px;

  .circle {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 2px solid #81FFEE;
    background-color: #81FFEE;
    display: flex;
    align-items: center;
    justify-content: center;
    @include md {
      width: 32px;
      height: 32px;
    }

    .inner-dot {
      width: 15px;
      height: 15px;
      background-color: #FFFF;
      border-radius: 50%;
      transition: background-color 0.3s ease;
    }
  }

  .text {
    font-size: 28px;
    color: #FFFF;
    font-family: 'Zen Old Mincho', sans-serif;
    transition: color 0.3s ease;
    @include md {
      font-size: 21px;
    }
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);

    .circle {
      background-color: transparent;
      .inner-dot {
        background-color: #81FFEE;
      }
    }

    .text {
      color: #81FFEE;
      @include md {
        font-size: 21px;
      }
    }
  }
}
</style>