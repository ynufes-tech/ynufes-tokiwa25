<script lang="ts" setup>
const route = useRoute();
import ContentBox from "~/components/ContentBox.vue";
import LinkButton from "~/components/LinkButtonComponent.vue";
import OrgLinks from "~/components/OrgLinks.vue";
import { ref, computed } from "vue";

const id = parseInt(route.params.id);
const events = ref<any[]>([]);
const event = computed(() =>
  events.value.find((e) => parseInt(e.id) === id)
);
const showNoImage = (e: Event) => {
  //画像が見つからなかった時の処理
  const target = e.target as HTMLImageElement;
  target.src = "/images/NO_IMA.svg";
  target.onerror = null; // 無限ループ防止
};

//いいね関係
const favoriteEvents = ref<string[]>([]);
function getFavo() {
  const stored = localStorage.getItem("favoriteEvents"); //Favo読み取り
  if (stored) {
    const parsed = JSON.parse(stored);
    favoriteEvents.value = Array.isArray(parsed)
      ? parsed.map(String)
      : Object.values(parsed).map(String);
  }
}
onMounted(async () => {
  // fetch でデータ取得
  try {
    const res = await fetch(
      "https://storage.ynu-fes.yokohama/jsons/events.json"
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    events.value = data;
  } catch (err) {
    console.error("イベント取得失敗", err);
  }
  getFavo();
});
const isFavorite = computed(() => favoriteEvents.value.includes(id.toString()));
function toggleFavo() {
  if (isFavorite.value) {
    favoriteEvents.value = favoriteEvents.value.filter(
      (f) => f !== id.toString()
    );
  } else {
    favoriteEvents.value.push(id.toString());
  }
  localStorage.setItem("favoriteEvents", JSON.stringify(favoriteEvents.value));
}
</script>

<template>
  <div class="page-root">
    <ContentBox class="title-box">
      <p class="event-title">{{ event?.e_name }}</p>
      <div class="bottom">
        <p class="org-name">{{ event?.o_name }}</p>
        <div class="favo-wrap">
          <div class="favo" @click="toggleFavo">
            <transition name="favoAnime">
              <img
                src="~/assets/images/favorite.svg"
                alt=""
                v-if="isFavorite"
                class="favorite"
              />
            </transition>
            <img
              src="~/assets/images/unfavorite.svg"
              class="unfavorite"
              alt=""
            />
          </div>
        </div>
      </div>
    </ContentBox>
    <div class="content">
      <div class="genre-tag">{{ event?.displayGenre }}</div>
      <div class="place">
        <div class="place-text">
          <img src="~/assets/images/eventcard-map-icon.svg" alt="" />{{
            event?.displayPlace
          }}
        </div>
        <NuxtLink to="/map"
          ><img src="~/assets/images/show-map.svg" class="show-map" alt=""
        /></NuxtLink>
      </div>
      <div class="icon-img">
        <img
        :src="`https://storage.ynu-fes.yokohama/images/icons/${event?.id}.webp`"
        alt="event-img"
        class="icon-img"
        @error="
          if (!$event.target.dataset.fallbackApplied) {
            $event.target.dataset.fallbackApplied = '1';
            $event.target.src = 'https://storage.ynu-fes.yokohama/images/icons/NO_IMG.svg';
          }
        "
      /><!--中央寄せを効かせるためラップ-->
      </div>
      <ContentBox class="event-description" v-if='event?.e_description != " "'>
        <p>{{ event?.e_description }}</p>
      </ContentBox>

      <div class="org-description" v-if='event?.o_description != " "'>
        <p>団体説明</p>
        <ContentBox class="org-description-text">
          <p>{{ event?.o_description }}</p>
        </ContentBox>
      </div>
      <OrgLinks class="links" :x_id="event?.x_id" :ins_id="event?.ins_id" :hp="event?.hp" />
      <div class="to-list"><LinkButton text="一覧に戻る" link="/25/tokiwa/events" /></div>
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
  font-family: "Zen Old Mincho", sans-serif;
  text-align: center;
  padding: 0 20px;
  position: relative;
  .event-title {
    font-size: min(3.5vw, 3rem);
    padding: 20px 0;
    border-bottom: 2px solid white;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .org-name {
      font-size: min(2.5vw, 2rem);
      padding: 15px 0;
      @include md {
        font-size: 3vw;
        padding: 10px 0;
      }
      @include sm {
        font-size: max(.7rem , 3.7vw);
        padding: 10px 0;
      }
    }
    .favo-wrap {
      position: absolute;
      top: 30%;
      left: 90%;
    }
    .favo {
      position: relative;
      width: fit-content;
      cursor: pointer;
      width: 30px;
      height: 30px;
      @include md {
        width: 18px;
        height: 18px;
      }
    }
    .favorite {
      position: absolute;
      inset: 0;
      z-index: 2;
      width: 100%;
    }
    .unfavorite {
      position: absolute;
      inset: 0;
      width: 100%;
    }
  }
  @include md {
    padding: 0 10px;
    .event-title {
      font-size: 4.2vw;
      padding: 15px 0;
    }
  }
  @include sm {
    padding: 0 10px;
    .event-title {
      font-size: 4.8vw;
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
    font-family: "Zen Old Mincho", sans-serif;
    margin-top: 80px;
    text-align: center;
    padding: 20px 40px;
    line-height: 1.8rem;
    @include md {
      padding: 20px 15px;
    }
  }
  .org-description {
    font-family: "Zen Old Mincho", sans-serif;
    color: #fff;
    margin-top: 130px;
  }
  .links{
      margin-top: 100px;
      @include md{
        margin-top: 70px;
      }
    }
  .org-description > p {
    font-size: 36px;
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
    margin-top: 10px;
    line-height: 1.8rem;
    @include md {
      padding: 20px 15px;
    }
  }
  .to-list {
    margin-top: 150px;
    text-align: center;
  }
}

.favoAnime-enter-active {
  animation: popIn 0.3s forwards;
}
.favoAnime-leave-active {
  animation: popOut 0.2s forwards;
}

/* keyframes */
@keyframes popIn {
  0% {
    transform: scale(0.2);
  }
  40% {
    transform: scale(1.35);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes popOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
  }
}
</style>
