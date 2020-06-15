<template>
  <div id="app">
    <header class="header" id="header" v-if="$route.path!='/child'">
      <div class="line drag"></div>
    </header>
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style lang="less">
html,
body {
  background: transparent;
}
#app {
  width: 100%;
  max-width: 600px;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column;
}
.header {
  width: 80px;
  .line {
    background: url('/header.png')no-repeat center;
    background-size: cover;
    width: 80px;
    height: 34px;
    margin-bottom: 5px;
  }
}
.router-view {
  flex: 1;
}
</style>
