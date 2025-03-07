'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class joinTableInstrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      joinTableInstrument.belongsTo(models.instrument);
      joinTableInstrument.belongsTo(models.user);
    }
  };
  joinTableInstrument.init({
    instrumentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'joinTableInstrument',
  });
  return joinTableInstrument;
};