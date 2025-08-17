<script setup lang="ts">
import HeaderComponent from "~/components/HeaderComponent.vue";
import LinkButton from "~/components/LinkButtonComponent.vue";
useHead({
  title: "ERROR | 25常盤祭公式HP~紅陽~",
  meta: [
    {
      name: "description",
      content: "お探しのページは見つかりませんでした。",
    },
  ],
});
</script>

<template>
  <div class="layout-root">
    <HeaderComponent />
    <div class="page-root">
      <h1>404横浜</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <LinkButton text="トップページへ" link="/" id="top-link" />
      <p class="error">
        ERROR<img src="~/assets/images/404.svg" class="NF" alt="" />
      </p>
    </div>
    <div class="background-container">
      <div class="background-img" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root {
  margin-top: 125px;

  h1 {
    margin-left: 110px;
    color: white;
    font-size: 140px;
  }
  p {
    margin-top: 50px;
    margin-left: 110px;
    font-family: "Zen Old Mincho", sans-serif;
    color: white;
  }
  #top-link {
    margin-left: 110px;
    margin-top: 39px;
    max-width: 90%;
  }
  .error {
    margin-top: 20px;
    margin-left: 65vw;
    font-family: "Zen Old Mincho", sans-serif;
    color: white;
    font-size: 8vw;
    position: relative;
  }
  .NF {
    position: absolute;
    inset: 0;
    display: block;
    top: -400px;
    width: 280px;
    @include lg {
      top: -250px;
      width: 160px;
    }
  }

  @include md {
    h1,
    p,
    #top-link {
      margin-left: 5vw;
    }
    h1 {
      font-size: 100px;
    }
    .NF {
      display: none;
    }
  }
}

body {
  margin: 0;
  padding: 0;
}
.layout-root {
  padding-top: 4rem;
}

.layout-root {
  font-family: "Kaisei Decol", sans-serif;
  color: #000000;
  position: relative;
  font-size: 24px;
  padding-bottom: 8rem;
  @include lg {
    font-size: 22px;
  }
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 17px;
  }
}
.background-img {
  inset: 0;
  position: absolute;
  background-image: linear-gradient(
    to bottom,
    #e94a22 3%,
    #e9443c 12%,
    #ef6140 30%,
    #f97d47 50%,
    #f69869 75%,
    #f49085 91%
  );
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: -100;
  //   @include sm {
  //     background-image: url(@/assets/images/mobile-background-img.png);
  //   }
}
.background-img::before {
  inset: 0;
  content: "";
  position: absolute;
  background-image: url("@/assets/images/background-texture.webp");
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  z-index: -99;
  mix-blend-mode: multiply;
  opacity: 0.17;
}
</style>
