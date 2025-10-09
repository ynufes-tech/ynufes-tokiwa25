<script setup lang="ts">
import { useRoute } from "vue-router";
import LinkButton from "~/components/LinkButtonComponent.vue";
import newsData from "~/public/news/news.json";

const route = useRoute();
const news = newsData.find((n) => n.id === route.params.id);

useHead({
  title: "Latest-news | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "おしらせの詳細を掲載しています。" }],
});
</script>

<template>
  <div class="page-root" v-if="news">
    <div class="page-container">
      <PageTitle :title="'おしらせ'" :sub-title="'おしらせ'" />
      <div class="news-card first">
        <div class="date">
          <p>{{ news.date }}</p>
        </div>
        <div class="headline">
          <p>{{ news.title }}</p>
        </div>
      </div>
      <div class="news-card second">
        <div class="headline">
          <p>{{ news.headline }}</p>
        </div>
      </div>
      <LinkButton class="LinkButton" text="ニュース一覧へ" link="/25/tokiwa/news" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;

.page-container {
  font-family: ZenOldMincho, serif;
  color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 10vw 10vh;
}

.news-card {
  background: linear-gradient(180deg, #fbeade, #f8c8c8);
  color: #000000;
  border-radius: 20px;
  margin: 20px 0;
  max-width: 600px;
  text-align: left;

  .date {
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: -100px;
    margin-top: -20px;
    @include sm {
      font-size: 16px;
      margin-left: 0px;
    }
  }

  .headline {
    text-align: center;
  }
}

.news-card.first {
  font-size: 35px;
  border: 3px solid #42C478;
  padding: 30px 110px;
  @include md {
    padding: 30px 102px;
  }
  @include sm {
    font-size: 20px;
    padding: 30px 20px;
  }
}
.news-card.second {
  font-size: 24px;
  border: 3px solid #42C478;
  padding: 30px 30px;
  @include sm {
    font-size: 16px;
    padding: 30px 20px;
  }
}

.LinkButton {
  margin: 30px 0 0 18rem;
  justify-content: flex-start;
  @include md {
    margin: 30px 0 0 5rem;
  }
  @include sm {
    margin: 30px 0 0 1rem;
    font-size: 5px;
  }
}
</style>
