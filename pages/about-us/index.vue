<script setup lang="ts">
import ContentBox from "~/components/ContentBox.vue";

useHead({
  title: "About-us | 25常盤祭公式HP~紅陽~",
  meta:[
    { name: "description", content: "大学祭実行委員についての情報を掲載しています" },
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle :title="'大学祭実行委員会について'" :sub-title="'大学祭実行委員会について'" />
      <div class="box1">
        <div class="explain">
          <p>年に二度、キャンパス全体が特別な高揚感に包まれる大学祭。<br/>
            私たち大学祭実行委員会は、その一日を最高の思い出にするために、日々活動を重ねています。<br/>
            そして、会場・企画・技術・経理・総務・物品・編集の7つの部局がそれぞれの専門性を発揮し、ひとつの祭を形作っています。
          </p>
        </div>
      </div>
      <div class="box2">
        <div class="chairman" id="chairman">
          <div class="name_wrapper">

            <div class="name">
              <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
              >
              <p>実行委員長挨拶</p>
            </div>
          </div>
          <ContentBox id="contentbox">
            <p>
              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
              ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキスト
            </p>
          </ContentBox>
        </div>
        <div class="department" :id="'peacepreservation'">
          <div class="about-nm">
            <div class="set">
              <div class="name_wrapper">

                <div class="name">
                  <img
                      src="~/assets/images/momiji.svg"
                      alt="momiji"
                  >
                  <p>会場部</p>
                </div>
              </div>
              <ContentBox id="contentbox">
                <p>
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを
                </p>
              </ContentBox>
            </div>
            <div class="picture">
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="rt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
            </div>
          </div>
        </div>
        <div class="department" :id="'planning'">
          <div class="about-re">
            <div class="picture">
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="rt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
            </div>
            <div class="set">
              <div class="name_wrapper">

                <div class="name">
                  <img
                      src="~/assets/images/momiji.svg"
                      alt="momiji"
                  >
                  <p>企画部</p>
                </div>
              </div>
              <ContentBox id="contentbox">
                <p>
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを
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
                  >
                  <p>技術部</p>
                </div>
              </div>
              <ContentBox id="contentbox">
                <p>
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを
                </p>
              </ContentBox>
            </div>
            <div class="picture">
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="rt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
          </div>
        </div>
        <div class="department" :id="'accounting'">
          <div class="about-re">
            <div class="picture">
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="rt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
            </div>
            <div class="set">
              <div class="name_wrapper">

                <div class="name">
                  <img
                      src="~/assets/images/momiji.svg"
                      alt="momiji"
                  >
                  <p>経理部</p>
                </div>
              </div>
              <ContentBox id="contentbox">
                <p>
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを
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
                  >
                  <p>総務部</p>
                </div>
              </div>
              <ContentBox id="contentbox">
                <p>
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを
                </p>
              </ContentBox>
            </div>
            <div class="picture">
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="rt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
            </div>
          </div>
        </div>
        <div class="department" :id="'equipment'">
          <div class="about-re">
            <div class="picture">
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="rt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
            </div>
            <div class="set">
              <div class="name_wrapper">

                <div class="name">
                  <img
                      src="~/assets/images/momiji.svg"
                      alt="momiji"
                   >
                  <p>物品部</p>
                </div>
              </div>
              <ContentBox id="contentbox">
                <p>
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを
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
                  >
                  <p>編集部</p>
                </div>
              </div>
              <ContentBox id="contentbox">
                <p>
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
                  ここにテキストを
                </p>
              </ContentBox>
            </div>
            <div class="picture">
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="rt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
              <img
                  id="lt-img"
                  class="member-img"
                  src="/assets/images/tmp-img.svg"
              >
            </div>
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
  color :#000000;
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
}

.name_wrapper {
  display: flex;
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
  margin-top: 10vh;
}

.about-nm {
  display: flex;
  justify-content: flex-start;
  @include md {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.about-re {
  display: flex;
  justify-content: flex-end;
  @include md {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
}

.picture {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 10vh;
}

.chairman-img {
  width: 200px;
  height: auto;
  margin-left: 5rem;
  @include md {
    margin: 0;
  }
}

.member-img {
  width: 220px;
  height: auto;
  @include md {
    width: 200px;
  }
}
</style>