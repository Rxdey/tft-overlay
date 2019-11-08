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
let mouseX = 0;
let mouseY = 0;
let dragging = false;

export default {
  data () {
    return {
      currentWindow: null
    };
  },
  mounted () {
  },
  methods: {
    handleMouseOut (e) {
      e.preventDefault();
    },
    handleMouseUp (e) {
      e.preventDefault();
      dragging = false;
    },
    handleMouseMove (e) {
      e.preventDefault();
      if (dragging) {
        const moveX = e.pageX - mouseX;
        const moveY = e.pageY - mouseY;
        const pos = this.currentWindow.getPosition();
        this.currentWindow.setPosition(pos[0] + moveX, pos[1] + moveY, true);
      }
    },
    handleMouseDown (e) {
      e.preventDefault();
      dragging = true;
      mouseX = e.pageX;
      mouseY = e.pageY;
    },
    handleUnlock () {
      this.currentWindow.setIgnoreMouseEvents(false);
    },
    handleLock () {
      this.currentWindow.setIgnoreMouseEvents(true, { forward: true });
    }
  }
};
</script>
<style lang="less">
html,body{
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
  width: 50px;
  padding: 5px;
  .line {
    background: #fdfbe3;
    width: 40px;
    height: 12px;
  }
}
.router-view {
  flex: 1;
}
</style>
