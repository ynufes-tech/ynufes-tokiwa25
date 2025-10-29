<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const appConfig = useAppConfig();

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 3000,
  transition: 1000,
  breakpointMode: "carousel",
  breakpoints: {
    500: {
      itemsToShow: 2,
      snapAlign: "center",
    },
    1000: {
      itemsToShow: 3,
      snapAlign: "center",
    },
  },
};

const cardArray = [
  { title: "owarai", link: "/guest" },
  { title: "kikakuOne", link: "/contest" },
  {
    title: "ReSelf",
    link: "https://miscolle.com/ynu2025?fbclid=PAZXh0bgNhZW0CMTEAAae7yj3RWqKBYq6Yt0ag-Y_Rp0ma_GFF3Y82-KHuErftU1pyJPtNfg5_soo8SQ_aem_4iZxohvgJJQOgNVCMBCq5w",
  },
  { title: "mome", link: "/kamome" },
];
</script>

<template>
  <div class="carousel-root">
    <Carousel v-bind="carouselConfig">
      <Slide v-for="card in cardArray" :key="card">
        <a :href="`${card.link}`">
          <img
            :src="`${appConfig.baseURL}images/feature/${card.title}.webp`"
            class="card-img"
            alt=""
          />
        </a>
      </Slide>

      <template #addons>
        <Navigation class="navigation" />
        <Pagination class="pagination" />
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.carousel-root {
  .card-img {
    width: 80%;
  }
  .carousel__slide--active {
    opacity: 1;
    transition: 0.3s ease-out;
    transform: scale(1);
  }
  .carousel__slide--next,
  .carousel__slide--prev {
    opacity: 0.75;
    transform: scale(0.9);
    transition: 0.3s ease-out;
  }
  .carousel__pagination {
    --vc-pgn-active-color: rgb(236, 119, 119);
    --vc-pgn-background-color: white;
    --vc-pgn-height: 10px;
    --vc-pgn-width: 10px;
    --vc-pgn-border-radius: 100%;
    --vc-pgn-gap: 15px;
    --vc-png-bottom: 0;
  }
}
</style>
