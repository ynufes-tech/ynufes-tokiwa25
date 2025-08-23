<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
import LinkButtonComponent from "~/components/LinkButtonComponent.vue";
useHead({
  title: "Map | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "キャンパスマップ" }],
});

</script>

<template>
  <div class="page-root">
    <PageTitle title="キャンパスマップ"/>
    <div>
      <ContentBox>
        <div class="image">
          <img src="~/assets/images/campusmap.webp">
        </div>
      </ContentBox>
    </div>
    <div class="button">
    <LinkButtonComponent
        text="ダウンロード"
        link="https://www.ynu.ac.jp/access/pdf/YNU_MAP_J.pdf"
    />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-root {
  font-family: 'Kaisei Decol', sans-serif;
}

.image {
  display: flex;
  justify-content: center;
  max-height: 100%;
  margin:20px 10%;
  img{
    width:100%;

  }
  @include md{
    margin:30px 5%;
  }
}

.button {
  display: flex;
  justify-content: center;
  max-width: 90%;
  margin: 30px auto;
  }
</style>
