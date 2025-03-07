'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "joinTableStyles",
      [
        {
          userId: 1,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          styleId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          styleId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          styleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          styleId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          styleId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          styleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          styleId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          styleId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("joinTableStyles", null, {});
  }
};
