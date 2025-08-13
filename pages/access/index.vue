<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
import LinkButton from "~/components/LinkButtonComponent.vue";
useHead({
  title: "Access | 25常盤祭公式HP~紅陽~",
  meta: [
    { name: "description", content: "横浜国立大学までのアクセスはこちらから" },
  ],
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="大学までのアクセス" />
    <ContentBox id="contentbox">
      <p>大学推奨ルートでのご来場をお願いします。</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.867783569219!2d139.58826227554297!3d35.47328494136941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601859679ea21c77%3A0x28d72ba15dae9e6c!2z5qiq5rWc5Zu956uL5aSn5a2m!5e1!3m2!1sja!2sjp!4v1755089078031!5m2!1sja!2sjp"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="google-map"
      ></iframe>
      <p>横浜市営地下鉄ブルーライン 「三ッ沢上町駅」より<br />徒歩約16分</p>
      <LinkButton
        class="LinkButton"
        text="詳しくはこちら"
        link="https://www.ynu.ac.jp/access/train_front.html"
      />
      <p>相鉄本線 「和田町駅」より<br />徒歩約20分</p>
      <LinkButton
        class="LinkButton"
        text="詳しくはこちら"
        link="https://www.ynu.ac.jp/access/train_south.html"
      />
      <p>相鉄新横浜線 「羽沢横浜国大駅」より<br />徒歩約15分</p>
      <LinkButton
        class="LinkButton"
        text="詳しくはこちら"
        link="https://www.ynu.ac.jp/access/train_hazawa.html"
      />
      <p>横浜駅より<br />バス約20分</p>
      <LinkButton class="LinkButton" text="詳しくはこちら" link="" />
    </ContentBox>
  </div>
</template>

<style lang="scss" scoped>
#contentbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 5px;
  padding-bottom: 100px;
  p {
    margin: 50px 0;
    margin-top: 150px;
    line-height: 1.3em;
  }
  .google-map {
    margin: 0;
    margin-bottom: 50px;
    max-width: 90%;
  }
  .LinkButton {
    max-width: 90%;
    margin-bottom:30px;
  }
}
</style>
