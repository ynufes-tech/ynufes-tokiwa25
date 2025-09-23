<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
useHead({
  title: "Official | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "本部企画一覧" }],
});
const officialEvents = [
  // {
  //   id: 企画ID(Eventページと共通),
  //   title: events.jsonから持ってくるようにしたい！,
  //   description: 同上
  // },
  {
    id: 101,
    title: "テストタイトル",
    description:
      "いいえ、乱心ではございませぬ。人を、信ずる事が出来ぬ、というのです。このごろは、臣下の心をも、お疑いになり、少しく派手な暮しをしている者には、人質ひとりずつ差し出すことを命じて居ります。御命令を拒めば十字架にかけられて、殺されます。きょうは、六人殺されました。",
  },
  {
    id: 102,
    title: "テストタイトル",
    description:
      "いいえ、乱心ではございませぬ。人を、信ずる事が出来ぬ、というのです。このごろは、臣下の心をも、お疑いになり、少しく派手な暮しをしている者には、人質ひとりずつ差し出すことを命じて居ります。御命令を拒めば十字架にかけられて、殺されます。きょうは、六人殺されました。",
  },
  {
    id: 103,
    title: "テストタイトル",
    description:
      "いいえ、乱心ではございませぬ。人を、信ずる事が出来ぬ、というのです。このごろは、臣下の心をも、お疑いになり、少しく派手な暮しをしている者には、人質ひとりずつ差し出すことを命じて居ります。御命令を拒めば十字架にかけられて、殺されます。きょうは、六人殺されました。",
  },
  {
    id: 104,
    title: "テストタイトル",
    description:
      "いいえ、乱心ではございませぬ。人を、信ずる事が出来ぬ、というのです。このごろは、臣下の心をも、お疑いになり、少しく派手な暮しをしている者には、人質ひとりずつ差し出すことを命じて居ります。御命令を拒めば十字架にかけられて、殺されます。きょうは、六人殺されました。",
  },
  {
    id: 105,
    title: "テストタイトル",
    description:
      "いいえ、乱心ではございませぬ。人を、信ずる事が出来ぬ、というのです。このごろは、臣下の心をも、お疑いになり、少しく派手な暮しをしている者には、人質ひとりずつ差し出すことを命じて居ります。御命令を拒めば十字架にかけられて、殺されます。きょうは、六人殺されました。",
  },
  {
    id: 106,
    title: "テストタイトル",
    description:
      "いいえ、乱心ではございませぬ。人を、信ずる事が出来ぬ、というのです。このごろは、臣下の心をも、お疑いになり、少しく派手な暮しをしている者には、人質ひとりずつ差し出すことを命じて居ります。御命令を拒めば十字架にかけられて、殺されます。きょうは、六人殺されました。",
  },
  {
    id: 107,
    title: "テストタイトル",
    description:
      "いいえ、乱心ではございませぬ。人を、信ずる事が出来ぬ、というのです。このごろは、臣下の心をも、お疑いになり、少しく派手な暮しをしている者には、人質ひとりずつ差し出すことを命じて居ります。御命令を拒めば十字架にかけられて、殺されます。きょうは、六人殺されました。",
  },
];
</script>

<template>
  <div class="page-root">
    <PageTitle title="本部企画一覧" />
    <div class="content-wrapper">
      <p class="message">
        このページでは、本部である大学祭実行委員会が主催する企画だけをpick
        upして紹介します！
      </p>
      <div class="cards">
        <div class="card" v-for="Event in officialEvents" :key="Event.id">
          <h3 class="card-title">{{ `${Event.title} : ${Event.id}` }}</h3>
          <div class="card-content">
            <div class="card-image"></div>
            <p class="card-text">
              {{ Event.description }}
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
  font-family: "Zen Old Mincho", sans-serif;
}
.content-wrapper {
  padding: 0 10px;
  margin: 0 auto;
  max-width: 1920px;
}
.message {
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0 20px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px 70px;
  justify-content: center;
  padding: 0 5%;
  @include xl {
    padding: 0 3%;
    gap: 40px 40px;
  }
  @include lg {
    grid-template-columns: repeat(1, 1fr);
      justify-items: center;
  }
}
.card {
  background: rgba(251, 234, 222, 0.6);
  border-radius: 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: 0.1s;
}
.card:hover {
  background: rgba(251, 234, 222, 0.7);
  transition: 0.1s;
  cursor: pointer;
}
.card-title {
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}
.card-content {
  display: flex;
  gap: 1rem;
  align-items: center;
  @include md {
    flex-direction: column;
  }
}
.card-image {
  width: 200px;
  height: 200px;
  background: #ddd;
  border-radius: 8px;
  flex-shrink: 0;
  @include sm {
    width: 150px;
    height: 150px;
  }
}
.card-text {
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.5;
  @include lg {
    margin-top: 20px;
  }
  @include sm {
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
