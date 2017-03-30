<template>
  <div id="app">
    <!--<login></login>-->
    <!--<bottom></bottom>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  body{
    margin: 0;
    font-size: 12px;
  }
  #app{
    margin: 0;
    padding: 0;
  }

</style>
