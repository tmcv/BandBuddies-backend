'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class joinTableListingInstrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      joinTableListingInstrument.belongsTo(models.instrument);
      joinTableListingInstrument.belongsTo(models.listing);
    }
  };
  joinTableListingInstrument.init({
    listingId: DataTypes.INTEGER,
    instrumentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'joinTableListingInstrument',
  });
  return joinTableListingInstrument;
};