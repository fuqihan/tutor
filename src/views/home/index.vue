<template>
  <div>
    <Theader></Theader>
    <Mbottom></Mbottom>
  </div>
</template>

<script>
import {Swiper, GroupTitle, SwiperItem, XButton, Divider} from 'vux'
import Theader from '../../components/header/tourists.vue'
import Mbottom from '../../components/bottom/bottom.vue'
export default{
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    Theader,
    Mbottom
  }
}
</script>

<style lang="less">

</style>
