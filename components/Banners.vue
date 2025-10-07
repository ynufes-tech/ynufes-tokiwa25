<script lang="ts" setup></script>
<template>
  <div class="component-root">
    <a
      href="https://www.iwakipumps-recruit.jp/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="../assets/images/sponsors/iwaki.webp" alt="IWAKI" />
    </a>
    <a
      href="https://www.next-gears.net/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="../assets/images/sponsors/nextgear.webp" alt="ネクストギア" />
    </a>
    <a
      href="https://www.netsuretsu-karubi.jp/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="../assets/images/sponsors/yakiniku-karubi.webp" alt="熱烈カルビ" />
    </a>
    <a
      href="https://www.hazawa-kubotaganka.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="../assets/images/sponsors/eye-clinic.webp" alt="羽沢くぼた眼科" />
    </a>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.component-root {
  margin: 100px auto;
  margin-bottom: 0;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 3%;
  a {
    display: block; // ← これでリンク枠をブロック要素に
    width: 30%;     // ← 画像と同じ幅にしておく
    max-width: 600px;

    img {
      width: 100%;   // ← 親（aタグ）の幅に合わせる
      height: auto;  // ← 縦横比を維持
      display: block;
    }
  }

  @include md {
    a {
      width: 40%;
    }
  }

  @include sm {
    a {
      width: 70%;
      max-width: 600px;
    }
  }

  img {
    max-width: 600px;
    width: 30%;
  }
  @include md {
    width: 96%;
    margin: 50px auto;
    gap: 15px 3%;
    img {
      width: 40%;
    }
  }
  @include sm {
    flex-direction: column;
    align-items: center;
    margin: 30px auto;
    img {
      width: 70%;
      max-width: 600px;
    }
  }
}
</style>
