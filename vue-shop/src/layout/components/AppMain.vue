<template>
  <div class="app-main">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.app-main{
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
// .app-main {
//   padding-top: 50px;
// }
</style>
