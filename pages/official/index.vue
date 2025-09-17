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
      <div class="cards card-grid">
        <div class="card" v-for="i in 8" :key="i">
          <h3 class="card-title">ゲスト企画 {{ i }}</h3>
          <div class="card-content">
            <div class="card-image"></div>
            <p class="card-text">
              企画の内容がここに入ります。企画の説明文を追加できます。企画の内容がここに入ります。企画の説明文を追加できます。企画の内容がここに入ります。企画の説明文を追加できます。企画の内容がここに入ります。企画の説明文を追加できます。企画の内容がここに入ります。企画の説明文を追加できます。
            </p>
          </div>
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
  margin-right: 15px;
  margin-left: 15px;
}
.card {
  background: rgba(251,234,222,0.6);
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: .1s;
}
.card:hover{
  background: rgba(251,234,222,0.7);
  transition: .1s;
  cursor: pointer;
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
  width: 150px;
  height: 150px;
  background: #ddd;
  border-radius: 8px;
  flex-shrink: 0;
  margin-top: 45px;
  @include sm{
    width: 100px;
    height: 100px;
    margin-top: 60px;
  }
}
.card-text {
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-top: 40px;
  @include lg{
    margin-top: 20px;
  }
  @include sm{
    font-size: 14px;
    margin-top: 10px;
  }
}
.card-grid {
  display: grid;
  grid-template-columns: 470px 470px;
  grid-auto-rows: 380px;
  gap: 4rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background: none;
  justify-content: center;
  @include xl{
    grid-template-columns: 430px 430px;
    grid-auto-rows: 358px;
  }
  @include lg{
    grid-template-columns: 360px 360px;
    grid-auto-rows: 340px;
    gap: 2rem;
  }
  @include md{
    grid-template-columns: 360px;
    grid-auto-rows: 340px;
  }
  @include sm{
    grid-template-columns: 300px;
    grid-auto-rows: 340px;
  }
}
</style>

