<template>
  <div id="app">
    <header class="header drag"></header>
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column;
}
.header{
  width: 100%;
  background: #000;
  padding: 15px;
}
.router-view{
  flex: 1;
}
</style>
