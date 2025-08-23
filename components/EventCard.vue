<script setup lang="ts">
import cookies from "vue-cookies";
const favoriteEvents = ref(cookies.get("favoriteEvents") || []);
const { eventData } = defineProps<{
  eventData: {
    id: number;
    e_name: string;
    o_name: string;
    place: string;
    genre: string;
    block: string;
  };
}>();

//const iconURL = `https://storage.googleapis.com/seiryo25-assets/icons/${props.eventData.id}.webp`
</script>

<template>
  <div class="event-card">
    <img src="~/assets/images/test-icon.webp" alt="" class="icon-img" />
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
        <div class="favorite">
          <img src="~/assets/images/favorite.svg" alt="" />
        </div>
      </div>
    </div>
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
</style>
