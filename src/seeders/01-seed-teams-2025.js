module.exports = {
  async up(queryInterface) {
    const teams = [
      { id: 1, name: 'Red Bull Racing', country: 'Austria', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 2, name: 'Mercedes', country: 'Germany', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 3, name: 'Ferrari', country: 'Italy', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 4, name: 'McLaren', country: 'United Kingdom', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 5, name: 'Aston Martin', country: 'United Kingdom', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 6, name: 'Alpine', country: 'France', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 7, name: 'Sauber', country: 'Switzerland', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 8, name: 'Haas', country: 'United States', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 9, name: 'Racing Bulls', country: 'Italy', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 10, name: 'Williams', country: 'United Kingdom', createdAt: new Date(),
        updatedAt: new Date() },
    ];

    // Insert or update teams
    await queryInterface.bulkInsert(
      'teams',
      teams,
      {
        updateOnDuplicate: ['name', 'country'],
      },
    );
  },

  async down(queryInterface) {
    // Rollback: remove all teams
    await queryInterface.bulkDelete('teams', null, {});
  },
};
