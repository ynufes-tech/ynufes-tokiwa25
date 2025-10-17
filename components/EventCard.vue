<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  eventData: {
    id: number;
    e_name: string;
    o_name: string;
    displayPlace: string;
    genre: string;
    block: string;
  };
  favoriteEvents: string[];
}>();

const { eventData } = toRefs(props);

const isFavorite = computed(() => props.favoriteEvents.includes(eventData.id));
//const iconURL = `https://storage.googleapis.com/seiryo25-assets/icons/${props.eventData.id}.webp`
</script>

<template>
  <div class="event-card">
    <NuxtLink :to="`/events/${eventData.id}`" class="card-link">
      <img
        :src="`https://storage.ynu-fes.yokohama/images/icons/${eventData.id}.webp`"
        alt="event-img"
        class="icon-img"
        @error="
          if (!$event.target.dataset.fallbackApplied) {
            $event.target.dataset.fallbackApplied = '1';
            $event.target.src = 'https://storage.ynu-fes.yokohama/images/icons/NO_IMG.svg';
          }
        "
      />
    
    <div class="details">
      <p
        class="event-title"
        :class="{
          'long-title': eventData.e_name.length > 13,
          'very-long': eventData.e_name.length > 18,
        }"
      >
        {{ eventData.e_name }}
      </p>
      <p class="circle-name">{{ eventData.o_name }}</p>
      <p class="genre">{{ eventData.displayGenre }}</p>
      <div class="bottom">
        <div class="place">
          <img
            src="~/assets/images/eventcard-map-icon.svg"
            alt=""
            class="place-icon"
          />
          <p class="place-text">{{ eventData.displayPlace }}</p>
        </div>
        <div
          class="favorite"
          @click="$emit('toggle-favorite', eventData.id)"
          :class="{ favorited: props.favoriteEvents.includes(eventData.id) }"
        >
          <transition name="favoAnime">
            <img
              src="~/assets/images/favorite.svg"
              alt=""
              v-if="props.favoriteEvents.includes(eventData.id)"
              class="favorite"
            />
          </transition>
          <img src="~/assets/images/unfavorite.svg" class="unfavorite" alt="" />
        </div>
      </div>
    </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.event-card {
  margin: 0;
  width: 350px;
  max-width: 100%;
  font-family: "Zen Old Mincho";
  color: black;
  background-color: #fbefdea8;
  border-radius: 0 0 30px 30px;
  .card-link{
    text-decoration: none;
    color:black;
  }
  .icon-img {
    width: 100%;
    margin: 0;
  }
  .details {
    margin: 0;
    width: calc(100% - 36px);
    height: 180px;
    padding: 0 18px;
    @include md {
      padding: 0 9px;
    }
  }
  .event-title {
    margin-top: 11px;
    font-size: 22px;
    line-height: 30px;
    @include md {
      font-size: 18px;
      line-height: 18px;
    }
  }
  .circle-name {
    margin-top: 5px;
    font-size: 16px;
    line-height: 30px;
    @include md {
      font-size: 14px;
    }
  }
  .genre {
    margin-top: 12px;
    padding: 0 15px;
    display: inline-block;
    font-size: 15px;
    line-height: 30px;
    border: 1px solid black;
    border-radius: 99999999px;
  }
  .bottom {
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .place {
    display: flex;
    font-size: 16px;
    align-items: center;
    gap: 8px;
  }
  .favorite {
    z-index: 2;
    width: auto;
    cursor: pointer;
    position: relative;
    .favorite {
      position: absolute;
    }
  }
  .long-title {
    font-size: 19px;
    @include md {
      font-size: 15px;
    }
  }
  .very-long {
    font-size: 17px;
    @include md {
      font-size: 13px;
    }
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
