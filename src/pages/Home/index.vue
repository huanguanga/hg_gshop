<template>
  <div class="home">
    <!-- 商品分类导航 -->
    <TypeNav/>
    <!--列表-->
    <List/>

    <!--今日推荐-->
    <tadyRecommend/>

    <!-- 商品排行 -->
    <rank/>

    <!-- 猜你喜欢 -->
    <like/>

    <!--楼层-->
    <floor/>

    <!--楼层-->
    <floor/>

    <!--商标-->
    <brand/>
  </div>
</template>

<script>
import List from "./List";
import brand from "./brand";
import floor from "./floor";
import rank from "./rank";
import tadyRecommend from "./tadyRecommend";
import like from "./like";
export default {
  name: "Home",
  components:{
    List,
    like,
    tadyRecommend,
    rank,
    floor,
    brand
  }
};
</script>
<style lang="less" scoped>

</style>
