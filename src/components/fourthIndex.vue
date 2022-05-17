<template>
   <div>
    <form method="post">
      <table>
        <tr>
          <td>
            <h4>天色已晚<br />你回到现实<br />你手心里有一朵花<br /></h4>
            <h2>你带走它的理由是？</h2>
            <input type="radio" name="q4" @click.once="changeA"/>A.和喜欢的人讲这次旅程<br />
            <input type="radio" name="q4" @click.once="changeB"/>B.用心的珍藏起来<br />
          </td>
        </tr>

        <router-link :to="{
          path:'/AnswerPage',
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
    name:'FourthIndex',
     data(){
      return{
        answer:this.$route.query.answer
      }
    },
     methods:{
    changeA(){
      //alert(this.answer)
      this.answer = this.$route.query.answer
      this.answer = this.answer + 'A'
    },
    changeB(){
      this.answer = this.$route.query.answer
      this.answer = this.answer + 'B'
    }
  }
}
</script>

<style>

</style>