module.exports = (models) => {
  const { Teams, Circuits, Users, Drivers, Predictions, Results, Scores } = models;
  
  Teams.hasMany(Drivers, { foreignKey:'teamId', as: 'drivers' });
  Drivers.belongsTo(Teams, { foreignKey: 'teamId', as: 'team' });
  
  // Relationship with Predictions
  Drivers.hasMany(Predictions, { foreignKey: 'prediction1' });
  Drivers.hasMany(Predictions, { foreignKey: 'prediction2' });
  Drivers.hasMany(Predictions, { foreignKey: 'prediction3' });
  Drivers.hasMany(Predictions, { foreignKey: 'prediction4' });
  Drivers.hasMany(Predictions, { foreignKey: 'prediction5' });
  Drivers.hasMany(Predictions, { foreignKey: 'prediction6' });
  Drivers.hasMany(Predictions, { foreignKey: 'prediction7' });
  Drivers.hasMany(Predictions, { foreignKey: 'prediction8' });
  Drivers.hasMany(Predictions, { foreignKey: 'prediction9' });
  Drivers.hasMany(Predictions, { foreignKey: 'prediction10' });

  Predictions.belongsTo(Drivers, { foreignKey: 'prediction1' ,as: 'Driver1' });
  Predictions.belongsTo(Drivers, { foreignKey: 'prediction2' ,as: 'Driver2' });
  Predictions.belongsTo(Drivers, { foreignKey: 'prediction3' ,as: 'Driver3' });
  Predictions.belongsTo(Drivers, { foreignKey: 'prediction4' ,as: 'Driver4' });
  Predictions.belongsTo(Drivers, { foreignKey: 'prediction5' ,as: 'Driver5' });
  Predictions.belongsTo(Drivers, { foreignKey: 'prediction6' ,as: 'Driver6' });
  Predictions.belongsTo(Drivers, { foreignKey: 'prediction7' ,as: 'Driver7' });
  Predictions.belongsTo(Drivers, { foreignKey: 'prediction8' ,as: 'Driver8' });
  Predictions.belongsTo(Drivers, { foreignKey: 'prediction9' ,as: 'Driver9' });
  Predictions.belongsTo(Drivers, { foreignKey: 'prediction10', as: 'Driver10' });

  // Relationship with Results
  Drivers.hasMany(Results, { foreignKey: 'post1' });
  Drivers.hasMany(Results, { foreignKey: 'post2' });
  Drivers.hasMany(Results, { foreignKey: 'post3' });
  Drivers.hasMany(Results, { foreignKey: 'post4' });
  Drivers.hasMany(Results, { foreignKey: 'post5' });
  Drivers.hasMany(Results, { foreignKey: 'post6' });
  Drivers.hasMany(Results, { foreignKey: 'post7' });
  Drivers.hasMany(Results, { foreignKey: 'post8' });
  Drivers.hasMany(Results, { foreignKey: 'post9' });
  Drivers.hasMany(Results, { foreignKey: 'post10' });

  Results.belongsTo(Drivers, { foreignKey: 'post1', as: 'Driver1' });
  Results.belongsTo(Drivers, { foreignKey: 'post2', as: 'Driver2' });
  Results.belongsTo(Drivers, { foreignKey: 'post3', as: 'Driver3' });
  Results.belongsTo(Drivers, { foreignKey: 'post4', as: 'Driver4' });
  Results.belongsTo(Drivers, { foreignKey: 'post5', as: 'Driver5' });
  Results.belongsTo(Drivers, { foreignKey: 'post6', as: 'Driver6' });
  Results.belongsTo(Drivers, { foreignKey: 'post7', as: 'Driver7' });
  Results.belongsTo(Drivers, { foreignKey: 'post8', as: 'Driver8' });
  Results.belongsTo(Drivers, { foreignKey: 'post9', as: 'Driver9' });
  Results.belongsTo(Drivers, { foreignKey: 'post10', as: 'Driver10' });

  // Relationship with Circuits
  Circuits.hasMany(Predictions, { foreignKey: 'circuitId' });
  Predictions.belongsTo(Circuits, { foreignKey: 'circuitId' });

  Circuits.hasOne(Results, { foreignKey: 'circuitId' });
  Results.belongsTo(Circuits, { foreignKey: 'circuitId' });

  Circuits.hasMany(Scores, { foreignKey: 'circuitId' });
  Scores.belongsTo(Circuits, { foreignKey: 'circuitId' });

  Users.hasMany(Predictions, { foreignKey: 'userId' });
  Predictions.belongsTo(Users, { foreignKey: 'userId' });

  Users.hasMany(Scores, { foreignKey: 'userId' });
  Scores.belongsTo(Users, { foreignKey: 'userId' });
};