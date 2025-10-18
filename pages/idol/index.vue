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
            <p class="idol-name">岩村華</p>
            <div class="sns-field-iwamura">
              <a
                  id="sns-x"
                  href="https://x.com/hana_iwm39"
                  rel="noopener noreferrer"
                  target="_blank"
              >
                <img alt="x" src="~/assets/images/X_logo.svg" />
              </a>
              <a
                  id="sns-ins"
                  href="https://www.instagram.com/iwamura_hana/"
                  rel="noopener noreferrer"
                  target="_blank"
              >
                <img alt="instagram" src="~/assets/images/Ins_logo.svg" />
              </a>
            </div>
          </div>
          <div class="id-idol">
            <img class="stage" src="/assets/images/KOBereeis.webp" />
            <p class="idol-name">KOBerrieS♪</p>
            <div class="sns-field">
              <a
                  id="sns-x"
                  href="https://x.com/kob_s2014"
                  rel="noopener noreferrer"
                  target="_blank"
              >
                <img alt="x" src="~/assets/images/X_logo.svg" />
              </a>
              <a
                  id="sns-ins"
                  href="https://www.instagram.com/koberries_official/"
                  rel="noopener noreferrer"
                  target="_blank"
              >
                <img alt="instagram" src="~/assets/images/Ins_logo.svg" />
              </a>
            </div>
          </div>
        </div>
        <div class="under-stage">
          <div class="id-idol">
            <img class="stage" src="/assets/images/AVEST.webp" />
            <p class="idol-name">AVEST</p>
            <div class="sns-field">
              <a
                  id="sns-x"
                  href="https://x.com/AVEST_official"
                  rel="noopener noreferrer"
                  target="_blank"
              >
                <img alt="x" src="~/assets/images/X_logo.svg" />
              </a>
              <a
                  id="sns-ins"
                  href="https://www.instagram.com/avest_info/"
                  rel="noopener noreferrer"
                  target="_blank"
              >
                <img alt="instagram" src="~/assets/images/Ins_logo.svg" />
              </a>
            </div>
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
          ステージ 11:00~12:00<br />
          (特典会 12:30~14:00)
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
          中央図書館1階メディアホール
        </h1>
      </div>
      <div class="sponsored-by">
        <p class="title">提供</p>
        <p class="sponsor-name">カレッジフェスタ</p>
        <a href="http://www.college-festa.com/" target="_blank" rel="noopener">
          http://www.college-festa.com/
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

#contentbox {
  font-family: "Zen Old Mincho", sans-serif;
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
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 10vh;
    align-items: center;
  }
}

.sns-field{
  align-items: center;
  justify-content: space-around;
  margin: 10px 125px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 900px){
    margin: 10px 70px;
  }
  @include sm{
    margin: 10px 80px;
  }
  #sns-x {
    img {
      width: 30px;
      @include md {
        width: 25px;
      }
    }
  }

  #sns-ins {
    img {
      width: 30px;
      @include md {
        width: 25px;
      }
    }
  }
}

.sns-field-iwamura{
  align-items: center;
  justify-content: space-around;
  margin: 10px 80px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 900px){
    margin: 10px 50px;
  }
  @include sm{
    margin: 10px 80px;
  }
  #sns-x {
    img {
      width: 30px;
      @include md {
        width: 25px;
      }
    }
  }

  #sns-ins {
    img {
      width: 30px;
      @include md {
        width: 25px;
      }
    }
  }
}

.under-stage {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
}

.stage {
  height: 280px;
  box-shadow: 10px 10px 0px #fbefdea1;
  @media screen and (max-width: 900px) {
    height: 200px;
  }
  @media screen and (max-width: 650px){
    width: 250px;
    height: auto;
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
  line-height: 1.6;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
}

.where {
  line-height: 1.6;
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

.sponsored-by {
  font-family: 'Zen Old Mincho', serif;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #000000;
  background-color: #FBEFDE;
  padding: 80px;

  p.title {
    font-size: 22px;
    margin: 0;
    @include md {
      font-size: 1.1em;
    }
    @include sm {
      font-size: 1em;
    }
  }
  p.sponsor-name {
    font-size: 25px;
    margin: 20px 0 10px 0;
    @include md {
      font-size: 20px;
    }
    @include sm {
      font-size: 1.1em;
    }
  }

  a {
    color: #000000;
    text-decoration: underline;
    font-size: 0.8em;
    @include md {
      font-size: 0.9em;
    }
    @include sm {
      font-size: 0.8em;
    }
  }
}
</style>
