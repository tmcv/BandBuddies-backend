'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class joinTableStyle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      joinTableStyle.belongsTo(models.style);
      joinTableStyle.belongsTo(models.user);
    }
  };
  joinTableStyle.init({
    styleId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'joinTableStyle',
  });
  return joinTableStyle;
};