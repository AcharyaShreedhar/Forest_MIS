"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class banyajantu_uddar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  banyajantu_uddar.init(
    {
      miti: DataTypes.STRING,
      sthaniya_taha: DataTypes.STRING,
      samaya: DataTypes.STRING,
      samaxit_xetra: DataTypes.STRING,
      banyajantuko_naam: DataTypes.STRING,
      banyajantuko_umer: DataTypes.STRING,
      banyajantuko_abastha: DataTypes.STRING,
      mareko_karan: DataTypes.STRING,
      banxetra_duri: DataTypes.STRING,
      anya_bibaran: DataTypes.STRING,
      remarks: DataTypes.STRING,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "banyajantu_uddar",
    }
  );
  return banyajantu_uddar;
};
