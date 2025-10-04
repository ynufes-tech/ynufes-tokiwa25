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

        <ContentBox v-for="item in newsData" :key="item.id" id="contentbox">
          <NuxtLink :to="`/news/${item.id}`" class="news-link">
            <p>{{ item.title }}</p>
          </NuxtLink>
          <div class="date">
            <h1>{{ item.date }}</h1>
          </div>
        </ContentBox>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;

#contentbox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 50px;
  color: #000000;
  margin-bottom: 20px;
  @include sm {
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

.news-link {
  color: #000000;
  &:hover {
    opacity: 0.6; 
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

  p {
    font-size: 38px;

    @include md {
      font-size: 30px;
    }
    @include sm {
      font-size: 20px;
    }
  }
}

.box {
  p {
    font-size: 41px;
    margin-left: 115px;
    margin-bottom: 30px;
    @include md {
      margin-left: 20px;
      font-size: 36px;
    }
    @include sm {
      font-size: 25px;
    }
  }
}
</style>
