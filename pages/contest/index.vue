<script setup lang="ts">
import ContentBox from "~/components/ContentBox.vue";
import LinkButton from "~/components/LinkButtonComponent.vue";

useHead({
  title: "Contest | 25常盤祭公式HP~紅陽~",
  meta: [
    {
      name: "description",
      content: "企画コンテストの詳細と結果をお知らせします！",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle :title="'企画コンテスト'" :sub-title="'企画コンテスト'" />
      <div class="subtitle">
        <p>企画コンテストとは</p>
      </div>
      <ContentBox>
        <div class="about">
          常盤祭No.１の企画はどれだ⁉<br />
          <br />
          企画ONEプロジェクトでは、全ての企画を「食べ物部門」、「パフォーマンス部門」、「展示・販売・体験部門」の３部門に分けてそれぞれの部門でのNo.1を決定します！順位を決めるのは皆さんの1票！<br />
          <br />
          このプロジェクトに参加する皆さんには、立ち寄ったそれぞれの企画を満喫し、5段階で評価していただきます。<br />
          <br />
          投票をしていただいた皆さんには景品をプレゼント！景品の中には大当たりも！？
        </div>
      </ContentBox>
      <div class="howto">
        <img class="howto-img" src="~/assets/images/contest.webp" alt="Howto" />
      </div>
      <div class="button">
        <!--      <LinkButton-->
        <!--          class="LinkButton"-->
        <!--          text="投票へ"-->
        <!--          link="https://docs.google.com/forms/d/e/1FAIpQLSdaR8Wr03HOHveZ1GwduTvwoSw4FGN8KfyFI_2JM92teS9Y0w/viewform?usp=header"-->
        <!--      />-->
        <LinkButton class="LinkButton" text="企画一覧を見る" link="/events" />
        <!--      <LinkButton-->
        <!--          class="LinkButton"-->
        <!--          text="ランキングを見る"-->
        <!--          link=""-->
        <!--      />-->
      </div>
      <div class="introduce">
        <div class="category-name">
          <p>食べ物部門</p>
        </div>
        <ContentBox class="script">
          各団体による最高の模擬店が大集合！<br class="kaigyo" />
          味はもちろん、見た目にまでこだわった料理をご堪能あれ！
        </ContentBox>
      </div>
      <div class="introduce">
        <div class="category-name">
          <p>パフォーマンス部門</p>
        </div>
        <ContentBox class="script">
          歌やダンス、演奏など様々なパフォーマンスが皆さんを待っています。<br
            class="kaigyo"
          />
          あふれ出るエネルギーをぜひ全身で体感してください！
        </ContentBox>
      </div>
      <div class="introduce">
        <div class="category-name">
          <p>展示・販売・体験部門</p>
        </div>
        <ContentBox class="script">
          個性の光る企画が構内の様々な場所で展開されます。<br class="kaigyo" />
          どれもここでしかできないものばかり！
        </ContentBox>
      </div>
      <div class="under-box">
        <div class="title">
          <p>2025清陵祭の優勝団体</p>
        </div>
        <div class="past-winner">
          <div class="cate1">
            <p>食べ物部門</p>
            <ContentBox class="winner">
              <div class="name2">
                <p>鶏白湯トマト</p>
              </div>
              <br />
              <div class="owner">
                <p>
                  横国ラーメンサークル<br />
                  「ラメラメ」
                </p>
              </div>
            </ContentBox>
          </div>
          <div class="cate2">
            <p>パフォーマンス部門</p>
            <ContentBox class="winner">
              <div class="name">
                <p>
                  お笑いサークル<br />
                  わかばのライブ
                </p>
              </div>
              <br />
              <div class="owner2">
                <p>お笑いサークルわかば</p>
              </div>
            </ContentBox>
          </div>
          <div class="cate3">
            <p>展示・販売・体験部門</p>
            <ContentBox class="winner">
              <div class="name">
                <p>
                  WHYNUの<br />
                  謎解きゲーム！
                </p>
              </div>
              <br />
              <div class="owner2">
                <p>謎解きサークルWHYNU</p>
              </div>
            </ContentBox>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ✅ ここにフローティングボタンを追加 -->
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-container {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 1vw 10vh;
}

.subtitle {
  text-shadow: 0px 2px 4px #333333;
  margin: 40px 17% 20px 17%;
  color: #fff;
  font-size: 2rem;
  @include sm {
    font-size: 20px;
  }
}

.about {
  color: #000000;
  font-size: 20px;
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include md {
    margin-top: 6vh;
    font-size: 20px;
  }
  @include sm {
    font-size: 16px;
    margin-top: 3vh;
    padding: 20px 30px;
  }
}

.howto {
  display: flex;
  justify-content: center;
}

.howto-img {
  margin-top: 40px;
  width: 550px;
  height: 700px;

  @include md {
    width: 350px;
    height: 500px;
  }
  @include md {
    width: 270px;
    height: auto;
  }
}

.LinkButton {
  max-width: 100%;
  margin: 80px 0;
  @include md {
    margin: 40px;
  }
  @include sm {
    margin: 80px 0;
  }
}

.button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.introduce {
  justify-items: center;
  font-size: 20px;
  @include md {
    font-size: 18px;
  }
  @include sm {
    font-size: 16px;
    .kaigyo {
      display: none;
    }
  }
  .category-name {
    margin-top:60px;
    margin-bottom:20px;
    p {
      font-size: 30px;
      @include sm {
        font-size: 20px;
      }
    }
    @include sm {
      margin: 25px;
    }
  }
  .script {
    padding: 30px 5px;
    max-width: 700px;
    color: #000000;
    display: flex;
    justify-content: center;
    text-align: left;
    @include sm {
      padding: 30px 15px;
    }
  }
}

.under-box {
  justify-items: center;
  color: #ffffff;
  margin-top: 15vh;
}

.title {
  justify-content: flex-start;
  font-size: 40px;
  text-shadow: 0px 2px 4px #333333;
  @include md {
    font-size: 30px;
  }
  @include sm {
    font-size: 25px;
  }
}

.past-winner {
  font-family: "Zen Old Mincho", sans-serif;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 940px) {
    flex-direction: column;
    align-items: center;
  }
}
.winner {
  color: #000000;
  padding: 25px;
  margin: 10px;
  min-width: 230px;
  max-width: 600px;
  text-align: left;
  align-content: baseline;
  margin-top: 20px;
  @media (max-width: 940px) {
    margin-bottom: 30px;
  }
  @include sm {
    padding: 30px 10px;
    justify-items: center;
  }
  .name {
    font-size: 29px;
    @include md {
      font-size: 25px;
    }
    @include sm {
      font-size: 20px;
      margin-left: 0px;
    }
  }

  .name2 {
    font-size: 29px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    @include md {
      font-size: 25px;
    }
    @include sm {
      font-size: 20px;
      margin-left: 0px;
    }
  }

  .owner {
    font-size: 20px;
    text-align: center;
    @include md {
      font-size: 16px;
      @include sm {
        font-size: 16px;
      }
    }
  }

  .owner2 {
    font-size: 20px;
    text-align: center;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    @include md {
      font-size: 16px;
      @include sm {
        font-size: 16px;
      }
    }
  }
}
</style>
