<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>哈哈哈哈哈</h2>
    <div class="content-wrap">
      <button
        type="button"
        class="btn btn-default"
        data-toggle="tooltip"
        data-placement="left"
        title="Tooltip on left"
      >Tooltip on left</button>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="tooltip"
        data-placement="top"
        title="Tooltip on top"
      >Tooltip on top</button>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Tooltip on bottom"
      >Tooltip on bottom</button>
      <button
        type="button"
        class="btn btn-danger"
        data-toggle="tooltip"
        data-placement="right"
        title="Tooltip on right"
      >Tooltip on right</button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "耶耶耶"
    };
  },
  mounted() {
    //在页面加载完毕后初始化 tooltip， 相当于$(function(){ $('[data-toggle="tooltip"]').tooltip(); }
    $('[data-toggle="tooltip"]').tooltip();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
