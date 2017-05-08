<template>
  <!--<div class = "goods">i am goods</div>-->
  <div class = "goods">
    <Row :gutter="30">
      <Col span="6">
      <div class = "g1">col-6</div>
      </Col>
      <Col span="6">
      <div class = "g1">col-6</div>
      </Col>
      <Col span="6">
      <div class = "g1">col-6</div>
      </Col>
      <Col span="6">
      <div class = "g1">col-6</div>
      </Col>
    </Row>
    <Button type = "success">fuck</Button>
  </div>
</template>

<script>
  export default {
    name: 'goods'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goods
    .g1
      font-size 50px
      background #00cc66
</style>
