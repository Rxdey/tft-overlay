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
    background: #f4f4f4;
    width: 80px;
    height: 15px;
  }
}
.router-view {
  flex: 1;
}
</style>
