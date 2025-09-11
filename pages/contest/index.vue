<script setup lang="ts">
import ContentBox from "~/components/ContentBox.vue";
import LinkButton from "~/components/LinkButtonComponent.vue";

useHead({
  title: "Contest | 25常盤祭公式HP~紅陽~",
  meta: [
    {name: "description", content: "企画コンテストの詳細と結果をお知らせします！"},
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
            最も来場者の皆さんを満足させるのはどの企画なのか…？<br>
            <br>
            企画ONEプロジェクトでは、全ての企画を「(部門名)」、「(部門名)」、「(部門名)」の３部門に分けてそれぞれの部門でのNo.1を決定します！順位を決めるのは皆さんの1票！<br>
            <br>
            このプロジェクトに参加する皆さんには、立ち寄ったそれぞれの企画を満喫し、5段階で評価していただきます。<br>
            <br>
            投票をしていただいた皆さんには景品をプレゼント！景品の中には大当たりも！？
          </div>
        </ContentBox>
        <div class="howto">
          <img class="howto-img" src="/assets/images/contest.svg"
               alt="Howto"/>
        </div>
      <div class="button">
      <LinkButton
          class="LinkButton"
          text="投票へ"
          link="https://docs.google.com/forms/d/e/1FAIpQLSdaR8Wr03HOHveZ1GwduTvwoSw4FGN8KfyFI_2JM92teS9Y0w/viewform?usp=header"
      />
      <LinkButton
          class="LinkButton"
          text="企画一覧を見る"
          link="/events"
      />
      <LinkButton
          class="LinkButton"
          text="ランキングを見る"
          link=""
      />
      </div>
      <div class="under-box">
        <div class="title">
          <p>2025清陵祭の優勝団体 </p>
        </div>
        <div class="past-winner">

         <div class="cate1">
           <p>展示・販売・体験部門</p>
          <div class="winner first">
            <div class="name">
              <p>WHYNUの<br>
                謎解きゲーム！</p>
            </div>
            <br>
            <div class="owner">
              <p>謎解きサークルWHYNU</p>
            </div>
          </div>
         </div>
          <div class="cate2">
            <p>食べ物部門</p>
          <div class="winner second">
            <div class="name">
              <p>鶏白湯トマト</p>
            </div>
            <br>
            <div class="owner">
              <p>横国ラーメンサークル<br>
                  「ラメラメ」</p>
            </div>
            </div>
          </div>
          <div class="cate3">
            <p>パフォーマンス部門</p>
          <div class="winner third">
            <div class="name">
              <p>お笑いサークル<br>
                わかばのライブ</p>
            </div>
            <br>
            <div class="owner">
              <p>お笑いサークルわかば</p>
            </div>
          </div>
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
  padding: 0 10vw 10vh;
}

.subtitle{
  margin: 40px 17% 20px 17%;
  color: #fff;
  font-size: 2rem;
  @include sm{
    font-size: 24px;
  }
}

.about {
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
    width: 300px;
    height: 400px;
  }
}

.LinkButton {
  max-width: 250px;
  margin: 80px 0;
  @include sm{
    font-size: 5px;
    width: 100%;
    margin: 50px 0;
  }
}

.button{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.under-box {
  justify-items: center;
  color: #ffffff;
  margin-top: 10vh;
}

.title{
  justify-content: flex-start;
  font-size: 40px;
  @include md{
    font-size: 35px;
  }
  @include sm {
    font-size: 30px;
  }
}


.past-winner {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  @include md {
    flex-direction: column;
    align-items: center;
  }
}
.winner {
  background: linear-gradient(180deg, #fbeade, #f8c8c8);
  color: #000000;
  padding: 20px;
  border-radius: 20px;
  margin: 10px;
  max-width: 600px;
  text-align: left;
  align-content: baseline;

  .name {
    font-size: 40px;
    @include md{
      font-size: 35px;
    }
    @include sm {
      font-size: 30px;
      margin-left: 0px;
    }
  }

  .owner {
    font-size: 20px;
    text-align: center;
    @include md {
      font-size: 20px;
      @include sm {
        font-size: 16px;
      }
    }
  }
}

</style>