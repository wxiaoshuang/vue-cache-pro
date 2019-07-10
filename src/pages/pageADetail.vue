<template>
  <div class="detail">
    <div style="height: 40px; text-align: left;">
      <el-button type="text" @click="back"><i class="el-icon-arrow-left"></i>返回</el-button>
    </div>
    <div>
     <div style="height:100px; line-height: 100px;">
       {{info.name}}
     </div>
      <div>
        <el-button type="primary" size="small" @click="collect(info)">{{info.isCollect ? '取消收藏' : '收藏'}}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import {getVideoDetail, collectVideo} from '../api'
export default {
  name: 'pageADetail',
  data () {
    return {
      info: {}
    }
  },
  methods: {
    back () {
      window.history.back(-1)
    },
    getVideoDetail () {
      let id = this.$route.query.id
      getVideoDetail({id}).then(r => {
        if (r.code === 0) {
          // debugger
          this.info = r.data
        }
      })
    },
    collect (info) {
      let isCollect = !info.isCollect
      let id = info.id
      let params = {
        isCollect, id
      }
      let tip = isCollect ? '收藏' : '取消收藏'
      collectVideo(params).then(r => {
        if (r.code === 0) {
          this.$message({type: 'success', message: tip + '成功', duration: 1000})
          this.info.isCollect = !this.info.isCollect
        }
      })
    }
  },
  mounted () {
    this.getVideoDetail()
  },
  /**
   *
   */
  beforeRouteLeave (to, from, next) {
    let componentName = ''
    // 离开详情页时,先将所有需要缓存的页面置为不缓存状态
    let list = ['pageAList']
    this.$store.commit('addExcludeComponent', list)
    // 缓存的组件 路由名称到组件name的映射
    let mapData = [['pageAList', 'pageAList']]
    let map = new Map(mapData)
    componentName = map.get(to.name) || ''
    // 将访问的需要缓存的页面置为缓存状态
    this.$store.commit('removeExcludeComponent', componentName)
    next()
  }
}
</script>
