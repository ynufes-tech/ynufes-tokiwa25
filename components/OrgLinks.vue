<script lang="ts" setup>
const props = defineProps<{
  x_id:string,
  ins_id:string,
  hp:string
}>();
</script>

<template>
    <div class="org-links">
        <a v-if='x_id != " "' class="xLink" :href="`https://x.com/${x_id}`"><img src="../assets/images/X_logo.svg" alt=""></a>
        <a v-if='ins_id != " "' class="imsLink" :href="`https://www.instagram.com/${ins_id}`"><img src="../assets/images/Ins_logo.svg" alt=""></a>
        <a v-if='hp != " "' class="hp" :href="`${hp}`"><img src="../assets/images/hp.svg" alt=""></a>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.org-links{
    display: flex;
    justify-content: center;
    gap: 30px;
    img {
        width: 45px;
        @include md {
          width: 40px;
        }
      }
}
</style>