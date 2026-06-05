// GeoGuessr 哲学版 — 游戏逻辑

class Game {
  constructor() {
    this.totalRounds = 5;
    this.currentRound = 0;
    this.score = 0;
    this.rounds = [];        // 每轮的记录
    this.currentQuote = null;
    this.currentPhilosopher = null;
    this.selectedPhilosopher = null;
    this.roundActive = false;
    this.roundResult = null; // null | 'correct' | 'wrong'
  }

  // 从所有哲学家中随机抽取 totalRounds 轮，确保不重复
  initGame() {
    this.currentRound = 0;
    this.score = 0;
    this.rounds = [];
    this.roundActive = false;
    this.roundResult = null;

    // 打乱哲学家顺序，每人抽一条随机名言
    const shuffled = [...PHILOSOPHERS].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, this.totalRounds);

    this.rounds = selected.map(p => ({
      philosopher: p,
      quote: p.quotes[Math.floor(Math.random() * p.quotes.length)]
    }));
  }

  // 开始当前轮
  startRound() {
    if (this.currentRound >= this.totalRounds) return null;
    this.roundActive = true;
    this.roundResult = null;
    this.selectedPhilosopher = null;
    this.currentQuote = this.rounds[this.currentRound].quote;
    this.currentPhilosopher = this.rounds[this.currentRound].philosopher;
    return {
      roundNumber: this.currentRound + 1,
      totalRounds: this.totalRounds,
      quote: this.currentQuote,
      score: this.score
    };
  }

  // 获取所有哲学家列表（用于选择器）
  getAllPhilosophers() {
    return PHILOSOPHERS.map(p => ({
      id: p.id,
      name: p.name,
      school: p.school,
      era: p.era,
      tradition: p.tradition
    }));
  }

  // 计算得分
  calculateScore(guessedId) {
    const correct = this.currentPhilosopher;
    const guessed = PHILOSOPHERS.find(p => p.id === guessedId);

    if (!guessed) return { score: 0, level: 'wrong', detail: '未知哲学家' };

    // 精确匹配
    if (guessed.id === correct.id) {
      return { score: 5000, level: 'exact', detail: `完全正确！这正是${correct.name}的名言。` };
    }

    // 同流派
    if (guessed.school === correct.school) {
      return { score: 3000, level: 'school', detail: `虽然不对，但他们都属于${correct.school}。正确答案是${correct.name}。` };
    }

    // 同时代 + 同传统
    if (guessed.era === correct.era && guessed.tradition === correct.tradition) {
      return { score: 2000, level: 'era_tradition', detail: `时代和传统都对！这是${correct.era}时期${correct.tradition}哲学。正确答案是${correct.name}。` };
    }

    // 同传统（东方/西方）
    if (guessed.tradition === correct.tradition) {
      return { score: 1000, level: 'tradition', detail: `至少猜对了传统方向！正确答案是${correct.name}（${correct.school}）。` };
    }

    // 完全错误
    return { score: 0, level: 'wrong', detail: `很遗憾。正确答案是${correct.name}（${correct.school}，${correct.era}）。` };
  }

  // 提交猜测
  submitGuess(philosopherId) {
    if (!this.roundActive) return null;

    const result = this.calculateScore(philosopherId);
    this.score += result.score;
    this.roundActive = false;
    this.roundResult = result.level === 'exact' ? 'correct' : 'wrong';
    this.selectedPhilosopher = PHILOSOPHERS.find(p => p.id === philosopherId);

    // 记录本轮
    this.rounds[this.currentRound].guess = philosopherId;
    this.rounds[this.currentRound].result = result;

    return {
      ...result,
      guessedName: this.selectedPhilosopher ? this.selectedPhilosopher.name : '未知',
      correctName: this.currentPhilosopher.name,
      correctSchool: this.currentPhilosopher.school,
      correctEra: this.currentPhilosopher.era,
      correctTradition: this.currentPhilosopher.tradition,
      totalScore: this.score
    };
  }

  // 进入下一轮
  nextRound() {
    this.currentRound++;
    if (this.currentRound >= this.totalRounds) {
      return { gameOver: true, totalScore: this.score, rounds: this.rounds, totalRounds: this.totalRounds };
    }
    return { gameOver: false };
  }

  // 获取结算评级
  getRank() {
    const maxScore = this.totalRounds * 5000;
    const pct = this.score / maxScore;

    if (pct >= 0.9) return { title: '🏆 哲学大师', desc: '你对哲学的理解已臻化境！' };
    if (pct >= 0.7) return { title: '🎓 哲学学者', desc: '你的哲学素养相当深厚。' };
    if (pct >= 0.5) return { title: '📚 哲学爱好者', desc: '你有不错的哲学知识基础。' };
    if (pct >= 0.3) return { title: '🌱 哲学入门者', desc: '继续探索哲学的世界吧！' };
    return { title: '🔰 哲学新手', desc: '没关系，哲学之旅才刚刚开始。' };
  }

  // 获取本轮回顾详情
  getRoundReview() {
    return this.rounds.map((r, i) => ({
      roundNumber: i + 1,
      quote: r.quote,
      guessedName: PHILOSOPHERS.find(p => p.id === r.guess)?.name || '未作答',
      correctName: r.philosopher.name,
      score: r.result.score,
      level: r.result.level,
      detail: r.result.detail
    }));
  }
}

// 全局游戏实例
let game = new Game();
