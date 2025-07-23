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
  //width: 320px;
  margin: 0 auto;
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
    img {
      transition: all 0.2s ease-in-out;
      aspect-ratio: 1;
      margin:0 20px;
      @include md {
          margin:2px;
        }
    }
    #sns-x {
      img {
        width: 40px;
        @include md {
          width: 25px;
        }
      }
    }

    #sns-ins {
      img {
        width: 40px;
        @include md {
          width: 25px;
        }
      }
    }

  }
}
</style>
