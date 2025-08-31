<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ScheduleEventsCard from "~/components/ScheduleEventsCard.vue";
import SelectorButton from "~/components/SelectorButton.vue";
import { ref, computed } from "vue";

// 日付タブ
const dates = [
  { label: "10/31(金)", value: "1031" },
  { label: "11/1(土)", value: "1101" },
  { label: "11/2(日)", value: "1102" },
];
const selectedDate = ref("1031");

// 会場リスト
const venues = [
  "教育学部棟\n6・7号館の間",
  "学生センター\nウッドデッキ",
  "経済・経営\n学部棟の間",
  "大学会館\n4Fホール",
  "野外音楽堂",
];

// 選択中の会場（md以下で使用）
const selectedVenue = ref(0);

// 仮のイベントデータ
const allEvents = [
  {
    date: "1031",
    venue: 0,
    title: "Liz2025",
    subtitle: "ダンス",
    start: "13:00",
    end: "14:00",
  },
  {
    date: "1031",
    venue: 3,
    title: "Liz2025",
    subtitle: "漫才",
    start: "13:00",
    end: "14:00",
  },
  {
    date: "1101",
    venue: 2,
    title: "Liz2025",
    subtitle: "演劇",
    start: "09:30",
    end: "10:30",
  },
  {
    date: "1101",
    venue: 3,
    title: "Liz2025",
    subtitle: "ダンス",
    start: "13:00",
    end: "14:00",
  },
  {
    date: "1102",
    venue: 4,
    title: "Liz2025",
    subtitle: "合唱",
    start: "09:00",
    end: "10:00",
  },
];

// 日ごとの時間範囲
const dateTimeRanges: Record<string, { start: string; end: string }> = {
  "1031": { start: "13:00", end: "20:30" },
  "1101": { start: "09:00", end: "20:30" },
  "1102": { start: "09:00", end: "15:00" },
};

// 定数
const HOUR_PX = 200; // 1h = 200px

// ユーティリティ
const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

// 選択日の開始/終了
const startMin = computed(() =>
  toMin(dateTimeRanges[selectedDate.value].start)
);
const endMin = computed(() => toMin(dateTimeRanges[selectedDate.value].end));
const totalMin = computed(() => endMin.value - startMin.value);
const pxPerMin = computed(() => HOUR_PX / 60);

// 時間ラベル
const hoursList = computed(() => {
  const list: string[] = [];
  for (let t = startMin.value; t <= endMin.value; t += 60) {
    const h = Math.floor(t / 60)
      .toString()
      .padStart(2, "0");
    list.push(`${h}:00`);
  }
  return list;
});

// イベント
const dayEvents = computed(() =>
  allEvents.filter((e) => e.date === selectedDate.value)
);

// 会場ごとのイベント（位置計算付き）
const columnEvents = (idx: number) =>
  dayEvents.value
    .filter((e) => e.venue === idx)
    .map((e) => {
      const top = (toMin(e.start) - startMin.value) * pxPerMin.value;
      const height = (toMin(e.end) - toMin(e.start)) * pxPerMin.value;
      return { ...e, top, height };
    });
</script>

<template>
  <div class="page-root">
    <PageTitle title="タイムスケジュール" />

    <!-- 日付ボタン -->
    <div class="date-tabs">
      <div
        v-for="d in dates"
        :key="d.value"
        class="date-btn"
        :class="{ active: selectedDate === d.value }"
        @click="selectedDate = d.value"
      >
        <a href="javascript:void(0)" class="link-hover">
          <p class="text">{{ d.label }}</p>
        </a>
        <a href="javascript:void(0)" class="link">
          <p class="text">{{ d.label }}</p>
        </a>
      </div>
    </div>

    <!-- スケジュール全体 -->
    <div
      class="grid-wrap"
      :style="{
        '--board-h': `${totalMin * pxPerMin}px`,
        '--venue-count': venues.length
      } as any"
    >
      <!-- PC: ヘッダー -->
      <div class="header-row">
        <div class="time-rail-header"></div>
        <div class="venue-row">
          <div
            v-for="(v, i) in venues"
            :key="i"
            class="venue-chip"
            v-html="v.replace(/\n/g, '<br/>')"
          />
        </div>
      </div>

      <!-- md以下: 会場セレクター -->
      <SelectorButton :options="venues" v-model="selectedVenue" />

      <!-- 本体（時間＋イベント） -->
      <div class="body-row">
        <!-- 左：時間レール -->
        <div class="time-rail">
          <div
            v-for="(h, i) in hoursList"
            :key="h"
            class="time-label"
            :style="{ top: `${i * HOUR_PX - 8}px` }"
          >
            {{ h }}
          </div>
        </div>

        <!-- 背景ライン -->
        <div class="line-layer">
          <template v-for="(h, i) in hoursList" :key="`line-${h}`">
            <div class="hour-line solid" :style="{ top: `${i * HOUR_PX}px` }" />
            <div
              v-if="i < hoursList.length - 1"
              class="hour-line dashed"
              :style="{ top: `${i * HOUR_PX + HOUR_PX / 2}px` }"
            />
          </template>
        </div>

        <!-- 右：会場ごとの列 -->
        <div class="cols">
          <div
            v-for="(v, idx) in venues"
            :key="idx"
            class="col"
            :class="{ hiddenOnMobile: selectedVenue !== idx }"
          >
            <ScheduleEventsCard
              v-for="(ev, j) in columnEvents(idx)"
              :key="j"
              :event="ev"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root {
  padding: 0 40px;
}

