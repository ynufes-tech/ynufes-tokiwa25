<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
useHead({
  title: "Events | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "開催企画一覧はこちら" }],
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="企画一覧" />
    <ContentBox>
      <div class="comingsoon">
        <p>準備中</p>
      </div>
    </ContentBox>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.comingsoon {
  margin: 120px 8%;
  text-align: center;
  font-size: 1.5em;
  p {
    margin: 70px 0;
  }
  @include md {
    margin: 100px 4%;
  }
}
</style>
