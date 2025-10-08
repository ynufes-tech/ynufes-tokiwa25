<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div
    class="event-filter-button"
    :class="{ active: modelValue }"
    @click="$emit('update:modelValue', !modelValue)"
  >
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.event-filter-button {
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
.active.event-filter-button {
  background: linear-gradient(to right, #ff7621, #e87c08, #e96759);
  color: white;
  opacity: 1;
}
</style>
