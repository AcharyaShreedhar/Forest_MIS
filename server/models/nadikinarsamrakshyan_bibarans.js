'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nadikinarsamrakshyan_bibarans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  nadikinarsamrakshyan_bibarans.init({
    dist_id: DataTypes.INTEGER,
    sthan: DataTypes.STRING,
    qty: DataTypes.STRING,
    karyakram_miti: DataTypes.STRING,
    conservation_area: DataTypes.STRING,
    affected_area: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'nadikinarsamrakshyan_bibarans',
  });
  return nadikinarsamrakshyan_bibarans;
};