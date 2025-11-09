/**
 * 职场续命力 - 测评算法
 * H5版本
 */

const CareerAssessment = {
  /**
   * 计算测评结果
   */
  calculateAssessment(answers, questions) {
    // 计算各维度得分
    const dimensionScores = {};

    questions.forEach(q => {
      const answer = answers[q.id];
      if (answer !== undefined) {
        const score = q.options[answer].score;
        if (!dimensionScores[q.dimension]) {
          dimensionScores[q.dimension] = 0;
        }
        dimensionScores[q.dimension] += score;
      }
    });

    // 计算总分
    const totalScore = Object.values(dimensionScores).reduce((sum, score) => sum + score, 0);

    // 确定状态等级
    const statusLevel = this.getStatusLevel(totalScore);

    // 计算超越百分比
    const percentile = this.calculatePercentile(totalScore);

    // 推荐职业路径
    const recommendedPaths = this.recommendPath(dimensionScores);

    // 找出薄弱维度
    const weakDimensions = this.getWeakDimensions(dimensionScores);

    return {
      totalScore,
      dimensionScores,
      statusLevel,
      percentile,
      recommendedPaths,
      weakDimensions,
      testDate: new Date().toISOString().split('T')[0]
    };
  },

  /**
   * 根据总分获取状态等级
   */
  getStatusLevel(totalScore) {
    const range = CareerData.scoreRanges.find(r =>
      totalScore >= r.min && totalScore <= r.max
    );
    return range || CareerData.scoreRanges[0];
  },

  /**
   * 计算超越百分比(简化算法)
   */
  calculatePercentile(totalScore) {
    if (totalScore <= 30) return Math.round(totalScore / 30 * 20);
    if (totalScore <= 50) return 20 + Math.round((totalScore - 30) / 20 * 35);
    if (totalScore <= 70) return 55 + Math.round((totalScore - 50) / 20 * 30);
    if (totalScore <= 85) return 85 + Math.round((totalScore - 70) / 15 * 12);
    return 97 + Math.round((totalScore - 85) / 15 * 3);
  },

  /**
   * 推荐职业路径
   */
  recommendPath(scores) {
    const paths = [
      {
        path: 'SKILL_DEEPENING',
        name: '技能深化路径',
        suitability: 0,
        conditions: {
          skill_evolution: 0.3,
          business_acumen: 0.2,
          action_execution: 0.15
        }
      },
      {
        path: 'MANAGEMENT_TRANSFORMATION',
        name: '管理转型路径',
        suitability: 0,
        conditions: {
          resource_integration: 0.3,
          psychological_resilience: 0.25,
          career_adaptability: 0.15
        }
      },
      {
        path: 'INDEPENDENT_BRAND',
        name: '独立品牌路径',
        suitability: 0,
        conditions: {
          business_acumen: 0.3,
          action_execution: 0.25,
          skill_evolution: 0.15
        }
      }
    ];

    // 计算每条路径的适配度
    paths.forEach(path => {
      let suitability = 0;
      Object.entries(path.conditions).forEach(([dim, weight]) => {
        const score = scores[dim] || 0;
        const maxScore = CareerData.dimensions[dim].maxScore;
        suitability += (score / maxScore) * weight * 100;
      });
      path.suitability = Math.round(suitability);
    });

    // 返回适配度最高的3条路径
    return paths.sort((a, b) => b.suitability - a.suitability);
  },

  /**
   * 获取薄弱维度
   */
  getWeakDimensions(scores) {
    const weakDims = [];

    Object.entries(scores).forEach(([dimId, score]) => {
      const dim = CareerData.dimensions[dimId];
      const percentage = Math.round((score / dim.maxScore) * 100);

      if (percentage < 60) {
        weakDims.push({
          id: dimId,
          name: dim.name,
          score: score,
          maxScore: dim.maxScore,
          percentage: percentage
        });
      }
    });

    return weakDims.sort((a, b) => a.percentage - b.percentage);
  },

  /**
   * 生成雷达图数据
   */
  generateRadarData(scores) {
    return Object.entries(CareerData.dimensions).map(([key, dim]) => ({
      name: dim.name,
      score: scores[dim.id] || 0,
      maxScore: dim.maxScore
    }));
  }
};
