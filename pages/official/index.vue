<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import officialEvents from "~/public/officialEvents.json";

useHead({
  title: "Official | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "本部企画一覧" }],
});

// Object.entriesで会場ごとに展開する
const venues = Object.entries(officialEvents);
</script>

<template>
  <div class="page-root">
    <PageTitle title="本部企画一覧" />
    <div class="content-wrapper">
      <p class="message">
        このページでは、本部である大学祭実行委員会が主催する企画だけをpick
        upして紹介します！
      </p>
      <div
        v-for="[venueName, events] in venues"
        :key="venueName"
        class="venue-block"
      >
        <h2 class="venue-title">{{ venueName }}</h2>
        <div class="cards">
          <div class="card" v-for="Event in events">
            <h3 class="card-title">{{ `${Event.title}` }}</h3>
            <div class="card-content">
              <div class="card-image">
                <img :src="Event.image" :alt="Event.title" />
              </div>
              <div class="card-texts">
                <p class="card-text">{{ Event.description }}</p>
                <p class="card-text date" v-if="Event.date">{{ Event.date }}</p>
                <p class="card-text rain" v-if="Event.rainyplan">{{Event.rainyplan}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-root {
  font-family: "Zen Old Mincho", sans-serif;
}
.content-wrapper {
  padding: 0 10px;
  margin: 0 auto;
  max-width: 1920px;
}
.message {
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0 20px;
}
.venue-title {
  font-family: "Kaisei Decol", sans-serif;
  font-size: 2rem;
  margin: 7rem 0 4rem;
  text-align: center;
  color: white;
  @include sm {
    font-size: 1.5rem;
    margin: 5rem 0 1rem;
  }
}
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px 70px;
  justify-content: center;
  padding: 0 5%;
  @include xl {
    padding: 0 3%;
    gap: 40px 40px;
  }
  @include lg {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
}
.card {
  background: rgba(251, 234, 222, 0.6);
  border-radius: 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: 0.1s;
}
.card:hover {
  background: rgba(251, 234, 222, 0.7);
  transition: 0.1s;
  cursor: pointer;
}
.card-title {
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}
.card-texts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  white-space: pre-line;
  .date {
    font-size: 14px;
    @include sm {
      font-size: 13px;
    }
  }
}
.card-content {
  display: flex;
  gap: 1rem;
  align-items: center;
  @include md {
    flex-direction: column;
  }
}
.card-image {
  width: 170px;
  height: 170px;
  background: #ddd;
  border-radius: 8px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @include sm {
    width: 150px;
    height: 150px;
  }
}
.card-text {
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.5;
  @include lg {
    margin-top: 20px;
  }
  @include sm {
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
