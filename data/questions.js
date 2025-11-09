/**
 * 职场续命力 - 测评数据
 * H5版本
 */

const CareerData = {
  // 六维度定义
  dimensions: {
    skill_evolution: {
      id: 'skill_evolution',
      name: '技能迭代力',
      nameEn: 'Skill Evolution',
      maxScore: 20,
      description: '学习新技能、淘汰旧技能的速度和质量'
    },
    career_adaptability: {
      id: 'career_adaptability',
      name: '职业适应力',
      nameEn: 'Career Adaptability',
      maxScore: 20,
      description: '面对职场变化的调整能力和心理弹性'
    },
    resource_integration: {
      id: 'resource_integration',
      name: '资源整合力',
      nameEn: 'Resource Integration',
      maxScore: 20,
      description: '调动内外部资源达成目标的能力'
    },
    psychological_resilience: {
      id: 'psychological_resilience',
      name: '心理韧性',
      nameEn: 'Psychological Resilience',
      maxScore: 15,
      description: '承受职场压力和挫折的恢复能力'
    },
    business_acumen: {
      id: 'business_acumen',
      name: '商业敏锐度',
      nameEn: 'Business Acumen',
      maxScore: 15,
      description: '理解商业逻辑和识别机会的能力'
    },
    action_execution: {
      id: 'action_execution',
      name: '行动执行力',
      nameEn: 'Action Execution',
      maxScore: 10,
      description: '将想法转化为结果的能力'
    }
  },

  // 24道测评题目
  questions: [
    // 技能迭代力 (4题)
    {
      id: 'Q1',
      dimension: 'skill_evolution',
      question: '最近1年,你主动学习并应用到工作中的新技能有几个?',
      options: [
        { label: 'A', text: '0个,一直用老方法', score: 0 },
        { label: 'B', text: '1-2个,偶尔学点新东西', score: 2 },
        { label: 'C', text: '3-5个,保持学习习惯', score: 4 },
        { label: 'D', text: '6个以上,持续迭代技能树', score: 5 }
      ]
    },
    {
      id: 'Q2',
      dimension: 'skill_evolution',
      question: '当你发现现有技能可能过时时,你的反应是?',
      options: [
        { label: 'A', text: '焦虑但不知道学什么,就这样拖着', score: 0 },
        { label: 'B', text: '买了课程但没时间学,一直在收藏夹吃灰', score: 1 },
        { label: 'C', text: '会花时间学习,但学了不知道怎么用', score: 3 },
        { label: 'D', text: '立刻制定学习计划,3个月内学完并应用', score: 5 }
      ]
    },
    {
      id: 'Q3',
      dimension: 'skill_evolution',
      question: '你的技能组合是?',
      options: [
        { label: 'A', text: '单一技能,只会做一件事', score: 0 },
        { label: 'B', text: '纵向深挖,在一个领域很专业', score: 3 },
        { label: 'C', text: 'T型人才,一个专长+多个辅助技能', score: 5 },
        { label: 'D', text: 'π型人才,两个以上专长可跨界组合', score: 5 }
      ]
    },
    {
      id: 'Q4',
      dimension: 'skill_evolution',
      question: '你对AI工具(如ChatGPT、Copilot等)的使用情况是?',
      options: [
        { label: 'A', text: '没用过,也不打算用', score: 0 },
        { label: 'B', text: '听说过但不知道怎么用到工作中', score: 1 },
        { label: 'C', text: '偶尔用,提升了一些效率', score: 3 },
        { label: 'D', text: '深度使用,已经改变了工作流程', score: 5 }
      ]
    },

    // 职业适应力 (4题)
    {
      id: 'Q5',
      dimension: 'career_adaptability',
      question: '如果明天老板说要把你调到一个陌生业务线,你会?',
      options: [
        { label: 'A', text: '强烈抗拒,觉得这是在排挤我', score: 0 },
        { label: 'B', text: '接受但很焦虑,担心做不好', score: 2 },
        { label: 'C', text: '愿意尝试,但需要一段适应期', score: 4 },
        { label: 'D', text: '兴奋,觉得是新机会', score: 5 }
      ]
    },
    {
      id: 'Q6',
      dimension: 'career_adaptability',
      question: '最近2年,你的工作内容和3年前相比?',
      options: [
        { label: 'A', text: '几乎一模一样,每天重复劳动', score: 0 },
        { label: 'B', text: '80%重复,20%新内容', score: 2 },
        { label: 'C', text: '50%重复,50%新内容', score: 4 },
        { label: 'D', text: '完全不同,已经换了新赛道', score: 5 }
      ]
    },
    {
      id: 'Q7',
      dimension: 'career_adaptability',
      question: '当行业风向变化(如AI冲击),你的状态是?',
      options: [
        { label: 'A', text: '恐慌,觉得自己要被淘汰了', score: 0 },
        { label: 'B', text: '焦虑,但不知道该做什么', score: 1 },
        { label: 'C', text: '警觉,开始关注趋势和学习', score: 4 },
        { label: 'D', text: '主动,已经在布局新方向', score: 5 }
      ]
    },
    {
      id: 'Q8',
      dimension: 'career_adaptability',
      question: '你对35岁职场危机的态度是?',
      options: [
        { label: 'A', text: '非常焦虑,每天都在想这个问题', score: 0 },
        { label: 'B', text: '有点担心,但不知道怎么办', score: 2 },
        { label: 'C', text: '有规划,正在为35岁后做准备', score: 4 },
        { label: 'D', text: '不焦虑,已经找到了长期路径', score: 5 }
      ]
    },

    // 资源整合力 (4题)
    {
      id: 'Q9',
      dimension: 'resource_integration',
      question: '如果你想跳槽或内部转岗,你能找到的帮助你的人有几个?',
      options: [
        { label: 'A', text: '0-1个,基本只能靠自己', score: 0 },
        { label: 'B', text: '2-3个,有少量人脉', score: 2 },
        { label: 'C', text: '4-6个,有一定人脉网络', score: 4 },
        { label: 'D', text: '7个以上,有稳固的资源网络', score: 5 }
      ]
    },
    {
      id: 'Q10',
      dimension: 'resource_integration',
      question: '当你需要跨部门协作时,推进效率如何?',
      options: [
        { label: 'A', text: '很难推动,经常卡壳', score: 0 },
        { label: 'B', text: '能推动但很慢,需要领导介入', score: 2 },
        { label: 'C', text: '推进顺利,能自己搞定', score: 4 },
        { label: 'D', text: '推进高效,别人愿意配合我', score: 5 }
      ]
    },
    {
      id: 'Q11',
      dimension: 'resource_integration',
      question: '你的人脉资源主要是?',
      options: [
        { label: 'A', text: '大部分是同事,且只在工作中联系', score: 0 },
        { label: 'B', text: '同行业但不同公司的朋友', score: 3 },
        { label: 'C', text: '跨行业的多元人脉', score: 4 },
        { label: 'D', text: '既有同行又有跨界,且能相互帮助', score: 5 }
      ]
    },
    {
      id: 'Q12',
      dimension: 'resource_integration',
      question: '你和领导的关系是?',
      options: [
        { label: 'A', text: '很僵,只谈工作', score: 0 },
        { label: 'B', text: '一般,完成任务就行', score: 2 },
        { label: 'C', text: '不错,领导认可我的能力', score: 4 },
        { label: 'D', text: '很好,领导愿意为我争取资源', score: 5 }
      ]
    },

    // 心理韧性 (4题)
    {
      id: 'Q13',
      dimension: 'psychological_resilience',
      question: '最近半年,你的睡眠质量如何?',
      options: [
        { label: 'A', text: '经常失眠,想到工作就焦虑', score: 0 },
        { label: 'B', text: '偶尔失眠,压力大时睡不好', score: 2 },
        { label: 'C', text: '大部分时候睡得不错', score: 3 },
        { label: 'D', text: '睡眠很好,有自己的减压方式', score: 4 }
      ]
    },
    {
      id: 'Q14',
      dimension: 'psychological_resilience',
      question: '当连续几个季度绩效不理想时,你会?',
      options: [
        { label: 'A', text: '崩溃,觉得自己不行了', score: 0 },
        { label: 'B', text: '自我怀疑,开始摆烂', score: 1 },
        { label: 'C', text: '反思问题,尝试调整', score: 3 },
        { label: 'D', text: '冷静分析,制定改进计划', score: 4 }
      ]
    },
    {
      id: 'Q15',
      dimension: 'psychological_resilience',
      question: '你对当前工作的感受是?',
      options: [
        { label: 'A', text: '痛苦,每天都煎熬', score: 0 },
        { label: 'B', text: '麻木,没感觉', score: 1 },
        { label: 'C', text: '平淡,偶尔有成就感', score: 2 },
        { label: 'D', text: '有动力,能看到成长', score: 4 }
      ]
    },
    {
      id: 'Q16',
      dimension: 'psychological_resilience',
      question: '你有定期的情绪出口吗?',
      options: [
        { label: 'A', text: '没有,都憋着', score: 0 },
        { label: 'B', text: '偶尔和家人朋友吐槽', score: 1 },
        { label: 'C', text: '有固定的运动/爱好释放压力', score: 3 },
        { label: 'D', text: '有完整的压力管理系统', score: 3 }
      ]
    },

    // 商业敏锐度 (4题)
    {
      id: 'Q17',
      dimension: 'business_acumen',
      question: '你了解公司的商业模式和盈利方式吗?',
      options: [
        { label: 'A', text: '不了解,只知道自己的工作', score: 0 },
        { label: 'B', text: '大概知道,但不清楚细节', score: 1 },
        { label: 'C', text: '清楚,能看懂财报和业务数据', score: 3 },
        { label: 'D', text: '非常清楚,能判断业务健康度', score: 4 }
      ]
    },
    {
      id: 'Q18',
      dimension: 'business_acumen',
      question: '你能把自己的工作量化成商业价值吗?',
      options: [
        { label: 'A', text: '不能,我的工作很难量化', score: 0 },
        { label: 'B', text: '能说一些,但不够具体', score: 1 },
        { label: 'C', text: '能清晰说出我创造了多少价值', score: 3 },
        { label: 'D', text: '能用ROI证明我的价值', score: 4 }
      ]
    },
    {
      id: 'Q19',
      dimension: 'business_acumen',
      question: '最近1年,你识别到了几个职场/行业机会?',
      options: [
        { label: 'A', text: '0个,没注意到机会', score: 0 },
        { label: 'B', text: '1-2个,但没把握住', score: 1 },
        { label: 'C', text: '3-5个,抓住了1-2个', score: 3 },
        { label: 'D', text: '多个,且主动创造了机会', score: 4 }
      ]
    },
    {
      id: 'Q20',
      dimension: 'business_acumen',
      question: '你对所在行业未来3年的趋势判断是?',
      options: [
        { label: 'A', text: '完全不知道', score: 0 },
        { label: 'B', text: '有点迷茫,看不清方向', score: 1 },
        { label: 'C', text: '有判断,知道哪些会增长哪些会衰退', score: 2 },
        { label: 'D', text: '判断清晰,已经在布局趋势方向', score: 3 }
      ]
    },

    // 行动执行力 (4题)
    {
      id: 'Q21',
      dimension: 'action_execution',
      question: '你今年年初定的目标,现在完成了多少?',
      options: [
        { label: 'A', text: '0-20%,基本没动', score: 0 },
        { label: 'B', text: '30-50%,完成了一部分', score: 1 },
        { label: 'C', text: '60-80%,大部分完成了', score: 2 },
        { label: 'D', text: '90%以上,按计划推进', score: 3 }
      ]
    },
    {
      id: 'Q22',
      dimension: 'action_execution',
      question: '当你想做一件事时,从想法到行动的间隔是?',
      options: [
        { label: 'A', text: '想了很久也没做', score: 0 },
        { label: 'B', text: '1个月以上', score: 1 },
        { label: 'C', text: '1周内', score: 2 },
        { label: 'D', text: '24小时内立刻开始', score: 3 }
      ]
    },
    {
      id: 'Q23',
      dimension: 'action_execution',
      question: '你的时间管理状态是?',
      options: [
        { label: 'A', text: '混乱,每天救火', score: 0 },
        { label: 'B', text: '一般,能完成工作但很赶', score: 1 },
        { label: 'C', text: '不错,有自己的时间管理方法', score: 2 },
        { label: 'D', text: '高效,能平衡工作和学习成长', score: 2 }
      ]
    },
    {
      id: 'Q24',
      dimension: 'action_execution',
      question: '你对"拖延"的评价是?',
      options: [
        { label: 'A', text: '我是重度拖延症患者', score: 0 },
        { label: 'B', text: '偶尔拖延,但最后能完成', score: 1 },
        { label: 'C', text: '很少拖延,习惯立刻行动', score: 2 },
        { label: 'D', text: '从不拖延,有完整的执行系统', score: 2 }
      ]
    }
  ],

  // 分数段与状态映射
  scoreRanges: [
    {
      min: 0,
      max: 30,
      level: 'DANGER',
      label: '职场濒危物种',
      labelEn: 'Career Endangered',
      color: '#EF4444',
      survivalRate: '15%',
      population: '20%',
      description: '你的职场续命力严重不足,需要立即采取行动'
    },
    {
      min: 31,
      max: 50,
      level: 'STAGNANT',
      label: '职场卡住者',
      labelEn: 'Career Stuck',
      color: '#F59E0B',
      survivalRate: '45%',
      population: '35%',
      description: '你正处于职场停滞期,需要找到突破口'
    },
    {
      min: 51,
      max: 70,
      level: 'TRANSITION',
      label: '职场转型期',
      labelEn: 'Career Transition',
      color: '#3B82F6',
      survivalRate: '70%',
      population: '30%',
      description: '你正在职场转型的关键期,有基础但需进化'
    },
    {
      min: 71,
      max: 85,
      level: 'EVOLVING',
      label: '职场进化者',
      labelEn: 'Career Evolver',
      color: '#10B981',
      survivalRate: '90%',
      population: '12%',
      description: '你已经找到了进化方向,保持势头'
    },
    {
      min: 86,
      max: 100,
      level: 'MASTER',
      label: '职场掌控者',
      labelEn: 'Career Master',
      color: '#10B981',
      survivalRate: '99%',
      population: '3%',
      description: '你已经掌控了职场命运,继续引领'
    }
  ]
};
