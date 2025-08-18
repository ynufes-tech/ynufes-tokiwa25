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
    <div class="LinkButtonComponent">
      <a :href="link" class="link">
        <p class="text">{{ text }}</p>
        <img src="@/assets/images/linkbutton_arrow.svg" />
      </a>
    </div>

    <div class="LinkButtonComponent-hover">
      <a :href="link" class="link">
        <p class="text">{{ text }}</p>
        <img src="@/assets/images/linkbutton_arrow_hover.svg" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.component-root {
  margin: 0;
  height: 50px;
  width: 250px;
  position: relative;
}
.LinkButtonComponent {
  opacity: 1;
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  border: 4px solid transparent;
  border-radius: 999999px;
  background: linear-gradient(white, white) padding-box,
    //枠つけるため
    linear-gradient(to right, #fff050, #ffd633) border-box;
  background-clip: padding-box, border-box;
  filter: drop-shadow(0px 2px 3px rgba(255, 255, 255, 0.5));
  transition: 0.25s;
  .link {
    display: flex;
    text-decoration: none;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    p {
      margin-left: 20px;
      font-size: 23px;
      @include md{
        font-size: 15px;
      }
      color: #f97d47;
      font-family: "Zen Old Mincho", sans-serif;
      transition: 0.3s;
    }
    img {
      width: 20px;
      margin-right: 10px;
      filter: drop-shadow(4px 4px 4px #f97d47);
      position: relative;
      transition: 0.3s;
      transition: 0.3s;
    }
    @include sm {
      p {
        font-size: 15px;
      }
    }
  }
}

.LinkButtonComponent-hover {
  opacity: 0;
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  border: 4px solid transparent;
  border-radius: 999999px;
  background: linear-gradient(to right, #ff7621, #e87c08, #e96759) padding-box,
    //枠つけるため
    linear-gradient(to right, #fff050, #ffd633) border-box;
  background-clip: padding-box, border-box;
  transition: 0.25s;
  .link {
    display: flex;
    text-decoration: none;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    p {
      margin-left: 20px;
      font-size: 23px;
      color: white;
      font-family: "Zen Old Mincho", sans-serif;
    }
    img {
      filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.4));
      width: 20px;
      margin-right: 10px;
    }
    @include sm {
      p {
        font-size: 15px;
      }
    }
  }
}

.LinkButtonComponent:hover {
  opacity: 0;
}
.LinkButtonComponent-hover:hover {
  opacity: 1;
}
</style>
