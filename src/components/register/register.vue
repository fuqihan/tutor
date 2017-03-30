<template>
<div class="register" :style="register">
<div class="register-header">
  <div class="left" @click="login"><i class="iconfont-fanhui icon-fanhui"></i></div>
  <div class="center"><span>注册</span></div>
  <div class="right"><span></span></div>
</div>
</div>
</template>

<script>
  import height from '../../util/height'
  import router from '../../router/index'
  export default{
    data () {
        return {
          register: {
              height: 0
          }
        }
    },
    methods: {
      login: function () {
        router.push('/')
      }
    },
   mounted: function () {
     this.register.height = height().aa
   }
}
</script>

<style lang="less">
@import "../../iconfont/fanhui/iconfont.css";
.register {
  background: url("../../images/bak.jpg") no-repeat;
  background-size: 100% 100%;
}

.register-header {
  width: 100%;
  height: 3.17em;
  display: flex;
  justify-content: space-between;
}

.register-header > .left {
  width: 60px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-header > .center {
  flex: 1;
  margin-top: 5px;
  margin-left: -8px;
  font-size: 20px;
  color: #086929;
  text-align: center;
}

.register-header > .right {
  width: 15%;
  height: 32px;
  margin-top: 5px;
  margin-right: 15px;
  font-size: 20px;
  color: #086929;
}

</style>
