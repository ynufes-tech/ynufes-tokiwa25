<script lang="ts" setup>
import events from "public/test-events.json";
import EventCard from "~/components/EventCard.vue";
import PageTitle from "~/components/PageTitle.vue";
import FilterButton from "~/components/EventFilterButton.vue";
import { reactive } from "vue";
useHead({
  title: "Events | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "企画一覧" }],
});
definePageMeta({
  hideHeader: true,
});
const open = ref(false);
const eventSerch = computed(() => (open.value ? "　閉じる" : "企画検索"));
const favoriteEvents = ref<string[]>([]);

onMounted(() => {
  const stored = localStorage.getItem("favoriteEvents");
  if (stored) {
    const parsed = JSON.parse(stored);
    favoriteEvents.value = Array.isArray(parsed)
      ? parsed.map(String)
      : Object.values(parsed).map(String);
  }
});

function handleToggleFavorite(id: string | number) {
  const strId = String(id);
  if (favoriteEvents.value.includes(strId)) {
    favoriteEvents.value = favoriteEvents.value.filter((f) => f !== strId);
  } else {
    favoriteEvents.value.push(strId);
  }
  localStorage.setItem("favoriteEvents", JSON.stringify(favoriteEvents.value));
}

//FilterButtonの状態管理
//アコーディングメニューの状態管理
const filter = reactive({
  //日付
  day1: true,
  day2: true,
  day3: true,
  //場所
  indoorALL: true,
  library: true,
  urban: true,
  bizEco: true,
  edu: true,
  science: true,
  blockALL: true,
  Ablock: true,
  Bblock: true,
  Cblock: true,
  Dblock: true,
  Eblock: true,
  Fblock: true,
  Yblock: true,
  yaon: true,
  TBKALL: true,
  hall: true,
  eduMid: true,
  wooddeck: true,
  ground: true,
  mediahall: true,
  //カテゴリ
  foodsALL: true,
  snack: true,
  noodle: true,
  rice: true,
  sweets: true,
  drink: true,
  displayALL: true,
  performanceALL: true,
  dance: true,
  music: true,
  show: true,
  events: true,
  libraryEvents: true,
});
const accordion = ref({
  place: false, //場所
  indoor: false, //室内
  outdoor: false, //屋外
  stage: false, //ステージ
  TBK: false, //特別な場所
  category: false, //カテゴリー
  foods: false, //飲食
  display: false, //展示・体験
  performance: false, //パンフォーマンス
  official: false, //本部企画
});
//すべてボタンと他のボタンを連動させる
// const toggleIndoorAll = () => {
//   if (filter.indoorALL) {
//     const keys = ["library", "urban", "bizEco", "edu", "science"];
//     keys.forEach((key) => (filter[key] = true));
//   }
// };
// watch(
//   () => [
//     filter.library,
//     filter.urban,
//     filter.bizEco,
//     filter.edu,
//     filter.science,
//   ],
//   (newValues) => {
//     filter.indoorALL = newValues.every((v) => v);
//   }
// );

// const toggleOutdoorAll = () => {
//   if (filter.outdoorALL) {
//     const keys = [
//       "Ablock",
//       "Bblock",
//       "Cblock",
//       "Dblock",
//       "Eblock",
//       "Fblock",
//       "Yblock",
//     ];
//     keys.forEach((key) => (filter[key] = true));
//   }
// };
// watch(
//   () => [
//     filter.Ablock,
//     filter.Bblock,
//     filter.Cblock,
//     filter.Dblock,
//     filter.Eblock,
//     filter.Fblock,
//     filter.Yblock,
//   ],
//   (newValues) => {
//     filter.outdoorALL = newValues.every((v) => v);
//   }
// );

