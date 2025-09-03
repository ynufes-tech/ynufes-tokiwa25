<script setup lang="ts">
import ContentBox from "~/components/ContentBox.vue";

useHead({
  title: "News | 25常盤祭公式HP~紅陽~",
  meta: [
    {name: "description", content: "最新情報を掲載しています"},
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle :title="'おしらせ'" :sub-title="'おしらせ'"/>
      <div class="Latest-News">
        <div class="box1">
        <p>最新情報</p>
        </div>
      <ContentBox id="contentbox">
        <p>
          ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
          ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
          ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
          ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
          ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
          ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力
          ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキストを入力ここにテキスト
        </p>
      </ContentBox>
      </div>
      <div class="update-wrapper">
        <div class="update-card">
          <p>8/19 20:00 更新</p>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;

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

.page-container {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 10vw 10vh;
}

.Latest-News {
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin-top: 20px;



  p {
    font-size: 20px;
    @include md {
      font-size: 20px;
    @include sm {
      font-size: 16px;
    }
    }
  }
}

.box1{
  p{
    font-size: 50px;
    margin-left: 115px;
    margin-bottom: 20px;
    @include md{
      margin-left: 0px;
      font-size: 40px;
    }
    @include sm {
      font-size: 25px;
    }
  }
}
.update-wrapper {
  display: flex;
  justify-content: flex-end; /* 子要素を右寄せ */
  margin-top: 20px;
}

.update-card {
  font-size: 20px;
  color: #000000;
  background: #FBEFDE;
  opacity: 80%;
  border-radius: 30px;
  padding: 20px 60px;
  margin: 20px 110px 0 auto;
  display: inline-block; /* サイズを内容に合わせる */
  @include md {
    margin: 20px 50px 0 auto;
  }
  @include sm {
    margin: 20px 20px 0 auto;
    font-size: 16px;
  }
}
</style>