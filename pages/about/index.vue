<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
import LinkButtonComponent from "~/components/LinkButtonComponent.vue";
useHead({
  title: "About | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "常盤祭について" }],
});

import { onMounted } from "vue";

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 } // 20%見えたら発火
  );

  document.querySelectorAll(".fade-in p").forEach((el) => observer.observe(el));
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
          <p>常盤祭とは、横浜国立大学で毎年秋に開催される大学祭です。</p>
          <p>
            多数のサークルによる模擬店やステージ企画、ゲスト企画などがあります。
          </p>
        </div>
      </ContentBox>
    </div>
    <div class="image">
      <img src="~/assets/images/theme-logo.svg" />
    </div>
    <div class="fade-in">
      <p class="no-wrap">雨天での大学祭の実施が続いているため、</p>
      <p>今度こそは晴れてほしい。</p>
      <p>そんな願いが込められた</p>
      <p>秋らしさを感じるテーマです。</p>
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
                <td>
                  <img
                    src="~/assets/images/fri.svg"
                    alt="金"
                    class="day-icon"
                  />
                </td>
                <td>13:00~20:30</td>
              </tr>
              <tr>
                <td></td>
                <td>11/1</td>
                <td>
                  <img
                    src="~/assets/images/sat.svg"
                    alt="土"
                    class="day-icon"
                  />
                </td>
                <td>9:00~20:30</td>
              </tr>
              <tr>
                <td></td>
                <td>11/2</td>
                <td>
                  <img
                    src="~/assets/images/sun.svg"
                    alt="日"
                    class="day-icon"
                  />
                </td>
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
          <div class="campus">
            <p class="university">横浜国立大学</p>
            <p class="university">常盤台キャンパス</p>
          </div>
          <div class="button">
            <LinkButtonComponent
              text="マップ"
              link="https://maps.app.goo.gl/MB3xehHJCK8JBx3fA"
            />
          </div>
        </div>
      </ContentBox>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-root {
  font-family: "Kaisei Decol", sans-serif;
}

.subtitle {
  margin: 40px 17% 20px 17%;
  color: #fff;
  font-size: 2rem;
  @include md {
    font-size: 1.5rem;
  }
}

.about {
  margin: 40px 10%;
  font-size: 0.9em;
  line-height: 1.3;
  p {
    margin: 60px 0;
    @include md {
      margin: 30px 0;
    }
  }
  @include md {
    margin: 40px 6%;
  }
}
.image {
  text-align: center;
  img {
    max-width: 100%;
  }
}

.fade-in {
  margin: 10px 16%;
  text-align: left;
  color: #fff;
  p {
    font-size: 1.2em;
    line-height: 2.5em;
    @include md {
      font-size: 1.1em;
      line-height: 2em;
    }
    @include sm {
      font-size: 0.9em;
    }
  }
  @include md {
    margin: 50px 13%;
  }
  @include sm {
    margin: 30px 6%;
  }
}

.no-wrap {
  white-space: nowrap;
}

.fade-in p {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in p.show {
  opacity: 1;
  transform: translateY(0);
}

@for $i from 1 through 4 {
  .fade-in p:nth-child(#{$i}) {
    transition-delay: ($i - 1) * 0.2s;
  }
}

.container {
  margin: 1.5em 5%;
  @include md {
    margin: 0.5em 1%;
  }
}
table {
  border-collapse: collapse;
  margin: 0 5%;
  position: relative;
  left: 10%;
  text-align: center;
  @include lg {
    left: 5%;
  }
  @include md {
    margin: 30px 4%;
    left: 1%;
  }
}
tr {
  font-size: clamp(16px, 5vw, 20px);
}
td {
  padding: 5px 2em;
  font-size: 1em;
  text-align: center;
  @include lg {
    padding: 5px 1.4em;
  }
  @include md {
    padding: 5px 0.4em;
    font-size: 0.8em;
  }
}

.day-icon {
  width: 26px;
  height: 26px;
  border-radius: 50%;
}

.place {
  margin: 1.5em 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .campus {
    display: flex;
    @include md {
      display: block;
    }
  }

  .button {
    margin-left: auto;
    min-width: 120px;
    @include md {
      margin: 10px auto 0;
    }
  }
}

.university {
  margin: 0 0.8em;
  @include lg {
    font-size: 0.9em;
  }
  @include md {
    display: block;
    margin: 0.2em 0 0 0.7em;
    font-size: 0.8em;
  }
}
</style>
