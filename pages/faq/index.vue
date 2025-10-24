<script setup lang="ts">
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";

const faqList = [
  {
    q: "大学への行き方は？",
    a: `電車やバスで来場いただけます。<br />詳しくは、<NuxtLink to="/access" class="linkto">こちら</NuxtLink>をご覧ください。`,
  },
  {
    q: "常盤祭の開催期間は？",
    a: `10/31(金) 13:00~20:30<br />11/1 (土) 9:00~20:30<br />11/2 (日) 9:00~15:00 です。`,
  },
  {
    q: "天候が悪いときは？",
    a: `企画場所が変更または中止になる場合があります。<br />大学祭公式SNSやホームページ、本部放送をこまめに確認するようにしてください。`,
  },
  {
    q: "もし体調が悪くなったら？",
    a: `近くの大学祭実行委員にお声いただくか、本部までお越しください。<br />混乱を避けるため、救急車の手配は実行委員が行います。`,
  },
  {
    q: "落とし物や迷子の相談は？",
    a: `お近くのスタッフジャンパーを着た大学祭実行委員にお声がけいただくか、本部までお越しください。`,
  },
  {
    q: "もし災害が発生したら？",
    a: `大学祭実行委員の指示に従って、お近くの避難所へ避難してください。`,
  },
  {
    q: "常盤祭期間中、生協や食堂は使える？",
    a: `第一食堂は屋内飲食が可能ですが、食堂の営業はございません。<br />また第二食堂・生協は終日営業していません。`,
  },
  {
    q: "構内で飲酒をしてもいい？",
    a: `構内での飲酒は禁止しております。`,
  },
  {
    q: "講義棟内で飲食は可能なの？",
    a: `講義棟内では理工学部A棟１Fのホールでのみ可能です。<br />他の講義棟については飲食は一切禁止です。<br />他にも屋外または第一食堂で飲食が可能です。`,
  },
  {
    q: "来場者から迷惑行為を受けて困ったらどうすればいい？",
    a: `本部(経営108教室)または近くの実行委員にお知らせください。<br />実行委員が早急に対処します。`,
  },
];
</script>

<template>
  <div class="page-root">
    <PageTitle title="よくあるご質問" />

    <div class="all-questions">
      <div v-for="(item, index) in faqList" :key="index" class="faq-box">
        <ContentBox class="contentbox">
          <div class="qa-grid">
            <p class="q-label">Q{{ index + 1 }}</p>
            <p class="q-text">{{ item.q }}</p>
            <p class="a-label">A{{ index + 1 }}</p>
            <p class="a-text" v-html="item.a"></p>
          </div>
        </ContentBox>
      </div>

      <div class="other-thing">
        <p>
          その他お困りの際は、近くにいるSTAFFと書かれたジャンパー・Tシャツを着ている大学祭実行委員にお聞きいただくか、本部にお越しください。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root {
  font-family: "Zen Old Mincho", sans-serif;
  padding: 0 4vw;
}

.faq-box {
  margin-bottom: 40px; /* ← ContentBox間の余白 */
}

.contentbox {
  padding: 20px 25px;
}

/* ===== Q/A レイアウト ===== */
.qa-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  gap: 6px 20px;
  align-items: start;

  p {
    margin: 0;
  }

  .q-label,
  .a-label {
    font-weight: bold;
    font-size: 24px;
    @include md {
      font-size: 22px;
    }
    @include sm {
      font-size: 20px;
    }
  }

  .a-label {
    color: #e60000;
  }

  .q-text,
  .a-text {
    font-size: 20px;
    line-height: 1.6;
    @include md {
      font-size: 18px;
    }
    @include sm {
      font-size: 16px;
    }
  }
}

@include md {
  .qa-grid {
    grid-template-columns: 1fr;
    gap: 4px 0;

    .q-label {
      margin-bottom: 2px;
    }
    .q-text {
      margin-bottom: 10px;
    }
    .a-label {
      margin-top: 4px;
      margin-bottom: 2px;
    }
    .a-text {
      margin-bottom: 2px;
    }
  }
}

.other-thing {
  color: white;
  font-size: 22px;
  padding: 0 10vw;
  margin-top: 8vh;
  @include md {
    font-size: 20px;
    padding: 0 5vw;
  }
  @include sm {
    font-size: 18px;
    padding: 0 3vw;
  }
}

.linkto {
  color: #ffffff;
}
</style>
