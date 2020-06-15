<template>
  <transition name="fade">
    <div class="equipment-list">
      <template v-if="!action">
        <equip-card v-for="(item, index) in currentEqupment" :data="item" :key="index" />
      </template>
      <template v-else>
        <hero-card :currentList="currentProfessionList" :currentHeroList="chessList" :type="action" />
      </template>
    </div>
  </transition>
</template>

<script>
import { remote, ipcRenderer } from 'electron';
// eslint-disable-next-line import/extensions
import { getEquipmentRelation } from '@/common/utils';
import EquipCard from '@/components/equip-card.vue';
import HeroCard from '@/components/hero-card.vue';

export default {
  name: 'Child',
  components: {
    EquipCard, HeroCard
  },
  data() {
    return {
      // showEquipment: true,
      action: '',
      currentWindow: null,
      baseEquipList: [], // 散件
      equipList: [], // 成装
      chessList: [], // 棋子
      // raceList: [], // 羁绊
      // jobList: [], // 职业
      currentEqupment: [], // 当前显示
      currentProfessionList: [] // 当前显示
    };
  },
  async mounted() {
    this.currentWindow = remote.getCurrentWindow();
    ipcRenderer.on('mouse-over', (e, item) => {
      const parentWindow = this.currentWindow.getParentWindow();
      const positionArray = parentWindow.getPosition();
      this.setPosition(positionArray[0], positionArray[1] + parentWindow.getContentSize()[1]);
      this.createList(item);
    });
    // ipcRenderer.on('mouse-out', () => {
    //   this.action = '';
    // });
    this.handleLock();
  },
  methods: {
    async createList(base) {
      this.action = base.action;
      if (base.type === 'menu') {
        this.chessList = await this.$store.dispatch('UPDATE_CHESSLIST');
        const actions = {
          // 羁绊列表
          2: async () => {
            this.currentProfessionList = await this.$store.dispatch('UPDATE_RACELIST');
          },
          // 职业列表
          1: async () => {
            this.currentProfessionList = await this.$store.dispatch('UPDATE_JOBLIST');
          }
        };
        await actions[base.action]();
        return;
      }
      const { formula, equipId } = base;
      const res = await this.$store.dispatch('UPDATE_EQUIPLIST');
      // equipId开头第一个数字代表赛季妈蛋
      this.equipList = res.filter(item => item.type === '2' && item.equipId[0] === this.season);
      this.baseEquipList = res.filter(item => item.type === '1' && item.equipId[0] === this.season);
      this.currentEqupment = getEquipmentRelation(equipId, this.equipList, this.baseEquipList);
    },
    // 开启窗体穿透
    handleLock() {
      this.currentWindow.setIgnoreMouseEvents(true, { forward: true });
    },
    setPosition(x, y) {
      this.currentWindow.setPosition(x, y);
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
@import url("../assets/animate.less");
.equipment-list {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.3s all;
  user-select: none;
}
</style>
