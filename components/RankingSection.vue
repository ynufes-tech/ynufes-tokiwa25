<script setup lang="ts">
import RankingCard from "./RankingCard.vue";

const props = defineProps<{
  sectionTitle: string;
  rankings: { rank: number; title: string; votes: number; imageUrl?: string }[];
}>();

// 1位,2位,3位を探す
const first = props.rankings.find((r) => r.rank === 1);
const second = props.rankings.find((r) => r.rank === 2);
const third = props.rankings.find((r) => r.rank === 3);
</script>

<template>
  <div class="ranking-section">
    <h3>{{ sectionTitle }}</h3>
    <div class="ranking-grid">
      <!-- 左：2位 -->
      <RankingCard
        v-if="second"
        class="second"
        :rank="second.rank"
        :title="second.title"
        :votes="second.votes"
        :imageUrl="second.imageUrl"
      />
      <!-- 中央：1位 -->
      <RankingCard
        v-if="first"
        class="first"
        :rank="first.rank"
        :title="first.title"
        :votes="first.votes"
        :imageUrl="first.imageUrl"
      />
      <!-- 右：3位 -->
      <RankingCard
        v-if="third"
        class="third"
        :rank="third.rank"
        :title="third.title"
        :votes="third.votes"
        :imageUrl="third.imageUrl"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.ranking-section {
  margin: 5rem 0;
}

.ranking-grid {
  display: flex;
  justify-content: center;
  gap: 0;
  @include md {
    gap: 2rem;
    display: flex;
    flex-direction: column;
  }
}

/* --- 並び順の制御 --- */
.second {
  order: 1;
}
.first {
  order: 2;
}
.third {
  order: 3;
}

@include md {
  .first {
    order: 1;
  }
  .second {
    order: 2;
  }
  .third {
    order: 3;
  }
}

.ranking-grid > *:nth-child(2) {
  /* 1位を少し上に強調表示 */
  transform: translateY(-40px);

  @include md {
    transform: translateY(0);
  }
}

.ranking-grid > *:nth-child(3) {
  transform: translateY(10px);
}

h3 {
  font-size: 1.5rem;
  margin: 4rem 0 4rem 5vw;
}
</style>
