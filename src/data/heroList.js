const heroList = [
  {
    id: 1,
    name: '皎月',
    color: 'white',
    cost: 1,
    img: '/image/hero/1_皎月女神 黛安娜.png',
    profession: ['0'],
    element: ['5']
  },
  {
    id: 2,
    name: '奥恩',
    color: 'white',
    cost: 1,
    img: '/image/hero/2_山隐之焰 奥恩.png',
    profession: ['8'],
    element: ['10']
  },
  {
    id: 3,
    name: '狗头',
    color: 'white',
    cost: 1,
    img: '/image/hero/3_沙漠死神 内瑟斯.png',
    profession: ['8'],
    element: ['3']
  },
  {
    id: 4,
    name: '薇恩',
    color: 'white',
    cost: 1,
    img: '/image/hero/4_暗夜猎手 薇恩.png',
    profession: ['3'],
    element: ['3']
  },
  {
    id: 5,
    name: '岩雀',
    color: 'white',
    cost: 1,
    img: '/image/hero/5_岩雀 塔利亚.png',
    profession: ['5'],
    element: ['11']
  },
  {
    id: 6,
    name: '茂凯',
    color: 'white',
    cost: 1,
    img: '/image/hero/6_扭曲树精 茂凯.png',
    profession: ['11'],
    element: ['6']
  },
  {
    id: 7,
    name: '大嘴',
    color: 'white',
    cost: 1,
    img: '/image/hero/7_深渊巨口 克格莫.png',
    profession: ['9'],
    element: ['0']
  },
  {
    id: 8,
    name: '狼人',
    color: 'white',
    cost: 1,
    img: '/image/hero/8_祖安怒兽 沃里克.png',
    profession: ['9'],
    element: ['13']
  },
  {
    id: 9,
    name: '鳄鱼',
    color: 'white',
    cost: 1,
    img: '/image/hero/9_荒漠屠夫 雷克顿.png',
    profession: ['7'],
    element: ['8']
  },
  {
    id: 10,
    name: '婕拉',
    color: 'white',
    cost: 1,
    img: '/image/hero/10_荆棘之兴 婕拉.png',
    profession: ['10'],
    element: ['5']
  },
  {
    id: 11,
    name: '翠神',
    color: 'white',
    cost: 1,
    img: '/image/hero/11_翠神 艾翁.png',
    profession: ['11'],
    element: ['6']
  },
  {
    id: 12,
    name: '吸血鬼',
    color: 'white',
    cost: 1,
    img: '/image/hero/12_猩红收割者 弗拉基米尔.png',
    profession: ['5'],
    element: ['7']
  },
  {
    id: 13,
    name: '蝎子',
    color: 'green',
    cost: 2,
    img: '/image/hero/13_水晶先锋 斯卡纳.png',
    profession: ['9'],
    element: ['12']
  },
  {
    id: 14,
    name: '妮蔻',
    color: 'green',
    cost: 2,
    img: '/image/hero/14_万花通灵 妮蔻.png',
    profession: ['11'],
    element: ['6']
  },
  {
    id: 15,
    name: '狗熊',
    color: 'green',
    cost: 2,
    img: '/image/hero/15_雷霆咆哮 沃利贝尔.png',
    profession: ['7'],
    element: ['10', '13']
  },
  {
    id: 16,
    name: '马扎',
    color: 'green',
    cost: 2,
    img: '/image/hero/16_虚空先知 马尔扎哈.png',
    profession: ['10'],
    element: ['4']
  },
  {
    id: 17,
    name: '亚索',
    color: 'green',
    cost: 2,
    img: '/image/hero/17_疾风剑豪 亚索.png',
    profession: ['2'],
    element: ['2']
  },
  {
    id: 18,
    name: '韦鲁斯',
    color: 'green',
    cost: 2,
    img: '/image/hero/18_惩戒之箭 韦鲁斯.png',
    profession: ['3'],
    element: ['5']
  },
  {
    id: 19,
    name: '武器',
    color: 'green',
    cost: 2,
    img: '/image/hero/19_武器大师 贾克斯.png',
    profession: ['7'],
    element: ['3']
  },
  {
    id: 20,
    name: '挖掘机',
    color: 'green',
    cost: 2,
    img: '/image/hero/20_虚空遁地兽 雷克塞,挖掘机.png',
    profession: ['9'],
    element: ['9']
  },
  {
    id: 21,
    name: '布隆',
    color: 'green',
    cost: 2,
    img: '/image/hero/21_弗雷尔卓德之心 布隆.png',
    profession: ['8'],
    element: ['13']
  },
  {
    id: 22,
    name: '锤石',
    color: 'green',
    cost: 2,
    img: '/image/hero/22_魂锁典狱长 锤石.png',
    profession: ['8'],
    element: ['7']
  },
  {
    id: 23,
    name: '辛德拉',
    color: 'green',
    cost: 2,
    img: '/image/hero/23_暗黑元首 辛德拉.png',
    profession: ['5'],
    element: ['7']
  },
  {
    id: 24,
    name: '妖姬',
    color: 'green',
    cost: 2,
    img: '/image/hero/24_诡术妖姬 乐芙兰.png',
    profession: ['5', '0'],
    element: ['6']
  },
  {
    id: 25,
    name: '剑魔',
    color: 'blue',
    cost: 3,
    img: '/image/hero/25_暗裔剑魔 亚托克斯.png',
    profession: ['2'],
    element: ['3']
  },
  {
    id: 26,
    name: '塞恩',
    color: 'blue',
    cost: 3,
    img: '/image/hero/26_亡灵战士 塞恩.png',
    profession: ['7'],
    element: ['4']
  },
  {
    id: 27,
    name: '小法',
    color: 'blue',
    cost: 3,
    img: '/image/hero/27_邪恶小法师 维嘉,小法.png',
    profession: ['5'],
    element: ['4']
  },
  {
    id: 28,
    name: '星妈',
    color: 'blue',
    cost: 3,
    img: '/image/hero/28_众星之子 索拉卡.png',
    profession: ['4'],
    element: ['3']
  },
  {
    id: 29,
    name: '千珏',
    color: 'blue',
    cost: 3,
    img: '/image/hero/29_永猎双子 千珏.png',
    profession: ['3'],
    element: ['4', '5']
  },
  {
    id: 30,
    name: '轮子妈',
    color: 'blue',
    cost: 3,
    img: '/image/hero/30_战争女神 希维尔.png',
    profession: ['2'],
    element: ['8']
  },
  {
    id: 31,
    name: 'EZ',
    color: 'blue',
    cost: 3,
    img: '/image/hero/31_探险家 伊泽瑞尔.png',
    profession: ['3'],
    element: ['13']
  },
  {
    id: 32,
    name: '梦魇',
    color: 'blue',
    cost: 3,
    img: '/image/hero/32_永恒梦魇 魔腾.png',
    profession: ['0'],
    element: ['9']
  },
  {
    id: 33,
    name: '蒙多',
    color: 'blue',
    cost: 3,
    img: '/image/hero/33_祖安狂人 蒙多.png',
    profession: ['7'],
    element: ['0']
  },
  {
    id: 34,
    name: '泰坦',
    color: 'blue',
    cost: 3,
    img: '/image/hero/34_深海泰坦 诺提勒斯.png',
    profession: ['8'],
    element: ['7']
  },
  {
    id: 35,
    name: '沙皇',
    color: 'blue',
    cost: 3,
    img: '/image/hero/35_沙漠皇帝 阿兹尔.png',
    profession: ['10'],
    element: ['8']
  },
  {
    id: 36,
    name: '琪亚娜',
    color: 'blue',
    cost: 3,
    img: '/image/hero/36_元素女皇 琪亚娜.png',
    profession: ['0'],
    element: ['']
  },
  {
    id: 40,
    name: '奥拉夫',
    color: 'purple',
    cost: 4,
    img: '/image/hero/40_狂战士 奥拉夫.png',
    profession: ['7'],
    element: ['13']
  },
  {
    id: 41,
    name: '牧魂人',
    color: 'purple',
    cost: 4,
    img: '/image/hero/41_牧魂人 约里克.png',
    profession: ['10'],
    element: ['3']
  },
  {
    id: 42,
    name: '火男',
    color: 'purple',
    cost: 4,
    img: '/image/hero/42_复仇焰魂 布兰德,火男.png',
    profession: ['5'],
    element: ['5']
  },
  {
    id: 43,
    name: '图奇',
    color: 'purple',
    cost: 4,
    img: '/image/hero/43_瘟疫之源 图奇.png',
    profession: ['3'],
    element: ['0']
  },
  {
    id: 44,
    name: '迦娜',
    color: 'purple',
    cost: 4,
    img: '/image/hero/44_风暴之怒 迦娜.png',
    profession: ['4'],
    element: ['2']
  },
  {
    id: 45,
    name: '螳螂',
    color: 'purple',
    cost: 4,
    img: '/image/hero/45_虚空掠夺者 卡兹克.png',
    profession: ['0'],
    element: ['8']
  },
  {
    id: 46,
    name: '安妮',
    color: 'purple',
    cost: 4,
    img: '/image/hero/46_黑暗之女 安妮.png',
    profession: ['10'],
    element: ['5']
  },
  {
    id: 47,
    name: '艾希',
    color: 'purple',
    cost: 4,
    img: '/image/hero/47_寒冰射手 艾希.png',
    profession: ['3'],
    element: ['12']
  },
  {
    id: 48,
    name: '石头人',
    color: 'purple',
    cost: 4,
    img: '/image/hero/48_熔岩巨兽 墨菲特.png',
    profession: ['8'],
    element: ['11']
  },
  {
    id: 49,
    name: '炼金',
    color: 'gold',
    cost: 5,
    img: '/image/hero/49_炼金术师 辛吉德.png',
    profession: ['12'],
    element: ['0']
  },
  {
    id: 50,
    name: '劫',
    color: 'gold',
    cost: 5,
    img: '/image/hero/50_影流之主 劫.png',
    profession: ['0', '10'],
    element: ['10']
  },
  {
    id: 51,
    name: '宝石',
    color: 'gold',
    cost: 5,
    img: '/image/hero/51_宝石骑士 塔里克.png',
    profession: ['8'],
    element: ['12']
  },
  {
    id: 52,
    name: '剑圣',
    color: 'gold',
    cost: 5,
    img: '/image/hero/52_无极剑圣 易大师.png',
    profession: ['2', '4'],
    element: ['4']
  },
  {
    id: 54,
    name: '娜美',
    color: 'gold',
    cost: 5,
    img: '/image/hero/54_唤潮鲛姬 娜美.png',
    profession: ['4'],
    element: ['7']
  },
  {
    id: 55,
    name: '光辉',
    color: 'colorful',
    cost: 7,
    img: '/image/hero/55_大元素使 拉克丝.png',
    profession: ['6'],
    element: ['2', '3', '4', '5', '6', '7', '9', '10', '12', '13']
  }
  // {
  //   id: 56,
  //   name: '拉克丝',
  //   color: 'colorful',
  //   cost: 7,
  //   img: '/image/hero/56_大元素使 拉克丝.png',
  //   profession: ['6'],
  //   element: ['3']
  // },
  // {
  //   id: 57,
  //   name: '拉克丝',
  //   color: 'colorful',
  //   cost: 7,
  //   img: '/image/hero/57_大元素使 拉克丝.png',
  //   profession: ['6'],
  //   element: ['4']
  // },
  // {
  //   id: 58,
  //   name: '拉克丝',
  //   color: 'colorful',
  //   cost: 7,
  //   img: '/image/hero/58_大元素使 拉克丝.png',
  //   profession: ['6'],
  //   element: ['5']
  // },
  // {
  //   id: 59,
  //   name: '拉克丝',
  //   color: 'colorful',
  //   cost: 7,
  //   img: '/image/hero/59_大元素使 拉克丝.png',
  //   profession: ['6'],
  //   element: ['6']
  // },
  // {
  //   id: 60,
  //   name: '拉克丝',
  //   color: 'colorful',
  //   cost: 7,
  //   img: '/image/hero/60_大元素使 拉克丝.png',
  //   profession: ['6'],
  //   element: ['7']
  // },
  // {
  //   id: 61,
  //   name: '拉克丝',
  //   color: 'colorful',
  //   cost: 7,
  //   img: '/image/hero/61_大元素使 拉克丝.png',
  //   profession: ['6'],
  //   element: ['9']
  // },
  // {
  //   id: 62,
  //   name: '拉克丝',
  //   color: 'colorful',
  //   cost: 7,
  //   img: '/image/hero/62_大元素使 拉克丝.png',
  //   profession: ['6'],
  //   element: ['10']
  // },
  // {
  //   id: 63,
  //   name: '拉克丝',
  //   color: 'colorful',
  //   cost: 7,
  //   img: '/image/hero/63_大元素使 拉克丝.png',
  //   profession: ['6'],
  //   element: ['12']
  // },
  // {
  //   id: 64,
  //   name: '拉克丝',
  //   color: 'colorful',
  //   cost: 7,
  //   img: '/image/hero/64_大元素使 拉克丝.png',
  //   profession: ['6'],
  //   element: ['13']
  // }
];

export default heroList;
