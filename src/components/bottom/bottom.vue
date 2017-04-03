<template>
  <div id="bottom">
    <div class="fives"><i class="zhuye icon-zhuye"></i></div>
    <div class="fives"><i class="shipin icon-shipin"></i></div>
    <div class="fives"><i class="add icon-add"></i></div>
    <div class="fives"><i class="search icon-search"></i></div>
    <div class="fives"><i class="person icon-person"></i></div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="less">
  @import "../../iconfont/home/iconfont.css";
  @import "../../iconfont/video/iconfont.css";
  @import "../../iconfont/add/iconfont.css";
  @import "../../iconfont/search/iconfont.css";
  @import "../../iconfont/person/iconfont.css";
  #bottom {
    height: 2.3em;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    border-top: 0.1em solid beige;
  }
  .fives{
    flex: 1;
    text-align: center;
    margin-top: .49em;
  }
</style>
