<template>
  <div class="home">
    <div class="base-list">
      <div class="base-list--card" v-for="(item, index) in base" :key="index">
        <img @mouseenter.stop="handleMouseOver($event, item, index)" @mouseout.stop="handleMouseOut" :src="item.icon" :alt="item.name">
      </div>
    </div>

    <!-- <transition name="fade">
      <div class="equipment-list" v-show="showEquipment">
        <div class="equipment-list--list" v-for="(item, index) in currentEqupment" :key="index">
          <div class="equipment-list--card left">
            <img :src="item.base.icon" :alt="item.base.name">
          </div>
          <div class="equipment-list__line"></div>
          <div class="equipment-list--card">
            <img :src="item.icon" :alt="item.name">
          </div>
          <div class="equipment-list--desc">
            <p class="name">{{item.name}}</p>
            <p class="description">{{item.description}}</p>
          </div>
        </div>
      </div>
    </transition> -->
  </div>
</template>

<script>
import { items } from '../data/equipment';

export default {
  name: 'Home',
  data () {
    return {
      base: [],
      equipment: [],
      showEquipment: false,
      currentEqupment: [],
      currentWindow: null
    };
  },
  mounted () {
    // eslint-disable-next-line global-require
    this.currentWindow = require('electron').remote.getCurrentWindow();
    const { equipment, base } = items;
    this.base = base;
    this.equipment = equipment;
  },
  methods: {
    // 显示列表
    handleMouseOver (e, item) {
      if (!this.showEquipment) this.showEquipment = true;
      const { id } = item;
      // eslint-disable-next-line global-require
      require('electron').ipcRenderer.send('over', id);
      // this.currentEqupment = this.getEquipmentRelation(id, this.equipment, this.base);
    },
    handleMouseOut (e) {
      this.showEquipment = false;
      // eslint-disable-next-line global-require
      require('electron').ipcRenderer.send('out');
      // this.handleLock();
    },
    /**
     * 通过id查找
     * @param {Number} id -基础物品id
     * @param {Array} array -基础物品列表
     */
    getEquipmentById (id, array) {
      return array.filter(item => item.id === id)[0];
    },
    /**
     * 通过id查找合成项
     * @param {Number} id -基础物品id
     * @param {Array} array -合成物品列表
     */
    getEquipmentRelation (relateId, array, baseArray) {
      return array
        .filter(item => item.relation.includes(relateId))
        .map(item => {
          const baseId = item.relation.filter(m => m !== relateId)[0] || relateId;
          return {
            ...item,
            base: this.getEquipmentById(baseId, baseArray)
          };
        })
        .sort((a, b) => a.base.id - b.base.id);
    }
  }
};
</script>

<style lang="less">
@import url("../assets/css/public.less");
@import url("../assets/css/color.less");
@import url("../assets/css/animate.less");

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
    .card(@cardWidth);
    &:hover {
      border-color: @active-border-color;
    }
  }
}
</style>
