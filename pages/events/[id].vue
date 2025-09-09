<script lang="ts" setup>
const route = useRoute();
import events from "public/test-events.json";
import ContentBox from "~/components/ContentBox.vue";
import LinkButton from "~/components/LinkButtonComponent.vue";

const id = parseInt(route.params.id);
const event = events.find((e) => parseInt(e.id) === id);
const showNoImage = (e: Event) => {
  //画像が見つからなかった時の処理
  const target = e.target as HTMLImageElement;
  target.src = "/images/NO_IMAGE.svg";
  target.onerror = null; // 無限ループ防止
};
</script>

<template>
  <div class="page-root">
    <ContentBox class="title-box">
      <p class="event-title">{{ event.e_name }}</p>
      <p class="org-name">{{ event.o_name }}</p>
    </ContentBox>
    <div class="content">
      <div class="genre-tag">{{ event.displayGenre }}</div>
      <div class="place">
        <div class="place-text">
          <img src="~/assets/images/eventcard-map-icon.svg" alt="" />{{
            event.displayPlace
          }}
        </div>
        <NuxtLink to="/map"
          ><img src="~/assets/images/show-map.svg" class="show-map" alt=""
        /></NuxtLink>
      </div>
      <div class="icon-img">
        <img
          src="~/public/images/NO_IMG.svg"
          alt=""
        /><!--中央寄せを効かせるためラップ-->
      </div>
      <ContentBox class="event-description">
        <p>{{ event.e_description }}</p>
      </ContentBox>

      <div class="org-description">
        <p>団体説明</p>
        <ContentBox class="org-description-text">
          <p>{{ event.o_description }}</p>
        </ContentBox>
      </div>
      <div class="to-list"><LinkButton text="一覧に戻る" link="/events" /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-root {
  font-family: "Zen Old Mincho", sans-serif;
  padding: 100px 0;
  @include md {
    padding: 50px 0;
  }
}
.title-box {
  text-align: center;
  padding: 0 20px;
  .event-title {
    font-size: min(3.5vw, 3rem);
    padding: 20px 0;
    border-bottom: 2px solid white;
  }
  .org-name {
    font-size: min(2.5vw, 2rem);
    padding: 15px 0;
  }
  @include md {
    padding: 0 10px;
    .event-title {
      font-size: 4vw;
      padding: 15px 0;
    }
    .org-name {
      font-size: 3vw;
      padding: 10px 0;
    }
  }
  @include sm {
    padding: 0 10px;
    .event-title {
      font-size: 4.5vw;
    }
    .org-name {
      font-size: 3.5vw;
      padding: 10px 0;
    }
  }
}
.content {
  .genre-tag {
    color: white;
    font-size: 23px;
    border: 1px solid white;
    display: inline-block;
    border-radius: 9999999px;
    margin: 0;
    margin-top: 10px;
    margin-left: 15%;
    padding: 5px 30px;
    @include md {
      font-size: 15px;
    }
    @include sm {
      margin-left: 10%;
    }
  }
  .place {
    display: flex;
    justify-content: space-between;
    color: white;
    margin: 0 15%;
    margin-bottom: 100px;
    .place-text {
      display: flex;
      align-items: center;
      gap: 15px;
      font-size: 1.2rem;
      img {
        width: 25px;
      }
    }
    .show-map {
      width: 90px;
    }
    @include md {
      margin-bottom: 50px;
      .place-text {
        font-size: 1rem;
        img {
          width: 18px;
        }
      }
      .show-map {
        width: 65px;
      }
    }
    @include sm {
      margin: 0 10%;
      margin-bottom: 50px;
    }
  }
  .icon-img {
    text-align: center;
    img {
      max-width: 50%;
    }
  }
  .event-description {
    margin-top: 80px;
    text-align: center;
    padding: 20px 40px;
    line-height: 1.3rem;
    @include md {
      padding: 20px 15px;
    }
  }
  .org-description {
    font-family: "Kaisei Decol", serif;
    color: #fff;
    margin-top: 130px;
  }
  .org-description > p {
    margin-left: 15%;
    @include sm {
      margin-left: 10%;
    }
  }
  .org-description-text {
    font-family: "Zen Old Mincho", sans-serif;
    color: #000;
    text-align: center;
    padding: 20px 40px;
    line-height: 1.3rem;
    @include md {
      padding: 20px 15px;
    }
  }
  .to-list {
    margin-top: 150px;
    text-align: center;
  }
}
</style>
