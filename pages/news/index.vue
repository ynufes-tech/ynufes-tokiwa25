<script setup lang="ts">
import ContentBox from "~/components/ContentBox.vue";
import newsData from "~/public/news/news.json";
import PageTitle from "~/components/PageTitle.vue";

useHead({
  title: "News | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "最新情報を掲載しています" }],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle :title="'おしらせ'" :sub-title="'おしらせ'" />
      <div class="Latest-News">
        <div class="box">
          <p>最新情報</p>
        </div>
        <ContentBox v-for="item in newsData" :key="item.id" class="contentbox">
          <NuxtLink :to="`/news/${item.id}`" class="news-link">
            <p>{{ item.title }}</p>
            <div class="date">
              <h1>{{ item.date }}</h1>
            </div>
          </NuxtLink>
        </ContentBox>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;

.contentbox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 30px 10px;
  color: #000000;
  margin-bottom: 40px;
  transition: 0.2s ease-out;
  box-shadow: 4px 6px 3px #00000050;
  backdrop-filter: blur(4px);
  &:hover {
    transition: 0.2s ease-out;
    box-shadow: 4px 8px 5px #00000050;
    transform: scale(1.005);
  }
}

.page-container {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 10vh;
}

.news-link {
  color: #000000;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  font-size: 30px;
  @include md {
    font-size: 25px;
  }
  @include sm {
    padding-left: 10px;
    font-size: 19px;
  }
}

.Latest-News {
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .date {
    margin-top: 30px;
    font-size: 20px;
    @include md {
      margin-top: 20px;
    }
    @include sm {
      font-size: 16px;
      margin-left: 0px;
      margin-top: 10px;
    }
  }
}

.box {
  p {
    font-size: 41px;
    margin-left: 14%;
    margin-bottom: 30px;
    @include md {
      margin-left: 60px;
      font-size: 36px;
    }
    @include sm {
      margin-left: 30px;
      font-size: 25px;
    }
  }
}
</style>
