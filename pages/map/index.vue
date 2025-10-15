<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
import LinkButtonComponent from "~/components/LinkButtonComponent.vue";
useHead({
  title: "Map | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "キャンパスマップはこちら" }],
});

</script>

<template>
  <div class="page-root">
    <PageTitle title="キャンパスマップ"/>
    <div>
      <ContentBox>
        <div class="image">
          <img src="~/assets/images/tokiwafes-map.webp" alt="常盤祭マップ"> </div>
      </ContentBox>
    </div>
    <div class="button">
    <LinkButtonComponent
        text="マップを見る"
        link="/pdf/tokiwafes-map.pdf"
        target="_blank"
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
