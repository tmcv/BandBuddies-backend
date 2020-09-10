"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "musicExamples",
      [
        {
          title: "Slow Dancing in a Burning Room",
          url: "https://www.youtube.com/watch?v=32GZ3suxRn4",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2
        },
        {
          title: "Take Me Home, Country Roads",
          url: "https://www.youtube.com/watch?v=1vrEljMfXYo",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2
        },
        {
          title: "Clarinet Concerto in A - 2nd movement",
          url: "https://www.youtube.com/watch?v=BxgmorK61YQ",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("musicExamples", null, {});
  },
};