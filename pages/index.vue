<script setup lang="ts">
useHead({
  title: "Top | 25常盤祭公式HP~紅陽~",
  meta: [
    {
      name: "description",
      content:
        "10/31,11/1,11/2に開催される25常盤祭の公式HPです! 最新情報を随時更新していきます!",
    },
  ],
});
import CountdownTimer from '~/components/CountdownTimer.vue';
import PageTitle from '~/components/PageTitle.vue';
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <img src="~/assets/images/top-title.svg" alt="title" class="title" />
      <img
        src="~/assets/images/top-garland.svg"
        alt="garl"
        class="top-garland"
      />
      <div class="date">
        <img src="~/assets/images/day1-frame.svg" alt="day1" class="date-img" />
        <img src="~/assets/images/day2-frame.svg" alt="day2" class="date-img" />
        <img src="~/assets/images/day3-frame.svg" alt="day3" class="date-img" />
      </div>
      <div class="timer">
        <img src="~/assets/images/timer-frame-lt.svg " class="timer-frame-lt" alt="countdownframe" />
        <CountdownTimer
        title="常盤祭開幕まであと…"
        targetDate="2025-10-31T13:00:00"
        />
        <img src="~/assets/images/timer-frame-rt.svg " class="timer-frame-rt" alt="countdownframe" />
      </div>
      <!-- <div class="preparing">
        <p>準備中</p>
      </div> -->
    </div>
  </div>
</template>
  
<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20vh;
}

.page-container {
  text-align: center;
}

.title {
  max-width: 100%;
  width: 1000px;
  height: auto;
  margin-bottom: -16vh;
}

.top-garland {
  width: 100%;
  height: auto;
  max-width: 1900px;
  margin-bottom: -10vh;

  @include md {
    margin-top: 20vh;
  }
}

.date-img {
  height: auto;
  width: 300px;
  max-width: 25vw;
  @include sm {
    width: 200px;
    max-width: none;
  }
}

.date {
  display: flex;
  justify-content: center;
  gap: 0 30px;
  @include md {
    margin: 10vh auto;
  }
  @include sm {
    flex-direction: column;
    align-items: center;
    margin: 10vh auto;
  }
}

.timer {
  position: relative;
  width: 100%;
  margin-top: 10vh;
}

.timer-frame-lt {
 position: absolute;
 left: 0;
 top: 35%;
 transform: translateY(-50%);
 width: 30%;
 height: auto;

 @include md {
   top: 30%;
   width: 40%;
 }

 @include sm {
   top: 20%;
   width: 50%;
 }
}

.timer-frame-rt {
 position: absolute;
 top: 65%;
 right: 0;
 transform: translateY(-50%);
 width: 30%;
 height: auto;

 @include md {
   top: 70%;
   width: 40%;
 }

 @include sm {
   top: 80%;
   width: 50%;
 }
}

// .preparing {
//   font-size: 40px;
//   color: #333;
//   margin-top: 20vh;
// }

</style>
