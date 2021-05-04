'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  exit.init({
    exit_qty: DataTypes.INTEGER,
    exit_rate: DataTypes.INTEGER,
    exit_amt: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'exit',
  });
  return exit;
};