<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import RankingSection from "~/components/RankingSection.vue";
import rankingData from "~/public/images/ranking/ranking.json";

useHead({
  title: "Ranking | 25常盤祭公式HP~紅陽~",
  meta: [
    {
      name: "description",
      content: "企画コンテストのランキング結果はこちら！",
    },
  ],
});

// JSONから日付一覧を取得
const dates: string[] = Object.keys(rankingData);

// スクロール処理
const scrollToDate = (date: string) => {
  const target = document.getElementById(date);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <div class="ranking-page">
    <PageTitle title="企画ランキング" />

    <div class="date-buttons">
      <NormalButton
        v-for="date in dates"
        :key="date"
        :text="date"
        :link="'#' + date"
      />
    </div>
  
    <!-- 各日付の結果 -->
    <div v-for="date in dates" :key="date" :id="date" class="ranking-date">
      <h2>{{ rankingData[date].label }}{{ date }}</h2>
      <ContentBox>
        <RankingSection
          v-for="section in rankingData[date]"
          :key="section.sectionTitle"
          :sectionTitle="section.sectionTitle"
          :rankings="section.rankings"
        />
      </ContentBox>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

h2 {
  color: #fff;
  text-shadow: 0 2px 3.5px #000;
  font-size: 1.5rem;
  margin: 5rem 0 1rem 16vw;
}

.ranking-page {
  padding: 2rem 0;
}


.date-buttons {
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 1rem 2rem 0rem;
}

.ranking-date {
  margin: 3rem 0;
}
</style>
