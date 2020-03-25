export const items = {
  base: [
    {
      id: 1,
      name: '暴风大剑',
      description: '+15攻击力',
      icon: '/image/base/BF.png'
    },
    {
      id: 2,
      name: '无用大棒',
      description: '+20%技能伤害',
      icon: '/image/base/Rod.png'
    },
    {
      id: 3,
      name: '反曲之弓',
      description: '+15%攻速',
      icon: '/image/base/Bow.png'
    },
    {
      id: 4,
      name: '女神之泪',
      description: '+20法力值',
      icon: '/image/base/Tear.png'
    },
    {
      id: 5,
      name: '锁子甲',
      description: '+25护甲',
      icon: '/image/base/Vest.png'
    },
    {
      id: 6,
      name: '负极斗篷',
      description: '+25魔抗',
      icon: '/image/base/Cape.png'
    },
    {
      id: 7,
      name: '巨人腰带',
      description: '+200生命值',
      icon: '/image/base/Belt.png'
    },
    {
      id: 8,
      name: '拳套',
      description: '+10暴击概率、+10%闪避概率',
      icon: '/image/base/Glove.png'
    },
    {
      id: 9,
      name: '金铲铲',
      description: '可以做点什么...',
      icon: '/image/base/Spatula.png'
    }
  ],
  equipment: [
    {
      id: 102,
      name: '死亡之刃',
      description: '开始获得一层，在击杀或助攻后，获得一层额外的15攻击力，持续到战斗结束(可无限叠加)',
      icon: '/image/equipment/death.png',
      relation: [1, 1]
    },
    {
      id: 100,
      name: '伏击之爪',
      description:
        '在战斗环节开始时，获得一层法术护盾当法术护盾被打破时，对打破该护盾的英雄造成4s晕眩效果',
      icon: '/image/equipment/ambush.png',
      relation: [7, 8]
    },
    {
      id: 101,
      name: '最后的轻语',
      description:
        '暴击会使目标的护甲降低90%，持续3秒。这个效果不会叠加。',
      icon: '/image/equipment/325.png',
      relation: [3, 8]
    },
    {
      id: 103,
      name: '巨人杀手',
      description: '攻击会造成相当于目标9%当前生命值的物理伤害',
      icon: '/image/equipment/giantkiller.png',
      relation: [1, 3]
    },
    {
      id: 104,
      name: '珠光护手',
      description: '携带者的技能可以暴击',
      icon: '/image/equipment/handguard.png',
      relation: [2, 8]
    },
    {
      id: 105,
      name: '静止法衣',
      description: '战斗开始时，向前射出一道光线，使得所有被击中的敌人最大法力值提高40%，直到他们施放一次技能。',
      icon: '/image/equipment/343.png',
      relation: [5, 8]
    },
    {
      id: 106,
      name: '正义之手',
      description: '在战斗环节开始时，要么造成伤害+50%，要么攻击在命中时回复50生命值',
      icon: '/image/equipment/justice.png',
      relation: [4, 8]
    },
    {
      id: 107,
      name: '水银',
      description: '在携带者被控制时，净化该控制效果冷却时间为3秒',
      icon: '/image/equipment/mercury.png',
      relation: [6, 8]
    },
    {
      id: 108,
      name: '窃贼手套',
      description: '这个装备需要占用全部3个物品栏位在备战环节开始时，复制两个随机的装备',
      icon: '/image/equipment/thief.png',
      relation: [8, 8]
    },
    {
      id: 109,
      name: '暗星之心',
      description: '携带者也是一名暗星。',
      icon: '/image/equipment/352.png',
      relation: [8, 9]
    },
    {
      id: 110,
      name: '自然之力',
      description: '+1人口',
      icon: '/image/equipment/force_of_nature.png',
      relation: [9, 9]
    },
    {
      id: 111,
      name: '星之守护者的挂坠',
      description: '携带者也是一名星之守护者。',
      icon: '/image/equipment/337.png',
      relation: [4, 9]
    },
    {
      id: 112,
      name: '卢安娜的飓风',
      description: '攻击一名额外敌人，造成60%伤害，带攻击特效,在同一英雄身上时，后续的【卢安娜的飓风】现在提供1个额外弹体',
      icon: '/image/equipment/runaans_hurricane.png',
      relation: [3, 6]
    },
    {
      id: 113,
      name: '星神法球',
      description: '携带者也是一名星神。',
      icon: '/image/equipment/346.png',
      relation: [6, 9]
    },
    {
      id: 114,
      name: '巨龙之爪',
      description: '装备者获得50%魔抗',
      icon: '/image/equipment/dragons_claw.png',
      relation: [6, 6]
    },
    {
      id: 115,
      name: '冰霜之心',
      description: '相邻敌人-35%攻速持续1秒',
      icon: '/image/equipment/frozen_heart.png',
      relation: [4, 5]
    },
    {
      id: 116,
      name: '泰坦的坚决',
      description: '当携带者打出或受到一次暴击，会获得一层1%伤害的加成，至多叠加100层。在100层时，携带者获得25护甲和魔法抗性',
      icon: '/image/equipment/354.png',
      relation: [3, 5]
    },
    {
      id: 117,
      name: '灭世者的死亡之帽',
      description: '+75%技能伤害',
      icon: '/image/equipment/rabadons_deathcap.png',
      relation: [2, 2]
    },
    {
      id: 118,
      name: '鬼索的狂暴之刃',
      description: '每次攻击增加5%攻击速度，无上限',
      icon: '/image/equipment/guinsoos_rageblade.png',
      relation: [2, 3]
    },
    {
      id: 119,
      name: '基克的先驱',
      description: '战斗开始时，携带者和站在同一排两格内的友军获得+15%攻击速度，持续至本回合战斗环节结束',
      icon: '/image/equipment/zekes_herald.png',
      relation: [1, 7]
    },
    {
      id: 120,
      name: '破败王者之刃',
      description: '携带者也是一名剑士',
      icon: '/image/equipment/blade_of_the_ruined_king.png',
      relation: [1, 9]
    },
    {
      id: 121,
      name: '离子火花',
      description: '3格内的敌人在施放技能时会被震击，受到相当于其225%最大法力值的魔法伤害。',
      icon: '/image/equipment/ionic_spark.png',
      relation: [2, 6]
    },
    {
      id: 122,
      name: '莫雷洛秘典',
      description: '在携带者用技能造成伤害时，会燃烧目标，在10秒里持续造成真实伤害，总额相当于目标20%的最大生命值，并在燃烧期间阻止80%治',
      icon: '/image/equipment/morellonomicon.png',
      relation: [2, 7]
    },
    {
      id: 123,
      name: '守护天使',
      description: '阵亡2秒后复活并恢复400生命值',
      icon: '/image/equipment/guardian_angel.png',
      relation: [1, 5]
    },
    {
      id: 124,
      name: '蜥蜴长老之赐',
      description: '携带者的普通攻击会燃烧目标，在10秒里持续造成真实伤害，总额相当于目标20%的最大生命值，并在燃烧期间阻止80%治疗效果。',
      icon: '/image/equipment/red_buff.png',
      relation: [5, 7]
    },
    {
      id: 125,
      name: '朔极之矛',
      description: '使用技能后每次攻击回复18%最大法力值',
      icon: '/image/equipment/spear_of_shojin.png',
      relation: [1, 4]
    },
    {
      id: 126,
      name: '炽天使之拥',
      description: '佩戴者每次施放技能时，回复20点法力值。',
      icon: '/image/equipment/seraphs_embrace.png',
      relation: [4, 4]
    },
    {
      id: 127,
      name: '棘刺背心',
      description: '使来自暴击的额外伤害变得无效。在被一次普通攻击命中时，对附近的所有敌人造成100/140/200魔法伤害(每2秒最多触发1次)。伤害值随携带者的星级成长。',
      icon: '/image/equipment/339.png',
      relation: [5, 5]
    },
    {
      id: 128,
      name: '灵风',
      description: '开局放逐一个敌军持续6秒【唯一】',
      icon: '/image/equipment/zephyr.png',
      relation: [6, 7]
    },
    {
      id: 129,
      name: '兹若特传送门',
      description: '死亡后，召唤一个拥有1000/2000/4000生命值的虚灵，虚灵可嘲讽附近所有的敌人。',
      icon: '/image/equipment/323.png',
      relation: [3, 7]
    },
    {
      id: 130,
      name: '海克斯科技枪',
      description: '+33%全能吸血',
      icon: '/image/equipment/hextech_gunblade.png',
      relation: [1, 2]
    },
    {
      id: 131,
      name: '疾射火炮',
      description: '攻击距离加倍',
      icon: '/image/equipment/rapid_firecannon.png',
      relation: [3, 3]
    },
    {
      id: 132,
      name: '折剑者',
      description: '普通攻击有25%对敌人造成缴械3秒。',
      icon: '/image/equipment/sword_breaker.png',
      relation: [5, 6]
    },
    {
      id: 133,
      name: '善行圣杯',
      description: '每当你施放技能，为附近的所有友军提供10点法力值',
      icon: '/image/equipment/335.png',
      relation: [4, 6]
    },
    {
      id: 134,
      name: '斯塔缇克电刃',
      description: '每三次普攻造成3个目标100溅射魔法伤害',
      icon: '/image/equipment/statikk_shiv.png',
      relation: [3, 4]
    },
    {
      id: 135,
      name: '卢登的回声',
      description: '技能命中时对目标附近3个单位造成120/160/200魔法伤害(随携带者的等级成长)',
      icon: '/image/equipment/ludens_echo.png',
      relation: [2, 4]
    },
    {
      id: 136,
      name: '爆破专家的电荷',
      description: '携带者也是一名爆破专家',
      icon: '/image/equipment/331.png',
      relation: [2, 9]
    },
    {
      id: 137,
      name: '刺客的利爪',
      description: '携带者也是一名刺客。',
      icon: '/image/equipment/324.jpg',
      relation: [3, 9]
    },
    {
      id: 138,
      name: '无尽之刃',
      description: '携带者增加100%暴击伤害。',
      icon: '/image/equipment/infinity_edge.png',
      relation: [1, 8]
    },
    {
      id: 139,
      name: '圣盾使的胸甲',
      description: '携带者也是一名圣盾使。',
      icon: '/image/equipment/349.png',
      relation: [7, 9]
    },
    {
      id: 140,
      name: '奥德赛勋章',
      description: '携带者也是一名奥德赛。',
      icon: '/image/equipment/342.png',
      relation: [5, 9]
    },
    {
      id: 141,
      name: '饮血剑',
      description: '普通攻击附带50%吸血',
      icon: '/image/equipment/bloodthirster.png',
      relation: [1, 6]
    },
    {
      id: 142,
      name: '救赎',
      description: '在生命值降低到30%时，在2.5秒后治疗附近所有友军1200点生命值。这个效果每场战斗只能触发一次',
      icon: '/image/equipment/redemption.png',
      relation: [4, 7]
    },
    {
      id: 143,
      name: '钢铁烈阳之匣',
      description: '为同一列2格内的友军提供250/275/350生命值的护盾(随携带者的等级成长)，持续8秒。',
      icon: '/image/equipment/locket_of_the_iron_solari.png',
      relation: [2, 5]
    },
    {
      id: 144,
      name: '狂徒铠甲',
      description: '每秒回复已失去生命值的6%',
      icon: '/image/equipment/warmogs_armor.png',
      relation: [7, 7]
    }

  ]
};

export default items;
