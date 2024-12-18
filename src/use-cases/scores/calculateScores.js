const F1_POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

const calculateScores = (predictions, results) => {
  const resultDriverIds = [
    results.post1, results.post2, results.post3, results.post4, 
    results.post5, results.post6, results.post7, results.post8, 
    results.post9, results.post10,
  ];

  const userScores = {};

  predictions.forEach((prediction) => {
    const predictedDriverIds = [
      prediction.prediction1, prediction.prediction2, prediction.prediction3, 
      prediction.prediction4, prediction.prediction5, prediction.prediction6, 
      prediction.prediction7, prediction.prediction8, prediction.prediction9, 
      prediction.prediction10,
    ];
    
    const userId = prediction.userId;
    let score = 0;

    predictedDriverIds.forEach((driverId, index) => {
      if(resultDriverIds[index] === driverId){
        score += F1_POINTS[index];
      }
    });

    userScores[userId] = score || 0;
  });

  return userScores;
};

module.exports = calculateScores;