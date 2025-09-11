<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
useHead({
  title: "Sponsors | 25常盤祭公式HP~紅陽~",
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
      <div class="subtitle-rapper">
        <img src="~/assets/images/title_leaf.svg" id="leftside" alt="" />
        <p class="subtitle">広告協賛</p>
      </div>
      <div class="company">
        <ul class="company-left">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </ul>
        <ul class="company-right">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </ul>
      </div>
      <div class="subtitle-rapper">
        <img src="~/assets/images/title_leaf.svg" id="leftside" alt="" />
        <p class="subtitle">物品協賛</p>
      </div>
      <div class="company">
        <ul class="company-left">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </ul>
        <ul class="company-right">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </ul>
      </div>
      <div class="subtitle-rapper">
        <img src="~/assets/images/title_leaf.svg" id="leftside" alt="" />
        <p class="subtitle">ブース協賛</p>
      </div>
      <div class="company">
        <ul class="company-left">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </ul>
        <ul class="company-right">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </ul>
      </div>
      <div class="subtitle-rapper">
        <img src="~/assets/images/title_leaf.svg" id="leftside" alt="" />
        <p class="subtitle">寄付</p>
      </div>
      <div class="company">
        <ul class="company-left">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </ul>
        <ul class="company-right">
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
          <li>まるまる</li>
        </ul>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-root {
  font-family: 'Kaisei Decol', sans-serif;
  margin: 120px 8%;
}

.text{
 font-family: Zen Old Mincho;
}

.thanks{
  text-align: center;
  color: #fff;
  @include md {
    font-size: 1rem;
  }
}

.first {
  margin-bottom: 1em; /* 段落の下に1行分の余白 */
  @include md {
    font-size: 1rem;
  }
}

.subtitle-rapper{
  margin: 0;
  margin-top: 100px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  @include sm {
    margin-top: 75px;
  }
  img {
    @include xl{
      width: 7vw
    }
    @include lg {
      width: 9vw;
    }
  }
}

.subtitle{
  color: #fff;
  font-size: 48px;
  @include md {
    font-size: 7vw;
    font-size: 40px;
  }
  @include sm {
    font-size: 28px;
  }

}


.company{
  display: flex;
  gap: 30%;
  @include md {
    font-size: 1rem;
  }
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
