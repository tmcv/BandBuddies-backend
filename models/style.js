'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class style extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      style.belongsToMany(models.user, {
        through: "joinTableStyle",
        foreignKey: "styleId"
      });


      style.belongsToMany(models.listing, {
        through: "joinTableListingStyle",
        foreignKey: "styleId"
      });
    }
  };
  style.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'style',
  });
  return style;
};