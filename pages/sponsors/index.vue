<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
import LinkButtonComponent from "~/components/LinkButtonComponent.vue";
useHead({
  title: "Map | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "ご協賛企業一覧はこちら" }],
});

</script>

<template>
  <div class="page-root">
    <PageTitle title="ご協賛企業一覧"/>
      <div class="text">
        <div class="thanks">
          <p>「25常盤祭」の開催にあたり、多くの企業の皆様より多大なるご支援とご協力を賜りました。</p>
          <p class="first">ここに深く感謝申し上げます。</p>
          <p>ご協賛いただいた企業の皆様を以下にご紹介いたします。</p>
          <p>（敬称略・五十音順）</p>
        </div>
      </div>
      <div class="subtitle">
        <p>広告協賛</p>
      </div>
      <div class="company">
        <div class="company-left">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </div>
        <div class="company-right">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </div>
      </div>
      <div class="subtitle">
        <p>物品協賛</p>
      </div>
      <div class="company">
        <div class="company-left">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </div>
        <div class="company-right">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </div>
      </div>
      <div class="subtitle">
        <p>ブース協賛</p>
      </div>
      <div class="company">
        <div class="company-left">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </div>
        <div class="company-right">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </div>
      </div>
      <div class="subtitle">
        <p>寄付</p>
      </div>
      <div class="company">
        <div class="company-left">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </div>
        <div class="company-right">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-root {
  font-family: 'Kaisei Decol', sans-serif;
}

.text{
 font-family: Zen Old Mincho;
}

.thanks{
  text-align: center;
  color: #fff;
}

.first {
  margin-bottom: 1em; /* 段落の下に1行分の余白 */
}

.subtitle{
  margin: 40px 10% 10px 10%;
  color: #fff;
  font-size: 48px;
  margin-top: 10rem;
  margin-bottom: 5rem;
}

.company{
  display: flex;
  gap: 30%;
}

.company-left{
  color: #fff;
  margin-left: 12%;
  font-family: Zen Old Mincho;
 }

.company-right{
  color: #fff;
  font-family: Zen Old Mincho;
}

</style>
