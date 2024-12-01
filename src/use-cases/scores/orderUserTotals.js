const orderUserTotals = (totals) => {
  return Object.values(totals).sort((a, b) => b.totalScore - a.totalScore);
};

module.exports = orderUserTotals;