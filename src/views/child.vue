<template>
  <transition name="fade">
    <div class="equipment-list" v-if="showEquipment">
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
</template>
<script>
import { items } from '../data/equipment';
import { getEquipmentById, getEquipmentRelation } from '@/common/util';

export default {
  name: 'child',
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
    // eslint-disable-next-line global-require
    require('electron').ipcRenderer.on('over', (e, id) => {
      this.showEquipment = true;
      const parentWindow = this.currentWindow.getParentWindow();
      // this.setPosition()
      const positionArray = parentWindow.getPosition();
      this.setPosition(positionArray[0], positionArray[1] + parentWindow.getContentSize()[1]);
      this.currentEqupment = getEquipmentRelation(id, this.equipment, this.base);
    });
    // eslint-disable-next-line global-require
    require('electron').ipcRenderer.on('out', (e, id) => {
      this.showEquipment = false;
    });
    this.handleLock();
  },
  methods: {
    handleLock () {
      this.currentWindow.setIgnoreMouseEvents(true, { forward: true });
    },
    setPosition(x, y) {
      this.currentWindow.setPosition(x, y);
    }
  },
  computed: {},
  watch: {},
  components: {
  }
};
</script>
<style lang="less" >
@import url("../assets/css/public.less");
@import url("../assets/css/color.less");
@import url("../assets/css/animate.less");
.equipment-list {
  position: absolute;
  top: 0;
  left: 0;
  // height: 100%;
  padding: 10px;
  width: 90%;
  background: #000;
  transition: 0.3s all;
  user-select: none;
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
