<template>
<div class="musicinfo">
  <div class="content-title">
      <!-- 页面的标题 -->
      
      <div class="titlename">
        <span>音乐库</span>
      </div>
      <div class="titellink">
      <router-link to="/music/add" class="innerbtnlink">新增音乐</router-link>
      </div>
 </div>
 <div class="content">
  <Table border :columns="musiclistColumns" :data="musiclistData" class="musiclistable"></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="musicpager.total" :current="musicpager.current" @on-change="changePage"></Page>
        </div>
    </div>
 </div>
</div>
</template>

<script  type="text/ecmascript-6">
export default {
  name: 'Music',
  data () {
    return {
      musiclistColumns: [
        {
          title: '序号',
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: '音乐名称',
          key: 'name'
        },
        {
          title: '音乐地址',
          key: 'url',
          render (row) {
            return '<a :href="murl+row.url" target="_blank" v-text="row.url"></a>'
          }
        },
        {
          title: '创建时间',
          key: 'createDate'
        },
        {
          title: '操作',
          key: 'action',
          render () {
            return '<i-button type="text" size="small">修改</i-button><i-button type="text" size="small">删除</i-button>'
          }
        }
      ],
      musiclistData: [],
      musicpager: {
        total: 1,
        current: 1
      }
    }
  },
  created () {
    this.getMusicList(1)
  },
  methods: {
    getMusicList (pageNo) {
      this.http.get('/api/music/page/' + (pageNo || 1)).then(res => {
        if (res.error === false) {
          this.musicpager = res.result
          this.musiclistData = res.result.records
        }
      })
    },
    changePage () {
      this.getMusicList(this.musicpager.current)
    }
  }
}
</script>
<style lang='stylus' rel="stylesheet/stylus">
.ivu-table
  td,th
    text-align:center
</style>
