<template>
  <div>
    Search
    <p>query参数:{{$route.query.keywords}}</p>
    <p>params参数:{{$route.params.keywords}}</p>
    <p>props  params参数:{{keywords1}}</p>
    <p>props  query参数:{{keywords2}}</p>
  </div>
</template>

<script>
export default {
  props: ["keywords1", "keywords2"],
  name: "Search"
};
</script>
<style lang="less" scoped>
</style>
