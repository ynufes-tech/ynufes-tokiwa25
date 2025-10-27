<script lang="ts" setup>
import EventCard from "~/components/EventCard.vue";
import PageTitle from "~/components/PageTitle.vue";
import FilterButton from "~/components/EventFilterButton.vue";
import LinkButton from "~/components/LinkButtonComponent.vue";
import { ref, computed, reactive, watch } from "vue";
import Fuse from "fuse.js";
useHead({
  title: "Events | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "団体企画一覧を掲載しています！" }],
});
definePageMeta({
  hideHeader: true,
});
const open = ref(false);
const onlyFavo = ref(false);
const popUpClear = ref(false);
const popUpHtU = ref(false);
const htuState = ref(1);
const eventSerch = computed(() => (open.value ? "　閉じる" : "企画検索"));
const filterFavo = computed(() =>
  onlyFavo.value ? "　全て表示　" : "お気に入り♡"
);
const modePageTitle = computed(() =>
  onlyFavo.value ? "お気に入り" : "企画一覧"
);
const favoriteEvents = ref<string[]>([]); //お気に入り配列用意
const events = ref<any[]>([]);
const scrollY = ref(0); //スクロール量変数
const search = ref("");
const options = {
  keys: [
    "e_name",
    "o_name",
    "e_description",
    "o_description",
    "displayGenre",
    "place",
    "displayPlace",
  ],
  threshold: 0.35,
};
let fuse = new Fuse([], options);

onMounted(async () => {
  window.addEventListener("scroll", handleScroll, { passive: true }); //スクロールされたときscrollYを更新

  // LocalStorage いいねの読み取り
  const stored = localStorage.getItem("favoriteEvents");
  if (stored) {
    const parsed = JSON.parse(stored);
    favoriteEvents.value = Array.isArray(parsed)
      ? parsed.map(String)
      : Object.values(parsed).map(String);
  }
  // LocalStorage フィルタの読み取り
  const storedFilter = localStorage.getItem("filter");
  if (storedFilter) {
    const parsed = JSON.parse(storedFilter);
    Object.assign(filter, parsed);
  }
  //スクロール量の読み取り
  const storedScroll = localStorage.getItem("scroll");
  let lastScroll = 0;
  console.log("読み取ったよ");
  if (storedScroll) {
    const parsed = parseInt(storedScroll);
    lastScroll = parsed; //スクロール量変数
  }

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

  setTimeout(() => {
    window.scrollTo({ top: lastScroll, behavior: "instant" });
  }, 10);
  console.log(lastScroll);

  const hasAccessed = localStorage.getItem("hasAccessed");
  if (!hasAccessed || hasAccessed == "0") {
    openHtu();
  }
});

onUnmounted(() => {
  localStorage.setItem("scroll", scrollY.value.toString());
  window.removeEventListener("scroll", handleScroll);
});

function handleToggleFavorite(id: string | number) {
  //Favo更新
  const strId = String(id);
  if (favoriteEvents.value.includes(strId)) {
    favoriteEvents.value = favoriteEvents.value.filter((f) => f !== strId);
  } else {
    favoriteEvents.value.push(strId);
  }
  localStorage.setItem("favoriteEvents", JSON.stringify(favoriteEvents.value));
}

function clearAllFavo() {
  favoriteEvents.value = [];
  localStorage.setItem("favoriteEvents", JSON.stringify(favoriteEvents.value));
  popUpClear.value = false;
  onlyFavo.value = false;
}

function openHtu() {
  htuState.value = 1;
  popUpHtU.value = true;
  localStorage.setItem("hasAccessed", "1");
}

