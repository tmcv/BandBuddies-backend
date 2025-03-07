'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.musicExample)

      user.hasMany(models.listing)

      user.belongsToMany(models.instrument, {
        through: "joinTableInstrument",
        foreignKey: "userId"
      });

      user.belongsToMany(models.style, {
        through: "joinTableStyle",
        foreignKey: "userId"
      });
    }
  };
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    isBand: DataTypes.BOOLEAN,
    level: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};