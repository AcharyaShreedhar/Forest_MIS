'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class banpaidawar_lilam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  banpaidawar_lilam.init({
    lilam_date: DataTypes.STRING,
    banpaidawar_type: DataTypes.STRING,
    unit: DataTypes.STRING,
    quantity: DataTypes.STRING,
    minimum_price: DataTypes.STRING,
    remarks: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'banpaidawar_lilam',
  });
  return banpaidawar_lilam;
};