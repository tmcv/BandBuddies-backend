'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class joinTableMusicExample extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      joinTableMusicExample.belongsTo(models.musicExample);
      joinTableMusicExample.belongsTo(models.user);
    }
  };
  joinTableMusicExample.init({
    musicExampleId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'joinTableMusicExample',
  });
  return joinTableMusicExample;
};