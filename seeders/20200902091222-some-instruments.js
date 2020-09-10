"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "instruments",
      [
        {
          title: "Not Specified",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Piano",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Guitar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Drums",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Voice",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bass",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Saxophone",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Trumpet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Clarinet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Flute",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Violin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cello",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Double Bass",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("instruments", null, {});
  },
};