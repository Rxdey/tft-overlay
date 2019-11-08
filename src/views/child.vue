<template>
  <transition name="fade">
    <div class="equipment-list" v-if="showEquipment">
      <template v-if="!action">
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
      </template>
      <template v-if="action === 'combination'">
        <div class="equipment-list--combination">
          <div class="equipment-list--combination__card" v-for="(item, index) in currentProfessionList" :key="index">
            <div class="title">
              <div class="icon"><img :src="item.icon" :alt="item.name"></div>
              <div class="name">{{item.name}}</div>
            </div>
            <div class="body">
              <div class="desc" v-if="item.effect">
                {{item.effect.count + item.effect.text}}
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </transition>
</template>
<script>
import { items } from '../data/equipment';
import elementList from '../data/elementList';
import heroList from '../data/heroList';
import professionList from '../data/professionList';
import { getEquipmentRelation } from '@/common/util';

export default {
  name: 'child',
  data () {
    return {
      base: [],
      equipment: [],
      showEquipment: false,
      currentWindow: null, // 当前窗口
      currentEqupment: [], // 装备列表
      currentHeroList: heroList, // 英雄列表
      currentElementList: elementList, // 元素列表
      currentProfessionList: professionList, // 职业列表
      action: '' // 菜单类型
    };
  },
  mounted () {
    // eslint-disable-next-line global-require
    this.currentWindow = require('electron').remote.getCurrentWindow();
    const { equipment, base } = items;
    this.base = base;
    this.equipment = equipment;
    // eslint-disable-next-line global-require
    require('electron').ipcRenderer.on('over', (e, item) => {
      this.showEquipment = true;
      const parentWindow = this.currentWindow.getParentWindow();
      const positionArray = parentWindow.getPosition();
      this.setPosition(positionArray[0], positionArray[1] + parentWindow.getContentSize()[1]);
      this.createContent(item);
    });
    // eslint-disable-next-line global-require
    require('electron').ipcRenderer.on('out', () => {
      this.showEquipment = false;
    });
    this.handleLock();
  },
  methods: {
    /**
     * 创建详情
     */
    createContent (item) {
      const { id, action = '' } = item;
      this.action = action;
      const actions = {
        combination: () => {
        },
        default: () => {
          this.currentEqupment = getEquipmentRelation(id, this.equipment, this.base);
        }
      };
      actions[action] ? actions[action]() : actions.default();
    },
    handleLock () {
      this.currentWindow.setIgnoreMouseEvents(true, { forward: true });
    },
    setPosition (x, y) {
      this.currentWindow.setPosition(x, y);
    }
  },
  filters: {
    setDesc(value) {
      const length = value.match(/\$d/g).length;
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
  color: @desc-color;
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

  &--combination {
    display: flex;
    flex-flow: row wrap;
    font-size: 11px;
    &__card {
      // flex: 1;
      width: 50%;
      display: flex;
      flex-flow: row;
      margin-bottom: 10px;
      .title {
        width: 60px;
        text-align: center;
      }
      .body{
        margin-left: 5px;
        flex: 1;
      }
      .icon {
        .card(25px);
        border-width: 1px;
        margin: 0 auto;
      }
    }
  }
}
</style>
