<template>
  <div class="equipment-list--combination">
    <div class="equipment-list--combination__card" v-for="(item, index) in currentProfessionList" :key="index">
      <div class="title">
        <div class="icon"><img :src="item.imagePath" :alt="item.name"></div>
        <p class="name">{{item.name}}</p>
        <p class="level">{{item.level | getObjectKey}}</p>
      </div>
      <div class="body">
        <div class="desc">
          <span v-html="getDesc(item)"></span>
        </div>
        <div class="hero-list">
          <div class="hero-block" v-for="(hero, i) in getHeroByJob(item)" :key="i">
            <div class="hero-icon"><img :src="'http://game.gtimg.cn/images/lol/act/img/tft/champions/' +hero.name"></div>
            <div class="hero-name">{{hero.displayName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeroCard',
  props: {
    currentProfessionList: {
      type: Array,
      default: () => []
    },
    currentHeroList: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {};
  },
  methods: {
    // findHero (code) {
    //   return this.currentHeroList.filter(item => item[this.type].includes(code));
    // }
    getHeroByJob (data) {
      return this.currentHeroList.filter(item => item[`${this.keyName}s`].split(',').includes(data[this.keyName]));
    },
    getDesc (val) {
      if (!Object.keys(val.level).length) return val.introduce;
      const level = Object.keys(val.level).reduce((prve, next) => {
        prve += `${val.level[next]}/`;
        return prve;
      }, '');
      return val.introduce === level.substring(0, level.length - 1) ? val.introduce : `${val.introduce}<br/>${level.substring(0, level.length - 1)}`;
    }
  },
  filters: {
    getObjectKey (val) {
      if (!Object.keys(val).length) return '1';
      const name = Object.keys(val).reduce((prve, next) => {
        prve += `${next}/`;
        return prve;
      }, '');
      return name.substring(0, name.length - 1);
    }
  },
  computed: {
    keyName () {
      const actions = {
        1: 'jobId',
        2: 'raceId'
      };
      return actions[this.type];
    }
  },
  watch: {},
  components: {
  },
  mounted () {
  }
};
</script>
<style lang = "less" >
@import url("../../assets/css/public.less");
@import url("../../assets/css/color.less");
@import url("../../assets/css/animate.less");

.equipment-list {
  &--combination {
    display: flex;
    flex-flow: row wrap;
    font-size: 10px;
    &__card {
      // flex: 1;
      width: 50%;
      display: flex;
      flex-flow: row;
      /* margin-bottom: 10px; */
      .title {
        width: 60px;
        text-align: center;
      }
      .body {
        margin-left: 5px;
        flex: 1;
      }
      .icon {
        .card(40px);
        border-width: 1px;
        margin: 0 auto 3px auto;
        padding: 5px;
      }
      .level {
        color: aqua;
        margin-bottom: 3px;
      }
      .name {
        color: aqua;
        margin-bottom: 3px;
      }
    }
    .hero-list {
      display: flex;
      flex-flow: row wrap;
      margin-top: 5px;
      .hero-block {
        margin-left: 5px;
        margin-bottom: 5px;
        text-align: center;
        @width: 25px;
        width: 40px;
        .hero-name {
          font-size: 11px;
          transform: scale(0.8);
        }
        .hero-icon {
          width: @width;
          height: @width;
          overflow: hidden;
          border-radius: @width;
          /* margin-bottom: 3px; */
          margin: 0 auto 3px auto;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
