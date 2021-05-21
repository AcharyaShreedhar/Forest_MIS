'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biruwa_utpadan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  biruwa_utpadan.init({
    arthik_barsa: DataTypes.STRING,
    narsari_sankhya: DataTypes.STRING,
    barga: DataTypes.STRING,
    laxya: DataTypes.STRING,
    pragati: DataTypes.STRING,
    brixyaropan: DataTypes.STRING,
    remarks: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'biruwa_utpadan',
  });
  return biruwa_utpadan;
};