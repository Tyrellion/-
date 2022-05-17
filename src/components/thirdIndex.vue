<template>
  <div>
    <form method="post">
      <table>
        <tr>
          <td>
            <h4>你继续探索<br />发现动物们正在聊天</h4>
            <h2>你想加入哪个讨论</h2>
            <input type="radio" name="q3" @click="changeA"/>A.动物森林的社会系统<br />
            <input type="radio" name="q3" @click="changeB"/>B.动物森林的有趣故事<br />
          </td>
        </tr>
       

        <router-link :to="{
          path:'/FourthIndex',
          query:{
            answer:answer
          }}"><tr>
          <td>
            <input type="submit" value="继续探索" id="button" />
          </td>
        </tr></router-link>
        <router-view></router-view>
      </table>
    </form>
  </div>
</template>

<script>
export default {
    name:'ThirdIndex',
    data(){
      return{
        answer:this.$route.query.answer
      }
    },
     methods:{
    changeA(){
      //alert(this.answer)
      this.answer = this.answer + 'A'
    },
    changeB(){
      this.answer = this.answer + 'B'
    }
  }
}
</script>

<style>

</style>