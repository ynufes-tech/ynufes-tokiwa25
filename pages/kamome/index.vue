<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import ContentBox from "~/components/ContentBox.vue";
import LinkButton from "~/components/LinkButtonComponent.vue";
useHead({
  title: "Momesen | 25常盤祭公式HP~紅陽~",
  meta: [
    { name: "description", content: "カモメ先輩の情報を掲載しています。" },
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="page-container">
      <PageTitle :title="'かもめ先輩について'"/>
      <div class="momesen">
        <img
            class="kamomesenpai"
            src="/assets/images/momesen.svg">
      </div>
      <div class="profile">
        <h1>プロフィール</h1>
        <ContentBox class="contentbox">
            性別：おそらくオス<br>
            身長：およそ0.3m<br class="kaigyo">（ぼうしあり）　<br>
            体重：4.559キロ<br>
            生年月日：2014年11月2日<br>
            好きな食べ物：たこさんウインナー<br>
        </ContentBox>
      </div>
      <div class="coment">
        <h1>コメント</h1>
        <ContentBox class="contentbox">
            ぼくは、横浜国立大学大学祭の公式キャラクター、かもめ先輩もめ！<br>
            実はかもめなのに空が飛べないもめ…
            <br class="kaigyo2">XやInstagram、LINEスタンプ、絵文字なんかもチェックしてくれるとうれしいもめ！
        </ContentBox>
      </div>
      <div class="button">
        <LinkButton
            class="Linkbutton"
            link="https://x.com/kamome_senpai"
            text="Xを見る">
        </LinkButton>
        <LinkButton
            class="Linkbutton"
            link="https://instagram.com/kamome.senpai/"
            text="Instagramを見る">
        </LinkButton>
        <LinkButton
            class="Linkbutton"
            link="https://store.line.me/stickershop/product/5064088/ja"
            text="LINEスタンプを見る">
        </LinkButton>
        <LinkButton
            class="Linkbutton"
            link="https://store.line.me/emojishop/product/627239ae541f8a2a9a39da9c/ja?ref=Desktop"
            text="LINE絵文字を見る">
        </LinkButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.contentbox {
  font-family: "Zen Old Mincho", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  padding: 50px;
  color: #000000;
  margin-top: 50px;
  @include sm{
    padding: 20px;
    margin-top: 20px;
    font-size: 14px;
  }
}


.momesen{
  display: flex;
  align-items: center;
  justify-content: center;
}

.kamomesenpai{
  width: 200px;
}

.profile{
  display: flex;
  flex-direction: column;
  color: #ffffff;
  padding: 40px 0;
  @include sm{
    padding: 40px ;
  }
  h1{
    font-size: 40px;
    margin-left: 100px;
    @include md{
      font-size: 35px;
    }
    @include sm{
      margin-left: 20px;
      font-size: 30px;
    }
  }
}

.kaigyo{
  display: none;
}
@include sm{
  .kaigyo{
   display: block;
  }
  .kaigyo2{
    display: none;
  }
}

.coment{
  display: flex;
  flex-direction: column;
  color: #ffffff;
  padding: 40px;
  @include sm{
    padding: 40px;
  }
  h1{
    font-size: 40px;
    margin-left: 100px;
    @include md{
      font-size: 35px;
    }
    @include sm{
      margin-left: 20px;
      font-size: 30px;
    }
  }
}

.button{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
}

.Linkbutton{
  margin: 70px;
  max-width: 320px;
  @include md{
    margin: 50px;
  }
  @include sm{
    margin: 30px;
  }
}

</style>