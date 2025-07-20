<script lang="ts" setup></script>

<template>
  <div class="sns-area">
    <div class="sns-field">
      <a
        id="sns-x"
        href="https://x.com/ynu_fes"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="x" src="~/assets/images/X_logo.svg" />
      </a>
      <a
        id="sns-ins"
        href="https://www.instagram.com/ynu_fes"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="instagram" src="~/assets/images/Ins_logo.svg" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.sns-area {
  width: 320px;
  margin: 5rem auto;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: fit-content;
    text-align: center;
    font-size: 32px;
    margin-bottom: 30px;
  }
  .sns-field {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5px auto;
    gap: 30px;
    margin-bottom: 30px;
    img {
      transition: all 0.2s ease-in-out;
      aspect-ratio: 1;
    }
    #sns-f img {
      width: 55px;
      @include md {
        width: 40px;
      }
    }
    #sns-x {
      width: 60px;
      height: 65px;
      margin: 2.5px;
      @include md {
        width: 50px;
        height: 55px;
      }
      img {
        width: 45px;
        padding: 10px;
        @include md {
          width: 35px;
        }
      }
    }
    #sns-ins {
      width: 60px;
      img {
        width: 50px;
        padding: 5px;
        @include md {
          width: 35px;
        }
      }
    }
  }
}
</style>
