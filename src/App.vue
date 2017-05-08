<template>
  <div id="app">
    <headers></headers>
    <div class = "content">
      <div class = "tab-item">
        <router-link :to = "{path:'/goods'}" tag = "div" active-class = "active">商品</router-link>
      </div>
      <div class = "tab-item">
        <router-link :to = "{path:'/ping'}" tag = "div" active-class = "active">评论</router-link>
      </div>
      <div class = "tab-item">
        <router-link :to = "{path:'/sell'}" tag = "div" active-class = "active">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
    <router-view name = "fck"></router-view>
    <div class = "foot">
      i am foot
    </div>
  </div>
</template>

<script>
  import headers from './components/header/headers.vue'

  export default {
    name: 'app',
    components: {
      headers
    }
  }
</script>

<style lang='stylus' rel="stylesheet/stylus">

  border(val,color)
    border val solid color

  radius(val)
    border-radius val
  .content
    display:flex
    width:100%
    height:40px
    line-height:40px
    .tab-item
      flex:1
      text-align center
      border 2px #00a0e9
      radius 10px
      .active
        background #00a0e9
        radius 10px


</style>