//FilterButtonの状態管理
//アコーディングメニューの状態管理
const filter = reactive({
  //日付
  //day1: true,
  //day2: true,
  //day3: true,
  //場所
  indoorALL: true,
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
  TBKALL: true,
  yaon: true,
  hall: true,
  eduMid: true,
  wooddeck: true,
  ground: true,
  library: true,
  bizEcoMid: true,
  urbanSide: true,
  farm: true,
  whole: true,
  biz109: true,
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
  officialALL: true,
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

const toggleAll = (keys: string[], value: boolean) => {
  keys.forEach((key) => {
    filter[key] = value;
  });
};

const indoorKeys = ["urban", "bizEco", "edu", "science"];
const outdoorKeys = [
  "Ablock",
  "Bblock",
  "Cblock",
  "Dblock",
  "Eblock",
  "Fblock",
  "Yblock",
];
const TBKKeys = [
  "eduMid",
  "yaon",
  "wooddeck",
  "bizEcoMid",
  "hall",
  "urbanSide",
  "farm",
  "library",
  "whole",
  "biz109",
];
const foodsKeys = ["snack", "noodle", "rice", "sweets", "drink"];
const performanceKeys = ["dance", "music", "show"];
const officialKeys = ["events", "libraryEvents"];

const indoorAll = computed(() => indoorKeys.every((k) => filter[k]));
const outdoorAll = computed(() => outdoorKeys.every((k) => filter[k]));
const TBKAll = computed(() => TBKKeys.every((k) => filter[k]));
const foodsAll = computed(() => foodsKeys.every((k) => filter[k]));
const performanceAll = computed(() => performanceKeys.every((k) => filter[k]));
const officialAll = computed(() => officialKeys.every((k) => filter[k]));

const placeALLOFF = () => {
  indoorKeys.forEach((indoorKey) => {
    filter[indoorKey] = false;
  });
  outdoorKeys.forEach((outdoorKey) => {
    filter[outdoorKey] = false;
  });
  TBKKeys.forEach((TBKKey) => {
    filter[TBKKey] = false;
  });
};
const placeALLON = () => {
  indoorKeys.forEach((indoorKey) => {
    filter[indoorKey] = true;
  });
  outdoorKeys.forEach((outdoorKey) => {
    filter[outdoorKey] = true;
  });
  TBKKeys.forEach((TBKKey) => {
    filter[TBKKey] = true;
  });
};
const categoryALLOFF = () => {
  foodsKeys.forEach((foodsKey) => {
    filter[foodsKey] = false;
  });
  performanceKeys.forEach((performanceKey) => {
    filter[performanceKey] = false;
  });
  officialKeys.forEach((officialKey) => {
    filter[officialKey] = false;
  });
  filter.displayALL = false;
};
const categoryALLON = () => {
  foodsKeys.forEach((foodsKey) => {
    filter[foodsKey] = true;
  });
  performanceKeys.forEach((performanceKey) => {
    filter[performanceKey] = true;
  });
  officialKeys.forEach((officialKey) => {
    filter[officialKey] = true;
  });
  filter.displayALL = true;
};

const searchResults = computed(() => {
  if (!search.value) return events.value;
  return fuse.search(search.value).map((r) => r.item);
});

const filteredEvents = computed(() => {
  return searchResults.value.filter((event) => {
    const placeMatch = filter[event.place];
    const categoryMatch = filter[event.genre];
    if (onlyFavo.value) {
      const favoMatch = favoriteEvents.value.includes(event.id);
      return placeMatch && categoryMatch && favoMatch;
    } else {
      return placeMatch && categoryMatch;
    }
  });
});

const handleScroll = () => {
  scrollY.value = window.scrollY;
};
watch(
  filter,
  (newVal) => {
    localStorage.setItem("filter", JSON.stringify(newVal));
  },
  { deep: true }
);
watch(events, (newEvents) => {
  fuse = new Fuse(newEvents, options);
});
</script>

<template>
  <div class="page-root">
    <transition name="eventSerch" mode="out-in">
      <PageTitle :title="modePageTitle" :key="filterFavo" />
    </transition>
    <div class="filter-menu">
      <div class="menu-tab" :class="{ bodyShow: open }">
        <transition name="eventSerch" mode="out-in">
          <p :key="eventSerch" @click="open = !open">{{ eventSerch }}</p>
        </transition>
        <span class="separate-line"></span>
        <transition name="eventSerch" mode="out-in">
          <p :key="filterFavo" @click="onlyFavo = !onlyFavo">
            {{ filterFavo }}
          </p>
        </transition>
        <span class="separate-line"></span>
        <div class="htu-tab" @click="openHtu">
          <img src="~/assets/images/htu-icon.svg" alt="" />
        </div>
      </div>
      <div class="menu-body" :class="{ show: open }">
        <input
          type="search"
          v-model="search"
          class="search-box"
          placeholder="検索"
        />
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
              <div class="ALL-toggle" v-if="accordion.place">
                <div @click="placeALLON">全条件ON</div>
                <div @click="placeALLOFF">全条件OFF</div>
              </div>
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
                      text="教育学部6・7号館の間"
                      v-model="filter.eduMid"
                    />
                    <FilterButton text="野外音楽堂" v-model="filter.yaon" />
                    <FilterButton
                      text="学生センター前ウッドデッキ"
                      v-model="filter.wooddeck"
                    />
                    <FilterButton
                      text="経済・経営学部棟1号館の間"
                      v-model="filter.bizEcoMid"
                    />
                    <FilterButton
                      text="大学会館4Fホール"
                      v-model="filter.hall"
                    />
                    <FilterButton
                      text="都市科学部棟裏"
                      v-model="filter.urbanSide"
                    />
                    <FilterButton text="西門放牧地" v-model="filter.farm" />
                    <FilterButton
                      text="中央図書館1F"
                      v-model="filter.library"
                    />
                    <FilterButton
                      text="キャンパス全域"
                      v-model="filter.whole"
                    />
                    <FilterButton
                      text="経営学部棟109教室"
                      v-model="filter.biz109"
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
              <div class="ALL-toggle" v-if="accordion.category">
                <div @click="categoryALLON">全条件ON</div>
                <div @click="categoryALLOFF">全条件OFF</div>
              </div>
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
                  <p>パフォーマンス</p>
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
                    <FilterButton
                      text="すべて"
                      :model-value="officialAll"
                      @click="toggleAll(officialKeys, !officialAll)"
                    />
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
      <p v-if="filteredEvents.length === 0" class="nothing-events">
        該当する企画が存在しません。
      </p>
      <EventCard
        v-for="event in filteredEvents"
        :key="event.id"
        class="events-elements"
        :eventData="event"
        :favoriteEvents="favoriteEvents"
        @toggle-favorite="handleToggleFavorite"
      />
    </div>
    <div class="clear-button">
      <LinkButton
        text="お気に入りを削除する"
        v-if="favoriteEvents.length > 0"
        @click="popUpClear = true"
      />
    </div>

    <transition name="popUpClearAnime">
      <div
        class="favo-clear"
        v-show="popUpClear"
        @click.self="popUpClear = false"
      >
        <!--Favo全削除用のポップアップ-->
        <div class="clear-window">
          <div class="clear-text">
            <img src="~/assets/images/leaf.svg" alt="" />
            <p>お気に入りをすべて削除しますか？</p>
          </div>
          <div class="clear-buttons">
            <div id="cancel" @click="popUpClear = false">キャンセル</div>
            <div id="clear" @click="clearAllFavo">削除する</div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="popUpHtUAnime">
      <div class="htu" v-show="popUpHtU" @click.self="popUpHtU = false">
        <!--使い方のポップアップ-->
        <div class="htu-window">
          <p class="htu-title">使い方</p>
          <div class="htu-img">
            <img src="~/assets/images/HtU.webp" class="htu-card-img" alt="" />
            <img
              src="~/assets/images/htu-hand.webp"
              v-show="htuState == 1"
              class="htu-hand"
              alt=""
            />
            <transition name="htu-favoAnime">
              <img
                src="~/assets/images/favorite.svg"
                v-show="htuState == 2"
                class="htu-favo"
                alt=""
              />
            </transition>
          </div>
          <p class="htu-detail">
            {{
              htuState === 1
                ? "企画ごとの詳細や団体の"
                : "お気に入りに登録すれば"
            }}<span style="display: inline-block">{{
              htuState === 1 ? "説明が見られるよ！！" : "もう一度見られるよ！"
            }}</span>
          </p>
          <div class="htu-buttons">
            <div
              class="prev htu-button"
              :class="{ active: htuState == 2 }"
              @click="htuState = 1"
            >
              <p>&lt;前へ</p>
            </div>
            <div
              class="next htu-button"
              :class="{ active: htuState == 1 }"
              @click="htuState = 2"
            >
              <p>次へ&gt;</p>
            </div>
          </div>
          <div class="htu-close-btn" @click="popUpHtU = false">
            <p>閉じる</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root {
  padding: 100px 100px;
  font-family: "Zen Old Mincho";
  @include md {
    padding: 50px 5%;
  }
}
.cards-holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  .nothing-events {
    margin-top: 50px;
    font-size: 1em;
    color: white;
  }
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
.htu-tab {
  padding: 0 5px;
  cursor: pointer;
  img {
    width: 100%;
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
  .search-box {
    font-family: "Zen Old Mincho", serif;
    font-size: 1.2rem;
    box-sizing: border-box;
    width: 70%;
    height: 40px;
    border-radius: 999999px;
    padding: 0 30px;
    border: none;
    filter: drop-shadow(0 0 5px #00000050);
    outline: none;
  }
  .ALL-toggle {
    display: flex;
    gap: 10px;
    margin-left: 8%;
    margin-top: 10px;
    div {
      margin: 0;
      padding: 5px 7px;
      font-family: "Zen Old Mincho", sans-serif;
      font-size: 15px;
      color: #333;
      border: 1px solid #333;
      border-radius: 9999999px;
      background: #fbefde;
      display: inline-block;
      cursor: pointer;
      user-select: none;
      opacity: 0.8;
    }
    div:nth-of-type(1) {
      background: linear-gradient(to right, #ff7621, #e87c08, #e96759);
      color: white;
      opacity: 1;
    }
  }
  .accordion {
    margin-top: 30px;
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
.clear-button {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.htu {
  position: fixed;
  z-index: 1001;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #444444aa;
  backdrop-filter: blur(15px);
  .htu-window {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fbefde;
    border-radius: 10px;
    padding: 20px 5%;
    filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));
    max-width: 98%;
    box-sizing: border-box;
    @include sm {
      padding: 10px 3%;
    }
    .htu-title {
      font-family: "Kaisei Decol", sans-serif;
      font-size: 35px;
      margin-bottom: 20px;
      @include sm {
        font-size: 30px;
        margin-bottom: 10px;
      }
    }
    .htu-detail {
      font-size: 15px;
      margin: 20px 0px;
      text-align: center;
    }
    .htu-img {
      width: 325px;
      max-width: 80%;
      position: relative;
      .htu-card-img {
        width: 100%;
      }
      .htu-hand {
        position: absolute;
        width: 100px;
        top: 250px;
        left: 100px;
        animation-name: fuwa;
        animation-duration: 1s;
        animation-iteration-count: infinite;
      }
      .htu-favo {
        position: absolute;
        width: 30px;
        bottom: 22px;
        right: 2%;
        @include sm {
          bottom: 4.5vw;
          right: 2%;
        }
      }
    }
    .htu-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      gap: 10px;
      .htu-button {
        border-radius: 9999px;
        border: solid 1px #333;
        background-color: white;
        padding: 3px 15px;
        user-select: none;
        transition: 0.15s;
        opacity: 0;
        &:hover {
          background-color: #333;
          cursor: pointer;
          color: white;
          transition: 0.15s;
        }
      }
      .active {
        opacity: 1;
      }
    }
    .htu-close-btn {
      margin-top: 20px;
      padding: 3px 0;
      width: 50%;
      text-align: center;
      border-radius: 9999px;
      background-color: white;
      border: solid 1px #ff5050;
      color: #ff5050;
      transition: 0.2s;
      &:hover {
        color: white;
        background-color: #ff5050;
        transition: 0.2s;
        cursor: pointer;
        user-select: none;
      }
    }
  }
}

.favo-clear {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #444444aa;
  z-index: 10;
  backdrop-filter: blur(10px);
  .clear-window {
    width: 650px;
    height: 230px;
    background-color: #fbefde;
    border-radius: 40px;
    font-family: "Zen Old Mincho", sans-serif;
    filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.3));
    .clear-text {
      display: flex;
      align-items: center;
      margin-top: 30px;
      margin-left: 40px;
      font-size: 26px;
      img {
        width: 100px;
        transform: rotateY(180deg);
        margin-right: 30px;
      }
    }
    .clear-buttons {
      display: flex;
      margin-top: 50px;
      margin-left: 300px;
      gap: 20px;
      #cancel,
      #clear {
        border-radius: 999999px;
        padding: 6px 15px;
        cursor: pointer;
        transition: 0.2s;
      }
      #cancel {
        background-color: white;
        border: solid 1px black;
        text-align: center;
      }
      #clear {
        background-color: #ff5050;
        color: white;
        text-align: center;
      }
      #cancel:hover {
        background-color: rgb(240, 240, 240);
        transition: 0.2s;
      }
      #clear:hover {
        background-color: #e04545;
        transition: 0.2s;
      }
    }
    @include md {
      width: 90%;
      max-width: 650px;
      height: 230px;
      padding: 20px 5px;
      .clear-text {
        margin: 0;
        flex-direction: column;
        align-items: center;
        font-size: min(5vw, 26px);
        img {
          width: 50px;
          margin: 0;
          margin-bottom: 30px;
          transform: rotateY(180deg);
          margin-right: 5vw;
        }
      }
      .clear-buttons {
        margin: 0;
        margin-top: 80px;
        display: flex;
        justify-content: center;
        gap: 20px;
        #cancel,
        #clear {
          border-radius: 999999px;
          padding: 8px 18px;
          cursor: pointer;
        }
      }
    }
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

.popUpHtUAnime-enter-active,
.popUpHtUAnime-leave-active {
  transition: 0.3s ease;
}
.popUpHtUAnime-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.popUpHtUAnime-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.popUpClearAnime-enter-active,
.popUpClearAnime-leave-active {
  transition: 0.3s ease;
}
.popUpClearAnime-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.popUpClearAnime-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.htu-favoAnime-enter-active {
  animation: popIn 0.3s forwards;
}
.htu-favoAnime-leave-active {
  animation: popOut 0.2s forwards;
}
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

@keyframes fuwa {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(0.9);
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
