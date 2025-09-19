<script setup lang="ts">
import CountdownTimer from "~/components/CountdownTimer.vue";
import TopPageLinkR from "~/components/TopPageLinkR.vue";
import TopPageLinkL from "~/components/TopPageLinkL.vue";
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
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <img src="~/assets/images/top-title.svg" alt="title" class="title" />
      <img src="~/assets/images/dates.svg" class="dates" alt="dates" />
      <div class="timer">
        <img
          src="~/assets/images/timer-frame-lt.svg "
          class="timer-frame-lt"
          alt="countdownframe"
        />
        <CountdownTimer
          title="常盤祭開幕まであと…"
          targetDate="2025-10-31T13:00:00"
        />
        <img
          src="~/assets/images/timer-frame-rt.svg "
          class="timer-frame-rt"
          alt="countdownframe"
        />
      </div>
      <div class="links">
        <TopPageLinkR class="link" title="event" jaTitle="本部企画紹介" />
        <TopPageLinkL class="link" title="events" jaTitle="企画団体一覧" />
        <TopPageLinkR class="link" title="pamphlet" jaTitle="パンフレット" />
        <TopPageLinkL class="link" title="schedule" jaTitle="タイムスケジュール" />
        <TopPageLinkR class="link" title="map" jaTitle="大学の地図" />
        <TopPageLinkL class="link" title="about" jaTitle="常盤祭について" />
        <TopPageLinkR class="link" title="access" jaTitle="大学までのアクセス" />
        <TopPageLinkL class="link" title="contact" jaTitle="お問い合わせ" />
        <TopPageLinkR class="link" title="sponsor" jaTitle="ご協賛" />
      </div>
      <div class="sns">
        <SNS />
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
  padding-bottom: 5vh;
}

.page-container {
  text-align: center;
}

.title {
  max-width: 100%;
  width: 1000px;
  height: auto;
  margin-bottom: -20vh;
  @include md {
    margin-bottom: -5vh;
  }
}

.dates {
  width: 80%;
  @include md {
    width: 100%;
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
.links {
  margin-top: 200px;
  .link {
    margin-top: 80px;
    @include xl {
      margin-top: 60px;
    }
    @include lg {
      margin-top: 40px;
    }
    @include md {
      margin-top: 20px;
    }
    @include sm {
      margin-top: 10px;
    }
  }
}
.sns {
  margin-top: 20vh;
  width: 100%;
}

// .preparing {
//   font-size: 40px;
//   color: #333;
//   margin-top: 20vh;
// }
</style>
