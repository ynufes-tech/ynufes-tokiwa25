<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
useHead({
  title: "About | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "常盤祭について" }],
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="常盤祭について" />
    <div class="subtitle">
      <p>常盤祭とは</p>
    </div>
    <div>
      <ContentBox>
        <div class="about">
          <p>常盤祭とは、横浜国立大学で毎年開催される大学祭です。</p>
          <p>多数のサークルによる模擬店やステージ企画、ゲスト企画などがあります。</p>
        </div>
      </ContentBox>
    </div>
    <div class="image">
      <img src="~/assets/images/theme-logo.svg">
    </div>
    <div class="fade-in">
      <p>雨天での大学祭の実施が続いているため、</p>
      <p>今度こそは晴れてほしい。</p>
      <p>そんな願いが込められた</p>
      <p> 秋らしさを感じるテーマです。</p>
    </div>
    <div class="subtitle">
      <p>日時</p>
    </div>
    <div>
      <ContentBox>
        <div class="container">
          <div class="box">
            <table>
              <tr>
                <td>2025</td>
                <td>10/31</td>
                <td><img src="~/assets/images/fri.svg" alt="金" class="day-icon"></td>
                <td>13:00~20:30</td>
              </tr>
              <tr>
                <td></td>
                <td>11/1</td>
                <td><img src="~/assets/images/sat.svg" alt="土" class="day-icon"></td>
                <td>9:00~20:30</td>
              </tr>
              <tr>
                <td></td>
                <td>11/2</td>
                <td><img src="~/assets/images/sun.svg" alt="日" class="day-icon"></td>
                <td>9:00~15:00</td>
              </tr>
            </table>
          </div>
        </div>
      </ContentBox>
    </div>
    <div>
      <p class="subtitle">場所</p>
    </div>
    <div>
      <ContentBox>
        <div class="place">
          <div>
           <p class="university">横浜国立大学</p>
           <p class="university">常盤台キャンパス</p>
          </div>
          <a href="https://maps.app.goo.gl/MB3xehHJCK8JBx3fA">Googleマップへ</a>
        </div>
      </ContentBox>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.subtitle{
  margin: 40px 17% 20px 17%;
  color: #fff;
  font-size: 2rem;
}
p,
a{
  font-family: 'Kaisei Decol', sans-serif
}
.about {
  margin: 80px 10%;
  font-size: 1em;
  p {
    margin: 70px 0;
  }
  @include md {
    margin: 30px 4%;
  }
}
.image{
  text-align: center;
  @include md{
    text-align: center;
  }
}

.fade-in {
  margin: 10px 32%;
  text-align: left;
  color: #fff;
  p{
  font-size: 1.2em;
  line-height: 2.5em;
  }
  @include md {
    margin: 50px 4%;
  }
}
.container {
  margin: 1.5em 5%;
  @include md{
    margin: 0.5em 1%;
  }
}
table {
  border-collapse: collapse;
  margin: 0 5%;
  position: relative;
  left: 10%;
  text-align: center;
  @include md {
    margin: 30px 4%;
    left: 1%;
  }
}
tr{
  font-size: clamp(16px,5vw,20px);
  font-family: 'Kaisei Decol', sans-serif
}
td {
  padding: 5px 2em;
  font-size: 1em;
  text-align: center;
  @include lg{
    padding: 5px 1.4em;
  }
  @include md{
    padding:5px 0.4em;
    font-size:0.8em;
  }
}

.day-icon {
  width: 26px;
  height: 26px;
  border-radius: 50%;
}
.place{
  margin: 1.5em 5%;
  display: flex;
  div{
    display: flex;
    @include md{
      display: block;
    }
  }
  @include lg{
    padding: 5px 1.4em;
  }
  @include md{
    padding:5px 0.5em;
    font-size:0.75em;
  }
}
.university{
  position: relative;
  left: 15%;
  margin:0 0.8em;
  @include lg{
    left: 0.5em;
    margin: 0;
  }
  @include md{
    left:0.5em ;
    margin: 0 0.3em;
    display: block;
  }
}
a{
  position: relative;
  left: 15%;
  @include lg{
    left: 10%;
  }
  @include md{
    margin-top: 0.5em;
  }
}
</style>
