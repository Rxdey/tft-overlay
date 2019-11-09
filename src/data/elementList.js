const elementList = [
  {
    name: '剧毒',
    code: '0',
    requiredCount: [
      {
        desc: '对目标造成伤害后会施加神经毒素效果，目标施法所需的法力值提高50%',
        count: 3
      }
    ],
    icon: '/image/element/0_剧毒.png',
    effect: '对目标造成伤害后会施加神经毒素效果，目标施法所需的法力值提高50%',
    level: '3'
  },
  {
    name: '云霄',
    code: '2',
    requiredCount: [
      { desc: '所有友军获得25%闪避率', count: 2 },
      { desc: '所有友军获得40%闪避率', count: 3 },
      { desc: '所有友军获得55%闪避率', count: 4 }
    ],
    icon: '/image/element/2_云霄.png',
    effect: '所有友军获得25%/40%/55%闪避率',
    level: '2/3/4'
  },
  {
    name: '光',
    code: '3',
    requiredCount: [
      {
        desc: '一名光单位死亡后，其他光单位获得10%攻速，并回复25%的生命值',
        count: 3
      },
      {
        desc: '一名光单位死亡后，其他光单位获得25%攻速，并回复25%的生命值',
        count: 6
      },
      {
        desc: '一名光单位死亡后，其他光单位获得50%攻速，并回复25%的生命值',
        count: 9
      }
    ],
    icon: '/image/element/3_光.png',
    effect: '一名光单位死亡后，其他光单位获得10%/25%/50%攻速，并回复25%的生命值',
    level: '3/6/9'
  },
  {
    name: '影',
    code: '4',
    requiredCount: [
      {
        desc: '暗英雄在战斗开始后会在一段时间内的获得50%伤害提升，这个效果会在参与击杀后刷新',
        count: 2
      },
      {
        desc: '暗英雄在战斗开始后会在一段时间内的获得100%伤害提升，这个效果会在参与击杀后刷新',
        count: 4
      }
    ],
    icon: '/image/element/4_影.png',
    effect: '暗英雄在战斗开始后会在一段时间内的获得50%/100%伤害提升，这个效果会在参与击杀后刷新',
    level: '2/4'
  },
  {
    name: '地狱火',
    code: '5',
    requiredCount: [
      {
        desc: '炼狱单位的技能会灼烧目标区域，持续5秒，造成80%技能伤害的魔法伤害',
        count: 3
      },
      {
        desc: '炼狱单位的技能会灼烧目标区域，持续5秒，造成150%技能伤害的魔法伤害',
        count: 6
      },
      {
        desc: '炼狱单位的技能会灼烧目标区域，持续5秒，造成250%技能伤害的魔法伤害',
        count: 9
      }
    ],
    icon: '/image/element/5_地狱火.png',
    effect: '炼狱单位的技能会灼烧目标区域，持续5秒，造成80%/150%/250%技能伤害的魔法伤害',
    level: '3/6/9'
  },
  {
    name: '森林',
    code: '6',
    requiredCount: [{ desc: '战斗开始时，随机一名林地英雄召唤出自身的分身', count: 3 }],
    icon: '/image/element/6_森林.png',
    effect: '战斗开始时，随机一名林地英雄召唤出自身的分身',
    level: '3'
  },
  {
    name: '海洋',
    code: '7',
    requiredCount: [
      { desc: '所有友军每3秒额外获得10法力值', count: 2 },
      { desc: '所有友军每3秒额外获得25法力值', count: 4 },
      { desc: '所有友军每3秒额外获得40法力值', count: 6 }
    ],
    icon: '/image/element/7_海洋.png',
    effect: '所有友军每3秒额外获得10/25/40法力值',
    level: '2/4/6'
  },
  {
    name: '沙漠',
    code: '8',
    requiredCount: [
      { desc: '获得50%的护甲穿透', count: 2 },
      { desc: '获得90%的护甲穿透', count: 4 }
    ],
    icon: '/image/element/8_沙漠.png',
    effect: '获得50%/90%的护甲穿透',
    level: '2/4'
  },
  {
    name: '钢铁',
    code: '9',
    requiredCount: [
      { desc: '生命值低于50%时，免疫所有伤害，持续2秒', count: 2 },
      { desc: '生命值低于50%时，免疫所有伤害，持续3秒', count: 3 },
      { desc: '生命值低于50%时，免疫所有伤害，持续4秒', count: 4 }
    ],
    icon: '/image/element/9_钢铁.png',
    effect: '生命值低于50%时，免疫所有伤害，持续2/3/4秒',
    level: '2/3/4'
  },
  {
    name: '雷霆',
    code: '10',
    requiredCount: [
      {
        desc: '每当闪电单位造成或承受暴击时，会对周围敌人造成60伤害',
        count: 2
      },
      {
        desc: '每当闪电单位造成或承受暴击时，会对周围敌人造成200伤害',
        count: 4
      },
      {
        desc: '每当闪电单位造成或承受暴击时，会对周围敌人造成500伤害',
        count: 6
      }
    ],
    icon: '/image/element/10_雷霆.png',
    effect: '每当闪电单位造成或承受暴击时，会对周围敌人造成60/200/500伤害',
    level: '2/4/6'
  },
  {
    name: '山脉',
    code: '11',
    requiredCount: [{ desc: '战斗开始时，随机一名友军获得一层1500的岩石护盾', count: 2 }],
    icon: '/image/element/11_山脉.png',
    effect: '战斗开始时，随机一名友军获得一层1500的岩石护盾',
    level: '2'
  },
  {
    name: '水晶',
    code: '12',
    requiredCount: [
      { desc: '水晶英雄从单次技能或攻击中最高受到100最大伤害', count: 2 },
      { desc: '水晶英雄从单次技能或攻击中最高受到60最大伤害', count: 4 }
    ],
    icon: '/image/element/12_水晶.png',
    effect: '水晶英雄从单次技能或攻击中最高受到100/60最大伤害',
    level: '2/4'
  },
  {
    name: '极地',
    code: '13',
    requiredCount: [
      { desc: '攻击有20%几率对目标造成持续1.5秒的晕眩效果', count: 2 },
      { desc: '攻击有40%几率对目标造成持续1.5秒的晕眩效果', count: 4 },
      { desc: '攻击有60%几率对目标造成持续1.5秒的晕眩效果', count: 6 }
    ],
    icon: '/image/element/13_极地.png',
    effect: '攻击有20%/40%/60%几率对目标造成持续1.5秒的晕眩效果',
    level: '2/4/6'
  }
];
module.exports = elementList;
// export default elementList;