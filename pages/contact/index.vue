<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
useHead({
  title: "Contact | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "お問い合わせはこちら" }],
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="お問い合わせ" />
    <ContentBox>
      <div class="explanation">
        <p>常盤祭に興味を持っていただきありがとうございます。</p>
        <p>お問い合わせに関しましては、メールにてお願いします。</p>
      </div>
      <div class="content">
        <p>
          メールでのお問い合わせ<br />
          メールアドレス：25tokiwa.soumu@gmail.com<br />
        </p>
      </div>
      <div class="message">
        <p>
          お問い合わせいただく場合、本文にお名前とお問い合わせ内容の記入を忘れずにお願いします。<br />
          お問い合わせ内容を確認後、担当者より連絡させていただきます。
        </p>
      </div>
    </ContentBox>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-root{
  @include sm{
    font-size: 14px;
  }
}
.explanation {
  margin: 120px 8%;
  text-align: center;
  font-size: 1.1em;
  p {
    margin: 70px 0;
  }
  @include md {
    margin: 80px 4%;
    margin-top:40px;
    p{
      margin: 30px 0;
    }
  }
}

.content,
.message {
  margin: 50px 8%;
  p {
    line-height: 2rem;
  }
  @include md {
    margin: 50px 4%;
  }
}

.message {
  margin-bottom: 70px;
  @include sm{
    margin-bottom: 35px;
  }
}
</style>
