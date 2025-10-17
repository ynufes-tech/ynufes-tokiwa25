<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import LinkButton from "~/components/LinkButtonComponent.vue";
useHead({
  title: "Pamphlet | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "パンフレット紹介" }],
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="パンフレット紹介" />
    <div class="contents-wrapper">
      <img
        src="~/assets/images/pamphlet-tokiwa25.webp"
        alt="パンフレット画像"
        class="pamphlet-image"
      />
      <div class="download">
        <div class="download-text">
          <p>下のボタンから電子版パンフレットをダウンロードいただけます。</p>
        </div>
        <div class="download-button normal">
          <p>(36.4MB)</p>
          <link-button
            link="https://storage.googleapis.com/tokiwa25-assets/pamphlet/tokiwa25-pamphlet.pdf"
            text="ダウンロード"
          ></link-button>
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
.pamphlet-image {
  max-width: 500px;
  width: 25%;
}
.contents-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  @include md {
    flex-direction: column;
    align-items: center;
    .pamphlet-image {
      width: 50%;
      margin-bottom: 2rem;
    }
    .download-text p {
      font-size: 1.7rem;
      @include sm {
        font-size:1.2rem;
      }
    }
    .download {
      width: 90%;
    }
    button {
      font-size: 1.5rem;
    }
    .download-button {
      font-size: 1.5rem;
    }
  }
}
.download {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  max-width: 800px;
  color: white;
}
.download-text {
  text-align: center;
}
.download-button p{
  text-align: center;
  padding: 20px 0;
  width: 100%;
  max-width: 280px;
  align-items: center;
  line-height: 1.5;
  @include sm{
    font-size:1.2rem;
    padding-bottom: 5px;
  }
}
</style>
