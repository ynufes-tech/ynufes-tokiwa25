<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
import LinkButtonComponent from "~/components/LinkButtonComponent.vue";
const appConfig = useAppConfig();
const URL = appConfig.baseURL + "pdf/tokiwafes-map.pdf";
useHead({
  title: "Map | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "キャンパスマップはこちら" }],
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="キャンパスマップ" />
    <div class="map-wrapper">
      <iframe
        loading="lazy"
        class="map"
        src="https://www.canva.com/design/DAGxs6PhbPg/0k9etTgjXMC-H129L1MeGg/view?embed"
        allowfullscreen="allowfullscreen"
        allow="fullscreen"
      >
      </iframe>
    </div>
    <a
      href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGxs6PhbPg&#x2F;0k9etTgjXMC-H129L1MeGg&#x2F;view?utm_content=DAGxs6PhbPg&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
      target="_blank"
      rel="noopener"
    ></a>
    <!-- <div class="button">
      <LinkButtonComponent text="マップを見る" :link="URL" target="_blank" />
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-root {
  font-family: "Kaisei Decol", sans-serif;
}

.map-wrapper {
  position: relative;
  width: 90%;
  height: 0;
  padding-top: 100%;
  padding-bottom: 0;
  box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
  will-change: transform;
  .map {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: none;
    padding: 0;
    margin: 0;
  }
}

.button {
  display: flex;
  justify-content: center;
  max-width: 90%;
  margin: 30px auto;
}
</style>
