<script setup lang="ts">
import ContentBox from "~/components/ContentBox.vue";

useHead({
  title: "About-us | 25常盤祭公式HP~紅陽~",
  meta: [
    {name: "description", content: "おしらせの詳細を掲載しています。"},
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle :title="'おしらせ'" :sub-title="'おしらせ'"/>
        <div class="news-card first">
          <div class="date">
            <p>2025.08.27</p>
          </div>
          <div class="headline">
            <p>25常盤祭について</p>
          </div>
        </div>
        <div class="news-card second">
          <div class="headline">
            <p>25常盤祭を開催します。</p>
          </div>
          </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;

.page-container {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 10vw 10vh;
}

#contentbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
  color: #000000;
  @include  sm {
    padding: 30px;
  }
}

.news-card {
  background: linear-gradient(180deg, #fbeade, #f8c8c8);
  color: #000000;
  border-radius: 20px;
  margin: 20px auto;
  max-width: 600px;
  text-align: left;

  .date {
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: -100px;
    margin-top: -20px;
    @include sm{
      font-size:16px;
      margin-left: 0px;
    }
  }

  .headline {
    font-size: 45px;
    text-align: center;
    @include md{
      font-size: 30px;
    @include sm{
      font-size: 20px;
    }
    }
  }
}

.news-card.first {
  border: 3px solid #42C478;
  padding: 50px 130px;
  @include sm{
    padding: 30px 50px;
  }
}
.news-card.second {
  border: 3px solid #42C478;
  padding: 70px 60px;
  @include sm{
    padding: 30px 50px;
  }
}

</style>