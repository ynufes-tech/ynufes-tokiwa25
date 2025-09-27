<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
import LinkButton from "~/components/LinkButtonComponent.vue";
useHead({
  title: "Idol | 25常盤祭公式HP~紅陽~",
  meta: [
    {
      name: "description",
      content: "アイドルステージ詳細はこちらからチェック！",
    },
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
        <div class="upper-stage">
          <div class="id-idol">
            <img class="stage" src="/assets/images/iwamurahana.webp" />
            <p class="idol-name">岩村花奈</p>
          </div>
          <div class="id-idol">
            <img class="stage" src="/assets/images/KOBerrieS.webp" />
            <p class="idol-name">KOBerrieS♪</p>
          </div>
        </div>
        <div class="under-stage">
          <div class="id-idol">
            <img class="stage" src="/assets/images/AVEST.webp" />
            <p class="idol-name">AVEST</p>
          </div>
        </div>
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
  width: 100%;
  height: auto;
}

.upper-stage {
  display: flex;
  justify-content: center;
  gap: 15vw;
  margin-top: 8vh;
  @include sm {
    flex-direction: column;
    gap: 10vh;
    align-items: center;
  }
}

.under-stage {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @include sm {
    flex-direction: column;
    margin-top: 10vh;
    align-items: center;
  }
}

.stage {
  width: 300px;
  @include md {
    width: 200px;
  }
  @include sm {
    width: 250px;
  }
}

.idol-name {
  margin-top: 10px;
  font-size: 1.2em;
  color: #ffffff;
  display: flex;
  justify-content: center;
  @include md {
    font-size: 1.2em;
  }
  @include sm {
    font-size: 1em;
  }
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
  margin-bottom: 80px;
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
