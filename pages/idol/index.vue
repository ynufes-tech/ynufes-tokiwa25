<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
import LinkButton from "~/components/LinkButtonComponent.vue";
useHead({
  title: "Idol | 25常盤祭公式HP~紅陽~",
  meta: [
    { name: "description", content: "アイドルステージ詳細はこちらからチェック！" },
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle :title="'アイドルステージ'" :sub-title="'アイドルステージ'" />
      <div class="picture">
        <img class="yagaiongakudou" src="/assets/images/idol-yaon.webp" />
      </div>
      <div class="who">
        <div class="name">
          <img src="~/assets/images/momiji.svg" alt="momiji" class="momiji" />
          <p>出演</p>
        </div>
        <img class="first-stage" src="/assets/images/iwamurahana.webp" />
        <img class="first-stage" src="/assets/images/KOBerrieS.webp" />
        <img class="second-stage" src="/assets/images/AVEST.webp" />
      </div>
      <div class="when">
        <div class="name">
          <img src="~/assets/images/momiji.svg" alt="momiji" class="momiji" />
          <p>日時</p>
        </div>
        <h1>
          2025年11月2日(日) <br />
          <br />
          ステージ　11:00~12:00<br />
          特典会　 12:30~14:00
        </h1>
      </div>
      <div class="where">
        <div class="name">
          <img src="~/assets/images/momiji.svg" alt="momiji" class="momiji" />
          <p>会場</p>
        </div>
        <h1>
          野外音楽堂特設ステージ<br />
          <br />
          ※雨天時<br />
          中央図書館一階メディアホール
        </h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

#contentbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
  color: #000000;
  @include sm {
    padding: 30px;
  }
}

.yagaiongakudou {
  display: block;
  width: 100vw;
  height: auto;
}

.first-stage {
  display: flex;
  width: 15em;
  align-items: center;
  justify-content: center;
}

.second-stage {
  width: 15em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.momiji {
  width: 80px;
  @include md {
    width: 50px;
  }
  @include sm {
    width: 30px;
  }
}

.who {
  margin-top: 60px;
}

.when {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
}

.where {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
}

.name {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  p {
    font-size: 1.6em;
    @include md {
      font-size: 1.5em;
    }
    @include sm {
      font-size: 1.4em;
    }
  }
  h1 {
    font-size: 1.3em;
    @include md {
      font-size: 1.2em;
    }
    @include sm {
      font-size: 1em;
    }
  }
}
</style>
