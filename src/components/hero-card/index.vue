<template>
  <div class="equipment-list--combination">
    <div class="equipment-list--combination__card" v-for="(item, index) in currentProfessionList" :key="index">
      <div class="title">
        <div class="icon"><img :src="item.icon" :alt="item.name"></div>
        <p class="name">{{item.name}}</p>
        <p class="level">{{item.level}}</p>
      </div>
      <div class="body">
        <div class="desc">
          <span>{{item.effect}}</span>
        </div>
        <div class="hero-list">
          <div class="hero-block" v-for="(hero, i) in findHero(item.code)" :key="i">
            <div class="hero-icon"><img :src="hero.img"></div>
            <div class="hero-name">{{hero.name}}</div>
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
      default: 'profession'
    }
  },
  data () {
    return {};
  },
  methods: {
    findHero (code) {
      return this.currentHeroList.filter(item => item[this.type].includes(code));
    }
  },
  computed: {},
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
        width: 50px;
        text-align: center;
      }
      .body {
        margin-left: 5px;
        flex: 1;
      }
      .icon {
        .card(25px);
        border-width: 1px;
        margin: 0 auto 3px auto;
      }
      .level {
        color: aqua;
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
        @width: 20px;
        width: 30px;
        .hero-icon {
          width: @width;
          height: @width;
          overflow: hidden;
          border-radius: @width;
          margin-bottom: 2px;
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
