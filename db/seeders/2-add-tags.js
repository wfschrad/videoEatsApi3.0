'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      { type: 'American Grill', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Brunch', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Asian', createdAt: new Date(), updatedAt: new Date() },
      { type: 'French', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Latin American', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Pizza', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Ramen', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Seafood', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Sushi', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
