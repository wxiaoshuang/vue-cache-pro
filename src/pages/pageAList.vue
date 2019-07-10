<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="goIntoVideo(item)">
        <div>
          <div style="margin-bottom: 6px;">{{item.name}}</div>
          <div style="text-align: right;">
            <span :style="{color:item.isCollect ? 'orange' : '#323232'}">{{item.isCollect ? '已收藏' : '未收藏'}}</span>
          </div>
        </div>
      </li>
    </ul>
    <el-pagination
      :page-size="pageSize"
      :total="total"
      :current-page="currentPage"
      @current-change="handleCurrentPage"
    ></el-pagination>
  </div>
</template>
<script>
import {getVideoList} from '../api'
export default {
  name: 'pageAList',
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 0,
      allList: [],
      list: []
    }
  },
  methods: {
    getVideoList () {
      let params = {currentPage: this.currentPage, pageSize: this.pageSize}
      getVideoList(params).then(r => {
        if (r.code === 0) {
          this.list = r.data.list
          this.total = r.data.total
        }
      })
    },
    goIntoVideo (item) {
      this.$router.push({name: 'pageADetail', query: {id: item.id}})
    },
    handleCurrentPage (val) {
      this.currentPage = val
      this.getVideoList()
    }
  },
  beforeRouteLeave (to, from, next) {
    let reg = /pageADetail/
    if (reg.test(to.name)) {
      this.$store.commit('removeExcludeComponent', 'pageAList')
    } else {
      this.$store.commit('addExcludeComponent', 'pageAList')
    }
    next()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('removeExcludeComponent', 'pageAList')
      next()
    })
  },
  activated () {
    this.getVideoList()
  },
  mounted () {
    this.getVideoList()
  },
  created() {
    this.getVideoList()
  }
}
</script>
<style scoped>
  ul li {
    text-align: left;
    list-style: none;
    padding-left: 20px;
    padding-right: 20px;
    height: 60px;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor:pointer;
  }
  li:hover {
    box-shadow: 10px 10px 5px #888888;
  }
</style>
