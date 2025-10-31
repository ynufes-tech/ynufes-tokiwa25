<script setup lang="ts">
import { useRoute } from "vue-router";
import LinkButton from "~/components/LinkButtonComponent.vue";

const newsData = ref([]);
onMounted(async() => {
  try {
    const res = await fetch(
      "https://storage.ynu-fes.yokohama/jsons/news.json"
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    newsData.value = data;
  } catch (err) {
    console.error("イベント取得失敗", err);
  }
})

const route = useRoute();
const id = parseInt(route.params.id);
const news = computed(() =>
  newsData.value.find((e) => parseInt(e.id) === id)
);


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
      <LinkButton
        class="LinkButton"
        text="ニュース一覧へ"
        link="/25/tokiwa/news"
      />
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
  padding-bottom: 10vh;
}

.news-card {
  background: linear-gradient(180deg, #fbeade, #f8c8c8);
  color: #000000;
  border-radius: 20px;
  margin: 20px 0;
  max-width: min(900px, 90%);
  text-align: left;
  box-sizing: border-box;
  position: relative;
  .date {
    font-size: 18px;
    position: absolute;
    @include sm {
      font-size: 16px;
      margin-left: 0px;
    }
  }

  .headline {
    text-align: center;
  }
  @include md {
    max-width: 85%;
  }
  @include sm {
    width: 85%;
  }
}

.news-card.first {
  font-size: 30px;
  border: 3px solid #42c478;
  padding: 10px 10px 0;

  .headline {
    margin: 20px 80px;
    @include md {
      margin: 20px 20px;
    }
    @include sm {
      margin: 20px 10px;
    }
  }

  @include md {
    font-size: 23px;
  }
  @include sm {
    font-size: 18px;
  }
}
.news-card.second {
  font-size: 22px;
  border: 3px solid #42c478;
  padding: 30px 30px;
  white-space: pre-wrap;
  line-height: 1.6;
  p {
    margin: 0;
    text-align: left;
  }
  @include md {
    font-size: 16px;
    padding: 20px 10px;
    line-height: 1.5;
  }
  @include sm {
    font-size: 14px;
    line-height: 1.4;
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
