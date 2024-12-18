const calculateUserTotals = (scores) => {
  const totals = {};

  scores.forEach(({ userId, score, User }) => {
    if(!totals[userId]){
      totals[userId] = { userId, name: User.name, totalScore: 0 };
    }
    totals[userId].totalScore += score;
  });

  return totals;
};

module.exports = calculateUserTotals;