<template>
  <div>
    <form method="post">
      <table>
        <tr>
          <td>
            <h4>你继续探索<br />发现动物们正在聊天</h4>
            <h2>你想加入哪个讨论</h2>
            <input type="radio" name="q3" />A.动物森林的社会系统<br />
            <input type="radio" name="q3" />B.动物森林的有趣故事<br />
          </td>
        </tr>
       

        <router-link :to="{
          path:'/FourthIndex',
          query:{
            answer:$route.query.answer
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
    name:'ThirdIndex'
}
</script>

<style>

</style>