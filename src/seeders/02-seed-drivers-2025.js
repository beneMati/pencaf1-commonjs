'use strict';

module.exports = {
  async up(queryInterface) {
    const drivers = [
      {
        id: 1,
        name: 'Max',
        surname: 'Verstappen',
        nationality: 'Dutch',
        birthDate: '1997-09-30',
        teamId: 1, // Example: Red Bull Racing
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Liam',
        surname: 'Lawson',
        nationality: 'New Zeland',
        birthDate: '2002-02-11',
        teamId: 1, // Example: Red Bull Racing
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'George',
        surname: 'Russell',
        nationality: 'British',
        birthDate: '1998-02-15',
        teamId: 2, // Example: Mercedes
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Andrea',
        surname: 'Antonelli',
        nationality: 'Italian',
        birthDate: '2006-08-25',
        teamId: 2, // Example: Mercedes
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Charles',
        surname: 'Leclerc',
        nationality: 'Monégasque',
        birthDate: '1997-10-16',
        teamId: 3, // Example: Ferrari
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Lewis',
        surname: 'Hamilton',
        nationality: 'British',
        birthDate: '1985-01-07',
        teamId: 3, // Example: Ferrari
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: 'Lando',
        surname: 'Norris',
        nationality: 'British',
        birthDate: '1999-11-13',
        teamId: 4, // Example: McLaren
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: 'Oscar',
        surname: 'Piastri',
        nationality: 'Australian',
        birthDate: '2001-04-06',
        teamId: 4, // Example: McLaren
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: 'Fernando',
        surname: 'Alonso',
        nationality: 'Spanish',
        birthDate: '1981-07-29',
        teamId: 5, // Example: Aston Martin
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: 'Lance',
        surname: 'Stroll',
        nationality: 'Canadian',
        birthDate: '1998-10-29',
        teamId: 5, // Example: Aston Martin
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        name: 'Pierre',
        surname: 'Gasly',
        nationality: 'French',
        birthDate: '1996-02-07',
        teamId: 6, // Example: Alpine
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        name: 'Jack',
        surname: 'Doohan',
        nationality: 'Australian',
        birthDate: '2003-01-20',
        teamId: 6, // Example: Alpine
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        name: 'Nico',
        surname: 'Hulkenberg',
        nationality: 'German',
        birthDate: '1987-08-19',
        teamId: 7, // Example: Alfa Romeo
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        name: 'Gabriel',
        surname: 'Bortoleto',
        nationality: 'Brazilian',
        birthDate: '2004-10-14',
        teamId: 7, // Example: Alfa Romeo
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        name: 'Oliver',
        surname: 'Bearman',
        nationality: 'British',
        birthDate: '2005-05-08',
        teamId: 8, // Example: Haas
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        name: 'Esteban',
        surname: 'Ocon',
        nationality: 'French',
        birthDate: '1996-09-17',
        teamId: 8, // Example: Haas
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        name: 'Yuki',
        surname: 'Tsunoda',
        nationality: 'Japanese',
        birthDate: '2000-05-11',
        teamId: 9, // Example: AlphaTauri
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        name: 'Isack',
        surname: 'Hadjar',
        nationality: 'French',
        birthDate: '2004-09-28',
        teamId: 9, // Example: AlphaTauri
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        name: 'Alexander',
        surname: 'Albon',
        nationality: 'Thai',
        birthDate: '1996-03-23',
        teamId: 10, // Example: Williams
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        name: 'Carlos',
        surname: 'Sainz',
        nationality: 'Spanish',
        birthDate: '1994-09-01',
        teamId: 10, // Example: Williams
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert or update drivers
    await queryInterface.bulkInsert(
      'drivers',
      drivers,
      {
        updateOnDuplicate: ['name', 'surname', 'nationality', 'birthDate', 'teamId'],
      },
    );
  },

  async down(queryInterface) {
    // Rollback: remove all drivers
    await queryInterface.bulkDelete('drivers', null, {});
  },
};
