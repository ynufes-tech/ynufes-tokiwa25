<script lang="ts" setup>
import events from "public/test-events.json";
import EventCard from "~/components/EventCard.vue";
import PageTitle from "~/components/PageTitle.vue";
import FilterButton from "~/components/EventFilterButton.vue";
useHead({
  title: "Events | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "企画一覧" }],
});
const open = ref(false);
const eventSerch = computed(() => (open.value ? "　閉じる" : "企画検索"));
const filter = ref({
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
                  <p>屋内</p>
                  <img
                    src="~/assets/images/accordion-arrow.svg"
                    alt=""
                    :class="{ accordionOpen: accordion.TBK }"
                  />
                </div>
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
                  <p>ステージ</p>
                  <img
                    src="~/assets/images/accordion-arrow.svg"
                    alt=""
                    :class="{ accordionOpen: accordion.performance }"
                  />
                </div>
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
                  <p>屋内</p>
                  <img
                    src="~/assets/images/accordion-arrow.svg"
                    alt=""
                    :class="{ accordionOpen: accordion.official }"
                  />
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="cards-holder">
      <NuxtLink
        v-for="event in events"
        :key="event.id"
        :to="`/events/${event.id}`"
        class="events-elements"
      >
        <EventCard :event-data="event" />
      </NuxtLink>
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
  z-index: 2;
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
  z-index: 1;
  @include sm {
    top: 15vh;
    transform: translateX(-100%);
  }
}

//-----transitionタグのアニメーション↓↓

.eventSerch-enter-active,
.eventSerch-leave-active {
  transition: 0.15s ease;
}
.eventSerch-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}
.eventSerch-leave-to {
  opacity: 0;
  transform: translateX(10px);
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
