<script lang="ts" setup>
import { ref, onMounted } from "vue";

const openDropdown = ref<string | null>(null);

const toggleDropdown = (menu: string) => {
  openDropdown.value = openDropdown.value === menu ? null : menu;
};

onMounted(() => {
  document.addEventListener("click", (event) => {
    const dropdowns = document.querySelectorAll(".dropdown");
    let clickedInside = false;

    dropdowns.forEach((dropdown) => {
      if (dropdown.contains(event.target as Node)) {
        clickedInside = true;
      }
    });

    if (!clickedInside) {
      openDropdown.value = null;
    }
  });
});
import { ref } from "vue";

// ✅ 画像を確実にimport（これが一番安全！）
import image1 from "assets/images/kamome-button1.PNG";
import image2 from "assets/images/kamome-button2.PNG";

// 初期状態（表示される画像）
const currentImage = ref(image1);
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
          <NuxtLink class="kamome-button" to="/kamome">
            <img
              :src="currentImage"
              alt="かもめ"
              @mouseover="currentImage = image2"
              @mouseout="currentImage = image1"
              class="kamome-button-image"
            />
          </NuxtLink>
        </div>
        <div class="right">
          <span class="divider"></span>

          <!-- ご案内 -->
          <div class="dropdown" @click="toggleDropdown('guide')">
            <span class="nav-label">ご案内</span>
            <div
              class="dropdown-menu-1"
              :class="{ open: openDropdown === 'guide' }"
            >
              <NuxtLink to="/news" class="dropdown-item">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                おしらせ</NuxtLink
              >
              <NuxtLink to="/map" class="dropdown-item">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                キャンパスマップ</NuxtLink
              >
              <NuxtLink to="/pamphlet" class="dropdown-item">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                パンフレット</NuxtLink
              >
              <NuxtLink to="/access" class="dropdown-item">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                大学までのアクセス</NuxtLink
              >
              <NuxtLink to="/contact" class="dropdown-item">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                お問い合わせ</NuxtLink
              >
              <NuxtLink to="/faq" class="dropdown-item">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                よくあるご質問</NuxtLink
              >
              <NuxtLink to="/about-us" class="dropdown-item">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                大学祭実行委員会について</NuxtLink
              >
              <NuxtLink to="/sponsors" class="dropdown-item">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                ご協賛企業一覧</NuxtLink
              >
            </div>
          </div>

          <span class="divider"></span>

          <!-- 企画一覧 -->
          <div class="dropdown" @click="toggleDropdown('events')">
            <span class="nav-label">企画一覧</span>
            <div
              class="dropdown-menu"
              :class="{ open: openDropdown === 'events' }"
            >
              <NuxtLink to="/idol" class="dropdown-item">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                アイドルステージ</NuxtLink
              >
              <NuxtLink to="/guest" class="dropdown-item">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                ゲスト</NuxtLink
              >
              <NuxtLink to="/events" class="dropdown-item">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                企画一覧</NuxtLink
              >
              <NuxtLink to="/official" class="dropdown-item">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                本部企画一覧</NuxtLink
              >
              <NuxtLink to="/schedule" class="dropdown-item">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                タイムスケジュール</NuxtLink
              >
              <NuxtLink to="/contest" class="dropdown-item idol">
                <img
                  src="~/assets/images/momiji.svg"
                  alt="momiji"
                  class="momiji"
                />
                企画コンテスト</NuxtLink
              >
            </div>
          </div>

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
    justify-content: space-between;
    align-items: center;
  }

  .header-img {
    width: 10rem;

    @include md {
      width: 7rem;
    }
    @include sm {
      width: 5rem;
    }
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .kamome-button {
      margin-left: 50px;
      @include sm {
        margin-left: 0px;
      }
    }
    .kamome-button-image {
      width: 70px;
      height: auto;
      @include sm {
        width: 40px;
        height: auto;
      }
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
      gap: 4px;
    }

    .nav-link {
      text-decoration: none;
      color: inherit;
      transition: color 0.2s ease;
      @media screen and (width <= 340px) {
        font-size: 10px;
      }
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

    .momiji {
      width: 35px;
      @include sm {
        width: 25px;
      }
    }

    .dropdown {
      position: relative;

      .nav-label {
        cursor: pointer;
      }

      .dropdown-menu {
        position: absolute;
        top: calc(100% + 12px);
        left: -1vw;
        background: rgba(255, 236, 184, 0.7);
        min-width: 280px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        border-radius: 6px;
        padding: 8px 0;
        display: none;
        opacity: 0;
        transition: opacity 0.2s ease;
        z-index: 10001;
        @include md {
          min-width: 240px;
        }
        @include sm {
          min-width: 190px;
          //right: -100px;
          left: -10vw;
        }
        .idol {
          @include sm {
            min-width: 10px;
          }
        }

        .dropdown-item {
          display: block;
          padding: 12px 2px;
          color: #333;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: normal;
          @include sm {
            font-size: 0.9rem;
            padding: 8px 0px;
          }

          &:hover {
            background: linear-gradient(
              90deg,
              rgba(255, 118, 33, 0.5) 0%,
              rgba(232, 124, 8, 0.5) 47%,
              rgba(233, 103, 89, 0.5) 90%
            );
          }

          @include md {
            font-size: 1rem;
          }
        }
      }
      .dropdown-menu-1 {
        position: absolute;
        top: calc(100% + 12px);
        left: -1vw;
        background: rgba(255, 236, 184, 0.7);
        min-width: 280px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        border-radius: 6px;
        padding: 8px 0;
        display: none;
        opacity: 0;
        transition: opacity 0.2s ease;
        z-index: 10001;
        @include md {
          min-width: 240px;
        }
        @include sm {
          min-width: 230px;
          //right: -100px;
          left: -10vw;
        }
      }

      .dropdown-item {
        display: block;
        padding: 12px 2px;
        color: #333;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: normal;
        @include sm {
          font-size: 0.9rem;
          padding: 8px 0px;
        }

        &:hover {
          background: linear-gradient(
            90deg,
            rgba(255, 118, 33, 0.5) 0%,
            rgba(232, 124, 8, 0.5) 47%,
            rgba(233, 103, 89, 0.5) 90%
          );
        }

        @include md {
          font-size: 1rem;
        }
      }
      .dropdown-menu-1.open {
        display: block;
        opacity: 1;
        padding: 0;
      }
    }

    /* PC hoverで開く */
    // &:hover .dropdown-menu {
    //   display: block;
    //   opacity: 1;

    //   @include sm {
    //     display: none;
    //   }
    // }

    /* SPでクリックした時 */
    .dropdown-menu.open {
      display: block;
      opacity: 1;
      padding: 0;
    }
    .dropdown-menu-1.open {
      display: block;
      opacity: 1;
      padding: 0;
    }
  }
}
</style>
