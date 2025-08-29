<script setup lang="ts">
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";

useHead({
  title: "About-us | 25常盤祭公式HP~紅陽~",
  meta: [
    {
      name: "description",
      content: "大学祭実行委員についての情報を掲載しています",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle
        :title="'大学祭実行委員会について'"
        :sub-title="'大学祭実行委員会について'"
      />
      <div class="explain">
        <p>
          年に二度、キャンパス全体が特別な高揚感に包まれる大学祭。<br />
          私たち大学祭実行委員会は、その一日を最高の思い出にするために、日々活動を重ねています。<br />
          そして、会場・企画・技術・経理・総務・物品・編集の7つの部局がそれぞれの専門性を発揮し、ひとつの祭を形作っています。
        </p>
      </div>

      <div class="box2">
        <!-- 実行委員長挨拶 -->
        <div class="chairman" id="chairman">
          <div class="name_wrapper">
            <div class="name">
              <img
                src="~/assets/images/momiji.svg"
                alt="momiji"
                class="bullet-leaf"
              />
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

        <!-- 会場部 -->
        <div class="department" id="peacepreservation">
          <div class="about-nm">
            <div class="set">
              <div class="name_wrapper">
                <div class="name">
                  <img
                    src="~/assets/images/momiji.svg"
                    alt="momiji"
                    class="bullet-leaf"
                  />
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
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img middle-img rt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <!-- 企画部 -->
        <div class="department" id="planning">
          <div class="about-re">
            <div class="picture">
              <img
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img middle-img rt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
            </div>
            <div class="set">
              <div class="name_wrapper">
                <div class="name">
                  <img
                    src="~/assets/images/momiji.svg"
                    alt="momiji"
                    class="bullet-leaf"
                  />
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

        <!-- 技術部 -->
        <div class="department" id="technology">
          <div class="about-nm">
            <div class="set">
              <div class="name_wrapper">
                <div class="name">
                  <img
                    src="~/assets/images/momiji.svg"
                    alt="momiji"
                    class="bullet-leaf"
                  />
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
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img middle-img rt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <!-- 経理部 -->
        <div class="department" id="accounting">
          <div class="about-re">
            <div class="picture">
              <img
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img middle-img rt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
            </div>
            <div class="set">
              <div class="name_wrapper">
                <div class="name">
                  <img
                    src="~/assets/images/momiji.svg"
                    alt="momiji"
                    class="bullet-leaf"
                  />
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

        <!-- 総務部 -->
        <div class="department" id="generalaffair">
          <div class="about-nm">
            <div class="set">
              <div class="name_wrapper">
                <div class="name">
                  <img
                    src="~/assets/images/momiji.svg"
                    alt="momiji"
                    class="bullet-leaf"
                  />
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
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img middle-img rt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <!-- 物品部 -->
        <div class="department" id="equipment">
          <div class="about-re">
            <div class="picture">
              <img
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img middle-img rt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
            </div>
            <div class="set">
              <div class="name_wrapper">
                <div class="name">
                  <img
                    src="~/assets/images/momiji.svg"
                    alt="momiji"
                    class="bullet-leaf"
                  />
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

        <!-- 編集部 -->
        <div class="department" id="editional">
          <div class="about-nm">
            <div class="set">
              <div class="name_wrapper">
                <div class="name">
                  <img
                    src="~/assets/images/momiji.svg"
                    alt="momiji"
                    class="bullet-leaf"
                  />
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
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img middle-img rt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
              <img
                class="member-img lt-img"
                src="/assets/images/tmp-img.svg"
                alt=""
              />
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
  padding: 40px;
  color: #000000;

  p {
    line-height: 1.2;
  }
  @include md {
    padding: 25px;
  }
}

.page-container {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 4vw 10vh;
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
  @include sm {
    margin-bottom: 10vh;
  }
}

.department {
  margin: 10vh 0;
  @include sm {
    margin: 5vh 0;
  }
}

.name_wrapper {
  display: flex;
}

.name {
  display: flex;
  align-items: center;

  p {
    font-size: 38px;
    @include md {
      font-size: 25px;
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

.set {
  flex: 1;
}

.picture {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 10vh;
}

.member-img {
  width: 200px;
  height: auto;
  @include md {
    width: 200px;
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
  @include sm {
    margin: 0;
  }
}

.about-re .middle-img {
  margin-left: 0;
  margin-right: 200px; // about-re の場合
  @include sm {
    margin: 0;
  }
}

.bullet-leaf {
  @include md {
    width: 80px;
  }
  @include sm {
    width: 60px;
  }
}
</style>
