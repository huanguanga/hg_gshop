<template>
  <div class="app">
    <!-- 头部 -->
    <Header/>

    <router-view></router-view>
    <!-- 底部 -->
    <Footer v-if="!$route.meta.isHideFooter"/>  <!--此处在不是login和register的情况时$route.meta.isHideFooter为undefined,取反得true-->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer,
    Header,
  }
};
</script>
<style lang="less" scoped>



</style>
