"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "test",
          email: "test@test.com",
          password: "test",
          name: "Test",
          isBand: true,
          level: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "tom",
          email: "tom@tom.com",
          password: "tom",
          name: "Tom",
          isBand: false,
          level: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "koen",
          email: "koen@koen.com",
          password: "koen",
          name: "Koen",
          isBand: false,
          level: 3,
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