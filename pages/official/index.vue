<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
useHead({
  title: "Official | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "本部企画一覧" }],
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="本部企画一覧" />
    <div>
      <p class="message">
        このページでは、本部である大学祭実行委員会が主催する企画だけをpick upして紹介します！
      </p>
    </div>
    <div class="card-grid">
      <div class="card" v-for="i in 8" :key="i">
        <div class="card-image"></div>
        <h3 class="card-title">ゲスト企画 {{ i }}</h3>
        <p class="card-text">
          企画の内容がここに入ります。企画の説明文を追加できます。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-root {
  font-family: 'Kaisei Decol', sans-serif;
}
.message{
  color: white;
  text-align: center ;
  margin-bottom: 2rem;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2列 */
  gap: 2rem; /* カード同士の間隔 */
  max-width: 800px;
  margin: 0 auto; /* 中央寄せ */
}

/* 各カード */
.card {
  background: rgba(255, 192, 203, 0.7); /* 半透明のピンク */
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
/* 画像枠 */
.card-image {
  width: 100px;
  height: 100px;
  background: #ddd; /* 仮のグレー背景 */
  border-radius: 8px;
  margin-bottom: 1rem;
}

/* タイトル */
.card-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

/* 説明文 */
.card-text {
  font-size: 0.9rem;
}
</style>

