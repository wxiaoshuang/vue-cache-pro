<template>
  <div>
    <ul>
      <li v-for="nav in navs" :key="nav.name">
        <router-link :to="nav.name">{{nav.title}}</router-link>
      </li>
    </ul>
    <keep-alive :exclude="excludeComponents">
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'main.vue',
  data () {
    return {
      navs: [{
        name: 'home',
        title: '首页'
      }, {
        name: 'pageAList',
        title: 'pageAList'
      }, {
        name: 'pageB',
        title: 'pageB'
      }]
    }
  },
  methods: {
  },
  computed: {
    excludeComponents () {
      return this.$store.state.excludeComponents
    }
  },
  created () {
  }
}
</script>

<style scoped>
  ul {
    width: 800px;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
  ul li{
    list-style: none;
  }
  li a {
    color: #000;
    text-decoration: none;
    font-size: 20px;
  }
  .router-link-active {
    color: #409eff;
  }

</style>
