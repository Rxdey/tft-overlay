<template>
  <div class="home">
    <div class="base-list">
      <div class="base-list--card" :class="item.type" v-for="(item, index) in base" :key="index">
        <img @mouseenter.stop="handleMouseOver($event, item, index)" @mouseout.stop="handleMouseOut" :src="item.icon" :alt="item.name">
      </div>
    </div>
  </div>
</template>

<script>
import { items } from '../data/equipment';
import menu from '../data/menu';

export default {
  name: 'Home',
  data () {
    return {
      base: [],
      equipment: [],
      showEquipment: false,
      currentEqupment: [],
      currentWindow: null,
      prograssStyle: {
        width: 0
      },
      stepText: '发现新版本'
    };
  },
  mounted () {
    // eslint-disable-next-line global-require
    this.currentWindow = require('electron').remote.getCurrentWindow();
    const { equipment, base } = items;
    this.base = [...base, ...menu];
    this.equipment = equipment;
  },
  methods: {
    // checkUpdate () {
    //   const self = this;
    //   // eslint-disable-next-line global-require
    //   require('electron').ipcRenderer.send('checkUpdate');
    //   // eslint-disable-next-line global-require
    //   require('electron').ipcRenderer.on('downloadProgress', (event, data) => {
    //     self.prograssStyle.width = `${data.percent.toFixed(2)}%`;// 更新进度条样式
    //     self.stepText = `正在更新中(${self.prograssStyle.width})...`;
    //   });
    //   // eslint-disable-next-line global-require
    //   require('electron').ipcRenderer.on('message', (event, data) => {
    //     self.stepText = data.msg;
    //     // eslint-disable-next-line default-case
    //     switch (data.status) {
    //       case -1:
    //         alert(data.msg);
    //         // 退出程序
    //         this.$electron.ipcRenderer.send('logout');
    //         break;
    //       case 2:
    //         self.downloadDb();// 下载sqlite数据库文件
    //         break;
    //     }
    //   });
    // },
    // 显示列表
    handleMouseOver (e, item) {
      if (!this.showEquipment) this.showEquipment = true;
      // const { id, type, combination } = item;
      // eslint-disable-next-line global-require
      require('electron').ipcRenderer.send('over', item);
      // this.currentEqupment = this.getEquipmentRelation(id, this.equipment, this.base);
    },
    handleMouseOut () {
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
    &.menu {
      border-color: #000;
      &:hover {
        border-color: #7f7f7f;
      }
    }
  }
}
</style>