/* 日付ボタン */
.date-tabs {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 18px;

  @include sm {
    gap: 5px;
    margin-bottom: 30px;
  }

  .date-btn {
    position: relative;
    margin-bottom: 5vh;
    &.active {
      .link {
        opacity: 0;
      }
    }
    .link,
    .link-hover {
      text-decoration: none;
      padding: 8px 8px;
      border: 3px solid transparent;
      border-radius: 999999px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      transition: 0.25s;
      filter: drop-shadow(0 2px 3px rgba(255, 255, 255, 0.5));
      p {
        margin: 1px 5vw;
        font-size: 18px;
        font-family: "Zen Old Mincho", sans-serif;
        @include md {
          font-size: 15px;
          margin: 1px 3vw;
        }
      }
    }
    .link {
      background: linear-gradient(white, white) padding-box,
        linear-gradient(to right, #fff050, #ffd633) border-box;
      background-clip: padding-box, border-box;
      p {
        color: #000;
      }
    }
    .link-hover {
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, #ff7621, #e87c08, #e96759)
          padding-box,
        linear-gradient(to right, #fff050, #ffd633) border-box;
      background-clip: padding-box, border-box;
      p {
        color: white;
      }
    }
    .link:hover {
      opacity: 0;
    }
  }
}

/* ===== 全体レイアウト ===== */
.grid-wrap {
  /* 上:ヘッダー, 下:本体 は縦方向のフレックス */
  display: flex;
  flex-direction: column;
  min-height: var(--board-h);
}

/* PC: ヘッダー */
.header-row {
  display: grid;
  grid-template-columns: 60px 1fr;
  margin-bottom: 10px;
  @include md {
    display: none;
  } /* md以下は非表示 */
}

.time-rail-header {
  width: 60px;
}

.venue-row {
  grid-column: 2 / -1; /* ← 右側全幅で受ける */
  display: grid;
  grid-template-columns: repeat(var(--venue-count), 1fr);
  gap: 15px;

  @include md {
    grid-template-columns: repeat(var(--venue-count), minmax(120px, 1fr));
    gap: 5px;
  }

  .venue-chip {
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 0;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    line-height: 1.4;
    white-space: pre-line;
  }
}

/* 本体は [60px(時間)] + [1fr(ボード)] の2カラムグリッド */
.body-row {
  display: grid;
  grid-template-columns: 60px 1fr;
  position: relative;
  @include md {
    font-size: 14px;
    right: 6px;
  }
}

.time-rail {
  position: relative;
  width: 60px;
  @include md {
    width: 40px;
  }
}
.time-label {
  position: absolute;
  right: 10px;
  font-size: 20px;
  color: #fff;

  @include md {
    font-size: 16px;
    right: 5px;
  }
}

.line-layer {
  position: absolute;
  inset: 0;
  margin-left: 60px;
  .hour-line {
    position: absolute;
    left: 0;
    right: 0;
    &.solid {
      border-top: 2px solid rgba(255, 255, 255, 0.9);
    }
    &.dashed {
      border-top: 1.5px dashed rgba(255, 255, 255, 0.6);
    }
  }
}

.cols {
  grid-column: 2 / -1;
  display: grid;
  grid-template-columns: repeat(var(--venue-count), 1fr);
  gap: 8px;
  position: relative;
  z-index: 2;

  @include md {
    grid-template-columns: 1fr; /* md以下は1列だけ */
    .col.hiddenOnMobile {
      display: none;
    }
  }

  .col {
    position: relative;
    min-height: var(--board-h);
  }
}
</style>
