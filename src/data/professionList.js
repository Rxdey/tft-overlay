const professionList = [
  {
    name: '刺客',
    code: '0',
    requiredCount: [
      { desc: '获得75%暴击伤害和10%暴击几率', count: 3 },
      { desc: '获得150%暴击伤害和20%暴击率', count: 6 }
    ],
    effect: {
      count: '3/6',
      value: '75%/150%, 10%/20%',
      text: '获得$d暴击伤害和$d暴击几率'
    },
    icon: '/image/profession/0_刺客.png'
  },
  {
    name: '剑士',
    code: '2',
    requiredCount: [
      { desc: '每次攻击有40%几率打出1次额外攻击', count: 2 },
      { desc: '每次攻击有40%几率打出2次额外攻击', count: 4 },
      { desc: '每次攻击有40%几率打出4次额外攻击', count: 6 }
    ],
    icon: '/image/profession/2_剑士.png'
  },
  {
    name: '游侠',
    code: '3',
    requiredCount: [
      { desc: '每过3秒,有25%几率使自身的攻速翻倍,持续3秒', count: 2 },
      { desc: '每过3秒,有70%几率使自身的攻速翻倍,持续3秒', count: 4 },
      { desc: '每过3秒,有100%几率使自身的攻速翻倍,持续3秒', count: 6 }
    ],
    icon: '/image/profession/3_游侠.png'
  },
  {
    name: '秘术',
    code: '4',
    requiredCount: [
      { desc: '所有友军获得70魔抗', count: 2 },
      { desc: '所有友军获得150魔抗', count: 4 }
    ],
    icon: '/image/profession/4_秘术.png'
  },
  {
    name: '法师',
    code: '5',
    requiredCount: [
      { desc: '施法后有50%几率再次施法', count: 3 },
      { desc: '施法后有100%几率再次施法', count: 6 }
    ],
    icon: '/image/profession/5_法师.png'
  },
  {
    name: '大元素使',
    code: '6',
    requiredCount: [{ desc: '大元素使英雄在计算种族羁绊时算作2个单位', count: 1 }],
    icon: '/image/profession/6_大元素使.png'
  },
  {
    name: '狂战士',
    code: '7',
    requiredCount: [
      { desc: '战斗开始时,狂战士会跳向最近的敌人,普攻有40%几率造成顺劈,造成100%伤害', count: 3 },
      { desc: '战斗开始时,狂战士会跳向最近的敌人,普攻有80%几率造成顺劈,造成100%伤害', count: 6 }
    ],
    icon: '/image/profession/7_狂战士.png'
  },
  {
    name: '守护神',
    code: '8',
    requiredCount: [
      { desc: '守护神的总护甲提高100%', count: 2 },
      { desc: '守护神的总护甲提高250%', count: 4 },
      { desc: '守护神的总护甲提高400%', count: 6 }
    ],
    icon: '/image/profession/8_守护神.png'
  },
  {
    name: '掠食者',
    code: '9',
    requiredCount: [{ desc: '对生命值低于25%的敌人直接处决', count: 3 }],
    icon: '/image/profession/9_掠食者.png'
  },
  {
    name: '召唤使',
    code: '10',
    requiredCount: [
      { desc: '召唤物持续时间延长并获得额外40%生命值', count: 3 },
      { desc: '召唤物持续时间延长并获得额外100%生命值', count: 6 }
    ],
    icon: '/image/profession/10_召唤使.png'
  },
  {
    name: '德鲁伊',
    code: '11',
    requiredCount: [{ desc: '每秒回复40生命值', count: 2 }],
    icon: '/image/profession/11_德鲁伊.png'
  },
  {
    name: '炼金师',
    code: '12',
    requiredCount: [{ desc: '炼金师无视单位碰撞体积,会不停的跑来跑去', count: 1 }],
    icon: '/image/profession/12_炼金师.png'
  }
];
export default professionList;
