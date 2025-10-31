<script setup lang="ts">
import CountdownTimer from "~/components/CountdownTimer.vue";
import TopPageLinkR from "~/components/TopPageLinkR.vue";
import TopPageLinkL from "~/components/TopPageLinkL.vue";
import Bunners from "~/components/Banners.vue";
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
      <img src="../assets/images/dates.svg" class="dates" alt="dates" />
      <Bunners />
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
      <NuxtLink to="/news/7">
        <img src="~/assets/images/rainy-info.svg" alt="" class="rainy-info" />
      </NuxtLink>

      <div class="links">
        <TopPageLinkR class="link" title="official" jaTitle="本部企画一覧" />
        <TopPageLinkL class="link" title="idol" jaTitle="アイドルステージ" />
        <TopPageLinkR class="link" title="guest" jaTitle="ゲスト" />
        <TopPageLinkL class="link" title="events" jaTitle="企画団体一覧" />
        <TopPageLinkR class="link" title="pamphlet" jaTitle="パンフレット" />
        <TopPageLinkL class="link" title="news" jaTitle="おしらせ" />
        <TopPageLinkR
          class="link"
          title="schedule"
          jaTitle="タイムスケジュール"
        />
        <TopPageLinkL class="link" title="map" jaTitle="キャンパスマップ" />
        <TopPageLinkR class="link" title="about" jaTitle="常盤祭について" />
        <TopPageLinkL
          class="link"
          title="access"
          jaTitle="大学までのアクセス"
        />
        <TopPageLinkR class="link" title="contact" jaTitle="お問い合わせ" />
        <TopPageLinkL class="link" title="faq" jaTitle="よくあるご質問" />
        <TopPageLinkR
          class="link"
          title="about-us"
          jaTitle="大学祭実行委員会について"
        />
        <TopPageLinkL class="link" title="sponsors" jaTitle="ご協賛企業一覧" />
      </div>
      <div class="caution">
        <p class="caution-title">注意事項</p>
        <p>
          ・大学構内での飲酒及び酒類の持ち込みは全面禁止です。<br />
          ・野外音楽堂へのビンの持ち込みはご遠慮ください。<br />
          ・喫煙はお近くの特定屋外喫煙場所にてお願いいたします。<br />
          ・屋内飲食は第1食堂、理工学部講義棟A1階ホールのみ可能です。<br />
          ・ペット同伴でのご来場はご遠慮ください。<br />
          ・ゴミは分別してお近くのエコステーションでお捨てください。<br />
          ・大学祭に関係のない客引き、宗教勧誘はご遠慮ください。<br />
          ・装飾物にはお手を触れないようお願いいたします。<br />
          ・雨天の場合、企画内容が変更または中止となる可能性がございます。<br />
          ・メインストリートへの自転車やバイク等の乗り入れはご遠慮ください。<br />
          ・お困りの際はスタッフジャンバー、スタッフTシャツを着ている大学祭実行委員にお声がけください。<br />
          ・R³ude、Liz、KPOPカバーダンスサークルpopcornの公演に関して、盗撮対策のため許可証をお持ちの方を除き、公演前及び公演中の撮影は禁止となっております。ご協力をお願いいたします。
        </p>
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
  display: flex;
  flex-direction: column;
  .title {
    max-width: 100%;
    width: 1000px;
    height: auto;
    margin: 0 auto;
    margin-bottom: -100px;
    @include md {
      margin-bottom: -5vh;
    }
  }
  align-items: center;
  text-align: center;
}

.dates {
  width: 80%;
  max-width: 1000px;
  @include md {
    width: 100%;
  }
}

.timer {
  position: relative;
  width: 100%;
  margin-top: 8vh;
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
.rainy-info {
  width: 80vw;
  max-width: 600px;
  margin-top: 100px;
  filter: drop-shadow(6px 6px 4px #333333c6);
}

.links {
  margin-top: 30px;
  .link {
    margin-top: 200px;
    @include xl {
      margin-top: 150px;
    }
    @include lg {
      margin-top: 120px;
    }
    @include md {
      margin-top: 80px;
    }
    @include sm {
      margin-top: 50px;
    }
  }
}

.caution {
  color: white;
  background-color: #ffffff30;
  backdrop-filter: blur(5px);
  border-radius: 20px;
  filter: drop-shadow(5px 8px 6px rgba(43, 14, 0, 0.75));
  font-size: 20px;
  font-family: "Zen Old Mincho", serif;
  margin: 0 10px;
  margin-top: 200px;
  padding: 10px;
  border: solid 0.5px white;
  text-align: start;
  line-height: 1.5;
  .caution-title {
    font-size: 30px;
  }
  @include md {
    margin-top: 100px;
    font-size: 12px;
    .caution-title {
      font-size: 20px;
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
