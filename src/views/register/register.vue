<template>
  <div class="register" >
    <div class="register-header">
      <div class="left" @click="login"><i class="iconfont-fanhui icon-fanhui"></i></div>
      <div class="center"><span>注册</span></div>
      <div class="right"><span></span></div>
    </div>
    <div class="register-input">
      <div class="input-height">
        <group>
          <x-input title="账号" class="in" name="username" placeholder="请输入账号"></x-input>
        </group>
        <group>
          <x-input title="手机号" type="number" class="in" name="tel" placeholder="请输入手机号码" >
            <x-button slot="right" type="primary" mini>发送</x-button>
          </x-input>
        </group>
        <group>
          <x-input title="验证码" type="number" class="in" name="a" placeholder="请输入验证码" ></x-input>
        </group>
        <group>
          <x-input title="密码" class="in" name="username" placeholder="请输入密码"></x-input>
        </group>
        <group>
          <x-input title="确认密码" class="in" name="username" placeholder="请输入确认密码"></x-input>
        </group>
        <x-button type="primary" class="button" action-type="button">注册</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {XInput, Group, XButton, Cell} from 'vux'
  export default{
    components: {
      XInput,
      XButton,
      Group,
      Cell
    },
    methods: {
      login: function () {
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="less">
  @import "../../iconfont/fanhui/iconfont.css";

  .register {
    height: 35.8em;
    background: url("../../images/bak.jpg") no-repeat;
    background-size: 100% 100%;
  }

  .register-header {
    width: 100%;
    height: 2em;
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
    margin-left: 5px;
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

  .register-input {
    height: 33.9em;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .register-input > .input-height {
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .in {
    background-color: rgba(0, 0, 0, 0.2);
    width: 16.5em;
  }
  .register-input > .input-height > .button {
    margin-top: 20px;
    width: 50%;
    background-color: rebeccapurple;
  }
</style>
