'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class joinTableListingStyle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      joinTableListingStyle.belongsTo(models.style);
      joinTableListingStyle.belongsTo(models.listing);
    }
  };
  joinTableListingStyle.init({
    listingId: DataTypes.INTEGER,
    styleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'joinTableListingStyle',
  });
  return joinTableListingStyle;
};