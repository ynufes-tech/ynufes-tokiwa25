<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
import LinkButton from "~/components/LinkButtonComponent.vue";
useHead({
  title: "Connection | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "他大学の学祭HPはこちら" }],
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="相互リンク" />
    <ContentBox>
      <div class="explanation">
        <p>他大学の大学祭をご紹介いたします。</p>
      </div>
      <div class="university">
        <div class="uni-name">
          <p>東京理科大学 葛飾キャンパス</p>
        </div>
        <LinkButton
          class="LinkButton"
          text="葛飾地区理大祭"
          link="https://katsufes.com/2025/"
        />
        <p>開催日程：<br class="date-br" />11月22日(土)~11月23日(日)</p>
      </div>
      <!-- <div class="university">
        <LinkButton
            class="LinkButton"
            text="○○大学 ○○祭"
            link=""
        />
        <p>開催日程：2025年○月○日(○)～○月○日(○)</p>
      </div>
      <div class="university-bottom">
        <LinkButton
            class="LinkButton"
            text="○○大学 ○○祭"
            link=""
        />
        <p>開催日程：2025年○月○日(○)～○月○日(○)</p>
      </div> -->
    </ContentBox>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.explanation {
  margin: 70px 8%;
  text-align: center;
  font-size: 1.1em;
  @include md {
    margin: 50px 4%;
    font-size: 1rem;
  }
}

.uni-name {
  margin-bottom: 15px;
}

.LinkButton {
  margin-bottom: 15px;
}

.university {
  margin: 50px 8%;
  p {
    line-height: 2rem;
  }
  @include md {
    margin: 50px 7%;
    font-size: 1rem;
  }
}

.date-br {
  display: none; // PCでは非表示
}

@include sm {
  .date-br {
    display: inline; // スマホで改行を有効化
  }
}
</style>
