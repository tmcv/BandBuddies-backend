'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      listing.belongsTo(models.user)

      listing.belongsToMany(models.instrument, {
        through: "joinTableListingInstrument",
        foreignKey: "listingId"
      });

      listing.belongsToMany(models.style, {
        through: "joinTableListingStyle",
        foreignKey: "listingId"
      });
    }
  };
  listing.init({
    title: DataTypes.STRING,
    minimumLevel: DataTypes.INTEGER,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'listing',
  });
  return listing;
};