<template>
  <div class="equipment-list--list">
    <div class="equipment-list--card left">
      <img :src="data.base.imagePath" :alt="data.base.name">
    </div>
    <div class="equipment-list__line"></div>
    <div class="equipment-list--card">
      <img :src="data.imagePath" :alt="data.name">
    </div>
    <div class="equipment-list--desc">
      <p class="name">{{data.name}}</p>
      <p class="description">{{data.effect}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'equip-card',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="less">
@import url("../assets/public.less");
@import url("../assets/color.less");
@import url("../assets/animate.less");
.equipment-list {
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
}
</style>
