<script setup lang="ts">
defineProps<{
  rank: number;
  title: string;
  votes: number;
  imageUrl?: string;
}>();

// 順位に応じたクラスを返す
const getRankClass = (rank: number) => {
  switch (rank) {
    case 1:
      return "gold";
    case 2:
      return "silver";
    case 3:
      return "bronze";
    default:
      return "";
  }
};
</script>

<template>
  <div class="ranking-card">
    <p class="rank" :class="getRankClass(rank)">第{{ rank }}位</p>
    <div class="image">
      <img src="/assets/images/no-image.png" alt="企画画像" />
    </div>
    <p class="title">{{ title }}</p>
    <div class="votes">
      <img src="/assets/images/vote-count.svg" alt="投票アイコン" />
      <p>{{ votes }}票</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.ranking-card {
  text-align: center;
}

.rank {
  text-shadow: #fff 0px 3px 6px;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  -webkit-text-stroke: 1px #650f0f;

  @include md {
    font-size: 1.6rem;
  }
}

/* 順位ごとの文字色＆縁取り */
.rank.gold {
  color: #cb8535;
}

.rank.silver {
  color: #a6a6a6;
}

.rank.bronze {
  color: #884c2e;
}

.image {
  width: 22vw;
  height: 22vw;
  max-width: 150px;
  max-height: 150px;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.title {
  margin: 1rem 0;
  font-size: 1.2rem;
}

.votes {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22vw;
  margin-top: 0.5rem;

  @include md {
    width: 100%;
  }

  p {
    position: absolute;
  }
}
</style>
