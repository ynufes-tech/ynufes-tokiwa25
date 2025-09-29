<script lang="ts" setup>
import PageTitle from "~/components/PageTitle.vue";
import LinkButton from "~/components/LinkButtonComponent.vue";
import ContentBox from "~/components/ContentBox.vue";
useHead({
  title: "Question | 25常盤祭公式HP~紅陽~",
  meta: [{ name: "description", content: "よくあるご質問" }],
});

</script>

<template>
  <div class="page-root">
    <PageTitle title="よくあるご質問" />
    <div class="all-questions">
    <div class="box">
  <ContentBox id="contentbox">
    <div class="category">
      <div class="qa">
        <p>Q1</p>
        <p>A1</p>
      </div>
    <div class="content">
      <p>大学への生き方は？</p>
      <p>電車やバスで来場いただけます。<br/>
         詳しくは、<NuxtLink to="/access" class="linkto">こちら</NuxtLink>をご覧ください。
      </p>
    </div>
    </div>
  </ContentBox>
    </div>
    <div class="box">
      <ContentBox id="contentbox">
        <div class="category">
        <div class="qa">
          <p>Q2</p>
          <p>A2</p>
        </div>
        <div class="content">
          <p>常盤祭の開催期間は？</p>
          <p>10/31(金) 13:00~20:30<br/>
             11/1  (土)  9:00~20:30<br/>
             11/2  (日)  9:00~15:00  です。
          </p>
          </div>
        </div>
      </ContentBox>
    </div>
      <div class="box">
        <ContentBox id="contentbox">
          <div class="category">
          <div class="qa">
            <p>Q3</p>
            <p>A3</p>
          </div>
          <div class="content">
            <p>天候が悪いときは？</p>
            <p>企画場所が変更または中止になる場合があります。</p>
          </div>
          </div>
        </ContentBox>
      </div>
      <div class="box">
        <ContentBox id="contentbox">
          <div class="category">
          <div class="qa">
            <p>Q4</p>
            <p>A4</p>
          </div>
          <div class="content">
            <p>もし体調が悪くなったら？</p>
            <p>近くの大学祭実行委員にお声いただくか、本部までお越しください。<br/>
            混乱を避けるため、救急車の手配は実行委員が行います。
            </p>
          </div>
          </div>
        </ContentBox>
      </div>
      <div class="box">
        <ContentBox id="contentbox">
          <div class="category">
          <div class="qa">
            <p>Q5</p>
            <p>A5</p>
          </div>
          <div class="content">
            <p>落とし物や迷子の相談は？</p>
            <p>お近くのスタッフジャンパーを着た大学祭実行委員にお声がけいただくか、本部までお越しください。
            </p>
          </div>
          </div>
        </ContentBox>
      </div>
      <div class="box">
        <ContentBox id="contentbox">
          <div class="category">
          <div class="qa">
            <p>Q6</p>
            <p>A6</p>
          </div>
          <div class="content">
            <p>もし災害が発生したら？</p>
            <p>大学祭実行委員の指示に従って、お近くの避難所へ避難してください。
            </p>
          </div>
          </div>
        </ContentBox>
        </div>
      <div class="box">
        <ContentBox id="contentbox">
          <div class="category">
         <div class="qa">
           <p>Q7</p>
           <p>A7</p>
         </div>
          <div class="content">
            <p>常盤祭期間中、生協や食堂は使える？</p>
            <p>第一食堂は屋内飲食が可能ですが、食堂の営業はございません。<br/>
            また第二食堂・生協は終日営業していません。
            </p>
          </div>
          </div>
        </ContentBox>
      </div>
      <div class="box">
        <ContentBox id="contentbox">
          <div class="category">
         <div class="qa">
           <p>Q8</p>
           <p>A8</p>
         </div>
          <div class="content">
            <p>構内で飲酒をしてもいい？</p>
            <p>構内での飲酒は禁止しております。</p>
          </div>
          </div>
        </ContentBox>
      </div>
      <div class="other-thing">
        <p>その他お困りの際は、近くにいるSTAFFと書かれたジャンパー・Tシャツを着ている大学祭実行委員にお聞きいただくか、本部にお越しください。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-root {
  font-family: "Zen Old Mincho", sans-serif;
}

#contentbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.category {
  display: flex;
  margin-top: 3vh;
  margin-bottom: 3vh;
  text-align: left;
}
.qa{
  display: flex;
  flex-direction: column;
  color:#FFFFFF ;
}
.content{
  display: flex;
  flex-direction: column;
  margin-left: 1vw;
}
.box{
  margin-bottom:50px ;
}
p{
  margin-bottom:20px ;
  font-family: "Kaisei Decol";
}
.other-thing{
  font-size:  4vh;
}
.linkto{
  color: #FFFFFF ;
}
</style>