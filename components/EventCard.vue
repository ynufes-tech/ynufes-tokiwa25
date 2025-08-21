<script lang="ts" setup>
const props = defineProps<{
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
      <p class="event-title">タイトルタイトル</p>
      <p class="circle-name">サークルネームサークルネーム</p>
      <p class="genre">ジャンルジャンルジャンル</p>
      <div class="bottom">
        <div class="place">
          <img
            src="~/assets/images/eventcard-map-icon.svg"
            alt=""
            class="place-icon"
          />
          <p class="place-text">場所場所場所場所</p>
        </div>
        <div class="favorite">
          <img src="~/assets/images/favorite.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.event-card {
  margin: 0;
  width: 325px;
  font-family: "Zen Old Mincho";
  background-color: #fbefdea8;
  border-radius: 0 0 30px 30px;
  .icon-img {
    width: 100%;
    margin: 0;
  }
  .details {
    margin: 0;
    width: 100%;
    height: 180px;
    padding: 0 23px;
  }
  .event-title {
    margin-top: 11px;
    font-size: 24px;
    line-height: 30px;
  }
  .circle-name {
    margin-top: 5px;
    font-size: 16px;
    line-height: 30px;
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
  .bottom{
    margin-top: 15px;
    width:279px;//325 - 23*2
    display: flex;
    justify-content: space-between;
  }
  .place{
    display: flex;
    font-size:16px;
    align-items: center;
    gap: 8px;
  }
}
</style>
