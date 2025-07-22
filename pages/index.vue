<script setup lang="ts">
useHead({
  title: "Top | 25常盤祭公式HP~紅陽~",
  meta: [
    {
      name: "description",
      content:
        "10/29,11/1,11/2に開催される25常盤祭の公式HPです! 最新情報を随時更新していきます!",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <img src="~/assets/images/top-title.svg" alt="title" class="title" />
      <img src="~/assets/images/top-garland.svg" alt="garl" class="top-garland" />
      <div class="date">
        <img src="~/assets/images/day1-frame.svg" alt="day1" class="date-img"/>
        <img src="~/assets/images/day2-frame.svg" alt="day2" class="date-img"/>
        <img src="~/assets/images/day3-frame.svg" alt="day3" class="date-img"/>
      </div> 
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/_breakpoint.scss' as *;

.page-root {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-container {
  text-align: center;
}

.title {
  max-width: 100%;
  width: 1000px;
  height: auto;
  margin-left: 4vw;
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
  width: 100%;
  height: auto;
  width: 300px;
  margin: 0 3vw;

  @include md {
    width: 200px;
  }
}

.date {
  display: flex;
  justify-content: center;

  @include md {
    margin: 10vh auto;
  }
  @media screen and (max-width: 583px) {
    flex-direction: column;
    align-items: center;
    margin: 10vh auto;
  }
}
</style>
