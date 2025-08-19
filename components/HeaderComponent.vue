<script lang="ts" setup>
const showHeader = ref(true);
</script>

<template>
  <div class="header-component">
    <div class="header-frame">
      <div class="header-content">
        <div class="left">
          <NuxtLink class="header-icon" to="/">
            <img
              src="~/assets/images/tokiwa_logo.svg"
              class="header-img"
              alt="ロゴ"
            />
          </NuxtLink>
        </div>
        <div class="right">
          <span class="divider"></span>
          <div class="dropdown">
            <span class="nav-label">ご案内</span>
            <div class="dropdown-menu">
              <NuxtLink to="/access" class="dropdown-item">大学までのアクセス</NuxtLink>
              <NuxtLink to="/contact" class="dropdown-item">お問い合わせ</NuxtLink>
            </div>
          </div>
          <span class="divider"></span>
          <NuxtLink to="/events" class="nav-link">企画一覧</NuxtLink>
          <span class="divider"></span>
          <NuxtLink to="/about" class="nav-link">常盤祭について</NuxtLink>
          <span class="divider"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.header-component {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
}

.header-frame {
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px 55px 1px;
  background-color: rgba(255, 255, 255, 0.2);
  .gradation {
    background-image: linear-gradient(
    90deg,
    #fce8e8,
    #fdeeee 30%,
    #ea2020 80%
   );
  }
  box-shadow: 0 2px 8px rgba(1, 1, 1, 0.1);
  backdrop-filter: blur(8px);

  @include md {
    padding: 6px 22px 1px;
  }

  @include sm {
    padding: 5px 15px 1px;
  }

  .header-content {
    width: 100%;
    display: flex;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
  }

  .header-img {
    display: flex;
    text-decoration: none;
    width: 10rem;

    @include md {
      width: 7rem;
    }
    @include sm {
      width: 5rem;
    }
    > img {
      margin-right: 20px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    color: #333;

    @include md {
      font-size: 1rem;
    }

    @include sm {
      font-size: 0.8rem;
    }

    .nav-link {
      text-decoration: none;
      color: inherit;
      transition: color 0.2s ease;
    }
    .divider {
      width: 1.8px;
      height: 2.5em;
      background-color: #333;
      margin: 0 12px;
      display: inline-block;

      @include sm {
        margin: 0 4px;
      }
    }
    .dropdown {
      position: relative;

      .dropdown-menu {
        position: absolute;
        top: calc(100% + 35px);
        left: -2vw;
        background: rgba(255, 255, 255, 0.65);
        min-width: 250px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        border-radius: 6px;
        padding: 8px 0;
        display: none;
        transition: opacity 0.2s ease;
        z-index: 10001;

        @include md {
          min-width: 200px;
          left: -1vw;
        }
      }

      &:hover .dropdown-menu {
        display: block;
        opacity: 1;
      }

      .dropdown-item {
        display: block;
        padding: 15px 12px;
        color: #333;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: normal;

        &:hover {
          background: linear-gradient(90deg,rgba(255, 118, 33, 0.5) 0%, rgba(232, 124, 8, 0.5) 47%, rgba(233, 103, 89, 0.5) 90%);
        }

        @include md {
          font-size: 1.0rem;
        }
      }
    }
  }
}
</style>
