<script lang="ts" setup>
import events from "public/test-events.json";
import EventCard from "~/components/EventCard.vue";
useHead({
  title: "Events | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "企画一覧" }],
});
</script>

<template>
  <div class="page-root">
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
.page-root{
  padding: 100px 100px;
  @include md{
    padding: 50px 5%;
  }
}
.cards-holder{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:50px;
}
.events-elements {
  text-decoration: none;
  max-width: 90%;
}
</style>
