'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "joinTableListingInstruments",
      [
        {
          listingId: 1,
          instrumentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 1,
          instrumentId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 1,
          instrumentId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 2,
          instrumentId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 2,
          instrumentId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 2,
          instrumentId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 3,
          instrumentId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 3,
          instrumentId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 3,
          instrumentId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("joinTableListingInstruments", null, {});
  }
};
