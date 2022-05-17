<template>
  <div>
    <div
      v-if="
        $route.query.answer === '0ABAA' ||
        $route.query.answer === '0ABAB' ||
        $route.query.answer === '0AAAA'
      "
    >
      <h1 style="font-size: 100px; color: #b68337; margin-top: 0">
        出手便结束战斗的豹
      </h1>
      <img src="../picture/豹子.jpg" alt="" style="width: 40%" />

      <router-link to="/LieBao"
        ><el-row>
          <el-button type="success" style="color: #006400" plain
            >查看详细信息</el-button
          ></el-row
        ></router-link
      >
    </div>

    <div
      v-if="
        $route.query.answer === '0AABA' ||
        $route.query.answer === '0BABB' ||
        $route.query.answer === '0BAAA'
      "
    >
      <h1 style="font-size: 100px; color: #fc5531; margin-top: 0">
        静观潮起潮落的海星
      </h1>
      <img src="../picture/海星.webp" alt="" style="width: 40%" />
      <router-link to="/LieBao"
        ><el-row>
          <el-button type="success" style="color: #006400" plain
            >查看详细信息</el-button
          ></el-row
        ></router-link
      >
    </div>
    <div
      v-if="
        $route.query.answer === '0BBAA' ||
        $route.query.answer === '0BBAB' ||
        $route.query.answer === '0BAAB'
      "
    >
      <h1 style="font-size: 100px; color: #b68337; margin-top: 0">
        快乐星球的小火龙
      </h1>
    </div>
    <div
      v-if="
        $route.query.answer === '0AABB' ||
        $route.query.answer === '0BABA' ||
        $route.query.answer === '0AAAB'
      "
    >
      <h1 style="font-size: 100px; color: #b68337; margin-top: 0">
        银河系行走的猫
      </h1>
    </div>
    <div
      v-if="$route.query.answer === '0ABBA' || $route.query.answer === '0BBBA'"
    >
      <h1 style="font-size: 100px; color: #b68337; margin-top: 0">
        发呆也要专心的考拉
      </h1>
    </div>
    <div
      v-if="$route.query.answer === '0BBBB' || $route.query.answer === '0ABBB'"
    >
      <h1 style="font-size: 100px; color: #b68337; margin-top: 0">
        枕着星河入梦的考拉
      </h1>
    </div>

    <div
      v-if="
        this.else.length === 1 ||
        this.else.length === 2 ||
        this.else.length === 3 ||
        this.else.length === 4
      "
    >
      <h1 style="color: #006400">还有旅程没有体验哦</h1>
    </div>
    <router-link to="/MainIndex">
      <tr>
        <td>
          <el-row>
            <el-button
              v-if="
                this.else.length === 1 ||
                this.else.length === 2 ||
                this.else.length === 3 ||
                this.else.length === 4
              "
              type="success"
              style="color: #006400"
              plain
              >重新探索</el-button
            ></el-row
          >
        </td>
      </tr>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AnswerPage",
  data() {
    return {
      else: this.$route.query.answer,
    };
  },
};
</script>

<style></style>
