<template>
  <div class="home">
    <div class="base-list">
      <div class="base-list--card" :class="item.type" v-for="(item, index) in baseEquipList" :key="index">
        <img @mouseenter.stop="handleMouseOver($event, item, index)" @mouseout.stop="handleMouseOut" :src="item.imagePath" :alt="item.name">
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron';

const menu = [
  {
    equipId: 999,
    name: '羁绊',
    imagePath: '/image/menu/assassin.jpg',
    type: 'menu',
    action: '2'
  },
  {
    id: 1000,
    name: '职业',
    imagePath: '/image/menu/element.jpg',
    type: 'menu',
    action: '1'
  }
];

export default {
  name: 'Home',
  data() {
    return {
      baseEquipList: [],
      showEquipment: false
    };
  },
  async mounted() {
    const res = await this.$store.dispatch('UPDATE_EQUIPLIST');
    if (!res) return;
    // equipId开头第一个数字代表赛季妈蛋
    this.baseEquipList = res.filter(item => item.type === '1' && item.equipId[0] === this.season).concat(menu);
  },
  methods: {
    handleMouseOver(e, item) {
      if (!this.showEquipment) this.showEquipment = true;
      ipcRenderer.send('mouse-over', item);
    },
    handleMouseOut() {
      this.showEquipment = false;
      ipcRenderer.send('mouse-out');
    }
  },
  computed: {
    season() {
      return this.$store.state.season;
    }
  }
};
</script>

<style lang="less">
@import url("../assets/public.less");
@import url("../assets/color.less");
// @import url("../assets/animate.less");

.home {
  position: relative;
  height: 100%;
}
.base-list {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  &--card {
    display: inline-block;
    margin-right: 2px;
    cursor: pointer;
    .card(@cardWidth);
    &:hover {
      border-color: @active-border-color;
    }
    &.menu {
      border-color: #000;
      &:hover {
        border-color: #7f7f7f;
      }
    }
  }
}
</style>
