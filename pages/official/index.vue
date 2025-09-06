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
    <div class="card" v-for="i in 8" :key="i">
      <h3 class="card-title">ゲスト企画 {{ i }}</h3>
      <div class="card-content">
        <div class="card-image"></div>
        <p class="card-text">
          企画の内容がここに入ります。企画の説明文を追加できます。
        </p>
      </div>
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
.card {
  background: rgba(255, 192, 203, 0.7);
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}
.card-content {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.card-image {
  width: 120px;
  height: 120px;
  background: #ddd;
  border-radius: 8px;
  flex-shrink: 0;
}
.card-text {
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.4;
}
</style>

