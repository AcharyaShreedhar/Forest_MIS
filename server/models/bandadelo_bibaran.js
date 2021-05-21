'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bandadelo_bibaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bandadelo_bibaran.init({
    bandadelo_address: DataTypes.STRING,
    ban_type: DataTypes.STRING,
    ban_prajati: DataTypes.STRING,
    xeti_area: DataTypes.STRING,
    niyantran_karta: DataTypes.STRING,
    sahabhagi_mahila: DataTypes.STRING,
    sahabhagi_purus: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bandadelo_bibaran',
  });
  return bandadelo_bibaran;
};