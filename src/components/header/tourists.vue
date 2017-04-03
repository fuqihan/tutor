<template>
<div class="all">
  <div class="header left"><router-link to="/register">注册</router-link></div>
  <div class="header">tutor</div>
  <div class="header right"><router-link to="/login">登录</router-link></div>
</div>
</template>

<script>
export default{}
</script>

<style lang="less">
  .all{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
.header{
  flex: 1;
  margin-top: 0.2em;
  text-align: center;
}
  .left{
    text-align: left;
  }
  .right{
    text-align: right;
  }
  a{
    display: block;
    padding: 0 20px;
    text-decoration: none;
    color: #11560e;
  }
</style>
