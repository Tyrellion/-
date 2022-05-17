<template>
  <div>
    <h1>有趣的性格测试</h1>
    <hr />
    <form method="post">
      <table>
        <tr>
          <td>
            <h4>你来到了爪哇国的动物森林<br />看到一个奇妙的世界</h4>
            <h2>你希望这段旅程</h2>
            <br /><input type="radio" name="q1" @click="changeA"/>A.跟着蝴蝶的指引<br />
            <input type="radio" name="q1" @click="changeB"/>B.自由自在的游玩<br />
          </td>
        </tr>
        
        <router-link :to="{
          path:'/SecondIndex',
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
  name: "MainIndex",
   data(){
    return {
      answer:'0'
    }
  },
  methods:{
    changeA(){
      this.answer = this.answer + 'A'
    },
    changeB(){
      this.answer = this.answer + 'B'
    }
  }
};
</script>

<style>
body {
  background: darkgrey;
}
div {
  background: darkgrey;
  width: 1500px;
  padding: 15px;
  border: none;
  margin: 0;
  text-align: center;
}
table {
  width: 1500px;
  padding: 0;
  line-height: 180%;
}
h1 {
  font-weight: bold;
  color: darkgreen;
}
h2 {
  font-weight: bold;
}
tr {
  font-family: "微软雅黑";
  color: #006400;
  font-size: 20px;
}
input {
  margin: 10px;
}
#button {
  font-size: 15px;
  width: 100px;
  height: 40px;
  font-weight: bold;
}
</style>
