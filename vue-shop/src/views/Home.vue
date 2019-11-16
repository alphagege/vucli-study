<template>
  <div class="home">
    <el-button @click="loginOut">退出登录</el-button>
  </div>
</template>

<script>
import { removeToken } from '@/utils/auth.js'
export default {
  name: 'home',
  components: {},
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    loginOut (params) {
      removeToken()
      this.$router.push({ name: 'login' })
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.home {
}
</style>
