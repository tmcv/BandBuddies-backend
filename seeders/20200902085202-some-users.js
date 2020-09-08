"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "test",
          email: "test@test.com",
          password: "$2b$10$zTzqlv197jjamTbcQ3J60ervPMwNiij80p/8PWT28hkE4.hEeXXDm",
          name: "Test",
          isBand: true,
          level: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "tom",
          email: "tom@tom.com",
          password: "$2b$10$E7aKZIGE1Yhp.x5nlR7R/e/UJGol5rcg21ArT5gfbYHIJyXnY6Jam",
          name: "Tom",
          isBand: false,
          level: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "koen",
          email: "koen@koen.com",
          password: "$2b$10$wI9D0npiMQfxlWJMMMwR/uqgSGkLaKnPM9vg0MDNqW0O9GBHyJv5e",
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