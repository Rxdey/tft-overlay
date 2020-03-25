const professionList = [
  {
    jobId: '1',
    name: '剑士',
    traitId: '1',
    introduce: '【剑士】的攻击有一定的几率触发两次额外的攻击打击。',
    alias: '3001.png',
    level: {
      3: '30%几率触发。',
      6: '55几率触发。'
    },
    TFTID: '24',
    imagePath: 'https://game.gtimg.cn/images/lol/act/img/tft/classes/3001.png'
  },
  {
    jobId: '2',
    name: '爆破专家',
    traitId: '2',
    introduce: '【爆破】英雄施放的技能在对目标造成伤害后，会将目标们晕眩1.5秒。（每次技能施放只会造成1次晕眩)',
    alias: '3002.png',
    level: {
      2: '【爆破】英雄施放的技能在对目标造成伤害后，会将目标们晕眩1.5秒。（每次技能施放只会造成1次晕眩)'
    },
    TFTID: '25',
    imagePath: 'https://game.gtimg.cn/images/lol/act/img/tft/classes/3002.png'
  },
  {
    jobId: '3',
    name: '刺客',
    traitId: '3',
    introduce: '固有：在战斗环节开始时，【渗透者】们会移动到敌人的后排。渗透者在战斗环节开始时获得持续6秒的攻击速度加成。',
    alias: '3003.png',
    level: {
      2: '50%额外攻击速度',
      4: '80%额外攻击速度，参与击杀后刷新'
    },
    TFTID: '26',
    imagePath: 'https://game.gtimg.cn/images/lol/act/img/tft/classes/3003.png'
  },
  {
    jobId: '4',
    name: '斗士',
    traitId: '4',
    introduce: '斗士们获得额外生命值。',
    alias: '3004.png',
    level: {
      2: '+300生命值',
      4: '+750生命值'
    },
    TFTID: '27',
    imagePath: 'https://game.gtimg.cn/images/lol/act/img/tft/classes/3004.png'
  },
  {
    jobId: '5',
    name: '法师',
    traitId: '5',
    introduce: '所有友方获得法术强度提升。',
    alias: '3005.png',
    level: {
      2: '20%法术强度',
      4: '40%法术强度',
      6: '80%法术强度'
    },
    TFTID: '28',
    imagePath: 'https://game.gtimg.cn/images/lol/act/img/tft/classes/3005.png'
  },
  {
    jobId: '6',
    name: '圣盾使',
    traitId: '6',
    introduce: '【护卫】们在每次施放技能时都会为自己提供一个持续4秒的护盾（护盾值基于最大生命值）。这个护盾不会叠加。',
    alias: '3006.png',
    level: {
      2: '20%最大生命值',
      4: '35%最大生命值'
    },
    TFTID: '29',
    imagePath: 'https://game.gtimg.cn/images/lol/act/img/tft/classes/3006.png'
  },
  {
    jobId: '7',
    name: '狙神',
    traitId: '7',
    introduce: '【狙神】对处在自身和目标之间的格子上的敌人们造成提升过的伤害，提升幅度为12%。',
    alias: '3007.png',
    level: {
      2: '【狙神】对处在自身和目标之间的格子上的敌人们造成提升过的伤害，提升幅度为12%。'
    },
    TFTID: '30',
    imagePath: 'https://game.gtimg.cn/images/lol/act/img/tft/classes/3007.png'
  },
  {
    jobId: '8',
    name: '秘术师',
    traitId: '8',
    introduce: '所有友军获得魔法抗性。',
    alias: '3008.png',
    level: {
      2: '+30魔法抗性',
      4: '+120魔法抗性'
    },
    TFTID: '31',
    imagePath: 'https://game.gtimg.cn/images/lol/act/img/tft/classes/3008.png'
  },
  {
    jobId: '9',
    name: '破法战士',
    traitId: '9',
    introduce: '普通攻击会使目标施放下个技能的法力消耗提升40%。',
    alias: '3009.png',
    level: {
      2: '每个战斗环节的初次攻击',
      4: '所有攻击'
    },
    TFTID: '32',
    imagePath: 'https://game.gtimg.cn/images/lol/act/img/tft/classes/3009.png'
  },
  {
    jobId: '10',
    name: '强袭枪手',
    traitId: '10',
    introduce: '每个强袭枪手的每第四次攻击会朝着随机敌人发射若干次额外攻击。这些额外的攻击会像普通攻击一样造成伤害并触发攻击特效。',
    alias: '3010.png',
    level: {
      2: '2次额外攻击',
      4: '5次额外攻击'
    },
    TFTID: '33',
    imagePath: 'https://game.gtimg.cn/images/lol/act/img/tft/classes/3010.png'
  },
  {
    jobId: '11',
    name: '星舰龙神',
    traitId: '11',
    introduce: '固有：【星舰】每秒获得15法力值，围着棋盘不断回旋，并且免疫移动受损效果，但无法进行普通攻击。',
    alias: '3011.png',
    level: {

    },
    TFTID: '34',
    imagePath: 'https://game.gtimg.cn/images/lol/act/img/tft/classes/3011.png'
  },
  {
    jobId: '12',
    name: '佣兵',
    traitId: '12',
    introduce: '佣兵们可以在商店中购买他们的技能升级。',
    alias: '3012.png',
    level: {
      1: '佣兵们可以在商店中购买他们的技能升级。'
    },
    TFTID: '35',
    imagePath: 'https://game.gtimg.cn/images/lol/act/img/tft/classes/3012.png'
  },
  {
    jobId: '13',
    name: '重装战士',
    traitId: '13',
    introduce: '先锋们获得额外护甲。',
    alias: '3013.png',
    level: {
      2: '60护甲',
      4: '250护甲'
    },
    TFTID: '36',
    imagePath: 'https://game.gtimg.cn/images/lol/act/img/tft/classes/3013.png'
  }
];
export default professionList;
