'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class uddhyam_bibarans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  uddhyam_bibarans.init({
    niji_uddhyam_sankhya: DataTypes.STRING,
    niji_rojgari_sankhya: DataTypes.STRING,
    samudayik_uddhyam_sankhya: DataTypes.STRING,
    samudayik_rojgari_sankhya: DataTypes.STRING,
    sahakari_uddhyam_sankhya: DataTypes.STRING,
    sahakari_rojgari_sankhya: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'uddhyam_bibarans',
  });
  return uddhyam_bibarans;
};