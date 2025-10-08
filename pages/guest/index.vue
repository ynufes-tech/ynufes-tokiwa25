<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
useHead({
  title: "Guest | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "ゲスト企画ダンビラムーチョ×やさしいズはこちらから！" }],
});
</script>

<template>
  <div class="page-root">
    <PageTitle 
    class="title-overwrite"
    title="笑いの紅葉、大高揚！
    ダンビラムーチョ×やさしいズ" 
    />
    <div class="page-container">
      <div class="guest-info">
        <div class="sub-title">
          <img src="/assets/images/momiji.svg" alt="紅葉" class="momiji" />
          <p>出演</p>
        </div>
        <div class="guest-detail">
          <div class="guest-picture">
            <img
              src="/assets/images/danbiramucho.webp"
              alt="ダンビラムーチョ"
            />
            <p>ダンビラムーチョ</p>
          </div>
          <div class="guest-picture">
            <img src="/assets/images/yasashizu.webp" alt="やさしいズ" />
            <p>やさしいズ</p>
          </div>
        </div>
        <div class="about">
          <div class="explanation sub-title">
            <p>企画説明</p>
          </div>
          <ContentBox id="contentbox">
            今年はダンビラムーチョとやさしいズが横国に！<br />
            爆笑ネタと白熱コーナーで最高の1時間を楽しもう！
          </ContentBox>
        </div>
      </div>
      <div class="box">
        <div class="sub-title">
          <img src="/assets/images/momiji.svg" alt="紅葉" class="momiji" />
          <p>日時</p>
        </div>
        <p>2025年11月1日(土)</p>
        <p>15:00~16:00</p>
        <p>（開場 14:15 予定）</p>
      </div>
      <div class="box">
        <div class="sub-title">
          <img src="/assets/images/momiji.svg" alt="紅葉" class="momiji" />
          <p>会場</p>
        </div>
        <p>経営学部棟２号館109教室特設ステージ</p>
      </div>
      <div class="box ticket-info">
        <div class="sub-title">
          <img src="/assets/images/momiji.svg" alt="紅葉" class="momiji" />
          <p>チケット情報</p>
        </div>
        <ContentBox id="contentbox">
          事前予約制<br />
          予約方法：チケット予約サイトe+より<br />
          <a href="https://eplus.jp/sf/detail/4406450001-P0030001" target="_blank" rel="noopener noreferrer">
            https://eplus.jp/sf/detail/4406450001-P0030001
          </a><br />
          料金：1300円<br />
          座席：完全指定席<br />
        </ContentBox>
      </div>
      <div class="box caution">
        <div class="sub-title">
          <img src="/assets/images/momiji.svg" alt="紅葉" class="momiji" />
          <p>注意事項</p>
        </div>
        <p>
          ※1 出演者・企画内容について、予告なく変更・中止になる場合がございます。予めご了承くださいませ。<br />
          ※2 中止の場合、チケットに関しまして返金対応いたします。<br />
          ※3
          参加の際、持ち物検査等安全に関わるお願いに従っていただけない場合、参加をお断りする場合がございます。内容につきましてはチケット購入ページをご覧ください。<br />
          ※4
          お問い合わせにつきましては当該HPでは対応いたしかねます。ynu25kikaku@gmail.comまでお問い合わせお願いいたします。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.title-overwrite :deep(h1) {
  text-align: center;
  white-space: pre-line;
}

.page-container {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10vw;

  @include md {
    padding: 0 6vw;
  }
  @include sm {
    padding: 0 4vw;
  }
}

.sub-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6em;
  margin-right: 45px;

  .momiji {
    width: 80px;
    height: auto;
    margin-right: 8px;

    @include md {
      width: 50px;
    }
    @include sm {
      width: 30px;
    }
  }

  @include md {
    font-size: 1.5em;
  }
  @include sm {
    font-size: 1.4em;
  }
}

.guest-info {
  text-align: center;

  .guest-detail {
    display: flex;
    justify-content: center;
    gap: 6vw;
    margin-top: 24px;

    @include md {
      flex-direction: column;
      gap: 40px;
    }
    @include sm {
      flex-direction: column;
      gap: 28px;
    }

    .guest-picture {
      text-align: center;

      img {
        width: 350px;
        height: auto;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

        @include md {
          width: 45vw;
        }
        @include sm {
          width: 76vw;
        }
      }

      p {
        margin-top: 20px;
        font-size: 1.3em;

        @include md {
          font-size: 1.2em;
        }
      }
    }
  }
}

.explanation {
  margin: 0;
}

.about {
  margin-top: 20vh;

  @include md {
    margin-top: 8rem;
  }
  @include sm {
    margin-top: 5rem;
  }
}

#contentbox {
  width: fit-content;
  margin-top: 20px;
  padding: 70px 100px;
  color: #333;
  font-size: 1.1em;
  line-height: 1.8;

  @include md {
    padding: 30px 50px;
    font-size: 1em;
  }
  @include sm {
    padding: 20px 20px;
    font-size: 0.9em;
    line-height: 1.4;
  }
}

.ticket-info {
  margin-bottom: 40px;

  #contentbox {
    text-align: left;
  }
}

.caution {
  margin-bottom: 80px;

  p {
    font-size: 0.9em;
    margin-top: 20px;
    line-height: 1.4;
    text-align: left;

    @include sm {
      font-size: 0.85em;
    }
  }
}

.box {
  margin-top: 15vh;
  text-align: center;

  @include md {
    margin-top: 8rem;
  }
  @include sm {
    margin-top: 5rem;
  }

  p {
    margin-top: 8px;
    line-height: 1.6;

    @include sm {
      font-size: 0.85em;
    }
  }
}

</style>
