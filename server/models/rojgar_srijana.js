'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rojgar_srijana extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rojgar_srijana.init({
    karyaharu: DataTypes.STRING,
    ekai: DataTypes.STRING,
    banka_prakar: DataTypes.STRING,
    mahila: DataTypes.STRING,
    purus: DataTypes.STRING,
    jamma: DataTypes.STRING,
    kaifiyat: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'rojgar_srijana',
  });
  return rojgar_srijana;
};