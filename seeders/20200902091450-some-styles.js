"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "styles",
      [
        {
          title: "Rock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Jazz",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Country",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Blues",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Metal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Classical",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Electronic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hiphop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "New Age",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};