<template>
  <div class="home">
    <div class="base-list">
      <div class="base-list--card" v-for="(item, index) in base" :key="index">
        <img @mouseover.stop="handleMouseOver($event, item, index)" @mouseout.stop="handleMouseOut" :src="item.icon" :alt="item.name">
      </div>
    </div>

    <transition name="fade">
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
    </transition>
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
    this.currentWindow = require('electron').remote.getCurrentWindow();
    const { equipment, base } = items;
    this.base = base;
    this.equipment = equipment;
  },
  methods: {
    handleUnlock () {
      this.currentWindow.setIgnoreMouseEvents(false);
    },
    handleLock () {
      this.currentWindow.setIgnoreMouseEvents(true, { forward: true });
    },
    // 显示列表 获取边距
    handleMouseOver (e, item) {
      this.handleUnlock();
      if (!this.showEquipment) this.showEquipment = true;
      const { id } = item;
      this.currentEqupment = this.getEquipmentRelation(id, this.equipment);
      // console.log(equipmentList);
    },
    handleMouseOut (e) {
      this.showEquipment = false;
      this.handleLock();
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
    getEquipmentRelation (relateId, array) {
      return array
        .filter(item => item.relation.includes(relateId))
        .map(item => {
          const baseId = item.relation.filter(m => m !== relateId)[0] || relateId;
          return {
            ...item,
            base: this.getEquipmentById(baseId, this.base)
          };
        })
        .sort((a, b) => a.base.id - b.base.id);
    }
  }
};
</script>

<style lang="less">
@import url("../assets/css/color.less");
@import url("../assets/css/animate.less");
@cardWidth: 50px;
.card(@width) {
  width: @width;
  height: @width;
  border-radius: @width;
  overflow: hidden;
  border: 3px solid @border-color;
  user-select: none;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
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
.equipment-list {
  position: absolute;
  top: @cardWidth + 5;
  left: 0;
  padding: 10px;
  // height: 100%;
  width: 70%;
  background: #000;
  transition: 0.3s all;
  &--list {
    display: flex;
    flex-flow: row;
    align-items: center;
  }
  &__line {
    border-right: 8px solid @border-color;
    height: @cardWidth - 10;
    margin: 0 10px;
  }
  &--card {
    margin-bottom: 3px;
    .card(@cardWidth - 5);
    border-width: 2px;
  }
  &--desc {
    font-size: 14px;
    color: @desc-color;
    flex: 1;
    margin-left: 10px;
    .name {
      font-weight: bold;
    }
    .description {
      font-size: 12px;
      font-style: italic;
    }
  }
}
</style>
