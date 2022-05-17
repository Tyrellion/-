<template>
  <div>
       <div v-if="$route.query.answer === '0ABAA' ||$route.query.answer === '0ABAB'||$route.query.answer === '0AAAA'">出手便结束战斗的豹</div>
       <div v-if="$route.query.answer === '0AABA'||$route.query.answer === '0BABB'||$route.query.answer === '0BAAA'">静观潮起潮落的海参</div>
       <div v-if="$route.query.answer === '0BBAA'||$route.query.answer === '0BBAB'||$route.query.answer === '0BAAB'">快乐星球的小火龙</div>
       <div v-if="$route.query.answer === '0AABB'||$route.query.answer === '0BABA'||$route.query.answer === '0AAAB'">银河系行走的猫</div>
       <div v-if="$route.query.answer === '0ABBA'||$route.query.answer === '0BBBA'">发呆也要专心的考拉</div>
       <div v-if="$route.query.answer === '0BBBB'||$route.query.answer === '0ABBB'">枕着星河入梦的海豚</div>
       <div v-if="$route.query.answer === '0BBBB'||$route.query.answer === '0ABBB'">枕着星河入梦的海豚</div>
  </div>
</template>

<script>
export default {
    name:'AnswerPage'
}
</script>

<style>

</style>