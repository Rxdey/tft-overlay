<template>
  <div class="home">
    <div class="base-list">
      <div class="base-list--card" v-for="(item, index) in base" :key="index">
        <img :src="item.icon" :alt="item.name">
      </div>
    </div>
  </div>
</template>

<script>
import { baseUrl, equipmentUrl, items } from '../data/equipment';

export default {
  name: 'Home',
  props: {
  },
  components: {
  },
  data () {
    return {
      base: [],
      equipment: []
    };
  },
  created () {
  },
  mounted () {
    const { equipment, base } = items;
    this.base = base.map(item => { item.icon = baseUrl + item.icon; return item; });
    this.equipment = equipment.map(item => { item.icon = equipmentUrl + item.icon; return item; });
  },
  methods: {
    /**
     * 通过id查找
     * @param {Number} id - 物品id
     * @param {Array} array -物品列表
     */
    getEquipmentById (id, array) {
      return array.filter(item => item.id === id)[0];
    }
    // getEquipmentRelation (id, array) {

    // }
  },
  watch: {
  },
  computed: {
  }
};
</script>

<style lang="less">
@import url("../assets/css/color.less");
@cardWidth: 55px;

.base-list {
  width: 100%;
  &--card {
    width: @cardWidth;
    height: @cardWidth;
    border-radius: @cardWidth;
    overflow: hidden;
    border: 3px solid @border-color;
    display: inline-block;
    margin-right: 5px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
