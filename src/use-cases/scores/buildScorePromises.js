const scoreService = require('../../services/scores.service');

const buildScorePromises = (userScores, circuitId) => {
  return Object.keys(userScores).map(async(userId) => {
    const score = userScores[userId];
  
    try {
      // Create or update
      return scoreService.createOrUpdateScore(
        { userId, circuitId }, 
        { score },
      );
    } catch (error) {
      return Promise.reject(error);
    }
  });
};

module.exports = buildScorePromises;