// const toggleTBKAll = () => {
//   if (filter.TBKALL) {
//     const keys = [
//       "hall",
//       "eduMid",
//       "wooddeck",
//       "ground",
//       "mediahall",
//     ];
//     keys.forEach((key) => (filter[key] = true));
//   }
// };
// watch(
//   () => [
//     filter.hall,
//     filter.eduMid,
//     filter.wooddeck,
//     filter.ground,
//     filter.mediahall,
//   ],
//   (newValues) => {
//     filter.TBKALL = newValues.every((v) => v);
//   }
// );

// const togglefoodsAll = () => {
//   if (filter.foodsALL) {
//     const keys = [
//       "snack",
//       "noodle",
//       "rice",
//       "sweets",
//       "drink",
//     ];
//     keys.forEach((key) => (filter[key] = true));
//   }
// };
// watch(
//   () => [
//     filter.snack,
//     filter.noodle,
//     filter.rice,
//     filter.sweets,
//     filter.drink,
//   ],
//   (newValues) => {
//     filter.foodsALL = newValues.every((v) => v);
//   }
// );

// const togglePerformanceAll = () => {
//   if (filter.performanceALL) {
//     const keys = [
//       "dance",
//       "music",
//       "show",
//     ];
//     keys.forEach((key) => (filter[key] = true));
//   }
// };
// watch(
//   () => [
//     filter.dance,
//     filter.music,
//     filter.show,
//   ],
//   (newValues) => {
//     filter.performanceALL = newValues.every((v) => v);
//   }
// );

const toggleAll = (keys: string[], value: boolean) => {
  keys.forEach((key) => {
    filter[key] = value;
  });
};

const indoorKeys = ["library", "urban", "bizEco", "edu", "science"];
const outdoorKeys = [
  "Ablock",
  "Bblock",
  "Cblock",
  "Dblock",
  "Eblock",
  "Fblock",
  "Yblock",
];
const TBKKeys = ["hall", "eduMid", "wooddeck", "ground", "mediahall"];
const foodsKeys = ["snack", "noodle", "rice", "sweets", "drink"];
const performanceKeys = ["dance", "music", "show"];

const indoorAll = computed(() => indoorKeys.every((k) => filter[k]));
const outdoorAll = computed(() => outdoorKeys.every((k) => filter[k]));
const TBKAll = computed(() => TBKKeys.every((k) => filter[k]));
const foodsAll = computed(() => foodsKeys.every((k) => filter[k]));
const performanceAll = computed(() => performanceKeys.every((k) => filter[k]));

