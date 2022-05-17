<template>
  <div>
    <form method="post">
      <table>
        <tr>
          <td>
            <h4>
              你在森林里遇到了可爱的精灵<br />精灵见到你很开心<br />问了你一个思考已久的问题
            </h4>
            <h2>如果可以，你更想生活在</h2>
            <input type="radio" name="q2" @click.once="changeA"/>A.100%自由的世界<br />
            <input type="radio" name="q2" @click.once="changeB"/>B.100%公平的世界<br />
          </td>
        </tr>
     

        <router-link :to="{
          path:'/ThirdIndex',
          query:{
            answer:this.answer
          }}"><tr>
          <td>
                        <el-row> <el-button type="success" style="color:#006400" plain>继续探索</el-button></el-row>

          </td>
        </tr></router-link>
        <router-view></router-view>
      </table>
    </form>
  </div>
</template>

<script>
export default {
    name:'SecondIndex',
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
};
</script>

<style></style>
