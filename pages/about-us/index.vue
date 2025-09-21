<script setup lang="ts">
import ContentBox from "~/components/ContentBox.vue";

useHead({
  title: "About-us | 25常盤祭公式HP~紅陽~",
  meta: [
    {name: "description", content: "大学祭実行委員についての情報を掲載しています"},
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle :title="'大学祭実行委員会について'" :sub-title="'大学祭実行委員会について'"/>
      <div class="explain">
        <p>年に二度、キャンパス全体が特別な高揚感に包まれる大学祭。<br/>
          私たち大学祭実行委員会は、その一日を最高の思い出にするために、日々活動を重ねています。<br/>
          そして、会場・企画・技術・経理・総務・物品・編集の7つの部局がそれぞれの専門性を発揮し、ひとつの祭を形作っています。
        </p>
      </div>
      <div class="box2">
<!--        <div class="chairman" id="chairman">-->
<!--          <div class="name_wrapper">-->

<!--            <div class="name">-->
<!--              <img-->
<!--                  src="~/assets/images/momiji.svg"-->
<!--                  alt="momiji"-->
<!--              >-->
<!--              <p>実行委員長挨拶</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <ContentBox id="contentbox">-->
<!--            <p>-->
<!--              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力-->
<!--              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力-->
<!--              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力-->
<!--              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力-->
<!--              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力-->
<!--              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力-->
<!--              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキスト-->
<!--            </p>-->
<!--          </ContentBox>-->
<!--        </div>-->
        <div class="department" :id="'peacepreservation'">
          <div class="about-nm">
            <div class="set">
              <div class="name_wrapper">

                <div class="name">
                  <img
                      src="~/assets/images/momiji.svg"
                      alt="momiji"
                      class="momiji"
                  >
                  <p>会場部</p>
                </div>
              </div>
              <ContentBox id="contentbox">
                <p>
                  会場部は、来場者の皆さまに安心して大学祭を楽しんでいただけるよう、会場の設営や、当日の巡回・パトロールなどを行っています。
                  当日、何かお困りのことがありましたら、どうぞお気軽にお声がけください！！
                </p>
              </ContentBox>
            </div>
            <div class="picture">
              <img
                  class="member-img lt-img"
                  src="/assets/images/about-us-picture/kaijo1.webp"
              >
              <img
                  class="member-img middle-img rt-img"
                  src="/assets/images/about-us-picture/kaijo2.webp"
              >
            </div>
          </div>
        </div>
        <div class="department" :id="'planning'">
          <div class="about-re">
            <div class="picture">
              <img
                  class="member-img lt-img"
                  src="/assets/images/about-us-picture/kikaku1.webp"
              >
              <img
                  class="member-img middle-img rt-img"
                  src="/assets/images/about-us-picture/kikaku2.webp"
              >
            </div>
            <div class="set">
              <div class="name_wrapper">

                <div class="name">
                  <img
                      src="~/assets/images/momiji.svg"
                      alt="momiji"
                      class="momiji"
                  >
                  <p>企画部</p>
                </div>
              </div>
              <ContentBox id="contentbox">
                <p>
                  企画部は、学祭で何をするかをゼロから考え、実施する部局です。毎週の会議で来場者が楽しめる企画を練り、
                  花火の打ち上げや外部ゲストの招待など、本部企画全体に関わる業務を担っています。
                </p>
              </ContentBox>
            </div>
          </div>
        </div>
        <div class="department" :id="'technology'">
          <div class="about-nm">
            <div class="set">
              <div class="name_wrapper">

                <div class="name">
                  <img
                      src="~/assets/images/momiji.svg"
                      alt="momiji"
                      class="momiji"
                  >
                  <p>技術部</p>
                </div>
              </div>
              <ContentBox id="contentbox">
                <p>
                  技術部は、今皆さんが見ているこのホームページを作成している部局です！
                  見やすく使いやすいホームページを作成するために、各大学祭ごとに１からデザインを考え、
                  プログラミングで実装をしています。様々なコンテンツを載せておりますので、ぜひご覧ください！
                </p>
              </ContentBox>
            </div>
            <div class="picture">
              <img
                  class="member-img lt-img"
                  src="/assets/images/about-us-picture/gijutu1.webp"
              >
              <img
                  class="member-img middle-img rt-img"
                  src="/assets/images/about-us-picture/gijutu2.webp"
              >
            </div>
          </div>
        </div>
        <div class="department" :id="'accounting'">
          <div class="about-re">
            <div class="picture">
              <img
                  class="member-img lt-img"
                  src="/assets/images/about-us-picture/keiri1.webp"
              >
              <img
                  class="member-img middle-img rt-img"
                  src="/assets/images/about-us-picture/keiri2.webp"
              >
            </div>
            <div class="set">
              <div class="name_wrapper">

                <div class="name">
                  <img
                      src="~/assets/images/momiji.svg"
                      alt="momiji"
                      class="momiji"
                  >
                  <p>経理部</p>
                </div>
              </div>
              <ContentBox id="contentbox">
                <p>
                  経理部は、大学祭運営の根幹である予算の管理や決算といったお金に関する重要な役割を担っています！
                  大学祭当日に大きな活動を行う部局ではありませんが、準備の段階から終了後の振り返りまで深く関わり、全体を支え続けています！！
                </p>
              </ContentBox>
            </div>
          </div>
        </div>
        <div class="department" :id="'generalaffair'">
          <div class="about-nm">
            <div class="set">
              <div class="name_wrapper">

                <div class="name">
                  <img
                      src="~/assets/images/momiji.svg"
                      alt="momiji"
                      class="momiji"
                  >
                  <p>総務部</p>
                </div>
              </div>
              <ContentBox id="contentbox">
                <p>
                  総務部は、参加団体の皆様との窓口となる部局です。具体的には、説明会や企画受付、企画団体総会などの運営等を行います。
                  また、大学や区との連携、当日の見回りや落し物の管理など、事務から現場まで幅広く執り行っております。
                  本年度も安全な大学祭の運営を目指して活動しております。
                </p>
              </ContentBox>
            </div>
            <div class="picture">
              <img
                  class="member-img lt-img"
                  src="/assets/images/about-us-picture/soumu1.webp"
              >
              <img
                  class="member-img middle-img rt-img"
                  src="/assets/images/about-us-picture/soumu2.webp"
              >
            </div>
          </div>
        </div>
        <div class="department" :id="'equipment'">
          <div class="about-re">
            <div class="picture">
              <img
                  class="member-img lt-img"
                  src="/assets/images/about-us-picture/buppin1.webp"
              >
              <img
                  class="member-img middle-img rt-img"
                  src="/assets/images/about-us-picture/buppin2.webp"
              >
            </div>
            <div class="set">
              <div class="name_wrapper">

                <div class="name">
                  <img
                      src="~/assets/images/momiji.svg"
                      alt="momiji"
                      class="momiji"
                  >
                  <p>物品部</p>
                </div>
              </div>
              <ContentBox id="contentbox">
                <p>
                  物品部は、団体さんが当日使用するテントや電子機器、プロパン等のレンタルを担当する部局です！
                  当日スムーズに企画を行えるようにサポートするべく、レンタル企業さんとの話し合いや仲介を行っています！
                  裏方的な仕事が多いですが、学祭の縁の下の力持ちです！
                </p>
              </ContentBox>
            </div>
          </div>
        </div>
          <div class="department" :id="'editional'">
            <div class="about-nm">
              <div class="set">
                <div class="name_wrapper">

                  <div class="name">
                    <img
                        src="~/assets/images/momiji.svg"
                        alt="momiji"
                        class="momiji"
                    >
                    <p>編集部</p>
                  </div>
                </div>
                <ContentBox id="contentbox">
                  <p>
                    編集部は、大学祭期間中に構内を彩る装飾や、大学祭をわかりやすくまとめたパンフレット・リーフレットなどを制作している部局です🎨
                    大学祭当日は案内所でパンフレットなどを配布し、来場者の皆さまをご案内します🙌
                    パンフレットや装飾などと共に記憶に残る大学祭をお楽しみください！
                  </p>
                </ContentBox>
              </div>
              <div class="picture">
                <img
                    class="member-img lt-img"
                    src="/assets/images/about-us-picture/hensyu1.webp"
                >
                <img
                    class="member-img middle-img rt-img"
                    src="/assets/images/about-us-picture/hensyu2.webp"
                >
              </div>
            </div>
          </div>
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
  @include sm{
    padding: 30px;
  }
}

.page-container {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 10vw 10vh;
}

.box1 {
  margin-top: 10vh;
  @include md {
    margin-top: 10vh;
  }
  @include sm {
    margin-top: 5vh;
  }
}

.explain {
  font-family: "Zen Old Mincho", sans-serif;
  line-height: 1.5;
  font-size: 21px;
  @include md {
    font-size: 15px;
  }
  @include sm {
    font-size: 13px;
  }
}

.chairman {
  margin-bottom: 23vh;
}

.department {
  margin: 10vh 0;
  @include sm{
    margin: 5vh 0;
  }
}

.name_wrapper {
  display: flex;
}

.momiji {
  @include sm{
    width: 70px ;
    height: 70px;
  }
}

.name {
  display: flex;
  align-items: center;

  p {
    font-size: 40px;
    @include md {
      font-size: 28px;
    }
  }
}


.box2 {
  display: flex;
  flex-direction: column;
}

.about-nm {
  display: flex;
  justify-content: flex-start;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.about-re {
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1000px){
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
}

.set {
  flex: 1;
  padding: 2rem;
}


.picture {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 10vh;
  @include sm{
    margin-top: 6vh;
  }
}

.member-img {
  width: 200px;
  height: auto;
  @include md {
    width: 180px;
  }
  @include sm {
    width: 150px;
  }
}

.name p {
  font-size: 40px;
  font-weight: bold;
  margin-left: 0.5rem;
  @include md {
    font-size: 28px;
  }
}

.middle-img {
  margin-left: 200px; // about-nm の場合
  @include sm{
    margin-left: 100px;
  }
}

.about-re .middle-img {
  margin-left: 200px;
  @include sm{
    margin-left: 100px;
  }
}

</style>