const filteredEvents = computed(() => {
  return events.filter((event) => {
    const placeMatch = filter[event.place];
    const categoryMatch = filter[event.genre];
    return placeMatch && categoryMatch;
  });
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="企画一覧" />
    <div class="filter-menu">
      <div class="menu-tab" :class="{ bodyShow: open }">
        <transition name="eventSerch" mode="out-in">
          <p :key="eventSerch" @click="open = !open">{{ eventSerch }}</p>
        </transition>
        <span class="separate-line"></span>
        <p>お気に入り♡</p>
      </div>
      <div class="menu-body" :class="{ show: open }">
        <div class="days">
          <FilterButton text="10/31(金)" v-model="filter.day1" />
          <FilterButton text="11/1(土) " v-model="filter.day2" />
          <FilterButton text="11/2(日) " v-model="filter.day3" />
        </div>

        <div
          class="place-accordion accordion"
          :class="{ accordionOpen: accordion.place }"
        >
          <div
            class="accordion-title"
            @click="accordion.place = !accordion.place"
          >
            <p>場所を選択</p>
            <img
              src="~/assets/images/accordion-arrow.svg"
              alt=""
              :class="{ accordionOpen: accordion.place }"
            />
          </div>
          <transition name="openAccordion">
            <div :key="accordion.place">
              <div
                class="accordion indoor-accordion"
                :class="{ accordionOpen: accordion.indoor }"
                v-if="accordion.place"
              >
                <div
                  class="accordion-title accordion-child"
                  @click="accordion.indoor = !accordion.indoor"
                >
                  <p>屋内</p>
                  <img
                    src="~/assets/images/accordion-arrow.svg"
                    alt=""
                    :class="{ accordionOpen: accordion.indoor }"
                  />
                </div>
                <transition name="openAccordion">
                  <div
                    class="accordion-elements"
                    :key="accordion.indoor"
                    v-if="accordion.indoor"
                  >
                    <FilterButton
                      text="すべて"
                      :model-value="indoorAll"
                      @click="toggleAll(indoorKeys, !indoorAll)"
                    />
                    <FilterButton text="図書館" v-model="filter.library" />
                    <FilterButton text="都市科学部棟" v-model="filter.urban" />
                    <FilterButton
                      text="経済・経営学部1号館"
                      v-model="filter.bizEco"
                    />
                    <FilterButton text="教育学部6号館" v-model="filter.edu" />
                    <FilterButton text="理工学部A棟" v-model="filter.science" />
                  </div>
                </transition>
              </div>
              <div
                class="accordion outdoor-accordion"
                :class="{ accordionOpen: accordion.outdoor }"
                v-if="accordion.place"
              >
                <div
                  class="accordion-title accordion-child"
                  @click="accordion.outdoor = !accordion.outdoor"
                >
                  <p>屋外</p>
                  <img
                    src="~/assets/images/accordion-arrow.svg"
                    alt=""
                    :class="{ accordionOpen: accordion.outdoor }"
                  />
                </div>
                <transition name="openAccordion">
                  <div
                    class="accordion-elements"
                    :key="accordion.outdoor"
                    v-if="accordion.outdoor"
                  >
                    <FilterButton
                      text="すべて"
                      :model-value="outdoorAll"
                      @click="toggleAll(outdoorKeys, !outdoorAll)"
                    />
                    <FilterButton text="Aブロック" v-model="filter.Ablock" />
                    <FilterButton text="Bブロック" v-model="filter.Bblock" />
                    <FilterButton text="Cブロック" v-model="filter.Cblock" />
                    <FilterButton text="Dブロック" v-model="filter.Dblock" />
                    <FilterButton text="Eブロック" v-model="filter.Eblock" />
                    <FilterButton text="Fブロック" v-model="filter.Fblock" />
                    <FilterButton text="Yブロック" v-model="filter.Yblock" />
                  </div>
                </transition>
              </div>
              <div
                class="accordion stage-accordion"
                :class="{ accordionOpen: accordion.stage }"
                v-if="accordion.place"
              >
                <div
                  class="accordion-title accordion-child"
                  @click="accordion.stage = !accordion.stage"
                >
                  <p>ステージ</p>
                  <img
                    src="~/assets/images/accordion-arrow.svg"
                    alt=""
                    :class="{ accordionOpen: accordion.stage }"
                  />
                </div>
                <transition name="openAccordion">
                  <div
                    class="accordion-elements"
                    :key="accordion.stage"
                    v-if="accordion.stage"
                  >
                    <FilterButton text="野外音楽堂" v-model="filter.yaon" />
                  </div>
                </transition>
              </div>
              <div
                class="accordion TBK-accordion"
                :class="{ accordionOpen: accordion.TBK }"
                v-if="accordion.place"
              >
                <div
                  class="accordion-title accordion-child"
                  @click="accordion.TBK = !accordion.TBK"
                >
                  <p>特別な場所</p>
                  <img
                    src="~/assets/images/accordion-arrow.svg"
                    alt=""
                    :class="{ accordionOpen: accordion.TBK }"
                  />
                </div>
                <transition name="openAccordion">
                  <div
                    class="accordion-elements"
                    :key="accordion.TBK"
                    v-if="accordion.TBK"
                  >
                    <FilterButton
                      text="すべて"
                      :model-value="TBKAll"
                      @click="toggleAll(TBKKeys, !TBKAll)"
                    />
                    <FilterButton
                      text="大学会館4Fホール"
                      v-model="filter.hall"
                    />
                    <FilterButton
                      text="教育学部6・7号館の間"
                      v-model="filter.eduMid"
                    />
                    <FilterButton
                      text="学生センター前ウッドデッキ"
                      v-model="filter.wooddeck"
                    />
                    <FilterButton
                      text="多目的グラウンド"
                      v-model="filter.ground"
                    />
                    <FilterButton
                      text="図書館1Fメディアホール"
                      v-model="filter.mediahall"
                    />
                  </div>
                </transition>
              </div>
            </div>
          </transition>
        </div>

        <div
          class="category-accordion accordion"
          :class="{ accordionOpen: accordion.category }"
        >
          <div
            class="accordion-title"
            @click="accordion.category = !accordion.category"
          >
            <p>カテゴリーを選択</p>
            <img
              src="~/assets/images/accordion-arrow.svg"
              alt=""
              :class="{ accordionOpen: accordion.category }"
            />
          </div>
          <transition name="openAccordion">
            <div :key="accordion.category">
              <div
                class="accordion foods-accordion"
                :class="{ accordionOpen: accordion.foods }"
                v-if="accordion.category"
              >
                <div
                  class="accordion-title accordion-child"
                  @click="accordion.foods = !accordion.foods"
                >
                  <p>飲食</p>
                  <img
                    src="~/assets/images/accordion-arrow.svg"
                    alt=""
                    :class="{ accordionOpen: accordion.foods }"
                  />
                </div>
                <transition name="openAccordion">
                  <div
                    class="accordion-elements"
                    :key="accordion.foods"
                    v-if="accordion.foods"
                  >
                    <FilterButton
                      text="すべて"
                      :model-value="foodsAll"
                      @click="toggleAll(foodsKeys, !foodsAll)"
                    />
                    <FilterButton text="軽食" v-model="filter.snack" />
                    <FilterButton text="鉄板・麺類" v-model="filter.noodle" />
                    <FilterButton text="ご飯もの" v-model="filter.rice" />
                    <FilterButton text="スイーツ" v-model="filter.sweets" />
                    <FilterButton text="ドリンク" v-model="filter.drink" />
                  </div>
                </transition>
              </div>
              <div
                class="accordion display-accordion"
                :class="{ accordionOpen: accordion.display }"
                v-if="accordion.category"
              >
                <div
                  class="accordion-title accordion-child"
                  @click="accordion.display = !accordion.display"
                >
                  <p>展示・販売・体験</p>
                  <img
                    src="~/assets/images/accordion-arrow.svg"
                    alt=""
                    :class="{ accordionOpen: accordion.display }"
                  />
                </div>
                <transition name="openAccordion">
                  <div
                    class="accordion-elements"
                    :key="accordion.display"
                    v-if="accordion.display"
                  >
                    <FilterButton text="すべて" v-model="filter.displayALL" />
                  </div>
                </transition>
              </div>
              <div
                class="accordion performance-accordion"
                :class="{ accordionOpen: accordion.performance }"
                v-if="accordion.category"
              >
                <div
                  class="accordion-title accordion-child"
                  @click="accordion.performance = !accordion.performance"
                >
                  <p>パンフォーマンス</p>
                  <img
                    src="~/assets/images/accordion-arrow.svg"
                    alt=""
                    :class="{ accordionOpen: accordion.performance }"
                  />
                </div>
                <transition name="openAccordion">
                  <div
                    class="accordion-elements"
                    :key="accordion.performance"
                    v-if="accordion.performance"
                  >
                    <FilterButton
                      text="すべて"
                      :model-value="performanceAll"
                      @click="toggleAll(performanceKeys, !performanceAll)"
                    />
                    <FilterButton text="ダンス" v-model="filter.dance" />
                    <FilterButton text="音楽" v-model="filter.music" />
                    <FilterButton text="ショー" v-model="filter.show" />
                  </div>
                </transition>
              </div>
              <div
                class="accordion official-accordion"
                :class="{ accordionOpen: accordion.official }"
                v-if="accordion.category"
              >
                <div
                  class="accordion-title accordion-child"
                  @click="accordion.official = !accordion.official"
                >
                  <p>本部企画</p>
                  <img
                    src="~/assets/images/accordion-arrow.svg"
                    alt=""
                    :class="{ accordionOpen: accordion.official }"
                  />
                </div>
                <transition name="openAccordion">
                  <div
                    class="accordion-elements"
                    :key="accordion.official"
                    v-if="accordion.official"
                  >
                    <FilterButton text="イベント" v-model="filter.events" />
                    <FilterButton
                      text="図書館企画"
                      v-model="filter.libraryEvents"
                    />
                  </div>
                </transition>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="cards-holder">
      <EventCard
        v-for="event in filteredEvents"
        :key="event.id"
        class="events-elements"
        :eventData="event"
        :favoriteEvents="favoriteEvents"
        @toggle-favorite="handleToggleFavorite"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root {
  padding: 100px 100px;
  @include md {
    padding: 50px 5%;
  }
}
.cards-holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}
.events-elements {
  text-decoration: none;
  max-width: 90%;
}

.menu-tab {
  position: fixed;
  top: 15vh;
  left: calc(100% - 70px);
  width: 70px;
  padding: 30px 0;
  background-color: #fbefde;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  border-radius: 20px 0 0 20px;
  z-index: 5;
  p {
    font-size: 24px;
    font-family: "Zen Old Mincho", sans-serif;
    writing-mode: vertical-rl;
    cursor: pointer;
    user-select: none;
  }
  .separate-line {
    width: 60%;
    height: 1px;
    background-color: black;
  }

  @include sm {
    left: calc(100% - 50px);
    width: 50px;
    opacity: 0.9;
    padding: 20px 0;
    gap: 20px;
    p {
      font-size: 22px;
    }
  }
}
.menu-tab.bodyShow {
  box-sizing: border-box;
  border: 1px black solid;
}
.menu-body {
  position: fixed;
  font-family: "Zen Old Mincho", sans-serif;
  background-color: #fbefde;
  width: 412px;
  min-height: 361px;
  max-height: 85vh; //表示位置が上から15vh
  overflow-y: auto;
  padding: 30px 20px;
  box-sizing: border-box;
  top: 15vh;
  left: 100%;
  transform: translateX(0px);
  transition: 0.4s;
  opacity: 0.1;
  border-radius: 10px 0 0 10px;
  z-index: 4;
  @include sm {
    min-height: 301px;
    padding: 30px 10px;
    width: 100%;
  }
  .days {
    display: flex;
    gap: 10px;
  }
  .accordion {
    margin-top: 40px;
    user-select: none;
    .accordion-elements {
      margin-top: 10px;
      margin-left: 4%;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      width: calc(100% - 70px);
      @include sm {
        width: calc(100% - 50px);
      }
    }
  }
  .accordion-title {
    font-size: 19px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 13px;
    gap: 30px;
    width: 80%;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    cursor: pointer;
    img {
      transition: 0.4s ease;
    }
    img.accordionOpen {
      transform: rotateZ(-180deg);
      transition: 0.4s ease;
    }
  }
  .accordion-child {
    border: none;
    margin-left: 4%;
    width: 76%;
  }
}
.menu-body.show {
  transform: translateX(-412px);
  transition: 0.4s;
  opacity: 1;
  z-index: 4;
  @include sm {
    top: 15vh;
    transform: translateX(-100%);
  }
}

//-----transitionタグのアニメーション↓↓

.eventSerch-enter-active,
.eventSerch-leave-active {
  transition: 0.2s ease;
}
.eventSerch-enter-from {
  opacity: 0;
  transform: translateY(-15px);
}
.eventSerch-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.openAccordion-enter-active,
.openAccordion-leave-active {
  transition: 0.2s ease;
}
.openAccordion-leave-to {
  opacity: 0;
  overflow: hidden;
  transform: translateX(10px);
}
.openAccordion-enter-from {
  opacity: 0;
  overflow: hidden;
  transform: translateX(-10px);
}
</style>
