'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class baramadit_chijbastu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  baramadit_chijbastu.init({
    kath: DataTypes.STRING,
    daura: DataTypes.STRING,
    aankhetopahar: DataTypes.STRING,
    dhunga: DataTypes.STRING,
    bojbahak: DataTypes.STRING,
    mudda_anusandhan_dayari_id: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'baramadit_chijbastu',
  });
  return baramadit_chijbastu;
};