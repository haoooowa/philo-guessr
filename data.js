// 哲学家和名言数据库
const PHILOSOPHERS = [
  // ========================
  // 中国哲学 — 先秦
  // ========================
  {
    id: 'confucius',
    name: '孔子 (Confucius)',
    school: '儒家',
    era: '先秦',
    tradition: '东方',
    quotes: [
      '己所不欲，勿施于人。',
      '学而不思则罔，思而不学则殆。',
      '知之者不如好之者，好之者不如乐之者。',
      '三人行，必有我师焉。择其善者而从之，其不善者而改之。'
    ]
  },
  {
    id: 'mencius',
    name: '孟子 (Mencius)',
    school: '儒家',
    era: '先秦',
    tradition: '东方',
    quotes: [
      '民为贵，社稷次之，君为轻。',
      '生于忧患，死于安乐。',
      '富贵不能淫，贫贱不能移，威武不能屈，此之谓大丈夫。',
      '恻隐之心，人皆有之；羞恶之心，人皆有之。'
    ]
  },
  {
    id: 'laozi',
    name: '老子 (Laozi)',
    school: '道家',
    era: '先秦',
    tradition: '东方',
    quotes: [
      '道可道，非常道；名可名，非常名。',
      '上善若水。水善利万物而不争。',
      '千里之行，始于足下。',
      '为学日益，为道日损。'
    ]
  },
  {
    id: 'zhuangzi',
    name: '庄子 (Zhuangzi)',
    school: '道家',
    era: '先秦',
    tradition: '东方',
    quotes: [
      '天地与我并生，而万物与我为一。',
      '子非鱼，安知鱼之乐？',
      '吾生也有涯，而知也无涯。以有涯随无涯，殆已！',
      '相濡以沫，不如相忘于江湖。'
    ]
  },
  {
    id: 'mozi',
    name: '墨子 (Mozi)',
    school: '墨家',
    era: '先秦',
    tradition: '东方',
    quotes: [
      '兼相爱，交相利。',
      '天下兼相爱则治，交相恶则乱。',
      '赖其力者生，不赖其力者不生。'
    ]
  },
  {
    id: 'hanfeizi',
    name: '韩非子 (Han Feizi)',
    school: '法家',
    era: '先秦',
    tradition: '东方',
    quotes: [
      '以法为教，以吏为师。',
      '刑过不避大臣，赏善不遗匹夫。',
      '治强生于法，弱乱生于阿。',
      '世异则事异，事异则备变。'
    ]
  },
  {
    id: 'xunzi',
    name: '荀子 (Xunzi)',
    school: '儒家',
    era: '先秦',
    tradition: '东方',
    quotes: [
      '人之性恶，其善者伪也。',
      '青，取之于蓝，而青于蓝。',
      '不积跬步，无以至千里；不积小流，无以成江海。'
    ]
  },

  // ========================
  // 中国哲学 — 宋明
  // ========================
  {
    id: 'zhuxi',
    name: '朱熹 (Zhu Xi)',
    school: '儒家（理学）',
    era: '宋明',
    tradition: '东方',
    quotes: [
      '存天理，灭人欲。',
      '格物致知。',
      '读书之法，在循序而渐进，熟读而精思。'
    ]
  },
  {
    id: 'wangyangming',
    name: '王阳明 (Wang Yangming)',
    school: '儒家（心学）',
    era: '宋明',
    tradition: '东方',
    quotes: [
      '知行合一。',
      '心外无物，心外无理。',
      '破山中贼易，破心中贼难。'
    ]
  },

  // ========================
  // 中国哲学 — 禅宗
  // ========================
  {
    id: 'huineng',
    name: '慧能 (Huineng)',
    school: '禅宗',
    era: '唐代',
    tradition: '东方',
    quotes: [
      '菩提本无树，明镜亦非台。本来无一物，何处惹尘埃。',
      '不是风动，不是幡动，仁者心动。',
      '迷时师度，悟了自度。'
    ]
  },

  // ========================
  // 西方古代哲学
  // ========================
  {
    id: 'socrates',
    name: '苏格拉底 (Socrates)',
    school: '古希腊哲学',
    era: '古希腊',
    tradition: '西方',
    quotes: [
      '我唯一知道的就是我一无所知。',
      '未经审视的人生不值得过。',
      '认识你自己。',
      '真正的智慧在于知道自己一无所知。'
    ]
  },
  {
    id: 'plato',
    name: '柏拉图 (Plato)',
    school: '古希腊哲学（理念论）',
    era: '古希腊',
    tradition: '西方',
    quotes: [
      '理念是世界万物的本原。',
      '洞穴中的囚徒只能看到墙上的影子。',
      '只有死者见过战争的结束。',
      '衡量一个人的标准，是看他拥有力量时的所作所为。'
    ]
  },
  {
    id: 'aristotle',
    name: '亚里士多德 (Aristotle)',
    school: '古希腊哲学（逍遥学派）',
    era: '古希腊',
    tradition: '西方',
    quotes: [
      '吾爱吾师，吾更爱真理。',
      '人是政治的动物。',
      '优秀不是一种行为，而是一种习惯。',
      '教育的根是苦的，但它的果实是甜的。'
    ]
  },
  {
    id: 'epicurus',
    name: '伊壁鸠鲁 (Epicurus)',
    school: '伊壁鸠鲁主义',
    era: '古希腊',
    tradition: '西方',
    quotes: [
      '快乐是幸福生活的开端和终结。',
      '死亡与我们无关。因为我们存在时，死亡不在；死亡来时，我们已不在。',
      '知足是最大的财富。'
    ]
  },
  {
    id: 'seneca',
    name: '塞涅卡 (Seneca)',
    school: '斯多葛主义',
    era: '古罗马',
    tradition: '西方',
    quotes: [
      '不是因为事情困难我们才不敢做，而是因为我们不敢做，事情才变得困难。',
      '我们受苦的不是事情的本身，而是我们对事情的看法。',
      '运气是准备遇上机会。'
    ]
  },

  // ========================
  // 西方近代哲学
  // ========================
  {
    id: 'descartes',
    name: '笛卡尔 (René Descartes)',
    school: '理性主义',
    era: '近代',
    tradition: '西方',
    quotes: [
      '我思故我在。',
      '怀疑一切。',
      '把每个难题尽可能分解成细小的部分，直到可以圆满解决为止。',
      '读好书就像和过去几个世纪最优秀的人交谈。'
    ]
  },
  {
    id: 'kant',
    name: '康德 (Immanuel Kant)',
    school: '德国古典哲学（批判哲学）',
    era: '近代',
    tradition: '西方',
    quotes: [
      '有两样东西，我越是思考越觉得神奇，那就是头顶的星空和心中的道德律。',
      '人是目的，而不仅仅是手段。',
      '要有勇气运用你自己的理智！这就是启蒙的口号。',
      '我们看到的不是事物本身，而是我们能够看到的事物。'
    ]
  },
  {
    id: 'hegel',
    name: '黑格尔 (G.W.F. Hegel)',
    school: '德国古典哲学（辩证法）',
    era: '近代',
    tradition: '西方',
    quotes: [
      '凡是现实的都是合理的，凡是合理的都是现实的。',
      '密涅瓦的猫头鹰总在黄昏时起飞。',
      '历史给我们最大的教训，就是人们从不吸取历史的教训。',
      '真正的悲剧不在于善恶之间的冲突，而在于两种善之间的冲突。'
    ]
  },
  {
    id: 'hume',
    name: '休谟 (David Hume)',
    school: '经验主义',
    era: '近代',
    tradition: '西方',
    quotes: [
      '理性是且只应当是激情的奴隶。',
      '我们不能从"是"推出"应当"。',
      '习惯是人类生活的伟大向导。'
    ]
  },
  {
    id: 'locke',
    name: '洛克 (John Locke)',
    school: '经验主义',
    era: '近代',
    tradition: '西方',
    quotes: [
      '人心如同一张白纸，没有任何先天观念。',
      '政府的权力来自被统治者的同意。',
      '生命、自由和财产是不可剥夺的自然权利。'
    ]
  },
  {
    id: 'rousseau',
    name: '卢梭 (Jean-Jacques Rousseau)',
    school: '社会契约论 / 浪漫主义',
    era: '近代',
    tradition: '西方',
    quotes: [
      '人是生而自由的，却无往不在枷锁之中。',
      '回归自然！',
      '人民主权是不可转让的。'
    ]
  },
  {
    id: 'nietzsche',
    name: '尼采 (Friedrich Nietzsche)',
    school: '存在主义先驱 / 生命哲学',
    era: '近代',
    tradition: '西方',
    quotes: [
      '上帝死了！',
      '凡是杀不死我的，必将使我更强大。',
      '当你凝视深渊时，深渊也在凝视你。',
      '人是一根绳索，架在动物与超人之间。'
    ]
  },
  {
    id: 'schopenhauer',
    name: '叔本华 (Arthur Schopenhauer)',
    school: '唯意志论',
    era: '近代',
    tradition: '西方',
    quotes: [
      '人生就像钟摆，在痛苦和无聊之间摇摆。',
      '世界是我的表象。',
      '要么孤独，要么庸俗。'
    ]
  },

  // ========================
  // 西方现当代哲学
  // ========================
  {
    id: 'wittgenstein',
    name: '维特根斯坦 (Ludwig Wittgenstein)',
    school: '分析哲学 / 语言哲学',
    era: '现当代',
    tradition: '西方',
    quotes: [
      '凡是能说的，都能说清楚；凡是不能说的，应当保持沉默。',
      '语言的边界就是世界的边界。',
      '不要想，要看！'
    ]
  },
  {
    id: 'heidegger',
    name: '海德格尔 (Martin Heidegger)',
    school: '存在主义 / 现象学',
    era: '现当代',
    tradition: '西方',
    quotes: [
      '为什么是存在者存在，而不是不存在？',
      '人是被抛入这个世界的。',
      '语言是存在的家。',
      '向死而生。'
    ]
  },
  {
    id: 'sartre',
    name: '萨特 (Jean-Paul Sartre)',
    school: '存在主义',
    era: '现当代',
    tradition: '西方',
    quotes: [
      '存在先于本质。',
      '他人即地狱。',
      '人是被判定为自由的。',
      '我们是我们选择的总和。'
    ]
  },
  {
    id: 'camus',
    name: '加缪 (Albert Camus)',
    school: '荒诞主义 / 存在主义',
    era: '现当代',
    tradition: '西方',
    quotes: [
      '真正重要的哲学问题只有一个：自杀。',
      '应当想象西西弗是幸福的。',
      '在隆冬，我终于发现我身上有一个不可战胜的夏天。'
    ]
  },
  {
    id: 'foucault',
    name: '福柯 (Michel Foucault)',
    school: '后结构主义',
    era: '现当代',
    tradition: '西方',
    quotes: [
      '知识即权力。',
      '人将被抹去，如同海边沙滩上的一张脸。',
      '疯癫不是自然的事实，而是文明的事实。'
    ]
  },
  {
    id: 'russell',
    name: '罗素 (Bertrand Russell)',
    school: '分析哲学',
    era: '现当代',
    tradition: '西方',
    quotes: [
      '我绝不会为我的信仰而献身，因为我可能是错的。',
      '这个世界的问题在于聪明人充满疑惑，而愚蠢的人则充满自信。',
      '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情——这三种激情支配了我的一生。'
    ]
  }
];

// 导出到全局
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PHILOSOPHERS;
}
