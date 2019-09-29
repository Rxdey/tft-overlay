<template>
  <div class="home">
    <div class="base-list">
      <div class="base-list--card" v-for="(item, index) in base" :key="index">
        <img @mouseover.stop="handleMouseOver($event, item, index)" @mouseout.stop="handleMouseOut" :src="item.icon" :alt="item.name">
      </div>
    </div>

    <transition name="fade">
      <div class="equipment-list" v-show="showEquipment">
        <div class="equipment-list--card" v-for="(item, index) in currentEqupment" :key="index">
          <img :src="item.icon" :alt="item.name">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { items } from '../data/equipment';

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      base: [],
      equipment: [],
      showEquipment: true,
      currentEqupment: []
    };
  },
  created () {
  },
  mounted () {
    const { equipment, base } = items;
    this.base = base;
    this.equipment = equipment;
  },
  methods: {
    // 显示列表 获取边距
    handleMouseOver (e, item, index) {
      if (!this.showEquipment) this.showEquipment = true;
      const { id } = item;
      this.currentEqupment = this.getEquipmentRelation(id, this.equipment);
      // console.log(equipmentList);
    },
    handleMouseOut (e) {
      // this.showEquipment = false;
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
      return array.filter(item => item.relation.includes(relateId));
    }
  },
  watch: {
  },
  computed: {
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
  }
}
.equipment-list {
  position: absolute;
  top: @cardWidth + 5;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.3s all;
  &--card {
    .card(@cardWidth - 5);
  }
}
</style>
