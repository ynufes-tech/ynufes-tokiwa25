<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="component-root">
    <a :href="link" class="link-hover">
      <p class="text">{{ text }}</p>
      <img src="@/assets/images/linkbutton_arrow_hover.svg" />
    </a>

    <a :href="link" class="link">
      <p class="text">{{ text }}</p>
      <img src="@/assets/images/linkbutton_arrow.svg" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.component-root {
  margin: 0;
  display: inline-block;
  position: relative;
}
.link,
.link-hover {
  padding: 8px 8px;
  opacity: 1;
  inset: 0;
  border: 4px solid transparent;
  border-radius: 999999px;
  transition: 0.25s;
  display: inline-flex;
  text-decoration: none;
  align-items: center;
  justify-content: space-around;
  filter: drop-shadow(0px 2px 3px rgba(255, 255, 255, 0.5));
  p {
    margin-left: 20px;
    font-size: 23px;
    @include md {
      font-size: 15px;
    }
    font-family: "Zen Old Mincho", sans-serif;
  }
  img {
    width: 15px;
    margin-right: 10px;
    margin-left: 15px;
  }
}

.link {
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #fff050, #ffd633) border-box;//枠
  background-clip: padding-box, border-box;
  p {
    color: #f97d47;
  }
  img {
    filter: drop-shadow(4px 4px 4px #f97d47);
  }
}

.link-hover {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #ff7621, #e87c08, #e96759) padding-box,
    linear-gradient(to right, #fff050, #ffd633) border-box;//枠
  background-clip: padding-box, border-box;
  p {
    color: white;
  }
  img {
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.4));
  }
}

.link:hover {
  opacity: 0;
}
</style>
