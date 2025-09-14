<script lang="ts" setup>
import Back from "./svgs/dateBack.vue";
const props = defineProps({
  nthDay: {
    type: Number,
  },
});
const date = ref("");
const day = ref("");
const time = ref("");
if (props.nthDay === 1) {
  date.value = "10.31";
  day.value = "Fri.";
  time.value = "13:00 - 20:30";
} else if (props.nthDay === 2) {
  date.value = "11.1";
  day.value = "Sat.";
  time.value = "9:00 - 20:30";
} else {
  date.value = "11.2";
  day.value = "Sun.";
  time.value = "9:00 - 15:00";
}
</script>
<template>
  <div class="component-root">
    <Back
      :color="
        nthDay === 1
          ? '#F69EAA'
          : nthDay === 2
          ? '#F6C39E'
          : nthDay === 3
          ? '#FFABAB'
          : '#000000'
        //nthDayで渡された値によって背景色のsvgに渡す値を切り替える
      "
    />
    <div class="texts">
      <p class="date">{{ date }}</p>
      <p
        class="day"
        :class="
          nthDay === 1
            ? 'Fri'
            : nthDay === 2
            ? 'Sat'
            : nthDay === 3
            ? 'Sun'
            : ''
        "
      >
        {{ day }}
      </p>
      <p class="time">{{ time }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;
.component-root {
  position: relative;
  width: 100%;
}
.texts {
  inset: 0;
  position: absolute;
  color: white;
  .date {
    position: absolute;
    inset: 0;
    left: -10%;
    top: 30%;
    font-size: 3em;
  }
  .day {
    position: absolute;
    inset: 0;
    left: 105%;
    top: 10%;
    transform: rotate(-90deg);
    font-size: 1.5em;
  }
  .day.Sat {
    color: #48aef2;
  }
  .day.Sun {
    color: #ff0000;
  }
  .time {
    position: absolute;
    inset: 0;
    top: 60%;
    font-size: 1.3em;
  }
  font-size: 20px;
  @include lg {
    font-size: 16px;
  }
  @include md {
    font-size: 12px;
  }
  @include sm {
    font-size: 6px;
  }
}
</style>
