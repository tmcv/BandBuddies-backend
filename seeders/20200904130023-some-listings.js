'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "listings",
      [
        {
          title: "Looking for intermediate pianist!",
          minimumLevel: 2,
          description: "Me and a friend are looking for a pianist to play some classical trios with",
          isBand: true,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bassist wanted",
          minimumLevel: 3,
          description: "We need an advanced bassist for our band",
          isBand: false,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Beginning pianist looking for a band to play in",
          minimumLevel: 1,
          description: "I would like to get some experience in playing in a band, as well as make friends who like music, too!",
          isBand: false,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("listings", null, {});
  }
};
