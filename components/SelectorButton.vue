<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps<{
  modelValue: number; // 選択中のインデックス
  options: string[]; // リスト
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const open = ref(false);
const selectorRef = ref<HTMLElement | null>(null);

const handleClickOutside = (e: MouseEvent) => {
  if (selectorRef.value && !selectorRef.value.contains(e.target as Node)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const selectVenue = (i: number) => {
  emit("update:modelValue", i);
  open.value = false;
};
</script>

<template>
  <div class="venue-selector" ref="selectorRef">
    <button class="selector-btn" :class="{ open }" @click="open = !open">
      {{ options[modelValue].replace(/\n/g, " ") }}
    </button>
    <ul v-if="open" class="selector-menu">
      <li
        v-for="(v, i) in options"
        :key="i"
        @click="selectVenue(i)"
        class="menu-item"
      >
        <span>{{ v.replace(/\n/g, " ") }}</span>
        <span v-if="modelValue === i" class="checkmark">✓</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;

.venue-selector {
  display: none;
  position: relative;
  text-align: right;

  .selector-btn {
    font-family: "Kaisei Decol", sans-serif;
    font-size: 17px;
    padding: 6px 12px;
    border-radius: 12px;
    border: 2px solid transparent;
    background: linear-gradient(to right, #ff7621, #e87c08, #e96759) padding-box,
      linear-gradient(to right, #fff050, #ffd633) border-box;
    color: #fff;
    cursor: pointer;
    width: 265px;
    text-align: left;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: 10px;
      top: 50%;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #fff;
      transform: translateY(-50%);
      transition: 0.25s;
    }
    &.open::after {
      transform: translateY(-50%) rotate(180deg);
    }
  }

  .selector-menu {
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 6px;
    background: #fff;
    border-radius: 12px;
    padding: 6px 0;
    list-style: none;
    min-width: 200px;
    z-index: 100;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .menu-item {
    font-size: 17px;
    font-family: "Kaisei Decol", sans-serif;
    padding: 11px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @include sm {
      font-size: 15px;
      padding: 9px 10px;
    }
  }

  .checkmark {
    color: #ff7d47;
    font-weight: bold;
    margin-left: 5px;
  }

  @media screen and (max-width: 825px) {
    display: block;
    margin-bottom: 20px;
  }
}
</style>
