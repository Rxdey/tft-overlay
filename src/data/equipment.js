export const baseUrl = '/image/base/';
export const equipmentUrl = '/image/equipment/';
export const items = {
  base: [
    {
      id: 1,
      name: '暴风大剑',
      description: '+15攻击力',
      icon: 'BF.png'
    },
    {
      id: 2,
      name: '无用大棒',
      description: '+20%技能伤害',
      icon: 'Rod.png'
    },
    {
      id: 3,
      name: '反曲之弓',
      description: '+20%攻速',
      icon: 'Bow.png'
    },
    {
      id: 4,
      name: '女神之泪',
      description: '+20法力值',
      icon: 'Tear.png'
    },
    {
      id: 5,
      name: '锁子甲',
      description: '+20护甲',
      icon: 'Vest.png'
    },
    {
      id: 6,
      name: '负极斗篷',
      description: '+20魔抗',
      icon: 'Cape.png'
    },
    {
      id: 7,
      name: '巨人腰带',
      description: '+200生命值',
      icon: 'Belt.png'
    },
    {
      id: 8,
      name: '拳套',
      description: '+10暴击概率、+10%闪避概率',
      icon: 'Glove.png'
    },
    {
      id: 9,
      name: '金铲铲',
      description: '可以做点什么...',
      icon: 'Spatula.png'
    }
  ],
  equipment: [
    {
      id: 100,
      name: '伏击之爪',
      description: '在战斗环节开始时，获得一层法术护盾。当法术护盾被打破时，对打破该护盾的英雄造成晕眩效果',
      icon: 'ambush.png',
      relation: [7, 8]
    },
    {
      id: 101,
      name: '复用型十字弩',
      description: '在携带者死亡时，这个装备会跳到一名友方英雄身上并提供额外的20%攻击速度和暴击几率',
      icon: 'Cross.png',
      relation: [3, 8]
    },
    {
      id: 103,
      name: '死亡之刃',
      description: '在击杀或助攻后，获得一层额外的15攻击力，持续到战斗结束(可无限叠加)',
      icon: 'death.png',
      relation: [1, 1]
    },
    {
      id: 104,
      name: '巨人杀手',
      description: '攻击会造成相当于目标5%最大生命值的额外真实伤害',
      icon: 'giantkiller.png',
      relation: [8, 3]
    },
    {
      id: 105,
      name: '珠光护手',
      description: '携带者的技能可以暴击',
      icon: 'handguard.png',
      relation: [2, 8]
    },
    {
      id: 106,
      name: '冰脉护手',
      description: '携带者在闪避时会创造一个可延展的区域，区域内的敌人会减少35%攻速。',
      icon: 'Iceveins.png',
      relation: [5, 8]
    },
    {
      id: 107,
      name: '正义之手',
      description: '在战斗环节开始时，要么造成伤害+40%，要么攻击在命中时回复40生命值',
      icon: 'justice.png',
      relation: [4, 8]
    },
    {
      id: 108,
      name: '水银',
      description: '在携带者被控制时，净化该控制效果。冷却时间为5秒',
      icon: 'mercury.png',
      relation: [6, 8]
    },
    {
      id: 109,
      name: '窃贼手套',
      description: '这个装备需要占用全部3个物品栏位。在备战环节开始时，复制两个随机的装备',
      icon: 'thief.png',
      relation: [8, 8]
    },
    {
      id: 109,
      name: '连指手套',
      description: '这个英雄也被视作一个约德尔人',
      icon: 'yueder.png',
      relation: [8, 9]
    }
  ]
};

export default items;
