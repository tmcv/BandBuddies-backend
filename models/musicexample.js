'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class musicExample extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  musicExample.init({
    title: DataTypes.STRING,
    url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'musicExample',
  });
  return musicExample;
};